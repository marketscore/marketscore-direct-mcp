# Публикация — чек-лист

Этот репозиторий — публичная «витрина + тонкий клиент». Движок (доступ к Direct API, гейтинг по подписке) остаётся в приватном сервисе. Здесь нет секретов и рабочего бэкенда — публиковать безопасно.

## 1. Залить на GitHub

1. Создай **публичный** репозиторий на GitHub: `marketscore-direct-mcp`.
2. Подставь свой логин вместо `YOUR_GITHUB_USERNAME` в `server.json` (поля `name` и `repository.url`) и добавь `repository` в `package.json`.
3. Из этой папки:

```bash
git init
git add .
git commit -m "Direct Manager — MCP connector for Yandex Direct"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/marketscore-direct-mcp.git
git push -u origin main
```

4. В настройках репо добавь **Topics**: `mcp`, `model-context-protocol`, `yandex-direct`, `ppc`, `ads`, `claude`, `chatgpt`, `ai`, `marketing` — это помогает находимости и реестрам.

## 2. (Опционально) Опубликовать в npm

Тогда заработает `npx marketscore-direct-mcp` у всех.

```bash
npm login
npm publish --access public
```

## 3. Подать в MCP-реестры (главный рычаг находимости в LLM)

| Реестр | Куда | Как |
| --- | --- | --- |
| Официальный MCP Registry | registry.modelcontextprotocol.io | через `server.json` + CLI `mcp-publisher` (вход по GitHub). Сверь формат `server.json` с актуальной докой реестра. |
| awesome-mcp-servers | github.com/punkpeye/awesome-mcp-servers | Pull Request: добавить строку в раздел Marketing/Ads |
| Smithery | smithery.ai | «Add server» → указать репозиторий / remote-URL |
| Glama | glama.ai/mcp/servers | submit/claim сервер |
| PulseMCP | pulsemcp.com | форма добавления сервера |
| mcp.so (бонус) | mcp.so | submit |

## 4. Готовый текст листинга (копировать)

- **Name:** Direct Manager — MCP for Yandex Direct
- **Short (EN):** Manage Yandex Direct ad campaigns and analytics from Claude or ChatGPT — wasted-spend detection, bids, budgets, audit. Requires a Direct Manager account.
- **Short (RU):** Управление кампаниями и аналитика Яндекс Директа из Claude и ChatGPT — поиск лишних трат, ставки, бюджеты, аудит. Нужен аккаунт Direct Manager.
- **Category:** Marketing / Advertising / Analytics
- **Connector URL:** https://app.marketscore.ru/api/mcp
- **npm:** marketscore-direct-mcp
- **Website:** https://marketscore.ru
- **Keywords:** Yandex Direct, Яндекс Директ, MCP, PPC, ads, ROAS, Claude, ChatGPT, AI marketing

## 5. Дополнительно (усиливает цитируемость в LLM)

- Статья на Habr / vc.ru со ссылкой на репозиторий и сайт.
- Упоминание в тематических Telegram-чатах по контекстной рекламе.
- Product Hunt.
