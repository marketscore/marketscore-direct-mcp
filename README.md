# Direct Manager — MCP для Яндекс Директа · MCP for Yandex Direct

[![Glama MCP server](https://glama.ai/mcp/servers/marketscore/marketscore-direct-mcp/badges/score.svg)](https://glama.ai/mcp/servers/marketscore/marketscore-direct-mcp)

> ИИ-коннектор для Яндекс Директа: подключите **Claude** или **ChatGPT** к рекламному кабинету и управляйте кампаниями прямо в диалоге — статистика, поиск неэффективных расходов, ставки, бюджеты, минус-слова, аудит.
>
> AI/MCP connector for **Yandex Direct**: connect **Claude** or **ChatGPT** to your ad account and manage campaigns from chat — analytics, wasted-spend detection, bids, budgets, negative keywords, audit.

**Сайт / Website:** https://marketscore.ru · **Подключение / App:** https://app.marketscore.ru

---

## Что это

`marketscore-direct-mcp` — тонкий коннектор к хостовому MCP-серверу **Direct Manager**. Сам сервер, доступ к Direct API и вся логика работают на стороне сервиса — этот пакет лишь подключает к нему ваш ИИ-ассистент.

**Что умеет ассистент через коннектор** (50+ инструментов, набор зависит от тарифа):
- Статистика кампаний по периодам и срезам (устройства, пол, возраст, площадки РСЯ, гео)
- Поиск неэффективных расходов: ROAS < 1, расход без конверсий, лишние площадки и ключи
- Управление: пауза/возобновление, стратегия, дневной и недельный бюджет, минус-слова, корректировки ставок, ключи
- ИИ-выводы: прогноз расхода, аудит аккаунта, диагностика просадок, готовый еженедельный бриф
- Для агентств — портфельный обзор по всем аккаунтам

## Требуется аккаунт Direct Manager

Коннектор работает **только с активной подпиской** Direct Manager (тариф «Профи» или «Агентство»). Без оплаченного тарифа сервер вернёт 0 инструментов. Регистрация и 7 дней «Профи» бесплатно — на https://app.marketscore.ru. Тарифы: https://app.marketscore.ru/pricing

## Установка

### Claude (Desktop, веб, Code) и ChatGPT — по ссылке
Добавьте удалённый MCP-коннектор:

```
https://app.marketscore.ru/api/mcp
```

Ассистент откроет вход — авторизуйтесь по OAuth (ключ Яндекса ассистенту не передаётся).

### Клиенты с локальным MCP (Cursor, VS Code, Cline, Zed) — через мост

```bash
npx -y marketscore-direct-mcp
```

…или напрямую через `mcp-remote`:

```bash
npx -y mcp-remote https://app.marketscore.ru/api/mcp
```

Пример конфигурации MCP-клиента:

```json
{
  "mcpServers": {
    "direct-manager": {
      "command": "npx",
      "args": ["-y", "marketscore-direct-mcp"]
    }
  }
}
```

## Примеры запросов

- «Где у меня уходят деньги впустую за последние 14 дней?»
- «Покажи кампании с ROAS меньше 1 и предложи, что отключить.»
- «Поставь кампанию X на паузу.»
- «Задай недельный бюджет 50 000 ₽ для кампании Y.»
- «Собери сводку по аккаунту за неделю.»

## Как это работает

```
ИИ-ассистент (Claude/ChatGPT)  ──MCP──>  Direct Manager (app.marketscore.ru/api/mcp)  ──>  Yandex Direct API
```

Авторизация — OAuth 2.1 от вашего имени. Токен Яндекса остаётся на стороне сервиса. Действия на запись помечены отдельно, поэтому видно, что именно меняется.

## Безопасность

- OAuth-вход, без передачи токена Яндекса ассистенту.
- Доступ гейтится по тарифу на стороне сервера.
- Персональные данные хранятся на серверах в РФ (152-ФЗ).

## Полезные ссылки

- Что такое MCP-сервер для Яндекс Директа: https://app.marketscore.ru/blog/mcp-server-yandex-direct
- ИИ для Яндекс Директа — инструменты 2026: https://app.marketscore.ru/blog/ii-dlya-yandex-direkta-instrumenty-2026
- Управление Директом через Claude и ChatGPT: https://app.marketscore.ru/blog/upravlenie-yandex-direct-cherez-claude-chatgpt

---

## English

**Direct Manager** is an AI/MCP service for **Yandex Direct** (Russian search advertising). This package is a thin connector to the hosted Direct Manager MCP server: it lets **Claude** or **ChatGPT** read campaign analytics and run actions (pause, bids, budgets, negative keywords, audit) on a Yandex Direct account from chat.

A paid Direct Manager subscription is required — without it the server returns zero tools. Sign up at https://app.marketscore.ru (7-day Pro trial).

**Install (remote, for Claude/ChatGPT):** add connector URL `https://app.marketscore.ru/api/mcp` and sign in via OAuth.
**Install (local MCP clients):** `npx -y marketscore-direct-mcp`

Keywords: Yandex Direct, Яндекс Директ, MCP, Model Context Protocol, PPC, ads management, campaign analytics, ROAS, Claude, ChatGPT, AI marketing.

## License

MIT — see [LICENSE](./LICENSE). The connector is open; the Direct Manager service is a paid SaaS.
