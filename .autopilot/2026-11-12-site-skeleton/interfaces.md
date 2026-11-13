# Границы и правила

## Правила проекта (из CLAUDE.md — обязательны для каждого таска)
- Весь текст сайта по-английски. Тексты страниц на этом этапе НЕ писать: только названия страниц/услуг/городов из CLAUDE.md и метка «Page in progress».
- Никогда не писать: «licensed», CSLB, «cedar», «Carmichael», «CraftLine Deck & Fence», «CraftLine Construction», цены, гарантии, страховку, сроки ответа, награды, цифры, отзывы.
- Почта CraftLine.Prodeck@gmail.com на сайте не выводится нигде (ни текстом, ни mailto).
- Телефон (279) 237-9912, tel `+12792379912`. Instagram @craftline.sacramento → https://www.instagram.com/craftline.sacramento. Сайт https://craftlineprodeck.com. Юрлицо CraftLine LLC. Название CraftLine Decking.
- Цвета и шрифты — только через токены из `theme/tokens.css`. Никаких hex/rgb/hsl и имён шрифтов вне `theme/`.
- `public/` не трогать. `CLAUDE.md` не трогать.
- Без новых npm-зависимостей.

## Границы, решённые в спецификации

### theme/ — бренд (владеет: все значения цветов, шрифтов, скруглений, контейнера)
- `theme/tokens.css` — блок `@theme { --color-*: initial; … }`. Имена токенов (классы Tailwind из них):
  - цвета: `--color-slate` (#1E2B32), `--color-slate-700`, `--color-slate-900`, `--color-amber` (#D49A44), `--color-amber-600` (hover), `--color-ink` (основной текст), `--color-muted` (второстепенный текст), `--color-surface` (фон страницы), `--color-surface-alt`, `--color-border`, `--color-white`, `--color-black`, `--color-transparent`, `--color-current` (currentColor).
  - шрифты: `--font-sans: var(--font-body), system-ui, sans-serif;` `--font-display: var(--font-display-face), sans-serif;`
  - `--radius-sm|md|lg`, `--container-site` (макс. ширина контента), при необходимости `--spacing` оставить дефолт.
- `theme/fonts.ts` — `export const fontVariables: string` (className для `<html>`/`<body>`), задаёт CSS-переменные `--font-body` (Inter) и `--font-display-face` (Oswald). Никакой другой файл не импортирует `next/font`.
- `components/brand/Logo.tsx` — `export function Logo(props: { className?: string; variant?: 'dark' | 'light' }): JSX.Element` — inline SVG ромбы + текст CRAFTLINE / DECKING, цвета через `currentColor`/классы токенов. `aria-label="CraftLine Decking"`.

### data/ — содержимое (владеет: все факты и флаги)
- `data/types.ts`:
```ts
export type ServiceSlug = 'deck-building' | 'deck-repair' | 'redwood-deck-restoration' | 'ipe-hardwood-deck-restoration' | 'deck-railings-stairs' | 'pergolas';
export interface Service { slug: ServiceSlug; name: string; navLabel: string; order: number; ready: boolean; }
export type RegionId = 'east-sacramento-county' | 'folsom-el-dorado-hills' | 'placer-county' | 'sacramento';
export interface Region { id: RegionId; name: string; order: number; }
export type CitySlug = 'fair-oaks' | 'folsom' | 'granite-bay' | 'orangevale' | 'citrus-heights';
export interface City { slug: CitySlug; name: string; region: RegionId; ready: boolean; nearby: CitySlug[]; }
export type Material = 'redwood' | 'trex' | 'timbertech' | 'ipe' | 'cumaru' | 'tigerwood' | 'garapa' | 'dasso-bamboo' | 'aluminum';
export interface ProjectPhoto { id: string; src: string; width: number; height: number; alt: string; caption: string; } // alt/caption: "service — material — city"
export interface BeforeAfterPair { beforeId: string; afterId: string; caption: string; } // ids of photos in the same project; same spot and angle
export interface Project { slug: string; title: string; city: CitySlug; service: ServiceSlug; materials: Material[]; areaSqFt?: number; days?: number; before: string; whatWeDid: string; finish?: string; photos: ProjectPhoto[]; beforeAfter: BeforeAfterPair[]; ready: boolean; }
export interface Review { id: string; author: string; city: CitySlug; service?: ServiceSlug; projectSlug?: string; text: string; date: string; source: 'google' | 'yelp' | 'other'; }
export type Emphasis = 'repair-restoration' | 'building';
export interface Featured { emphasis: Emphasis; projects: string[]; reviews: string[]; } // slugs / ids, in display order
export type PageKey = 'home' | 'deck-materials' | 'before-and-after' | 'areas' | 'projects' | 'reviews' | 'about' | 'contact' | 'deck-academy' | 'blog' | 'privacy';
export interface SitePage { key: PageKey; path: string; title: string; ready: boolean; }
export type NavEntry =
  | { label: string; href: string }                                  // plain link
  | { label: string; children: 'services' }                          // dropdown from services
  | { label: string; children: PageKey[] };                          // dropdown from pages (shown only if page ready, except deck-materials which is always listed)
export interface SiteConfig { name: string; legalName: string; url: string; phone: { display: string; tel: string }; instagram: { handle: string; url: string }; nav: NavEntry[]; }
```
- `data/site.ts` → `export const site: SiteConfig`
- `data/services/index.ts` → `export const services: Service[]` (по одному файлу на услугу в `data/services/*.ts`, index собирает и сортирует по `order`). Порядок и названия: 1 Deck Building & Rebuild (`deck-building`), 2 Deck Repair, 3 Redwood Deck Restoration, 4 Ipe & Hardwood Deck Restoration, 5 Railings & Stairs (`deck-railings-stairs`), 6 Pergolas.
- `data/cities/index.ts` → `export const cities: City[]`, `export const regions: Region[]` (порядок: East Sacramento County · Folsom & El Dorado Hills · Placer County · Sacramento). По файлу на город в `data/cities/*.ts`.
- `data/projects/index.ts` → `export const projects: Project[] = []` (+ `README.md` в папке: один проект = один файл, как добавить). Аналогично `data/reviews/index.ts` → `reviews: Review[] = []`.
- `data/featured.ts` → `export const featured: Featured` (`emphasis: 'repair-restoration'`, пустые списки).
- `data/pages.ts` → `export const pages: Record<PageKey, SitePage>`.

### lib/ — чтение данных (владеет: вся логика флагов; страницы и компоненты не фильтруют данные сами)
- `lib/content.ts`:
  - `getServices(): Service[]` (по order), `getService(slug: ServiceSlug): Service`
  - `getCities(): City[]`, `getReadyCities(): City[]`, `getCity(slug: string): City | undefined`, `getRegionsWithReadyCities(): { region: Region; cities: City[] }[]` (только регионы, где есть готовые города, по order)
  - `getReadyProjects(): Project[]`, `getProject(slug: string): Project | undefined`, `getFeaturedProjects(): Project[]`, `getFeaturedReviews(): Review[]`
  - `getPage(key: PageKey): SitePage`
  - `getSitemapEntries(): { path: string }[]` — только `ready`: страницы, услуги (`/<slug>`), города (`/areas/<slug>`), проекты (`/projects/<slug>`)
- `lib/navigation.ts` → `export interface NavItem { label: string; href: string; children?: NavItem[] }`, `getMainNav(): NavItem[]` — строится из `site.nav`; порядок About · Services (дети из getServices) · Resources (Materials; Blog только если `pages.blog.ready`) · Service Areas (/areas) · Projects · Before & After · Contact. Телефон в nav не входит — его рисует шапка через PhoneLink. `getFooterServices()` = getServices().
- `lib/metadata.ts` → `pageMetadata(opts: { path: string; title: string; ready: boolean; description?: string }): Metadata` — title, `alternates.canonical`, `robots: { index: false, follow: false }` при `!ready`.
- `lib/analytics.ts` → `export function trackCall(location: string): void` — no-op с комментарием «GA4 `call` event goes here (stage 5)».

### components/ — общие куски интерфейса
- `components/PhoneLink.tsx` ('use client') → `PhoneLink(props: { location: string; className?: string; children?: ReactNode })` — `<a href={'tel:' + site.phone.tel} onClick={() => trackCall(location)}>`; по умолчанию текст `site.phone.display`. **Единственное место в коде, где появляется `tel:`.**
- `components/layout/SiteHeader.tsx`, `components/layout/MobileMenu.tsx` ('use client'), `components/layout/SiteFooter.tsx`, `components/layout/StickyCallButton.tsx` (mobile only), `components/layout/Container.tsx`.
- `components/PagePlaceholder.tsx` → `PagePlaceholder(props: { title: string })` — H1 + метка «Page in progress».

### app/ — маршруты
- `app/layout.tsx` — fontVariables, глобальные метаданные сайта (без noindex на уровне сайта), SiteHeader, `<main>`, SiteFooter, StickyCallButton.
- Каждая страница: `export const metadata = pageMetadata({...})` (или `generateMetadata` в динамических) и `<PagePlaceholder title=… />`.
- `app/areas/[city]/page.tsx`, `app/projects/[slug]/page.tsx`: `generateStaticParams` из ready-данных, `export const dynamicParams = false`, `notFound()` на неизвестный slug.
- `app/robots.ts` — allow `/`, disallow только `/api/`, sitemap URL. `app/sitemap.ts` — из `getSitemapEntries()`.

## Тестовые швы
- `npm run build` (статическая генерация всех маршрутов), `npm run lint`, `npm run check:tokens` (новый скрипт `scripts/check-tokens.mjs`: hex/rgb()/hsl() и названия шрифтов в `app/ components/ lib/ data/` → ошибка; также `tel:` вне `components/PhoneLink.tsx` и email владельца где угодно в коде → ошибка).
- Флаги проверяются временным переключением `ready` у одного города: появляется маршрут, карточка, строка в подвале и запись в sitemap.

## Что построили законченные таски
(дописывается по мере работы)

## Проект: стек, команды, что не трогать
- Next.js 16.2 (App Router), React 19.2, TypeScript strict, Tailwind v4 (`@tailwindcss/postcss`), ESLint 9 flat config. Новых зависимостей нет.
- Установка: `npm install` (node_modules может не быть). Запуск: `npm run dev`. Сборка: `npm run build` (prebuild-скрипт картинок пишет ошибки про отсутствующие .jpg — это нормально, не чинить). Линт: `npm run lint`.
- **Одна команда проверки** (её создаёт таск 01): `npm run check` = `npm run check:tokens && npm run lint && npm run build`.
- Тестового фреймворка нет и он не нужен на этом этапе; проверка поведения — сборка + запуск `npm run start`/`dev` и запросы curl.
- Не трогать: `public/`, `CLAUDE.md`, `.autopilot/`, `netlify.toml`, `scripts/optimize-images.js`, `scripts/optimize-new-images.js`, `README.md`, `PERFORMANCE.md`, `.claude/`.
- Коммиты: только оркестратор. Исполнитель не коммитит и не пушит.
- Таск 01: всё по границам выше; плюс `components/layout/NavDropdown.tsx` → `NavDropdown({ item: NavItem })`; скрипты `npm run check:tokens`, `npm run check`; `lint` = `eslint --ignore-pattern 'scripts/optimize-*.js'` (старые скрипты картинок на require()). Десктоп-меню с lg (1024px), мобильная кнопка ниже; липкая кнопка звонка скрыта с md (768px).

## Дополнение 2 — границы
- `CitySlug` = 'fair-oaks' | 'orangevale' | 'citrus-heights' | 'rancho-cordova' | 'gold-river' | 'folsom' | 'el-dorado-hills' | 'granite-bay' | 'roseville' | 'rocklin' | 'loomis' | 'auburn' | 'sacramento' | 'east-sacramento'. `cities` в `data/cities/index.ts` — в этом порядке (порядок внутри региона = порядок массива).
- `NavEntry` получает вариант `{ label: string; children: 'areas' }`; в `site.nav` пункт Service Areas = `{ label: 'Service Areas', children: 'areas' }`.
- `NavItem` получает `groups?: NavGroup[]`, где `export interface NavGroup { label: string; items: NavItem[] }`. Пункт Service Areas: `{ label: 'Service Areas', href: '/areas', groups: [4 региона], children: [{ label: 'All Service Areas', href: '/areas' }] }` — `children` у него = хвостовые ссылки после групп.
- `lib/content.ts`: новая `getRegionsWithCities(): { region: Region; cities: City[] }[]` — все города, регионы по order, пустые регионы отброшены. `getReadyCities` и `getRegionsWithReadyCities` не меняются (подвал, /areas, sitemap).
- `app/areas/[city]/page.tsx`: `generateStaticParams` из `getCities()` (все), `dynamicParams = false`, метаданные через `pageMetadata({ ready: city.ready })`.
- Таск 02: как в «Дополнение 2». Панель Service Areas — `absolute inset-x-0` от шапки, внутри Container + grid-cols-4; десктоп-навигация шапки растянута по высоте (self-stretch), чтобы мышь доходила до панели.
