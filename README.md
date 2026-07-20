# santiagovarela.com

Personal site: profile, contact info, and occasional posts. Built with
[Astro](https://astro.build), deployed via GitHub → Cloudflare Pages.

## Project structure

```text
/
├── public/
│   ├── _headers                    # security headers served by Cloudflare Pages
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

This project uses **GitHub Actions → Wrangler Direct Upload**: GitHub builds the site,
Cloudflare Pages hosts the finished static files.

```text
git push main
      │
      ▼
GitHub Actions (.github/workflows/deploy.yml)
  checkout → npm ci → npm run check (astro build) → dist/
      │
      ▼
wrangler pages deploy dist  (uses CLOUDFLARE_* secrets)
      │
      ▼
Cloudflare Pages project "santiagovarela-com" serves the site worldwide
```

Triggers: every push to `main`, or manually from the GitHub **Actions** tab
(`workflow_dispatch`).

What the workflow does:

1. Checks out the repository and installs Node.js 22 (npm cache enabled).
2. Runs `npm ci` for a clean, lockfile-exact install.
3. Runs `npm run check` (`astro build`) — validates content-collection frontmatter and
   writes the static site to `dist/`.
4. Uploads `dist/` with `wrangler pages deploy`. The build runs in GitHub Actions, so
   deploys do not consume Cloudflare build minutes and visitors cannot trigger a build.

Repository secrets (Settings → Secrets and variables → Actions):

| Secret | Purpose |
| :----- | :------ |
| `CLOUDFLARE_API_TOKEN` | API token scoped to **Account → Cloudflare Pages → Edit** only |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare account ID |

Custom domains (`santiagovarela.com`) are attached in the Cloudflare Pages dashboard, not
in the workflow.

### Updating a pinned action

Third-party actions are pinned to full commit SHAs (see the comment at the top of
[deploy.yml](.github/workflows/deploy.yml)). Tags like `@v6` can be force-moved; a SHA
cannot. To upgrade one:

```sh
git ls-remote https://github.com/actions/checkout refs/tags/v6.2.0
```

Replace the SHA in `deploy.yml` and update the trailing version comment to match.

## Security

The site is fully static — no backend, no forms, no cookies, no third-party scripts — so
the attack surface is minimal by design.

### DDoS and traffic costs

You are protected against the "make me pay" scenario on the free Cloudflare Pages plan:

- **Unmetered DDoS mitigation** is included on every Cloudflare plan (including Free).
  Attack traffic is absorbed at the edge; you are not billed for it.
- Cloudflare Pages Free documents **unlimited static requests** and **unlimited bandwidth**.
  Serving HTML/CSS/JS/images from Pages is not a metered billable dimension, so a traffic
  flood cannot generate an overage invoice the way it can on hosts that charge per GB.
- Because deploys run in GitHub Actions and only upload finished files, hostile visitors
  also cannot burn your Cloudflare **build minutes**.

What a flood *can* do is make the site slow or briefly hard to reach for real users while
Cloudflare mitigates — it should not cost you money. Keep an eye on the Cloudflare
dashboard Analytics if you ever see a sustained spike; no credit card needs to be on file
for the free Pages hosting itself.

### Site hardening

- **Secrets** live only as GitHub Actions repository secrets. Nothing sensitive is
  committed; `.gitignore` excludes `.env*` and the WordPress export XML files.
- **Pinned actions.** Workflow actions use commit SHAs so a compromised release tag
  cannot inject code into the build (which has the Cloudflare token).
- **Security headers** in [public/_headers](public/_headers) are applied by Cloudflare
  Pages on every response. Each header has an inline comment. Highlights:
  - `X-Content-Type-Options: nosniff` — browsers must not guess a different content type
    than the one the server declared (blocks some content-sniffing XSS tricks).
  - **CSP (Content-Security-Policy)** — a browser allow-list for what the page may load
    or execute (scripts, images, frames, form targets, etc.). Even if someone somehow
    injected markup into a page, the browser would refuse disallowed scripts or
    third-party resources. This site's CSP allows `'unsafe-inline'` scripts/styles
    because Astro and the theme/email snippets use small inline scripts; with no user
    input on the site that trade-off is acceptable. See the comments in `_headers`.
- **Email obfuscation.** The contact address is never written as `user@domain` in the
  served HTML. [EmailLink](src/components/EmailLink.astro) stores it reversed in a data
  attribute and a small client script builds the `mailto:` link after load, which stops
  naive scrapers. Determined harvesters can still reverse it — this is spam reduction,
  not cryptography.

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

Article pages automatically include **Back to writing** links above and below the
article, followed by the shared email and LinkedIn contact prompt. For posts around
1,500 words or longer, add one return link at the nearest natural section break around
the midpoint:

```html
<nav class="return-nav return-nav--middle" aria-label="Article navigation" lang="en">
  <a href="/blog/">← Back to writing</a>
</nav>
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

Projects are sorted newest-first by `year`, with `order` used to break ties within
the same year. Featured projects appear on the homepage; every published project
appears on `/projects/` and receives a `/projects/<slug>/` page.
Setting `draft: true` excludes the project from all three locations and the sitemap.
