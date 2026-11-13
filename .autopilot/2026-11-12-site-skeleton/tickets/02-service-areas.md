# 02 — 14 городов и выпадающее меню Service Areas

**Требования:** G01, G02, G03, G04, G05, G06, G08
**Зависит от:** 01
**Зона:** `data/` · `lib/` · `app/areas/` · `components/layout/`
**Волна:** 3
**Ревью:** нет
**Модель:** сильная

## Что должно заработать

Все 14 городов из списка заказчика есть в данных и у каждого открывается страница-заглушка (закрытая от поиска, вне sitemap). В меню Service Areas раскрывается по 4 регионам: на десктопе 4 колонки, на телефоне аккордеон регионов. Последний пункт — «All Service Areas».

## Из брифа, дословно

> «Add all 14 focus cities as placeholder pages (noindex, out of sitemap until ready), grouped by region: East Sacramento County: Fair Oaks, Orangevale, Citrus Heights, Rancho Cordova, Gold River · Folsom & El Dorado Hills: Folsom, El Dorado Hills · Placer County: Granite Bay, Roseville, Rocklin, Loomis, Auburn · Sacramento: Sacramento (sections later: Land Park, Arden Park, Sierra Oaks), East Sacramento»

> «Service Areas becomes a dropdown grouped by these 4 regions (desktop: 4 columns; mobile: region accordion) + last item "All Service Areas" (/areas).»

## Разделы спецификации

`spec.md` → «Дополнение 2». Границы — `interfaces.md` → «Дополнение 2».

## Критерии приёмки

- [ ] В `data/cities/` 14 городов (по файлу), регионы и порядок как в брифе, все `ready: false`; у Sacramento комментарий про будущие разделы Land Park, Arden Park, Sierra Oaks
- [ ] Каждый из 14 `/areas/<slug>` отдаёт 200 с H1 = название города, «Page in progress» и `noindex, nofollow`; `/areas/carmichael`-подобный неизвестный slug → 404; `/sitemap.xml` по-прежнему пустой; строка городов в подвале и карточки `/areas` по-прежнему только для `ready`
- [ ] Десктоп (≥1024): Service Areas — кнопка с `aria-expanded`, панель с 4 колонками (заголовок региона + его города), последним — «All Service Areas» → `/areas`; открывается кликом/касанием/наведением/клавиатурой, закрывается Escape и уходом; на 1024 px панель не выходит за край окна
- [ ] Мобильное меню: группа Service Areas с аккордеоном из 4 регионов (кнопки с `aria-expanded`, по умолчанию свёрнуты), города — ссылки, закрывающие меню; последним — «All Service Areas»; на 375 px нет горизонтальной прокрутки
- [ ] `npm run check` зелёный
