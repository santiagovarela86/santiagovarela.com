---
title: "Distributed Messaging System"
year: 2020
description: "Highly reliable messaging system with chat, group chat, and secure chat functionality, with state replication between nodes for fault tolerance and dynamic routing between clients and servers."
technologies: ["Elixir", "GenServer", "Swarm", "Distributed Systems", "Docker"]
links:
  - label: "server_supervisor.ex"
    href: "https://github.com/santiagovarela86/iasc-grupo-3/blob/master/Server/lib/server_supervisor.ex"
  - label: "cliente.ex"
    href: "https://github.com/santiagovarela86/iasc-grupo-3/blob/master/Cliente/lib/cliente/cliente.ex"
  - label: "router.ex"
    href: "https://github.com/santiagovarela86/iasc-grupo-3/blob/master/Router/lib/router/router.ex"
featured: true
order: 3
draft: false
---

This messaging system explores reliable communication across distributed nodes. It supports direct chat, group chat, and secure chat while replicating state so that another node can continue serving clients when a failure occurs.

Elixir processes and GenServer provide the application’s concurrency model, with Swarm coordinating distributed process registration. Separate client, router, and supervised server components divide the system’s responsibilities, while dynamic routing connects clients to available servers. Docker provides a repeatable environment for running and testing the multi-node topology.
