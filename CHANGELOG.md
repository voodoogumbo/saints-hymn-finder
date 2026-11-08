# Changelog

Data updates from the Church's Gospel Library are noted here when they change hymn numbers or titles.

## 2.0.0 — 2026-11-07

- **Renamed to Saints Hymn Finder.** The repository, npm package and website are now `saints-hymn-finder`:
  - `require('lds-hymns-titles-numbers')` becomes `require('saints-hymn-finder')`;
  - the website moved to https://voodoogumbo.github.io/saints-hymn-finder/, and the old address redirects there.
- No changes to the data or the API.

## 1.2.0 — 2026-11-07

- **Tongan (`to`) and Samoan (`sm`):** *Ngaahi Himi* (1–204) and *Viiga* (1–201), plus the 37 hymns from *Hymns—For Home and Church* translated so far. Both languages are in the crosswalk, the API and the Hymn Number Finder.
- **New hymns:** *Hymns—For Home and Church* 1073–1078, 1211 and 1212 in English, Spanish, French and Portuguese.
- **Search** now ignores apostrophes and the ʻokina, so `faaola` finds "Fa'aola" and `ofa` finds "ʻOfa".
- The data check no longer runs every week. Run it by hand when the Church announces new hymns.

## 1.1.0 — 2026-11-07

First tagged release.

- **Languages:** English, Spanish, French and Portuguese, including every hymn from *Hymns—For Home and Church* released through July 23, 2026 (1001–1072, 1201–1210).
- **Crosswalk:** `crosswalk.json` matches each hymn across languages, with notes where the tune or arrangement differs.
- **JavaScript API:** `getHymn`, `list`, `search`, `translate` and `url`, with TypeScript types.
- **Hymn Number Finder:** a web page for looking up any hymn in all four languages. It can be installed on a phone and works offline.
- **Sync:** `npm run sync` regenerates the data from Gospel Library.

## Before 1.1.0

- 2025-09-21: English and Spanish hymn titles and numbers.
