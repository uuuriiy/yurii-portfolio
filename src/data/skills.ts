export type SkillGroup = {
  title: string
  items: string[]
}

export const skills: SkillGroup[] = [
  {
    title: 'Frontend',
    items: [
      'TypeScript',
      'JavaScript',
      'React',
      'Next.js',
      'Angular',
      'Gatsby',
      'Vite',
      'Tailwind CSS',
      'Material UI',
      'Chakra UI',
      'Emotion',
      'SCSS',
      'Framer Motion',
    ],
  },
  {
    title: 'State & Data',
    items: ['Redux Toolkit', 'Zustand', 'TanStack Query', 'Context API', 'GraphQL', 'REST', 'WebSockets'],
  },
  {
    title: 'Mobile',
    items: ['React Native', 'Expo', 'Capacitor', 'iOS / App Store', 'Android / Google Play', 'Push notifications'],
  },
  {
    title: 'Backend & Data',
    items: ['Node.js', 'NestJS', 'Express', '.NET Core', 'PostgreSQL', 'MongoDB', 'Prisma', 'Supabase', 'Firebase'],
  },
  {
    title: 'Auth & Payments',
    items: ['NextAuth.js', 'Supabase Auth', 'Row-Level Security', 'Stripe'],
  },
  {
    title: 'Web3',
    items: ['Solana Wallet Adapter', 'Solana Web3', 'Ethers.js', 'WalletConnect'],
  },
  {
    title: 'CMS & Commerce',
    items: ['Contentful', 'Contentstack', 'Sanity', 'Shopify', 'Liquid'],
  },
  {
    title: 'Testing & Tooling',
    items: [
      'Jest',
      'Vitest',
      'Storybook',
      'Chromatic',
      'Nx Monorepo',
      'GitHub Actions',
      'Vercel',
      'Cursor',
      'Claude Code',
      'GitHub Copilot',
    ],
  },
]
