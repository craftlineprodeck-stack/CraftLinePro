window.STATE =
{
  "version": 2,
  "slug": "site-skeleton",
  "dir": "2026-11-12-site-skeleton",
  "title": "CraftLine Decking v2 — каркас сайта (этап 1)",
  "mode": "semi",
  "depth": "normal",
  "tier": "T0",
  "briefFile": "2026-11-12-brief.md",
  "memoryFile": "CLAUDE.md",
  "memoryOwner": "user",
  "skillDir": "/Users/aleksejsmirnov/.claude/skills/autopilot",
  "baseCommit": "48778b7",
  "startedAt": "2026-11-12T18:17:21-08:00",
  "updatedAt": "2026-11-12T19:32:48-08:00",
  "finishedAt": "2026-11-12T19:32:48-08:00",
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
      "startedAt": "2026-11-12T19:22:45-08:00",
      "finishedAt": "2026-11-12T19:23:34-08:00"
    },
    {
      "id": "briefing",
      "status": "skipped",
      "startedAt": "2026-11-12T19:23:49-08:00",
      "finishedAt": "2026-11-12T19:23:49-08:00",
      "note": "дополнение однозначно"
    },
    {
      "id": "spec",
      "status": "done",
      "startedAt": "2026-11-12T19:23:34-08:00",
      "finishedAt": "2026-11-12T19:23:34-08:00"
    },
    {
      "id": "plan",
      "status": "done",
      "startedAt": "2026-11-12T19:23:34-08:00",
      "finishedAt": "2026-11-12T19:23:34-08:00"
    },
    {
      "id": "build",
      "status": "done",
      "startedAt": "2026-11-12T19:23:34-08:00",
      "finishedAt": "2026-11-12T19:28:44-08:00"
    },
    {
      "id": "review",
      "status": "done",
      "startedAt": "2026-11-12T19:28:44-08:00",
      "finishedAt": "2026-11-12T19:30:49-08:00"
    },
    {
      "id": "final",
      "status": "done",
      "startedAt": "2026-11-12T19:30:49-08:00",
      "finishedAt": "2026-11-12T19:32:48-08:00"
    }
  ],
  "requirements": {
    "total": 41,
    "done": 40,
    "inTicket": 0,
    "inSpec": 0,
    "placeholder": 0,
    "deferred": 0,
    "dropped": 1
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
      "status": "done",
      "startedAt": "2026-11-12T18:21:43-08:00",
      "finishedAt": "2026-11-12T18:29:16-08:00",
      "retries": 0,
      "repairs": 0,
      "tests": {
        "passed": 3,
        "failed": 0
      },
      "commit": "a8d98d8"
    },
    {
      "id": "02",
      "title": "14 городов и выпадающее меню Service Areas",
      "requirements": [
        "G01",
        "G02",
        "G03",
        "G04",
        "G05",
        "G06",
        "G08"
      ],
      "blockedBy": [
        "01"
      ],
      "wave": 3,
      "zone": [
        "data/",
        "lib/",
        "app/areas/",
        "components/layout/"
      ],
      "review": "нет",
      "model": "сильная",
      "status": "done",
      "startedAt": "2026-11-12T19:23:34-08:00",
      "finishedAt": "2026-11-12T19:26:43-08:00",
      "retries": 0,
      "repairs": 0,
      "tests": {
        "passed": 3,
        "failed": 0
      },
      "commit": "b2287bb"
    },
    {
      "id": "03",
      "title": "Строки меню и Service Areas в CLAUDE.md",
      "requirements": [
        "G07"
      ],
      "blockedBy": [],
      "wave": 3,
      "zone": [
        "CLAUDE.md"
      ],
      "review": "нет",
      "model": "обычная",
      "status": "done",
      "startedAt": "2026-11-12T19:26:43-08:00",
      "finishedAt": "2026-11-12T19:26:43-08:00",
      "retries": 0,
      "repairs": 0,
      "tests": {
        "passed": 3,
        "failed": 0
      },
      "commit": "8f568e6"
    },
    {
      "id": "F1",
      "title": "Ремонт ветки: выпадающее меню и мобильная панель",
      "requirements": [
        "R24",
        "R26",
        "R27"
      ],
      "blockedBy": [],
      "wave": 2,
      "zone": [
        "components/layout/"
      ],
      "review": "да — ремонт ветки",
      "model": "сильная",
      "status": "done",
      "startedAt": "2026-11-12T18:31:47-08:00",
      "finishedAt": "2026-11-12T18:34:22-08:00",
      "retries": 0,
      "repairs": 0,
      "tests": {
        "passed": 3,
        "failed": 0
      },
      "commit": "700a619"
    },
    {
      "id": "F2",
      "title": "Ремонт: панель Service Areas не закрывается по пути мыши",
      "requirements": [
        "G03",
        "G04"
      ],
      "blockedBy": [],
      "wave": 4,
      "zone": [
        "components/layout/"
      ],
      "review": "да — ремонт ветки",
      "model": "сильная",
      "status": "done",
      "retries": 0,
      "repairs": 0,
      "startedAt": "2026-11-12T19:28:44-08:00",
      "finishedAt": "2026-11-12T19:30:49-08:00",
      "tests": {
        "passed": 3,
        "failed": 0
      },
      "commit": "b0a54e5"
    }
  ],
  "tests": {
    "passed": 3,
    "failed": 0
  },
  "debt": {
    "placeholders": [
      "логотип временный — ждём SVG дизайнера",
      "все ready=false — sitemap пуст до готовых страниц"
    ],
    "assumptions": [],
    "emptyEnv": []
  },
  "additions": [
    "check:tokens (цвета/шрифты/tel вне мест) — ради R04",
    "check:tokens ловит почту и запрещённые слова — ради R33i"
  ],
  "coverage": {
    "found": 5,
    "fixed": 5,
    "deferred": 0,
    "items": []
  },
  "concerns": [
    "package.json — lint игнорирует scripts/optimize-*.js (старые require-скрипты, чистка на этапе 2)",
    "мобильная ширина 375px проверена по классам, не в браузере"
  ],
  "blind": {
    "checked": 8,
    "matched": 8,
    "mismatches": []
  },
  "beats": [
    "2026-11-12T18:17:21-08:00",
    "2026-11-12T18:17:29-08:00",
    "2026-11-12T18:18:02-08:00",
    "2026-11-12T18:18:10-08:00",
    "2026-11-12T18:20:59-08:00",
    "2026-11-12T18:21:27-08:00",
    "2026-11-12T18:21:36-08:00",
    "2026-11-12T18:21:43-08:00",
    "2026-11-12T18:29:16-08:00",
    "2026-11-12T18:31:46-08:00",
    "2026-11-12T18:31:47-08:00",
    "2026-11-12T18:33:03-08:00",
    "2026-11-12T18:33:28-08:00",
    "2026-11-12T18:34:22-08:00",
    "2026-11-12T18:34:23-08:00",
    "2026-11-12T18:35:28-08:00",
    "2026-11-12T18:35:46-08:00",
    "2026-11-12T18:36:20-08:00",
    "2026-11-12T19:22:45-08:00",
    "2026-11-12T19:23:34-08:00",
    "2026-11-12T19:23:49-08:00",
    "2026-11-12T19:23:50-08:00",
    "2026-11-12T19:26:43-08:00",
    "2026-11-12T19:28:44-08:00",
    "2026-11-12T19:29:49-08:00",
    "2026-11-12T19:29:50-08:00",
    "2026-11-12T19:30:49-08:00",
    "2026-11-12T19:31:25-08:00",
    "2026-11-12T19:32:48-08:00"
  ],
  "rev": 56,
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
    },
    {
      "t": "2026-11-12T18:21:36-08:00",
      "k": "stage",
      "id": "build",
      "act": "start"
    },
    {
      "t": "2026-11-12T18:21:43-08:00",
      "k": "ticket",
      "ids": [
        "01"
      ],
      "act": "start"
    },
    {
      "t": "2026-11-12T18:29:16-08:00",
      "k": "ticket",
      "ids": [
        "01"
      ],
      "act": "done",
      "tests": {
        "passed": 3,
        "failed": 0
      }
    },
    {
      "t": "2026-11-12T18:29:16-08:00",
      "k": "add",
      "key": "concerns",
      "n": 2
    },
    {
      "t": "2026-11-12T18:29:16-08:00",
      "k": "add",
      "key": "additions",
      "n": 2
    },
    {
      "t": "2026-11-12T18:29:16-08:00",
      "k": "add",
      "key": "debt.placeholders",
      "n": 2
    },
    {
      "t": "2026-11-12T18:29:16-08:00",
      "k": "stage",
      "id": "review",
      "act": "start"
    },
    {
      "t": "2026-11-12T18:31:46-08:00",
      "k": "tickets",
      "n": 2
    },
    {
      "t": "2026-11-12T18:31:46-08:00",
      "k": "add",
      "key": "report",
      "n": 5
    },
    {
      "t": "2026-11-12T18:31:47-08:00",
      "k": "ticket",
      "ids": [
        "F1"
      ],
      "act": "start"
    },
    {
      "t": "2026-11-12T18:33:03-08:00",
      "k": "ticket",
      "ids": [
        "F1"
      ],
      "act": "done",
      "tests": {
        "passed": 3,
        "failed": 0
      }
    },
    {
      "t": "2026-11-12T18:33:03-08:00",
      "k": "ticket",
      "ids": [
        "F1"
      ],
      "act": "review"
    },
    {
      "t": "2026-11-12T18:33:28-08:00",
      "k": "stage",
      "id": "final",
      "act": "start"
    },
    {
      "t": "2026-11-12T18:34:22-08:00",
      "k": "ticket",
      "ids": [
        "F1"
      ],
      "act": "done",
      "tests": {
        "passed": 3,
        "failed": 0
      }
    },
    {
      "t": "2026-11-12T18:34:23-08:00",
      "k": "add",
      "key": "report",
      "n": 1
    },
    {
      "t": "2026-11-12T18:35:28-08:00",
      "k": "gate",
      "g": "G4",
      "ok": true,
      "checked": 33,
      "matched": 33
    },
    {
      "t": "2026-11-12T18:35:46-08:00",
      "k": "add",
      "key": "report",
      "n": 1
    },
    {
      "t": "2026-11-12T18:36:20-08:00",
      "k": "tests",
      "passed": 3,
      "failed": 0
    },
    {
      "t": "2026-11-12T18:36:20-08:00",
      "k": "finish",
      "result": "Каркас сайта v2: бренд в theme/, данные с флагами ready, все маршруты-заглушки с noindex, шапка, меню, подвал, PhoneLink",
      "problems": 0
    },
    {
      "t": "2026-11-12T19:22:45-08:00",
      "k": "reopen"
    },
    {
      "t": "2026-11-12T19:23:34-08:00",
      "k": "tickets",
      "n": 3
    },
    {
      "t": "2026-11-12T19:23:34-08:00",
      "k": "gate",
      "g": "G3",
      "ok": false,
      "problems": 1
    },
    {
      "t": "2026-11-12T19:23:34-08:00",
      "k": "stage",
      "id": "build",
      "act": "start"
    },
    {
      "t": "2026-11-12T19:23:34-08:00",
      "k": "ticket",
      "ids": [
        "02"
      ],
      "act": "start"
    },
    {
      "t": "2026-11-12T19:23:49-08:00",
      "k": "stage",
      "id": "briefing",
      "act": "skip",
      "note": "дополнение однозначно"
    },
    {
      "t": "2026-11-12T19:23:49-08:00",
      "k": "tickets",
      "n": 4
    },
    {
      "t": "2026-11-12T19:23:50-08:00",
      "k": "gate",
      "g": "G3",
      "ok": true,
      "problems": 0
    },
    {
      "t": "2026-11-12T19:26:43-08:00",
      "k": "ticket",
      "ids": [
        "02"
      ],
      "act": "done",
      "tests": {
        "passed": 3,
        "failed": 0
      }
    },
    {
      "t": "2026-11-12T19:26:43-08:00",
      "k": "ticket",
      "ids": [
        "03"
      ],
      "act": "start"
    },
    {
      "t": "2026-11-12T19:26:43-08:00",
      "k": "ticket",
      "ids": [
        "03"
      ],
      "act": "done",
      "tests": {
        "passed": 3,
        "failed": 0
      }
    },
    {
      "t": "2026-11-12T19:28:44-08:00",
      "k": "stage",
      "id": "review",
      "act": "start"
    },
    {
      "t": "2026-11-12T19:28:44-08:00",
      "k": "tickets",
      "n": 5
    },
    {
      "t": "2026-11-12T19:28:44-08:00",
      "k": "add",
      "key": "report",
      "n": 4
    },
    {
      "t": "2026-11-12T19:28:44-08:00",
      "k": "ticket",
      "ids": [
        "F2"
      ],
      "act": "start"
    },
    {
      "t": "2026-11-12T19:29:49-08:00",
      "k": "ticket",
      "ids": [
        "F2"
      ],
      "act": "done",
      "tests": {
        "passed": 3,
        "failed": 0
      }
    },
    {
      "t": "2026-11-12T19:29:50-08:00",
      "k": "ticket",
      "ids": [
        "F2"
      ],
      "act": "review"
    },
    {
      "t": "2026-11-12T19:30:49-08:00",
      "k": "ticket",
      "ids": [
        "F2"
      ],
      "act": "done",
      "tests": {
        "passed": 3,
        "failed": 0
      }
    },
    {
      "t": "2026-11-12T19:30:49-08:00",
      "k": "add",
      "key": "report",
      "n": 2
    },
    {
      "t": "2026-11-12T19:30:49-08:00",
      "k": "stage",
      "id": "final",
      "act": "start"
    },
    {
      "t": "2026-11-12T19:31:25-08:00",
      "k": "gate",
      "g": "G2",
      "ok": true,
      "found": 5,
      "fixed": 5,
      "deferred": 0
    },
    {
      "t": "2026-11-12T19:32:48-08:00",
      "k": "gate",
      "g": "G4",
      "ok": true,
      "checked": 8,
      "matched": 8
    },
    {
      "t": "2026-11-12T19:32:48-08:00",
      "k": "tests",
      "passed": 3,
      "failed": 0
    },
    {
      "t": "2026-11-12T19:32:48-08:00",
      "k": "gate",
      "g": "G1",
      "ok": true,
      "open": 0,
      "total": 41
    },
    {
      "t": "2026-11-12T19:32:48-08:00",
      "k": "finish",
      "result": "Каркас v2 + 14 городов-заглушек и меню Service Areas по регионам",
      "problems": 0
    }
  ],
  "reqList": [
    {
      "id": "R01",
      "text": "«Build the new CraftLine Decking site in branch v2» / «Ветка stage-1-skeleton от v2; потом PR в v2»",
      "status": "done"
    },
    {
      "id": "R02",
      "text": "«Next.js App Router, TypeScript, Tailwind v4»",
      "status": "done"
    },
    {
      "id": "R03",
      "text": "«design tokens in one file» / «tokens.css — все цвета (Ocean Slate #1E2B32, Warm Amber #D49A44, нейтральные), шрифты, скругления, отступы»",
      "status": "done"
    },
    {
      "id": "R04",
      "text": "«больше нигде в коде цветов и шрифтов нет»",
      "status": "done"
    },
    {
      "id": "R05",
      "text": "«fonts.ts рядом — только подключение шрифтов» / «временные шрифты Inter + Oswald»",
      "status": "done"
    },
    {
      "id": "R06",
      "text": "«Временный логотип: SVG-ромб + CRAFTLINE / DECKING одним компонентом»",
      "status": "done"
    },
    {
      "id": "R07",
      "text": "«Убираю старую главную: HomePage.tsx, LazyMap.tsx, старые цвета»",
      "status": "done"
    },
    {
      "id": "R08",
      "text": "«Фото в public/ не трогаю»",
      "status": "done"
    },
    {
      "id": "R09",
      "text": "«Из next.config.ts убираю лишний внешний источник картинок (readdy.ai)»",
      "status": "done"
    },
    {
      "id": "R10",
      "text": "«data folders for services/cities/projects/reviews» / «Папка data/ с типами»",
      "status": "done"
    },
    {
      "id": "R11",
      "text": "«site.ts (название, телефон, Instagram, адрес сайта, структура меню; почты нет — только форма)»",
      "status": "done"
    },
    {
      "id": "R12",
      "text": "«services/ (6 услуг в твоём порядке: адрес страницы + название)»",
      "status": "done"
    },
    {
      "id": "R13",
      "text": "«cities/ (5 городов запуска с регионом и флагом «есть страница»)»",
      "status": "done"
    },
    {
      "id": "R14",
      "text": "«projects/ и reviews/ — пустые, только формат (проект: город · материал · площадь · дни · до/что сделали; пары до/после внутри проекта; связь с городом через city)»",
      "status": "done"
    },
    {
      "id": "R15",
      "text": "«featured.ts — что показывать первым (переключатель акцента)»",
      "status": "done"
    },
    {
      "id": "R16",
      "text": "«Add a \"ready\" flag per page/service/city in data»",
      "status": "done"
    },
    {
      "id": "R17",
      "text": "«Do not write page copy yet» / «без текстов и выдуманных фактов»",
      "status": "done"
    },
    {
      "id": "R18",
      "text": "«empty page routes from the site structure table» / «Все страницы из таблицы — заглушки: только заголовок-метка «страница в работе»»",
      "status": "done"
    },
    {
      "id": "R19",
      "text": "«Заглушки закрыты от индексации, пока на них нет текста»",
      "status": "done"
    },
    {
      "id": "R20",
      "text": "«/areas/[city] generates only cities whose page flag is on»",
      "status": "dropped",
      "why": "пользователь: «Add all 14 focus cities as placeholder pages (noindex, out of sitemap until ready)» — страница есть у каждого города, ready теперь решает только noindex/sitemap/подвал/карточки"
    },
    {
      "id": "R21",
      "text": "«/areas cards use it» (флаг ready)",
      "status": "done"
    },
    {
      "id": "R22",
      "text": "«Sitemap lists only pages that are ready (not the noindex placeholders)»",
      "status": "done"
    },
    {
      "id": "R23",
      "text": "«robots.ts не блокирует /_next/»",
      "status": "done"
    },
    {
      "id": "R24",
      "text": "«меню (About · Services ▾ · Resources ▾ · Service Areas · Projects · Before & After · Contact · кнопка телефона)»",
      "status": "done"
    },
    {
      "id": "R25",
      "text": "«Blog скрыт до первой статьи»",
      "status": "done"
    },
    {
      "id": "R26",
      "text": "«мобильное меню»",
      "status": "done"
    },
    {
      "id": "R27",
      "text": "«прилипающая кнопка звонка на телефоне»",
      "status": "done"
    },
    {
      "id": "R28",
      "text": "«подвал (услуги в твоём порядке + одна строка городов)» / «footer city line … use it» (флаг ready)",
      "status": "done"
    },
    {
      "id": "R29",
      "text": "«Phone links go through one component so GA4 \"call\" tracking can be added later in one place»",
      "status": "done"
    },
    {
      "id": "R30",
      "text": "«Проверка: npm run build, npm run lint, осмотр на ширине телефона»",
      "status": "done"
    },
    {
      "id": "R31",
      "text": "«→ PR + ссылка на превью Netlify»",
      "status": "done"
    },
    {
      "id": "R32",
      "text": "«CLAUDE.md не трогаю»",
      "status": "done"
    },
    {
      "id": "R33i",
      "text": "(подразумевается) правила CLAUDE.md соблюдены в коде каркаса: нет запрещённых слов, почта не выводится, нет хардкода цветов",
      "status": "done"
    },
    {
      "id": "G01",
      "text": "«Add all 14 focus cities as placeholder pages (noindex, out of sitemap until ready)»",
      "status": "done"
    },
    {
      "id": "G02",
      "text": "«grouped by region: East Sacramento County: Fair Oaks, Orangevale, Citrus Heights, Rancho Cordova, Gold River · Folsom & El Dorado Hills: Folsom, El Dorado Hills · Placer County: Granite Bay, Roseville, Rocklin, Loomis, Auburn · Sacramento…",
      "status": "done"
    },
    {
      "id": "G03",
      "text": "«Service Areas becomes a dropdown grouped by these 4 regions»",
      "status": "done"
    },
    {
      "id": "G04",
      "text": "«desktop: 4 columns»",
      "status": "done"
    },
    {
      "id": "G05",
      "text": "«mobile: region accordion»",
      "status": "done"
    },
    {
      "id": "G06",
      "text": "«+ last item \"All Service Areas\" (/areas)»",
      "status": "done"
    },
    {
      "id": "G07",
      "text": "«Update the menu and service-areas lines in CLAUDE.md accordingly»",
      "status": "done"
    },
    {
      "id": "G08",
      "text": "«Then build, lint, commit. Don't push»",
      "status": "done"
    }
  ],
  "gates": {
    "G3": {
      "ok": true,
      "at": "2026-11-12T19:23:50-08:00",
      "problems": 0
    },
    "G2": {
      "ok": true,
      "at": "2026-11-12T19:31:25-08:00",
      "found": 5,
      "fixed": 5,
      "deferred": 0
    },
    "G4": {
      "ok": true,
      "at": "2026-11-12T19:32:48-08:00",
      "checked": 8,
      "matched": 8
    },
    "G1": {
      "ok": true,
      "at": "2026-11-12T19:32:48-08:00",
      "open": 0,
      "total": 41
    }
  },
  "result": "Каркас v2 + 14 городов-заглушек и меню Service Areas по регионам",
  "report": [
    "Главная: заголовок вкладки пока «Home | CraftLine Decking» — решим вместе с текстом главной (запрос «deck builder Sacramento»)",
    "Мобильное меню не закрывается кнопкой «Назад» в браузере и кликом мимо — закрывают Escape и выбор пункта",
    "Сторож бренда ловит коды цветов, но не названия цветов словами (red) — риск низкий, стандартная палитра отключена",
    "Lint пропускает старые скрипты картинок, prebuild гоняет старый скрипт — чистка на этапе 2",
    "Ширину 375px нужно глазами проверить на превью Netlify",
    "Проверено в браузере: телефон 375px — без горизонтальной прокрутки, мобильное меню целиком видно, кнопка звонка внизу; десктоп — Services открывается кликом. Заголовок вкладки главной сейчас просто «Home»",
    "Если мышь открыла выпадающее меню наведением, первый Enter его не закрывает — мелочь",
    "CLAUDE.md, раздел Geography, по-прежнему называет 9 городов из 14 (нет Rancho Cordova, Gold River, Loomis, Sacramento, East Sacramento) — правил только строки меню и Service areas, как просили",
    "Правило «уникальный контент на странице города» в CLAUDE.md стоит уточнить: относится к ready-странице, а заглушки закрыты noindex",
    "Меню на каждой странице ссылается на 14 закрытых от поиска заглушек — так решено, просто знать",
    "Мобильное меню помнит раскрытые регионы между открытиями; заголовки регионов в десктопной панели не связаны со списками для скринридера — мелочи",
    "Панель Service Areas закрывается через 300 мс после ухода мыши: при очень медленном движении по диагонали всё же закроется, а при быстром переходе на Resources оба меню на миг открыты одновременно",
    "Lint: одно предупреждение react-hooks/exhaustive-deps в выпадающем меню — проверено, безвредно"
  ],
  "blindRounds": 1
}
