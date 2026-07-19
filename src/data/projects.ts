export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  title: string;
  year: number;
  tech: string[];
  description: string;
  links: ProjectLink[];
}

// Verbatim from the original "About me" WordPress page, restructured for cards.
// Newest first.
export const projects: Project[] = [
  {
    title: 'DevOps Playground',
    year: 2021,
    tech: ['Git', 'CircleCI', 'AWS', 'Azure', 'Kubernetes', 'Docker', 'AKS', 'Terraform', 'S3', 'Lambda', 'SQS', 'DynamoDB', 'API Gateway'],
    description:
      "Repos to play with the entire DevOps stack to automate software building, infrastructure as code deployment, version control and all the fun stuff!",
    links: [
      { label: 'circleci', href: 'https://github.com/santiagovarela86/circleci' },
      { label: 'awsdevops', href: 'https://github.com/santiagovarela86/awsdevops' },
    ],
  },
  {
    title: 'Coronavirus COVID 19 Tracking Tool',
    year: 2020,
    tech: ['Spring Boot', 'Java 14', 'React', 'Telegram Bot', 'Lombok', 'Docker', 'Azure App Service', 'Azure DevOps CI/CD', 'JWT', 'MySQL', 'SQL Server', 'REST'],
    description:
      "Create a user in the platform, compare COVID stats between countries, plot the information for graphical comparison, or retrieve updated information via the Telegram mobile app. Tag countries with different lockdown strategies and draw conclusions from the stats.",
    links: [
      { label: 'docker-compose.yml', href: 'https://gitlab.com/santiagovarela.86/integracion-covid-19/-/blob/master/docker-compose.yml' },
      { label: 'covid-api', href: 'https://gitlab.com/santiagovarela.86/integracion-covid-19/-/tree/master/covid-api' },
      { label: 'covid-frontend', href: 'https://gitlab.com/santiagovarela.86/integracion-covid-19/-/blob/master/covid-frontend/src/App.js' },
      { label: 'covid-telegram-api', href: 'https://gitlab.com/santiagovarela.86/integracion-covid-19/-/tree/master/covid-telegram-api' },
    ],
  },
  {
    title: 'Neural Network to Categorize 4 Pokémon Types',
    year: 2020,
    tech: ['Python', 'TensorFlow', 'Machine Learning'],
    description: 'A neural network trained to classify Pokémon into four types.',
    links: [
      { label: 'train.py', href: 'https://github.com/santiagovarela86/UTN-IA-TP/blob/branch_santiago/train.py' },
      { label: 'predict.py', href: 'https://github.com/santiagovarela86/UTN-IA-TP/blob/branch_santiago/predict.py' },
      { label: 'Results analysis (Spanish)', href: 'https://docs.google.com/document/d/1spRzB6aJxMAahgmBDb0x73OOpO4qk4T_RZCXx7Z9O8k/edit?usp=sharing' },
    ],
  },
  {
    title: 'Distributed Messaging System',
    year: 2020,
    tech: ['Elixir', 'GenServer', 'Swarm', 'Distributed Systems', 'Docker'],
    description:
      'Highly reliable messaging system with chat, group chat, and secure chat functionality, with state replication between nodes for fault tolerance and dynamic routing between clients and servers.',
    links: [
      { label: 'server_supervisor.ex', href: 'https://github.com/santiagovarela86/iasc-grupo-3/blob/master/Server/lib/server_supervisor.ex' },
      { label: 'cliente.ex', href: 'https://github.com/santiagovarela86/iasc-grupo-3/blob/master/Cliente/lib/cliente/cliente.ex' },
      { label: 'router.ex', href: 'https://github.com/santiagovarela86/iasc-grupo-3/blob/master/Router/lib/router/router.ex' },
    ],
  },
  {
    title: 'Invariants Framework (Cross-Cutting Concerns)',
    year: 2019,
    tech: ['Ruby', 'Metaprogramming'],
    description:
      "A Ruby framework, written in Ruby, providing pre/post conditions and cross-cutting concerns to methods using metaprogramming.",
    links: [
      { label: 'framework.rb', href: 'https://github.com/santiagovarela86/tadp2019/blob/Santiago/ruby/lib/framework.rb' },
      { label: 'clase_para_test.rb', href: 'https://github.com/santiagovarela86/tadp2019/blob/Santiago/ruby/lib/clase_para_test.rb' },
    ],
  },
  {
    title: 'Musical Notation Parser',
    year: 2019,
    tech: ['Scala', 'Monadic Parser Combinators'],
    description: 'Combining functional and object-oriented programming paradigms, and using monads.',
    links: [
      { label: 'Parsers.scala', href: 'https://github.com/santiagovarela86/tadp2019/blob/Santiago/scala/src/main/scala/tp/Parsers.scala' },
      { label: 'TestParsers.scala', href: 'https://github.com/santiagovarela86/tadp2019/blob/Santiago/scala/src/test/scala/tp/TestParsers.scala' },
    ],
  },
  {
    title: 'Underwater-Themed Video Game Demo',
    year: 2019,
    tech: ['C#', 'Graphics Engine', 'HLSL', 'BulletSharp'],
    description: 'A video game demo built with a custom graphics engine, HLSL shaders, and the BulletSharp physics engine.',
    links: [
      { label: 'Escenario.cs', href: 'https://github.com/santiagovarela86/2019_1C_3051_LosTiburones/blob/master/TGC.Group/Model/Escenario.cs' },
      { label: 'Demo video', href: 'https://www.youtube.com/watch?v=tZ6wZKII9CY&feature=youtu.be' },
    ],
  },
  {
    title: 'VMware VM Deployment Automation',
    year: 2019,
    tech: ['ASP.NET MVC', 'C#', 'JavaScript', 'Razor', 'PowerShell'],
    description:
      "A web form to deploy virtual machines into different environments (geographical locations, virtualization clusters, domains), saving lots of manual work. Built for a previous role (code not shareable).",
    links: [],
  },
  {
    title: 'Discrete Simulation of a Software Development Team',
    year: 2018,
    tech: ['C#', 'Statistics'],
    description:
      'Simulates the arrival of easy, medium, and hard tickets solved by Jr., SSr., and Sr. developers according to probability distributions, then calculates the performance of different team configurations.',
    links: [
      { label: 'clDatosVar.cs', href: 'https://github.com/santiagovarela86/utn.simulacion.tp6/blob/master/Simulacion_TP6/clDatosVar.cs' },
      { label: 'clSimu.cs', href: 'https://github.com/santiagovarela86/utn.simulacion.tp6/blob/master/Simulacion_TP6/clSimu.cs' },
      { label: 'Paper (Spanish)', href: 'https://drive.google.com/file/d/1sNVkKaCVLK74qJMZduDaDyl9Yvldm_l0/view?usp=sharing' },
    ],
  },
  {
    title: 'Hotel Management System',
    year: 2018,
    tech: ['C#', 'SQL'],
    description: 'Includes a database migration from a legacy system.',
    links: [
      { label: 'ER diagram', href: 'https://github.com/santiagovarela86/TP1C2018-K3114-LOS_BORBOTONES-GRUPO35/blob/master/DER/DER%20TP%20GDD.png' },
      { label: 'script_creacion_inicial.sql', href: 'https://github.com/santiagovarela86/TP1C2018-K3114-LOS_BORBOTONES-GRUPO35/blob/master/ScriptCreacionInicial/script_creacion_inicial.sql' },
    ],
  },
  {
    title: 'Stock Market Analysis Tool',
    year: 2017,
    tech: ['Velocity', 'Google API', 'Jackson', 'Java', 'MySQL', 'Hibernate', 'Spark', 'Heroku', 'Memcache', 'Quartz', 'MongoDB', 'Maven'],
    description:
      'Focused on software design and architectural decisions, code smells, design patterns, and working with constantly changing requirements — migrating a desktop app to a web app, and then to the cloud.',
    links: [
      { label: 'Router.java', href: 'https://github.com/santiagovarela86/2017disenosistemas/blob/master/src/main/java/dds/tp/Spark/Router.java' },
    ],
  },
  {
    title: 'Operating System Simulation',
    year: 2017,
    tech: ['C', 'Linux', 'TCP Sockets'],
    description:
      "Five processes (CPU, RAM, DISK, CONSOLE, KERNEL) each running on a different computer, communicating over a custom TCP/IP protocol and running scripts in a custom C-like language. One of the hardest projects due to sync issues, race conditions, and time pressure.",
    links: [
      { label: 'kernel.c', href: 'https://github.com/santiagovarela86/2017utnso/blob/master/Kernel/kernel.c' },
      { label: 'memoria.c', href: 'https://github.com/santiagovarela86/2017utnso/blob/master/Memoria/memoria.c' },
      { label: 'cpu.c', href: 'https://github.com/santiagovarela86/2017utnso/blob/master/CPU/cpu.c' },
      { label: 'consola.c', href: 'https://github.com/santiagovarela86/2017utnso/blob/master/Consola/consola.c' },
      { label: 'filesystem.c', href: 'https://github.com/santiagovarela86/2017utnso/blob/master/FileSystem/filesystem.c' },
    ],
  },
  {
    title: 'RSA Key Pair Generator (Proof of Concept)',
    year: 2015,
    tech: ['C#', 'Math'],
    description: 'A cryptographic RSA key pair generator with a message encryption/decryption system.',
    links: [
      { label: 'Program.cs', href: 'https://github.com/santiagovarela86/rsadiscreta/blob/master/RSA%20Discreta/Program.cs' },
    ],
  },
];
