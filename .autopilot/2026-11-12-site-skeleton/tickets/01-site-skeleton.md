# 01 — Каркас сайта: бренд, данные, маршруты, шапка и подвал

**Требования:** R01, R02, R03, R04, R05, R06, R07, R08, R09, R10, R11, R12, R13, R14, R15, R16, R17, R18, R19, R20, R21, R22, R23, R24, R25, R26, R27, R28, R29, R30, R31, R32, R33i, A01, A02
**Зависит от:** —
**Зона:** `app/` · `components/` · `data/` · `lib/` · `theme/` · `scripts/check-tokens.mjs` · `package.json` (только scripts) · `next.config.ts`
**Волна:** 1
**Ревью:** нет
**Модель:** сильная

## Что должно заработать

Вместо старой одностраничной главной стоит пустой каркас нового сайта. Открываются все страницы из таблицы CLAUDE.md, на каждой название и метка «Page in progress». Есть шапка с меню и кнопкой телефона, мобильное меню, кнопка звонка внизу экрана на телефоне и подвал. Бренд меняется в папке `theme/`. Новые услуги, города и проекты добавляются файлами в `data/`. Флаг `ready` решает, что видно в sitemap, в подвале, в `/areas` и какие города и проекты получают страницу.

Push, PR и превью делает оркестратор, не исполнитель (R01, R31: исполнитель работает в ветке `stage-1-skeleton`, которая уже открыта, и коммитит в неё).

## Из брифа, дословно

> «project skeleton (Next.js App Router, TypeScript, Tailwind v4, design tokens in one file, data folders for services/cities/projects/reviews, empty page routes from the site structure table). Do not write page copy yet.»

> «Sitemap lists only pages that are ready (not the noindex placeholders). Add a "ready" flag per page/service/city in data; sitemap, footer city line and /areas cards use it.»

> «/areas/[city] generates only cities whose page flag is on.»

> «Phone links go through one component so GA4 "call" tracking can be added later in one place.»

> «Заглушки закрыты от индексации, пока на них нет текста.» · «Blog скрыт до первой статьи» · «Фото в `public/` не трогаю» · «CLAUDE.md не трогаю»

## Разделы спецификации

`spec.md` целиком. Границы, имена и сигнатуры — `interfaces.md` (обязательны дословно).

## Критерии приёмки

- [ ] `app/components/HomePage.tsx` и `app/components/LazyMap.tsx` удалены, в `globals.css` нет старых цветов, `next.config.ts` без readdy.ai; `git diff` не задевает `public/` и `CLAUDE.md`
- [ ] Все цвета, шрифты, скругления и ширина контейнера заданы в `theme/tokens.css` (стандартная палитра Tailwind отключена), шрифты подключаются только в `theme/fonts.ts`; `npm run check:tokens` проходит и падает, если временно вписать `#fff` в компонент или `tel:` вне `PhoneLink`
- [ ] `data/` содержит типы и данные строго по `interfaces.md`: 6 услуг в порядке владельца, 5 городов с регионами, 4 региона, пустые проекты и отзывы с README, `featured` с акцентом `repair-restoration`, служебные страницы; все `ready: false`
- [ ] Каждый маршрут из таблицы CLAUDE.md (`/`, 6 услуг, `/deck-materials`, `/before-and-after`, `/areas`, `/projects`, `/reviews`, `/about`, `/contact`, `/deck-academy`, `/blog`, `/privacy`) отдаёт 200 с H1 и меткой «Page in progress» и `<meta name="robots" content="noindex, nofollow">`; на странице нет текста про компанию сверх названий
- [ ] `/areas/fair-oaks` и `/projects/anything` отдают 404, пока флаги выключены; при временном `ready: true` у Fair Oaks появляются маршрут `/areas/fair-oaks` (без noindex), карточка в `/areas` под East Sacramento County, ссылка в строке городов подвала и запись в `/sitemap.xml`; затем флаг возвращается в `false`
- [ ] `/sitemap.xml` сейчас не содержит ни одного URL; `/robots.txt` не закрывает `/_next/`
- [ ] Меню десктопа: About · Services ▾ (6 услуг по порядку) · Resources ▾ (Materials; Blog нет, пока `pages.blog.ready` выключен) · Service Areas · Projects · Before & After · Contact · кнопка телефона; дропдауны открываются мышью и с клавиатуры (Tab/Enter/Escape)
- [ ] На ширине 375 px меню прячется в кнопку с `aria-expanded`, панель закрывается по Escape и при клике на ссылку; внизу экрана висит кнопка звонка; на ≥768 px её нет; горизонтальной прокрутки нет
- [ ] Подвал: 6 услуг по порядку, строка готовых городов (скрыта, когда их нет), телефон, Instagram, CraftLine LLC, ссылка на Privacy; email владельца нигде в выводе и в коде
- [ ] Все `tel:` ссылки рендерит `components/PhoneLink.tsx`, клик вызывает `trackCall(location)` из `lib/analytics.ts`
- [ ] `npm run build`, `npm run lint`, `npm run check:tokens` зелёные; в выводе сборки все маршруты статические
