# santiagovarela.com

Personal site: profile, contact info, and occasional posts. Built with
[Astro](https://astro.build), deployed via GitHub → Cloudflare Pages.

## Project structure

```text
/
├── public/
│   ├── favicon.svg / favicon.ico
│   └── images/blog/<post-slug>/    # images referenced by a post
├── src/
│   ├── content.config.ts           # blog collection schema (frontmatter shape)
│   ├── content/blog/*.md           # posts
│   ├── data/projects.ts            # structured project list rendered as cards on /
│   ├── layouts/BaseLayout.astro    # <head>, meta/OG tags, header/footer
│   ├── components/Header.astro, Footer.astro, Card.astro, Badge.astro, ProjectCard.astro
│   └── pages/
│       ├── index.astro             # homepage — profile/hero + project cards + posts
│       └── blog/index.astro, [...slug].astro
└── astro.config.mjs
```

The homepage *is* the "About me" profile (matching the original WordPress site, where the
home page was the About post) — there's no separate `/about` route.

## Commands

| Command           | Action                                       |
| :----------------- | :-------------------------------------------- |
| `npm install`       | Install dependencies                          |
| `npm run dev`        | Start local dev server at `localhost:4321`, live-reloading |
| `npm run check`      | Validate content and generate the production site            |
| `npm run build`       | Build the production site to `./dist/`, validating post frontmatter |
| `npm run preview`      | Serve the built `./dist/` locally, exactly as Cloudflare will |

## Deploy

Production deploys run via [GitHub Actions](.github/workflows/deploy.yml) on every push to
`main` (or manually from the Actions tab). The workflow builds the site and uploads `dist/` to
the Cloudflare Pages project `santiagovarela-com` using Wrangler Direct Upload.

Repository secrets required:

| Secret | Purpose |
| :----- | :------ |
| `CLOUDFLARE_API_TOKEN` | Cloudflare API token with Account → Cloudflare Pages → Edit |
| `CLOUDFLARE_ACCOUNT_ID` | Your Cloudflare account ID |

Custom domains (`santiagovarela.com`) are configured in the Cloudflare Pages dashboard, not in
the workflow.

## Adding a post

Create a new file at `src/content/blog/<slug>.md` (or ask an AI coding agent to draft one) with
this frontmatter:

```markdown
---
title: "Post title"
pubDate: 2026-01-01
description: "One or two sentences for previews and SEO."
lang: en # or "es"
draft: false # set true to keep it out of listings while you work on it
---

Post body in Markdown. Images go in `public/images/blog/<slug>/` and are referenced
as `/images/blog/<slug>/filename.png`.
```

Then:

1. `npm run dev` and open the date-based URL shown on the homepage or writing index.
2. `npm run build` to confirm the frontmatter passes schema validation.
3. `git add`, `git commit`, `git push` — GitHub Actions deploys to Cloudflare Pages automatically.

Setting `draft: true` builds the page but excludes it from `/`, `/blog/`, and the
sitemap, so you can preview a work-in-progress without publishing it.
