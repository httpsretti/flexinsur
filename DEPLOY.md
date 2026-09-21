# Publicacao independente

## Executar localmente

```sh
npm install
npm run dev
```

## Executar em producao

```sh
npm install
npm run build
npm run start
```

O servidor escuta a porta definida por `PORT` pelo runtime Nitro. Em um provedor que injeta a porta automaticamente, nenhum ajuste adicional e necessario.

## Vincular flexinsur.com.br

1. Publique este repositorio em um provedor que suporte Node.js e TanStack Start.
2. Configure o comando de build como `npm run build`.
3. Configure o comando de inicializacao como `npm run start`.
4. No painel do provedor, adicione os dominios `flexinsur.com.br` e `www.flexinsur.com.br`.
5. No painel DNS do registrador do dominio, crie os registros indicados pelo provedor. Normalmente o dominio raiz usa um registro `A` ou `ALIAS`, e `www` usa um `CNAME`.
6. Ative o redirecionamento de `www.flexinsur.com.br` para `flexinsur.com.br` e o certificado TLS no proprio provedor.

Os valores dos registros DNS dependem do provedor escolhido. Nao e seguro inventar um destino: use exatamente os valores exibidos no painel de hospedagem.
