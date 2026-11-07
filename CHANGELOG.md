# Changelog

Data updates from the Church's Gospel Library are noted here when they change hymn numbers or titles.

## 1.1.0 — 2026-11-07

First tagged release.

- **Languages:** English, Spanish, French and Portuguese, including every hymn from *Hymns—For Home and Church* released through July 23, 2026 (1001–1072, 1201–1210).
- **Crosswalk:** `crosswalk.json` matches each hymn across languages, with notes where the tune or arrangement differs.
- **JavaScript API:** `getHymn`, `list`, `search`, `translate` and `url`, with TypeScript types.
- **Hymn Number Finder:** a web page for looking up any hymn in all four languages. It can be installed on a phone and works offline.
- **Sync:** `npm run sync` regenerates the data from Gospel Library, and a weekly check opens an issue when the Church publishes changes.

## Before 1.1.0

- 2025-09-21: English and Spanish hymn titles and numbers.
