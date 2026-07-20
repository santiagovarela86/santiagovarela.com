---
title: "Coronavirus COVID 19 Tracking Tool"
year: 2020
description: "Create a user in the platform, compare COVID stats between countries, plot the information for graphical comparison, or retrieve updated information via the Telegram mobile app. Tag countries with different lockdown strategies and draw conclusions from the stats."
technologies: ["Spring Boot", "Java 14", "React", "Telegram Bot", "Lombok", "Docker", "Azure App Service", "Azure DevOps CI/CD", "JWT", "MySQL", "SQL Server", "REST"]
links:
  - label: "docker-compose.yml"
    href: "https://gitlab.com/santiagovarela.86/integracion-covid-19/-/blob/master/docker-compose.yml"
  - label: "covid-api"
    href: "https://gitlab.com/santiagovarela.86/integracion-covid-19/-/tree/master/covid-api"
  - label: "covid-frontend"
    href: "https://gitlab.com/santiagovarela.86/integracion-covid-19/-/blob/master/covid-frontend/src/App.js"
  - label: "covid-telegram-api"
    href: "https://gitlab.com/santiagovarela.86/integracion-covid-19/-/tree/master/covid-telegram-api"
featured: true
order: 2
draft: false
---

This full-stack tracking platform combines a Spring Boot REST API with a React frontend and a Telegram bot. Users can compare COVID statistics between countries, graph the results, and classify countries according to their lockdown strategies.

The application uses JWT authentication and relational databases, with Docker Compose coordinating its services. Azure App Service and Azure DevOps CI/CD provide the deployment path. The separate API, frontend, and Telegram components show how the same data can support both browser-based analysis and a conversational mobile interface.
