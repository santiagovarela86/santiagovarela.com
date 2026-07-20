---
title: "Stock Market Analysis Tool"
year: 2017
description: "Focused on software design and architectural decisions, code smells, design patterns, and working with constantly changing requirements — migrating a desktop app to a web app, and then to the cloud."
technologies: ["Velocity", "Google API", "Jackson", "Java", "MySQL", "Hibernate", "Spark", "Heroku", "Memcache", "Quartz", "MongoDB", "Maven"]
links:
  - label: "Router.java"
    href: "https://github.com/santiagovarela86/2017disenosistemas/blob/master/src/main/java/dds/tp/Spark/Router.java"
featured: false
order: 12
draft: false
---

This stock-market analysis application was shaped by a sequence of changing requirements. It began as a desktop application, moved to a web architecture, and was later adapted for cloud deployment.

The project emphasizes design decisions, code smells, and design patterns rather than a single fixed implementation. Its Java stack spans routing, persistence, scheduled work, caching, and external APIs, using both relational and document databases. The linked router provides an entry point into the web version and illustrates how the application’s HTTP-facing behavior was organized.
