#!/usr/bin/env node
/**
 * Тонкий коннектор к хостовому MCP-серверу Direct Manager.
 * Всё, что он делает — поднимает мост `mcp-remote` к https://app.marketscore.ru/api/mcp.
 * Логика, доступ к Direct API и гейтинг по подписке — на стороне сервиса.
 *
 * Использование:
 *   npx -y marketscore-direct-mcp
 * Переопределить адрес (для разработки): MARKETSCORE_MCP_URL=... npx -y marketscore-direct-mcp
 */
import { spawn } from "node:child_process";

const url = process.env.MARKETSCORE_MCP_URL || "https://app.marketscore.ru/api/mcp";
const passthrough = process.argv.slice(2);

const npx = process.platform === "win32" ? "npx.cmd" : "npx";
const child = spawn(npx, ["-y", "mcp-remote", url, ...passthrough], {
  stdio: "inherit",
});

child.on("error", (err) => {
  console.error("[marketscore-direct-mcp] не удалось запустить mcp-remote:", err.message);
  process.exit(1);
});
child.on("exit", (code) => process.exit(code ?? 0));
