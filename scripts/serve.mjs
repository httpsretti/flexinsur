import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import { createServer } from "node:http";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

import server from "../dist/server/server.js";

const projectRoot = fileURLToPath(new URL("..", import.meta.url));
const clientRoot = join(projectRoot, "dist", "client");
const port = Number(process.env.PORT ?? 3000);
const host = process.env.HOST ?? "0.0.0.0";

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
    const fileStats = await stat(filePath);
    if (!fileStats.isFile()) return false;
  } catch {
    return false;
  }

  response.writeHead(200, {
    "content-type": contentTypes[extname(filePath)] ?? "application/octet-stream",
  });
  if (request.method === "HEAD") {
    response.end();
  } else {
    createReadStream(filePath).pipe(response);
  }
  return true;
}

async function readBody(request) {
  const chunks = [];
  for await (const chunk of request) chunks.push(chunk);
  return Buffer.concat(chunks);
}

const httpServer = createServer(async (request, response) => {
  if (await serveStatic(request, response)) return;

  try {
    const body = request.method === "GET" || request.method === "HEAD" ? undefined : await readBody(request);
    const webRequest = new Request(`http://${request.headers.host ?? "localhost"}${request.url}`, {
      method: request.method,
      headers: request.headers,
      body,
      duplex: "half",
    });
    const webResponse = await server.fetch(webRequest, {}, {});
    response.writeHead(webResponse.status, Object.fromEntries(webResponse.headers));
    response.end(Buffer.from(await webResponse.arrayBuffer()));
  } catch (error) {
    console.error(error);
    response.writeHead(500, { "content-type": "text/plain; charset=utf-8" });
    response.end("Internal Server Error");
  }
});

httpServer.listen(port, host, () => {
  console.log(`FlexInsur running at http://localhost:${port}`);
});
