# Манифест требований

Источник: `2026-11-12-brief.md`. Строку из этого списка может снять **только пользователь**.

| ID | Из брифа (дословно) | Статус | Основание | Где |
|----|---------------------|--------|-----------|-----|
| R01 | «Build the new CraftLine Decking site in branch v2» / «Ветка `stage-1-skeleton` от `v2`; потом PR в `v2`» | done | — | spec §Решение → T01 → a8d98d8 |
| R02 | «Next.js App Router, TypeScript, Tailwind v4» | done | — | spec §Решение → T01 → a8d98d8 |
| R03 | «design tokens in one file» / «`tokens.css` — все цвета (Ocean Slate `#1E2B32`, Warm Amber `#D49A44`, нейтральные), шрифты, скругления, отступы» | done | — | spec §Решение → T01 → a8d98d8 |
| R04 | «больше нигде в коде цветов и шрифтов нет» | done | — | spec §Решение → T01 → a8d98d8 |
| R05 | «`fonts.ts` рядом — только подключение шрифтов» / «временные шрифты Inter + Oswald» | done | — | spec §Решение → T01 → a8d98d8 |
| R06 | «Временный логотип: SVG-ромб + CRAFTLINE / DECKING одним компонентом» | done | — | spec §Решение → T01 → a8d98d8 |
| R07 | «Убираю старую главную: `HomePage.tsx`, `LazyMap.tsx`, старые цвета» | done | — | spec §Решение → T01 → a8d98d8 |
| R08 | «Фото в `public/` не трогаю» | done | — | spec §Решение → T01 → a8d98d8 |
| R09 | «Из `next.config.ts` убираю лишний внешний источник картинок (readdy.ai)» | done | — | spec §Решение → T01 → a8d98d8 |
| R10 | «data folders for services/cities/projects/reviews» / «Папка `data/` с типами» | done | — | spec §Решение → T01 → a8d98d8 |
| R11 | «`site.ts` (название, телефон, Instagram, адрес сайта, структура меню; почты нет — только форма)» | done | — | spec §Решение → T01 → a8d98d8 |
| R12 | «`services/` (6 услуг в твоём порядке: адрес страницы + название)» | done | — | spec §Решение → T01 → a8d98d8 |
| R13 | «`cities/` (5 городов запуска с регионом и флагом «есть страница»)» | done | — | spec §Решение → T01 → a8d98d8 |
| R14 | «`projects/` и `reviews/` — пустые, только формат (проект: город · материал · площадь · дни · до/что сделали; пары до/после внутри проекта; связь с городом через `city`)» | done | — | spec §Решение → T01 → a8d98d8 |
| R15 | «`featured.ts` — что показывать первым (переключатель акцента)» | done | — | spec §Решение → T01 → a8d98d8 |
| R16 | «Add a "ready" flag per page/service/city in data» | done | — | spec §Решение → T01 → a8d98d8 |
| R17 | «Do not write page copy yet» / «без текстов и выдуманных фактов» | done | — | spec §Решение → T01 → a8d98d8 |
| R18 | «empty page routes from the site structure table» / «Все страницы из таблицы — заглушки: только заголовок-метка «страница в работе»» | done | — | spec §Решение → T01 → a8d98d8 |
| R19 | «Заглушки закрыты от индексации, пока на них нет текста» | done | — | spec §Решение → T01 → a8d98d8 |
| R20 | «/areas/[city] generates only cities whose page flag is on» | dropped | пользователь: «Add all 14 focus cities as placeholder pages (noindex, out of sitemap until ready)» — страница есть у каждого города, `ready` теперь решает только noindex/sitemap/подвал/карточки | spec §Решение → T01 → a8d98d8 |
| R21 | «/areas cards use it» (флаг ready) | done | — | spec §Решение → T01 → a8d98d8 |
| R22 | «Sitemap lists only pages that are ready (not the noindex placeholders)» | done | — | spec §Решение → T01 → a8d98d8 |
| R23 | «`robots.ts` не блокирует `/_next/`» | done | — | spec §Решение → T01 → a8d98d8 |
| R24 | «меню (About · Services ▾ · Resources ▾ · Service Areas · Projects · Before & After · Contact · кнопка телефона)» | done | — | spec §Решение → T01 → a8d98d8 |
| R25 | «Blog скрыт до первой статьи» | done | — | spec §Решение → T01 → a8d98d8 |
| R26 | «мобильное меню» | done | — | spec §Решение → T01 → a8d98d8 |
| R27 | «прилипающая кнопка звонка на телефоне» | done | — | spec §Решение → T01 → a8d98d8 |
| R28 | «подвал (услуги в твоём порядке + одна строка городов)» / «footer city line … use it» (флаг ready) | done | — | spec §Решение → T01 → a8d98d8 |
| R29 | «Phone links go through one component so GA4 "call" tracking can be added later in one place» | done | — | spec §Решение → T01 → a8d98d8 |
| R30 | «Проверка: `npm run build`, `npm run lint`, осмотр на ширине телефона» | done | — | spec §Решение → T01 → a8d98d8 |
| R31 | «→ PR + ссылка на превью Netlify» | done | — | spec §Решение → T01 → a8d98d8 |
| R32 | «CLAUDE.md не трогаю» | done | — | spec §Решение → T01 → a8d98d8 |
| R33i | *(подразумевается)* правила CLAUDE.md соблюдены в коде каркаса: нет запрещённых слов, почта не выводится, нет хардкода цветов | done | — | spec §Решение → T01 → a8d98d8 |
| G01 | «Add all 14 focus cities as placeholder pages (noindex, out of sitemap until ready)» | done | — | spec §Дополнение 2 → T02 → b2287bb |
| G02 | «grouped by region: East Sacramento County: Fair Oaks, Orangevale, Citrus Heights, Rancho Cordova, Gold River · Folsom & El Dorado Hills: Folsom, El Dorado Hills · Placer County: Granite Bay, Roseville, Rocklin, Loomis, Auburn · Sacramento: Sacramento (sections later: Land Park, Arden Park, Sierra Oaks), East Sacramento» | done | — | spec §Дополнение 2 → T02 → b2287bb |
| G03 | «Service Areas becomes a dropdown grouped by these 4 regions» | done | — | spec §Дополнение 2 → T02 → b2287bb |
| G04 | «desktop: 4 columns» | done | — | spec §Дополнение 2 → T02 → b2287bb |
| G05 | «mobile: region accordion» | done | — | spec §Дополнение 2 → T02 → b2287bb |
| G06 | «+ last item "All Service Areas" (/areas)» | done | — | spec §Дополнение 2 → T02 → b2287bb |
| G07 | «Update the menu and service-areas lines in CLAUDE.md accordingly» | done | оркестратор правит CLAUDE.md сам (файл памяти) | spec §Дополнение 2 → T03 → 8f568e6 |
| G08 | «Then build, lint, commit. Don't push» | done | — | spec §Дополнение 2 → T02 → b2287bb |
