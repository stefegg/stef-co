# stef-co

Personal portfolio site for Stephen Egbert — Senior Frontend Engineer. Live at **[www.stef-co.com](https://www.stef-co.com)**.

Built as a modern Next.js App Router application with a component-driven architecture, a full testing pyramid, and Storybook-documented components.

## Tech stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router, React Server Components) + [React 19](https://react.dev/)
- **Language:** TypeScript
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation:** [Motion](https://motion.dev/)
- **Unit / component tests:** [Jest](https://jestjs.io/) + [React Testing Library](https://testing-library.com/)
- **E2E tests:** [Playwright](https://playwright.dev/)
- **Component docs:** [Storybook 10](https://storybook.js.org/) (`@storybook/nextjs`, Webpack)
- **Linting / formatting:** ESLint 9 (flat config) + Prettier
- **CI:** GitHub Actions (lint → test → build → e2e)
- **Hosting:** [Vercel](https://vercel.com/) (with Analytics & Speed Insights)

## Getting started

Requires **Node 20.9+**.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Script                   | Description                                     |
| ------------------------ | ----------------------------------------------- |
| `npm run dev`            | Start the dev server                            |
| `npm run build`          | Production build                                |
| `npm start`             | Serve the production build                      |
| `npm run lint`           | Lint (ESLint + Prettier); add `-- --fix` to fix |
| `npm test`               | Run Jest unit / component tests                 |
| `npm run test:watch`     | Jest in watch mode                              |
| `npm run test:e2e`       | Run Playwright end-to-end tests                 |
| `npm run storybook`      | Start Storybook                                 |
| `npm run build-storybook`| Build the static Storybook                      |

## Project structure

```
src/app/
├── _components/        # UI components, each co-located with its story + test
│   └── ProjectPane/
│       ├── index.tsx
│       ├── ProjectPane.stories.tsx
│       └── ProjectPane.test.tsx
├── _utils/             # Shared data (experiences, projects, skills) + helpers
├── about/ experience/ projects/ contact/   # Routes
├── layout.tsx          # Root layout, metadata, fonts
├── opengraph-image.tsx # Generated social share card
├── sitemap.ts / robots.ts
└── page.tsx            # Home
e2e/                    # Playwright specs
```

Each component lives in its own folder with its Storybook story and Jest test alongside it. Page content (work history, projects, skills) is data-driven from `src/app/_utils/constants.tsx`.

## Testing

- **Jest + RTL** — component rendering and data-shape tests (`*.test.tsx`, co-located).
- **Playwright** — smoke tests of every route and navigation (`e2e/`).

```bash
npm test          # unit / component
npm run test:e2e  # end-to-end
```

## Deployment

Deployed on Vercel; pushes to `main` are built and released automatically. CI ([`.github/workflows/ci.yml`](.github/workflows/ci.yml)) runs lint, unit tests, the production build, and Playwright e2e on every push and pull request.
