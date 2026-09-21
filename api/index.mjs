import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

import server from "../dist/server/server.js";

const projectRoot = fileURLToPath(new URL("..", import.meta.url));
const clientRoot = join(projectRoot, "dist", "client");
const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
};

async function serveStatic(request, response) {
  if (request.method !== "GET" && request.method !== "HEAD") return false;
  const requestedPath = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
  const filePath = normalize(join(clientRoot, requestedPath));
  if (!filePath.startsWith(clientRoot)) return false;

  try {
    if (!(await stat(filePath)).isFile()) return false;
  } catch {
    return false;
  }

  response.statusCode = 200;
  response.setHeader("content-type", contentTypes[extname(filePath)] ?? "application/octet-stream");
  if (request.method === "HEAD") response.end();
  else createReadStream(filePath).pipe(response);
  return true;
}

async function readBody(request) {
  const chunks = [];
  for await (const chunk of request) chunks.push(chunk);
  return Buffer.concat(chunks);
}

export default async function handler(request, response) {
  if (await serveStatic(request, response)) return;

  try {
    const body = request.method === "GET" || request.method === "HEAD" ? undefined : await readBody(request);
    const webRequest = new Request(`https://${request.headers.host ?? "flexinsur.com.br"}${request.url}`, {
      method: request.method,
      headers: request.headers,
      body,
      duplex: "half",
    });
    const webResponse = await server.fetch(webRequest, {}, {});
    response.statusCode = webResponse.status;
    for (const [key, value] of webResponse.headers) response.setHeader(key, value);
    response.end(Buffer.from(await webResponse.arrayBuffer()));
  } catch (error) {
    console.error(error);
    response.statusCode = 500;
    response.setHeader("content-type", "text/plain; charset=utf-8");
    response.end("Internal Server Error");
  }
}
