---
title: "Musical Notation Parser"
year: 2019
description: "Combining functional and object-oriented programming paradigms, and using monads."
technologies: ["Scala", "Monadic Parser Combinators"]
links:
  - label: "Parsers.scala"
    href: "https://github.com/santiagovarela86/tadp2019/blob/Santiago/scala/src/main/scala/tp/Parsers.scala"
  - label: "TestParsers.scala"
    href: "https://github.com/santiagovarela86/tadp2019/blob/Santiago/scala/src/test/scala/tp/TestParsers.scala"
featured: false
order: 7
draft: false
---

This Scala project parses musical notation through monadic parser combinators. Small parsers can be composed into larger rules, allowing the notation grammar to be represented directly in code.

The implementation combines functional composition with object-oriented structure rather than treating the two approaches as mutually exclusive. A separate parser test suite exercises the supported inputs and composition rules. The result is an exploration of how monads can manage parsing steps and failures while keeping a nontrivial grammar modular and testable.
