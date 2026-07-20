---
title: "RSA Key Pair Generator (Proof of Concept)"
year: 2015
description: "A cryptographic RSA key pair generator with a message encryption/decryption system."
technologies: ["C#", "Math"]
links:
  - label: "Program.cs"
    href: "https://github.com/santiagovarela86/rsadiscreta/blob/master/RSA%20Discreta/Program.cs"
featured: false
order: 13
draft: false
---

This C# proof of concept implements the mathematical steps behind RSA key-pair generation. It also includes a small message workflow that uses the generated keys for encryption and decryption.

The project focuses on understanding the algorithm rather than wrapping an existing cryptography service. The linked program brings the number-theory operations and message transformation into one inspectable implementation. It serves as a compact demonstration of how asymmetric keys are created and how the public and private portions participate in opposite sides of the encryption process.
