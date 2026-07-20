---
title: "Invariants Framework (Cross-Cutting Concerns)"
year: 2019
description: "A Ruby framework, written in Ruby, providing pre/post conditions and cross-cutting concerns to methods using metaprogramming."
technologies: ["Ruby", "Metaprogramming"]
links:
  - label: "framework.rb"
    href: "https://github.com/santiagovarela86/tadp2019/blob/Santiago/ruby/lib/framework.rb"
  - label: "clase_para_test.rb"
    href: "https://github.com/santiagovarela86/tadp2019/blob/Santiago/ruby/lib/clase_para_test.rb"
featured: false
order: 6
draft: false
---

This Ruby framework experiments with design-by-contract concepts and cross-cutting behavior. It uses metaprogramming to attach preconditions and postconditions to methods without placing that validation directly inside the original implementation.

The framework file contains the reusable behavior, while the accompanying test class provides concrete methods against which the contracts can be exercised. The project demonstrates how Ruby’s dynamic features can extend method behavior and express reusable invariants while keeping the underlying classes focused on their primary responsibilities.
