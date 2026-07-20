---
title: "Operating System Simulation"
year: 2017
description: "Five processes (CPU, RAM, DISK, CONSOLE, KERNEL) each running on a different computer, communicating over a custom TCP/IP protocol and running scripts in a custom C-like language. One of the hardest projects due to sync issues, race conditions, and time pressure."
technologies: ["C", "Linux", "TCP Sockets"]
links:
  - label: "kernel.c"
    href: "https://github.com/santiagovarela86/2017utnso/blob/master/Kernel/kernel.c"
  - label: "memoria.c"
    href: "https://github.com/santiagovarela86/2017utnso/blob/master/Memoria/memoria.c"
  - label: "cpu.c"
    href: "https://github.com/santiagovarela86/2017utnso/blob/master/CPU/cpu.c"
  - label: "consola.c"
    href: "https://github.com/santiagovarela86/2017utnso/blob/master/Consola/consola.c"
  - label: "filesystem.c"
    href: "https://github.com/santiagovarela86/2017utnso/blob/master/FileSystem/filesystem.c"
featured: true
order: 4
draft: false
---

This project models an operating system as five independent C programs: kernel, CPU, memory, console, and filesystem. Each component can run on a different computer and communicates through a custom protocol implemented over TCP sockets.

The simulated system executes scripts written in a purpose-built C-like language. Coordinating distributed processes introduced practical synchronization problems, including race conditions and timing-sensitive failures. The separate source modules make it possible to inspect each subsystem while also showing how scheduling, memory, execution, console input, and storage cooperate as one system.
