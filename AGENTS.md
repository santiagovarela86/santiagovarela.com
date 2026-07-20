# Project instructions

## Purpose and architecture

This repository contains a static personal profile and occasional blog posts built with
Astro. GitHub pushes to `main` are deployed by Cloudflare Pages.

- Keep the site static. Do not add a backend, database, comments, or contact forms.
- Preserve the existing date-based article URLs and legacy redirects.
- Prefer Astro components and content collections over client-side JavaScript.

## Structure

- `src/pages/`: page routes.
- `src/components/`: shared Astro components.
- `src/content/blog/`: Markdown blog posts.
- `src/content.config.ts`: blog frontmatter schema.
- `public/images/blog/<slug>/`: images belonging to a blog post.

## Development and validation

```sh
npm install
npm run dev
npm run check
npm run preview
```

- `npm run dev` starts the local site at `http://localhost:4321`.
- `npm run check` validates content and creates the production build in `dist/`.
- `npm run preview` serves the production build locally.
- Run `npm run check` after changes. Also inspect affected pages at desktop and mobile
  widths when making visual changes.

## Adding a blog post

Create `src/content/blog/<slug>.md` using the frontmatter schema and example documented
in `README.md`. Put its images in `public/images/blog/<slug>/` and reference them as
`/images/blog/<slug>/<filename>`.

Keep `draft: true` while a post should remain outside public listings and the sitemap.

## Git conventions

- Use **single-line commit messages only** — no commit body/description.
- Do not add AI attribution or `Co-Authored-By` trailers to commit messages.
