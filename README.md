# Yurii Ihnatchuk — Portfolio

Personal portfolio site. Vite + React 19 + TypeScript, Tailwind CSS v4, Motion.

```sh
npm install
npm run dev      # local dev server
npm run build    # type-check + production build to dist/
npm run lint
```

## Editing content

All copy lives in `src/data/` — no component changes needed:

- `profile.ts` — name, title, summary, stats, education, contact links
- `experience.ts` — roles and periods
- `projects.ts` — selected projects (`featured: true` highlights a card; `categories` drive the filter)
- `skills.ts` — tech stack groups
