import resumePdf from '../assets/CV_JulioVillalvazo_2026.pdf?url'

export type BrandItem = {
  id: string
  name: string
  website: string
  experienceId: string
}

export type ExperienceItem = {
  id: string
  company: string
  website: string
  dateRange: string
  context: string
  roleSummary: string
  highlights: string[]
  stack: string[]
  visualLabels: string[]
}

export const brandRows: BrandItem[][] = [
  [
    {
      id: 'amazon-audible',
      name: 'Amazon Audible',
      website: 'https://www.audible.com',
      experienceId: 'experience-amazon-audible',
    },
    {
      id: 'visa',
      name: 'Visa / TCS',
      website: 'https://www.visa.com',
      experienceId: 'experience-visa-tcs',
    },
    {
      id: 'google-alphabet',
      name: 'Google - Alphabet / TCS',
      website: 'https://about.google',
      experienceId: 'experience-google-alphabet',
    },
    {
      id: 'usaa',
      name: 'USAA / TCS',
      website: 'https://www.usaa.com',
      experienceId: 'experience-usaa',
    },
  ],
  [
    {
      id: 'imagine-learning',
      name: 'Imagine Learning',
      website: 'https://www.imaginelearning.com',
      experienceId: 'experience-imagine-learning',
    },
    {
      id: 'encora',
      name: 'Encora',
      website: 'https://www.encora.com',
      experienceId: 'experience-imagine-learning',
    },
    {
      id: 'cyberpuerta',
      name: 'Cyberpuerta',
      website: 'https://www.cyberpuerta.mx',
      experienceId: 'experience-cyberpuerta',
    },
    {
      id: 'tcs',
      name: 'Tata Consultancy Services',
      website: 'https://www.tcs.com',
      experienceId: 'experience-visa-tcs',
    },
  ],
]

export const experiences: ExperienceItem[] = [
  {
    id: 'experience-amazon-audible',
    company: 'Amazon Audible',
    website: 'https://www.audible.com',
    dateRange: 'June 2025 - Present',
    context: 'Current work · Audiobooks, AI validation, moderation, synchronization',
    roleSummary:
      'Built audio-centered platforms, AI-powered validation workflows, and moderation systems for audiobook publishing and synchronization.',
    highlights: [
      'Designed AI-based pre-ingestion validation and moderation workflows for audiobook cover art.',
      'Improved a transcript synchronization interface with narrated-word tracking, hotkeys, and configurable timing data.',
      'Introduced prompt versioning, auditability, and Bedrock prompt caching to improve governance and efficiency.',
    ],
    stack: [
      'Java',
      'Spring Framework',
      'React',
      'TypeScript',
      'AWS',
      'DynamoDB',
      'S3',
      'Bedrock',
      'Playwright',
      'Vitest',
    ],
    visualLabels: ['Audio sync', 'Moderation', 'Prompt trace'],
  },
  {
    id: 'experience-visa-tcs',
    company: 'Visa / TCS',
    website: 'https://www.visa.com/en-us',
    dateRange: 'April 2026 - Present',
    context: 'Current work · Fraud detection, distributed systems, secure deployment',
    roleSummary:
      'Contributed to fraud detection systems built on Java microservices, event-driven workflows, secure deployment configuration, and cloud infrastructure.',
    highlights: [
      'Worked on Kafka-connected services supporting event-driven fraud detection processing.',
      'Managed Kubernetes and secure runtime configuration across development and production environments.',
      'Supported distributed microservices with Cassandra configuration and GCP deployment workflows.',
    ],
    stack: ['Java', 'Kafka', 'Kubernetes', 'Cassandra', 'GCP', 'Microservices'],
    visualLabels: ['Fraud signals', 'Kafka flow', 'Secure config'],
  },
  {
    id: 'experience-google-alphabet',
    company: 'Google / Alphabet',
    website: 'https://about.google',
    dateRange: 'April 2024 - September 2024',
    context: 'Cloud platform work · API management and policy-driven delivery',
    roleSummary:
      'Worked on API management and deployment workflows in a high-scale cloud environment using ApigeeX and secure policy-driven design.',
    highlights: [
      'Implemented and optimized API management workflows around ApigeeX.',
      'Configured traffic management and policy layers for scalable API delivery.',
      'Contributed to secure deployment tooling and proxy lifecycle automation.',
    ],
    stack: ['ApigeeX', 'GCP', 'API Management', 'Security', 'Automation'],
    visualLabels: ['Gateway policy', 'Traffic control', 'Proxy lifecycle'],
  },
  {
    id: 'experience-usaa',
    company: 'USAA',
    website: 'https://www.usaa.com',
    dateRange: 'September 2024 - December 2025',
    context: 'Enterprise platform work · Internal modernization and delivery',
    roleSummary:
      'Built internal platform features with Java and React, contributing to modernization work through maintainable full-stack architecture.',
    highlights: [
      'Developed backend services with Java and Spring Boot.',
      'Implemented frontend features with React and modern UI libraries.',
      'Supported maintainability and testing improvements across the platform.',
    ],
    stack: ['Java', 'Spring Boot', 'React', 'Testing'],
    visualLabels: ['Service modules', 'Modernization', 'Testing'],
  },
  {
    id: 'experience-imagine-learning',
    company: 'Imagine Learning / Encora',
    website: 'https://www.imaginelearning.com',
    dateRange: 'May 2024 - Present',
    context: 'Education platform work · UI systems and backend modernization',
    roleSummary:
      'Delivered platform improvements, reusable UI systems, and backend modernization work across React, TypeScript, Kotlin, and Micronaut.',
    highlights: [
      'Supported migration work from .NET services to Kotlin and Micronaut.',
      'Built reusable component-driven frontend features aligned with UX standards.',
      'Maintained and optimized product-facing experiences with tested UI patterns.',
    ],
    stack: ['React', 'TypeScript', 'Kotlin', 'Micronaut', 'Storybook'],
    visualLabels: ['Design system', 'Migration', 'Reusable UI'],
  },
  {
    id: 'experience-cyberpuerta',
    company: 'Cyberpuerta',
    website: 'https://www.cyberpuerta.mx',
    dateRange: 'March 2023 - April 2024',
    context: 'Mobile product work · Performance, onboarding, UI delivery',
    roleSummary:
      'Built mobile onboarding and UI systems with performance-focused React Native architecture and component-scale delivery.',
    highlights: [
      'Implemented onboarding flows and API integrations for app setup.',
      'Improved app performance using profiling and targeted React Native optimizations.',
      'Delivered high-volume component work with testing and visual consistency in mind.',
    ],
    stack: ['React Native', 'TypeScript', 'React Query', 'Jest', 'Chromatic'],
    visualLabels: ['Mobile onboarding', 'Performance', 'Component scale'],
  },
]

