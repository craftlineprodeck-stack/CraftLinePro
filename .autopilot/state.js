window.STATE =
{
  "version": 2,
  "slug": "site-skeleton",
  "dir": "2026-11-12-site-skeleton--wip",
  "title": "CraftLine Decking v2 — каркас сайта (этап 1)",
  "mode": "semi",
  "depth": "normal",
  "tier": "T0",
  "briefFile": "2026-11-12-brief.md",
  "memoryFile": "CLAUDE.md",
  "memoryOwner": "user",
  "skillDir": "/Users/aleksejsmirnov/.claude/skills/autopilot",
  "baseCommit": null,
  "startedAt": "2026-11-12T18:17:21-08:00",
  "updatedAt": "2026-11-12T18:21:27-08:00",
  "finishedAt": null,
  "stages": [
    {
      "id": "preflight",
      "status": "done",
      "startedAt": "2026-11-12T18:17:21-08:00",
      "finishedAt": "2026-11-12T18:17:29-08:00"
    },
    {
      "id": "manifest",
      "status": "done",
      "startedAt": "2026-11-12T18:17:29-08:00",
      "finishedAt": "2026-11-12T18:18:02-08:00"
    },
    {
      "id": "briefing",
      "status": "skipped",
      "startedAt": "2026-11-12T18:18:02-08:00",
      "finishedAt": "2026-11-12T18:18:10-08:00",
      "note": "вопросов не потребовалось — план утверждён пользователем"
    },
    {
      "id": "spec",
      "status": "done",
      "startedAt": "2026-11-12T18:18:10-08:00",
      "finishedAt": "2026-11-12T18:20:59-08:00"
    },
    {
      "id": "plan",
      "status": "active",
      "startedAt": "2026-11-12T18:20:59-08:00"
    },
    {
      "id": "build",
      "status": "pending"
    },
    {
      "id": "review",
      "status": "pending"
    },
    {
      "id": "final",
      "status": "pending"
    }
  ],
  "requirements": {
    "total": 33,
    "done": 0,
    "inTicket": 33,
    "inSpec": 0,
    "placeholder": 0,
    "deferred": 0,
    "dropped": 0
  },
  "tickets": [
    {
      "id": "01",
      "title": "Каркас сайта: бренд, данные, маршруты, шапка и подвал",
      "requirements": [
        "R01",
        "R02",
        "R03",
        "R04",
        "R05",
        "R06",
        "R07",
        "R08",
        "R09",
        "R10",
        "R11",
        "R12",
        "R13",
        "R14",
        "R15",
        "R16",
        "R17",
        "R18",
        "R19",
        "R20",
        "R21",
        "R22",
        "R23",
        "R24",
        "R25",
        "R26",
        "R27",
        "R28",
        "R29",
        "R30",
        "R31",
        "R32",
        "R33i",
        "A01",
        "A02"
      ],
      "blockedBy": [],
      "wave": 1,
      "zone": [
        "app/",
        "components/",
        "data/",
        "lib/",
        "theme/",
        "scripts/check-tokens.mjs",
        "package.json",
        "next.config.ts"
      ],
      "review": "нет",
      "model": "сильная",
      "status": "pending",
      "retries": 0,
      "repairs": 0
    }
  ],
  "tests": null,
  "debt": {
    "placeholders": [],
    "assumptions": [],
    "emptyEnv": []
  },
  "additions": [],
  "coverage": {
    "found": 4,
    "fixed": 4,
    "deferred": 0,
    "items": []
  },
  "concerns": [],
  "blind": null,
  "beats": [
    "2026-11-12T18:17:21-08:00",
    "2026-11-12T18:17:29-08:00",
    "2026-11-12T18:18:02-08:00",
    "2026-11-12T18:18:10-08:00",
    "2026-11-12T18:20:59-08:00",
    "2026-11-12T18:21:27-08:00"
  ],
  "rev": 12,
  "waiting": null,
  "waits": [],
  "log": [
    {
      "t": "2026-11-12T18:17:21-08:00",
      "k": "init"
    },
    {
      "t": "2026-11-12T18:17:29-08:00",
      "k": "stage",
      "id": "manifest",
      "act": "start"
    },
    {
      "t": "2026-11-12T18:18:02-08:00",
      "k": "stage",
      "id": "briefing",
      "act": "start"
    },
    {
      "t": "2026-11-12T18:18:10-08:00",
      "k": "stage",
      "id": "briefing",
      "act": "skip",
      "note": "вопросов не потребовалось — план утверждён пользователем"
    },
    {
      "t": "2026-11-12T18:18:10-08:00",
      "k": "gate",
      "g": "G1",
      "ok": false,
      "open": 33,
      "total": 33
    },
    {
      "t": "2026-11-12T18:18:10-08:00",
      "k": "stage",
      "id": "spec",
      "act": "start"
    },
    {
      "t": "2026-11-12T18:20:59-08:00",
      "k": "gate",
      "g": "G2",
      "ok": true,
      "found": 4,
      "fixed": 4,
      "deferred": 0
    },
    {
      "t": "2026-11-12T18:20:59-08:00",
      "k": "gate",
      "g": "G1",
      "ok": true,
      "open": 0,
      "total": 33
    },
    {
      "t": "2026-11-12T18:20:59-08:00",
      "k": "stage",
      "id": "plan",
      "act": "start"
    },
    {
      "t": "2026-11-12T18:21:27-08:00",
      "k": "tier",
      "v": "T0"
    },
    {
      "t": "2026-11-12T18:21:27-08:00",
      "k": "tickets",
      "n": 1
    },
    {
      "t": "2026-11-12T18:21:27-08:00",
      "k": "gate",
      "g": "G3",
      "ok": true,
      "problems": 0
    }
  ],
  "reqList": [
    {
      "id": "R01",
      "text": "«Build the new CraftLine Decking site in branch v2» / «Ветка stage-1-skeleton от v2; потом PR в v2»",
      "status": "in-ticket"
    },
    {
      "id": "R02",
      "text": "«Next.js App Router, TypeScript, Tailwind v4»",
      "status": "in-ticket"
    },
    {
      "id": "R03",
      "text": "«design tokens in one file» / «tokens.css — все цвета (Ocean Slate #1E2B32, Warm Amber #D49A44, нейтральные), шрифты, скругления, отступы»",
      "status": "in-ticket"
    },
    {
      "id": "R04",
      "text": "«больше нигде в коде цветов и шрифтов нет»",
      "status": "in-ticket"
    },
    {
      "id": "R05",
      "text": "«fonts.ts рядом — только подключение шрифтов» / «временные шрифты Inter + Oswald»",
      "status": "in-ticket"
    },
    {
      "id": "R06",
      "text": "«Временный логотип: SVG-ромб + CRAFTLINE / DECKING одним компонентом»",
      "status": "in-ticket"
    },
    {
      "id": "R07",
      "text": "«Убираю старую главную: HomePage.tsx, LazyMap.tsx, старые цвета»",
      "status": "in-ticket"
    },
    {
      "id": "R08",
      "text": "«Фото в public/ не трогаю»",
      "status": "in-ticket"
    },
    {
      "id": "R09",
      "text": "«Из next.config.ts убираю лишний внешний источник картинок (readdy.ai)»",
      "status": "in-ticket"
    },
    {
      "id": "R10",
      "text": "«data folders for services/cities/projects/reviews» / «Папка data/ с типами»",
      "status": "in-ticket"
    },
    {
      "id": "R11",
      "text": "«site.ts (название, телефон, Instagram, адрес сайта, структура меню; почты нет — только форма)»",
      "status": "in-ticket"
    },
    {
      "id": "R12",
      "text": "«services/ (6 услуг в твоём порядке: адрес страницы + название)»",
      "status": "in-ticket"
    },
    {
      "id": "R13",
      "text": "«cities/ (5 городов запуска с регионом и флагом «есть страница»)»",
      "status": "in-ticket"
    },
    {
      "id": "R14",
      "text": "«projects/ и reviews/ — пустые, только формат (проект: город · материал · площадь · дни · до/что сделали; пары до/после внутри проекта; связь с городом через city)»",
      "status": "in-ticket"
    },
    {
      "id": "R15",
      "text": "«featured.ts — что показывать первым (переключатель акцента)»",
      "status": "in-ticket"
    },
    {
      "id": "R16",
      "text": "«Add a \"ready\" flag per page/service/city in data»",
      "status": "in-ticket"
    },
    {
      "id": "R17",
      "text": "«Do not write page copy yet» / «без текстов и выдуманных фактов»",
      "status": "in-ticket"
    },
    {
      "id": "R18",
      "text": "«empty page routes from the site structure table» / «Все страницы из таблицы — заглушки: только заголовок-метка «страница в работе»»",
      "status": "in-ticket"
    },
    {
      "id": "R19",
      "text": "«Заглушки закрыты от индексации, пока на них нет текста»",
      "status": "in-ticket"
    },
    {
      "id": "R20",
      "text": "«/areas/[city] generates only cities whose page flag is on»",
      "status": "in-ticket"
    },
    {
      "id": "R21",
      "text": "«/areas cards use it» (флаг ready)",
      "status": "in-ticket"
    },
    {
      "id": "R22",
      "text": "«Sitemap lists only pages that are ready (not the noindex placeholders)»",
      "status": "in-ticket"
    },
    {
      "id": "R23",
      "text": "«robots.ts не блокирует /_next/»",
      "status": "in-ticket"
    },
    {
      "id": "R24",
      "text": "«меню (About · Services ▾ · Resources ▾ · Service Areas · Projects · Before & After · Contact · кнопка телефона)»",
      "status": "in-ticket"
    },
    {
      "id": "R25",
      "text": "«Blog скрыт до первой статьи»",
      "status": "in-ticket"
    },
    {
      "id": "R26",
      "text": "«мобильное меню»",
      "status": "in-ticket"
    },
    {
      "id": "R27",
      "text": "«прилипающая кнопка звонка на телефоне»",
      "status": "in-ticket"
    },
    {
      "id": "R28",
      "text": "«подвал (услуги в твоём порядке + одна строка городов)» / «footer city line … use it» (флаг ready)",
      "status": "in-ticket"
    },
    {
      "id": "R29",
      "text": "«Phone links go through one component so GA4 \"call\" tracking can be added later in one place»",
      "status": "in-ticket"
    },
    {
      "id": "R30",
      "text": "«Проверка: npm run build, npm run lint, осмотр на ширине телефона»",
      "status": "in-ticket"
    },
    {
      "id": "R31",
      "text": "«→ PR + ссылка на превью Netlify»",
      "status": "in-ticket"
    },
    {
      "id": "R32",
      "text": "«CLAUDE.md не трогаю»",
      "status": "in-ticket"
    },
    {
      "id": "R33i",
      "text": "(подразумевается) правила CLAUDE.md соблюдены в коде каркаса: нет запрещённых слов, почта не выводится, нет хардкода цветов",
      "status": "in-ticket"
    }
  ],
  "gates": {
    "G1": {
      "ok": true,
      "at": "2026-11-12T18:20:59-08:00",
      "open": 0,
      "total": 33
    },
    "G2": {
      "ok": true,
      "at": "2026-11-12T18:20:59-08:00",
      "found": 4,
      "fixed": 4,
      "deferred": 0
    },
    "G3": {
      "ok": true,
      "at": "2026-11-12T18:21:27-08:00",
      "problems": 0
    }
  },
  "result": null
}
