export interface Service {
  id: string
  title: string
  description: string
  icon: string
  technologies: string[]
  features: string[]
  rating: number
  price?: string
  popular?: boolean
}

export const services: Service[] = [
  {
    id: 'backend-development',
    title: 'Backend Development',
    description:
      'Powerful server-side solutions with modern architecture and database integration.',
    icon: '⚙️',
    technologies: ['Node.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker'],
    features: [
      'RESTful & GraphQL APIs',
      'Database Design & Optimization',
      'Authentication & Authorization',
      'Real-time Data Processing',
      'Security & Performance',
    ],
    rating: 5,
    popular: true,
  },
  {
    id: 'web-development',
    title: 'Full-Stack Web Development',
    description:
      'Modern web applications with cutting-edge technologies and seamless user experiences.',
    icon: '🌐',
    technologies: ['React', 'Next.js', 'TypeScript', 'Chakra UI', 'Vercel'],
    features: [
      'Cutting-Edge Frontend Frameworks',
      'Progressive Web Apps (PWA)',
      'Responsive & Accessible Design',
      'State Management & Optimization',
      'SEO & Performance Tuning',
    ],
    rating: 5,
  },
  {
    id: 'mobile-development',
    title: 'Mobile App Development',
    description:
      'Cross-platform mobile applications with native performance and modern UI/UX.',
    icon: '📱',
    technologies: [
      'React Native',
      'Expo',
      'TypeScript',
      'Firebase',
      'App Store',
    ],
    features: [
      'React Native Development',
      'iOS & Android Compatibility',
      'Native Module Integration',
      'Push Notifications & Analytics',
      'App Store Deployment',
    ],
    rating: 4,
    popular: true,
  },
  {
    id: 'api-integration',
    title: 'API Integration & Services',
    description:
      'Seamless system integration with third-party services and microservices architecture.',
    icon: '🔗',
    technologies: ['REST API', 'GraphQL', 'Webhooks', 'OAuth', 'Postman'],
    features: [
      'Third-party API Integration',
      'Microservices Architecture',
      'Data Synchronization & Migration',
      'Webhook Implementation',
      'Rate Limiting & Error Handling',
    ],
    rating: 4,
  },
]

export const getServiceById = (id: string): Service | undefined => {
  return services.find((service) => service.id === id)
}

export const getFeaturedServices = (): Service[] => {
  return services.filter((service) => service.popular)
}
