# Заметки по существующему коду (ветка v2 на 5f545ce)

Написано оркестратором, без отдельного агента: код маленький, прочитан целиком на подготовке, и почти весь он заменяется.

- Next.js **16.2.x** (lock), React 19.2, Tailwind v4 через `@tailwindcss/postcss` (`postcss.config.mjs`), TypeScript strict, ESLint 9 flat config (`eslint.config.mjs`: next core-web-vitals + typescript). Node 26 локально.
- Скрипты: `npm run dev`, `npm run build` (перед ним `prebuild` → `scripts/optimize-images.js`), `npm run lint` (= `eslint`).
- `prebuild` ищет `public/hero.jpg`, `s1-4.jpg`, `1-4.jpg` — их нет, sharp падает с ошибкой, скрипт её ловит и только пишет в лог; файлы в `public/` не меняются. Не трогаем (R08), чистим на этапе 2.
- `tsconfig.json`: alias `@/*` → `./*` (корень репозитория).
- `next.config.ts`: `images.remotePatterns` → readdy.ai (убрать, R09), `dangerouslyAllowSVG` + CSP для картинок, `experimental.optimizeCss` + `optimizePackageImports: ['react-icons']`. Остальное оставить.
- `app/layout.tsx`: метаданные сайта (title/description/OG, `metadataBase` = https://craftlineprodeck.com), шрифты Inter (`--font-inter`) и Oswald (`--font-oswald`) через `next/font/google`, preconnect к Google/Maps.
- `app/page.tsx` (65 строк) → `app/components/HomePage.tsx` (1387 строк, старая одностраничка), `app/components/LazyMap.tsx` — удалить (R07).
- `app/globals.css`: `@theme inline` со старыми цветами brand-brown/orange/beige + stone, анимации pulse-glow — заменить.
- `app/not-found.tsx` использует старые классы `bg-brand-beige`, `text-brand-brown` — переписать на токены.
- `app/robots.ts`: allow `/`, disallow `/api/`, sitemap URL. `app/sitemap.ts`: только главная.
- `public/`: фото старого сайта (*.webp, n*.jpeg), `icon.png`, шаблонные svg — не трогать.
- `netlify.toml`: пропуск сборки, если поменялись только `*.md` и `.claude/`.
- `README.md`, `PERFORMANCE.md` описывают старый сайт — вне рамок этапа.
