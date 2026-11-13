# Манифест требований

Источник: `2026-11-12-brief.md`. Строку из этого списка может снять **только пользователь**.

| ID | Из брифа (дословно) | Статус | Основание | Где |
|----|---------------------|--------|-----------|-----|
| R01 | «Build the new CraftLine Decking site in branch v2» / «Ветка `stage-1-skeleton` от `v2`; потом PR в `v2`» | in-ticket | — | spec §Решение → T01 |
| R02 | «Next.js App Router, TypeScript, Tailwind v4» | in-ticket | — | spec §Решение → T01 |
| R03 | «design tokens in one file» / «`tokens.css` — все цвета (Ocean Slate `#1E2B32`, Warm Amber `#D49A44`, нейтральные), шрифты, скругления, отступы» | in-ticket | — | spec §Решение → T01 |
| R04 | «больше нигде в коде цветов и шрифтов нет» | in-ticket | — | spec §Решение → T01 |
| R05 | «`fonts.ts` рядом — только подключение шрифтов» / «временные шрифты Inter + Oswald» | in-ticket | — | spec §Решение → T01 |
| R06 | «Временный логотип: SVG-ромб + CRAFTLINE / DECKING одним компонентом» | in-ticket | — | spec §Решение → T01 |
| R07 | «Убираю старую главную: `HomePage.tsx`, `LazyMap.tsx`, старые цвета» | in-ticket | — | spec §Решение → T01 |
| R08 | «Фото в `public/` не трогаю» | in-ticket | — | spec §Решение → T01 |
| R09 | «Из `next.config.ts` убираю лишний внешний источник картинок (readdy.ai)» | in-ticket | — | spec §Решение → T01 |
| R10 | «data folders for services/cities/projects/reviews» / «Папка `data/` с типами» | in-ticket | — | spec §Решение → T01 |
| R11 | «`site.ts` (название, телефон, Instagram, адрес сайта, структура меню; почты нет — только форма)» | in-ticket | — | spec §Решение → T01 |
| R12 | «`services/` (6 услуг в твоём порядке: адрес страницы + название)» | in-ticket | — | spec §Решение → T01 |
| R13 | «`cities/` (5 городов запуска с регионом и флагом «есть страница»)» | in-ticket | — | spec §Решение → T01 |
| R14 | «`projects/` и `reviews/` — пустые, только формат (проект: город · материал · площадь · дни · до/что сделали; пары до/после внутри проекта; связь с городом через `city`)» | in-ticket | — | spec §Решение → T01 |
| R15 | «`featured.ts` — что показывать первым (переключатель акцента)» | in-ticket | — | spec §Решение → T01 |
| R16 | «Add a "ready" flag per page/service/city in data» | in-ticket | — | spec §Решение → T01 |
| R17 | «Do not write page copy yet» / «без текстов и выдуманных фактов» | in-ticket | — | spec §Решение → T01 |
| R18 | «empty page routes from the site structure table» / «Все страницы из таблицы — заглушки: только заголовок-метка «страница в работе»» | in-ticket | — | spec §Решение → T01 |
| R19 | «Заглушки закрыты от индексации, пока на них нет текста» | in-ticket | — | spec §Решение → T01 |
| R20 | «/areas/[city] generates only cities whose page flag is on» | in-ticket | — | spec §Решение → T01 |
| R21 | «/areas cards use it» (флаг ready) | in-ticket | — | spec §Решение → T01 |
| R22 | «Sitemap lists only pages that are ready (not the noindex placeholders)» | in-ticket | — | spec §Решение → T01 |
| R23 | «`robots.ts` не блокирует `/_next/`» | in-ticket | — | spec §Решение → T01 |
| R24 | «меню (About · Services ▾ · Resources ▾ · Service Areas · Projects · Before & After · Contact · кнопка телефона)» | in-ticket | — | spec §Решение → T01 |
| R25 | «Blog скрыт до первой статьи» | in-ticket | — | spec §Решение → T01 |
| R26 | «мобильное меню» | in-ticket | — | spec §Решение → T01 |
| R27 | «прилипающая кнопка звонка на телефоне» | in-ticket | — | spec §Решение → T01 |
| R28 | «подвал (услуги в твоём порядке + одна строка городов)» / «footer city line … use it» (флаг ready) | in-ticket | — | spec §Решение → T01 |
| R29 | «Phone links go through one component so GA4 "call" tracking can be added later in one place» | in-ticket | — | spec §Решение → T01 |
| R30 | «Проверка: `npm run build`, `npm run lint`, осмотр на ширине телефона» | in-ticket | — | spec §Решение → T01 |
| R31 | «→ PR + ссылка на превью Netlify» | in-ticket | — | spec §Решение → T01 |
| R32 | «CLAUDE.md не трогаю» | in-ticket | — | spec §Решение → T01 |
| R33i | *(подразумевается)* правила CLAUDE.md соблюдены в коде каркаса: нет запрещённых слов, почта не выводится, нет хардкода цветов | in-ticket | — | spec §Решение → T01 |
