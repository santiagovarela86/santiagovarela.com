## Project

Static personal site (profile + occasional blog posts) deployed via GitHub → Cloudflare
Pages, auto-deploying on push to `main`. No backend, no comments/forms by design.

To add a post: create `src/content/blog/<slug>.md` per the frontmatter shape in
`src/content.config.ts` (see README.md for the template and full workflow). Images for a
post go in `public/images/blog/<slug>/`.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
