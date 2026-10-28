export const categories = ['SaaS', 'HealthTech', 'Web3', 'E-commerce', 'Mobile', 'CMS'] as const

export type Category = (typeof categories)[number]

export type Project = {
  title: string
  company: string
  categories: Category[]
  stack: string[]
  highlights: string[]
  featured?: boolean
}

export const projects: Project[] = [
  {
    title: 'Multi-Tenant Restaurant CRM & SaaS',
    company: 'Berko.tech',
    categories: ['SaaS'],
    stack: ['React 19', 'Vite', '.NET Core', 'TanStack Query', 'Zustand', 'Tailwind CSS'],
    highlights: [
      'Architected and developed a multi-tenant CRM platform serving 12 restaurant businesses.',
      'Built operational analytics, data filtering and business management features, with AI agents supporting day-to-day workflows.',
    ],
    featured: true,
  },
  {
    title: 'Enterprise HealthTech Platform & PDF Engine',
    company: 'Berko.tech',
    categories: ['HealthTech', 'SaaS'],
    stack: ['Angular', 'Next.js', 'NestJS', 'Node.js', 'Nx', 'Redux'],
    highlights: [
      'Developed full-stack healthcare modules within an Nx monorepo.',
      'Built a custom PDF rendering engine that generates medical reports with pixel-perfect layouts.',
    ],
    featured: true,
  },
  {
    title: 'Web3 Solana Gaming Suite',
    company: 'Berko.tech',
    categories: ['Web3'],
    stack: ['Next.js', 'Solana Wallet Adapter', 'Zustand', 'Tailwind CSS', 'WebSockets'],
    highlights: [
      'Developed interactive crypto mini-games with real-time state synchronization over WebSockets.',
      'Implemented frontend state management and wallet integration for Solana-based apps.',
    ],
  },
  {
    title: 'Fitness & Activity Tracking App',
    company: 'Berko.tech',
    categories: ['Mobile', 'HealthTech'],
    stack: ['React Native', 'Expo', 'TypeScript', 'Context API', 'REST APIs'],
    highlights: [
      'Developed and published cross-platform apps to the App Store and Google Play.',
      'Implemented activity tracking, push notifications and offline data caching.',
    ],
    featured: true,
  },
  {
    title: 'Web & Hybrid Mobile Ecosystem',
    company: 'Berko.tech',
    categories: ['Mobile', 'SaaS'],
    stack: ['Next.js', 'Capacitor', 'Supabase', 'Tailwind CSS'],
    highlights: [
      'Built one unified codebase shipping to the web and native iOS / Android.',
      'Integrated Supabase authentication and Row Level Security for secure data access.',
    ],
  },
  {
    title: 'Modern Healthcare & Clinic Website',
    company: 'Freelance',
    categories: ['HealthTech', 'CMS'],
    stack: ['Next.js', 'Sanity CMS', 'Tailwind CSS', 'Resend', 'Vercel'],
    highlights: [
      'Developed a high-performance clinic website with structured, editor-managed content in Sanity.',
      'Automated appointment-related email delivery with the Resend API.',
    ],
  },
  {
    title: 'Online Digital Library Platform',
    company: 'Freelance',
    categories: ['SaaS', 'CMS'],
    stack: ['Next.js', 'Material UI', 'Contentful', 'Context API', 'Stripe'],
    highlights: [
      'Developed a digital library with authentication, content management and subscriptions.',
      'Integrated Stripe subscriptions and automated deployments with GitHub Actions.',
    ],
  },
  {
    title: 'Web3 Gambling & Casino Interface',
    company: 'Freelance',
    categories: ['Web3'],
    stack: ['Next.js', 'Solana', 'Web3.js', 'WalletConnect', 'Material UI', 'Framer Motion'],
    highlights: [
      'Built interactive gaming interfaces with Solana wallet connectivity and multi-wallet flows.',
      'Implemented responsive UI components and animations for engaging gameplay.',
    ],
  },
  {
    title: 'Custom E-Commerce Merch Store',
    company: 'Freelance',
    categories: ['E-commerce'],
    stack: ['Shopify', 'Liquid', 'HTML', 'SCSS', 'JavaScript'],
    highlights: [
      'Customized a Shopify storefront with Liquid templates and custom theme sections.',
      'Developed responsive UI and tailored e-commerce functionality to client requirements.',
    ],
  },
  {
    title: 'Web3 Interactive Quiz & Rewards App',
    company: 'Freelance',
    categories: ['Web3'],
    stack: ['React 19', 'Vite', 'Ethers.js', 'Solana Web3', 'WalletConnect', 'Framer Motion'],
    highlights: [
      'Developed a multi-chain dApp supporting both EVM-compatible and Solana wallets.',
      'Implemented interactive quiz flows with smart-contract-based reward integrations.',
    ],
  },
  {
    title: 'Volunteer Platform for Ukraine',
    company: 'Grid Dynamics',
    categories: ['CMS'],
    stack: ['Next.js 13', 'Material UI', 'Contentful'],
    highlights: [
      'Developed responsive public-facing pages for dynamic news and donation content.',
      'Integrated Contentful CMS for structured content management and updates.',
    ],
  },
  {
    title: 'Enterprise CMS Content Architecture',
    company: 'Grid Dynamics',
    categories: ['CMS'],
    stack: ['Contentstack', 'Content Modeling', 'JSON Schemas'],
    highlights: [
      'Designed and maintained structured content models, asset taxonomies and CMS workflows.',
      'Established reusable content structures used consistently across enterprise apps.',
    ],
  },
  {
    title: 'Interior Design & Floor Plan Editor',
    company: 'Grid Dynamics',
    categories: ['SaaS'],
    stack: ['React', 'GraphQL', 'Redux', 'React Hook Form', 'Material UI', 'Jest'],
    highlights: [
      'Developed interactive drag-and-drop floor-plan editing features.',
      'Maintained legacy JavaScript tools and contributed to frontend testing and reliability.',
    ],
  },
  {
    title: 'US Retail E-Commerce Modernization',
    company: 'Grid Dynamics',
    categories: ['E-commerce', 'CMS'],
    stack: ['Gatsby', 'Contentstack', 'Redux', 'Storybook', 'Chromatic', 'Nx'],
    highlights: [
      'Modernized a large US retail storefront within an Nx monorepo.',
      'Built isolated UI components in Storybook with Chromatic visual regression testing.',
      'Mentored junior developers to keep code quality and consistency high.',
    ],
    featured: true,
  },
]
