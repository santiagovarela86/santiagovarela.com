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
│   ├── content.config.ts           # blog and project collection schemas
│   ├── content/blog/*.md           # posts
│   ├── content/projects/*.md       # project metadata and detail-page content
│   ├── layouts/BaseLayout.astro    # <head>, meta/OG tags, header/footer
│   ├── components/Header.astro, Footer.astro, ProjectCard.astro
│   └── pages/
│       ├── index.astro             # homepage — profile/hero + project cards + posts
│       ├── projects/index.astro, [slug].astro
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

Setting `draft: true` prevents the article page from being generated and excludes it
from `/`, `/blog/`, and the sitemap. Set it to `false` locally when you want to preview
the final route.

## Adding a project

Create `src/content/projects/<slug>.md` with this frontmatter:

```markdown
---
title: "Project title"
year: 2026
description: "A concise summary used on cards and in page metadata."
technologies: ["Technology one", "Technology two"]
links:
  - label: "Source code"
    href: "https://github.com/example/project"
featured: false
order: 14
draft: false
---

Write the longer project description here.
```

Projects are sorted by `order`. Featured projects appear on the homepage; every
published project appears on `/projects/` and receives a `/projects/<slug>/` page.
Setting `draft: true` excludes the project from all three locations and the sitemap.