export const projects = [
  {
    id: 'portfolio-system',
    title: 'Portfolio System',
    description:
      'This site itself — built with React, TypeScript, Vite, and designed for scroll-driven animation architecture, performance, and premium interaction patterns.',
    stack: ['React', 'TypeScript', 'Vite', 'GSAP', 'React Three Fiber', 'GitHub Pages'],
  },
  {
    id: 'ai-workflow-patterns',
    title: 'AI Workflow Patterns',
    description:
      'Public notes covering prompt versioning, prompt caching, validation flows, and AI governance patterns drawn from production experience.',
    stack: ['AI Workflows', 'Prompt Engineering', 'Governance', 'AWS Bedrock'],
  },
  {
    id: 'system-design-notes',
    title: 'System Design Notes',
    description:
      'Short architecture breakdowns covering event-driven systems, cloud deployment, testing strategy, and frontend architecture.',
    stack: ['Distributed Systems', 'Testing', 'Cloud', 'CI/CD'],
  },
]

export const stackGroups = [
  {
    title: 'Interface Engineering',
    description: 'Building responsive, maintainable product interfaces with typed component architecture.',
    items: ['React', 'TypeScript', 'Zustand', 'Tailwind CSS', 'Material UI', 'React Native'],
  },
  {
    title: 'Backend Systems',
    description: 'Designing services, APIs, and distributed workflows across enterprise environments.',
    items: ['Java', 'Spring Boot', 'Kotlin', 'Micronaut', 'REST APIs', 'Kafka'],
  },
  {
    title: 'Cloud + Data',
    description: 'Working across cloud infrastructure, storage, messaging, and deployment configuration.',
    items: ['AWS', 'GCP', 'DynamoDB', 'S3', 'Cassandra', 'Kubernetes', 'Docker'],
  },
  {
    title: 'Quality + Delivery',
    description: 'Validating changes through automated testing, visual regression, and deployment pipelines.',
    items: ['Vitest', 'Playwright', 'Storybook', 'Selenium', 'CI/CD', 'Jest'],
  },
]

export const aboutCards = [
  {
    title: 'Engineering range',
    description:
      'Started from Mechatronics Engineering, moved through frontend systems, backend services, cloud platforms, and distributed infrastructure. Currently working on audio systems, AI validation, fraud detection, and secure cloud workflows.',
  },
  {
    title: 'Security mindset',
    description:
      `Studying a Master's in Cybersecurity while building production systems. Security, governance, and compliance inform how I approach validation, deployment, and system design.`,
  },
  {
    title: 'Discipline outside work',
    description:
      'Fitness, focus, and long-term growth matter as much as technical craft. This portfolio reflects both engineering precision and personal discipline.',
  },
]

export const contactLinks = [
  {
    id: 'schedule',
    title: 'Schedule a Call',
    description: 'Start a conversation about engineering roles, collaboration, or technical work.',
    href: 'mailto:juliovillalvazo26@gmail.com',
    external: false,
  },
  {
    id: 'email',
    title: 'Email',
    description: 'Reach me directly for opportunities or project discussions.',
    href: 'mailto:juliovillalvazo26@gmail.com',
    external: false,
  },
  {
    id: 'github',
    title: 'GitHub',
    description: 'Explore public code, experiments, and technical work.',
    href: 'https://github.com/juliovillalvazo',
    external: true,
  },
  {
    id: 'linkedin',
    title: 'LinkedIn',
    description: 'View my professional profile and experience timeline.',
    href: 'https://www.linkedin.com/in/juliovillalvazo',
    external: true,
  },
  {
    id: 'resume',
    title: 'Resume',
    description: 'Download the latest version of my resume.',
    href: resumePdf,
    external: false,
  },
]
