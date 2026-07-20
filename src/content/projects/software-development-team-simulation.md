---
title: "Discrete Simulation of a Software Development Team"
year: 2018
description: "Simulates the arrival of easy, medium, and hard tickets solved by Jr., SSr., and Sr. developers according to probability distributions, then calculates the performance of different team configurations."
technologies: ["C#", "Statistics"]
links:
  - label: "clDatosVar.cs"
    href: "https://github.com/santiagovarela86/utn.simulacion.tp6/blob/master/Simulacion_TP6/clDatosVar.cs"
  - label: "clSimu.cs"
    href: "https://github.com/santiagovarela86/utn.simulacion.tp6/blob/master/Simulacion_TP6/clSimu.cs"
  - label: "Paper (Spanish)"
    href: "https://drive.google.com/file/d/1sNVkKaCVLK74qJMZduDaDyl9Yvldm_l0/view?usp=sharing"
featured: false
order: 10
draft: false
---

This discrete-event simulation models a development team receiving easy, medium, and hard tickets. Junior, semi-senior, and senior developers resolve those tickets according to different probability distributions and processing characteristics.

The C# implementation generates the variables used by the model and runs alternative team configurations. Comparing those runs makes it possible to evaluate how staffing composition affects the simulated workload and overall performance. A Spanish-language paper accompanies the source code and documents the statistical model, assumptions, and analysis.
