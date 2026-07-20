export const personalInfo = {
  name: 'Muhammad Meer',
  title: 'Full Stack Developer',
  titles: ['Full Stack Developer', 'Frontend Engineer', 'React Specialist', 'MERN Stack Developer'],
  email: 'contactmeali7@gmail.com',
  phone: '03292378355',
  location: 'Karachi pakistan',
  resumeUrl: '#',
  social: {
    github: 'https://github.com/Muhammad-Meer',
    linkedin: 'https://www.linkedin.com/in/muhammad-meer/',

  },
  aboutParagraphs: [
    'With over a decade of experience crafting digital experiences, I specialize in building products that feel like magic. From fintech dashboards to AI-powered platforms, I\'ve shipped code that powers millions of interactions.',
    'My philosophy is simple: great software is a blend of clean architecture, obsessive attention to detail, and deep empathy for the people using it. I don\'t just write code — I craft solutions that scale, perform, and delight.',
  ],
  stats: [
    { label: 'Projects Completed', value: 35, suffix: '+' },
    { label: 'Technologies', value: 12, suffix: '+' },
    { label: 'Happy Clients', value: 18, suffix: '+' },
    { label: 'Coffee Consumed', value: 250, suffix: '+' },
  ],
};

export const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

export const skillsData = {
  frontend: {
    title: 'Frontend',
    icon: 'SiReact',
    skills: [
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 90 },
      { name: 'TypeScript', level: 92 },
      { name: 'JavaScript', level: 95 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Framer Motion', level: 85 },
    ],
  },
  backend: {
    title: 'Backend',
    icon: 'SiNodedotjs',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Express', level: 88 },
      { name: 'Python', level: 80 },
      { name: 'GraphQL', level: 75 },
      { name: 'REST APIs', level: 92 },
      { name: 'Socket.io', level: 78 },
    ],
  },
  database: {
    title: 'Database',
    icon: 'SiMongodb',
    skills: [
      { name: 'MongoDB', level: 88 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'MySQL', level: 82 },
      { name: 'Redis', level: 75 },
      { name: 'Firebase', level: 80 },
    ],
  },
  devops: {
    title: 'DevOps',
    icon: 'SiDocker',
    skills: [
      { name: 'Docker', level: 78 },
      { name: 'AWS', level: 75 },
      { name: 'CI/CD', level: 80 },
      { name: 'Vercel', level: 90 },
      { name: 'Netlify', level: 88 },
    ],
  },
};

export const techStack = [
  { name: 'React', icon: 'SiReact', color: '#61DAFB' },
  { name: 'Next.js', icon: 'SiNextdotjs', color: '#FFFFFF' },
  { name: 'Node.js', icon: 'SiNodedotjs', color: '#339933' },
  { name: 'Express', icon: 'SiExpress', color: '#FFFFFF' },
  { name: 'MongoDB', icon: 'SiMongodb', color: '#47A248' },
  { name: 'PostgreSQL', icon: 'SiPostgresql', color: '#4169E1' },
  { name: 'MySQL', icon: 'SiMysql', color: '#4479A1' },
  { name: 'JavaScript', icon: 'SiJavascript', color: '#F7DF1E' },
  { name: 'TypeScript', icon: 'SiTypescript', color: '#3178C6' },
  { name: 'Tailwind', icon: 'SiTailwindcss', color: '#06B6D4' },
  { name: 'Bootstrap', icon: 'SiBootstrap', color: '#7952B3' },
  { name: 'Redux', icon: 'SiRedux', color: '#764ABC' },
  { name: 'Git', icon: 'SiGit', color: '#F05032' },
  { name: 'Docker', icon: 'SiDocker', color: '#2496ED' },
  { name: 'Firebase', icon: 'SiFirebase', color: '#FFCA28' },
  { name: 'GraphQL', icon: 'SiGraphql', color: '#E10098' },
];

export const projectsData = [
  {
    id: 1,
    title: 'Food Delivery App',
    description: 'A full-stack food delivery platform with real-time tracking, AI-powered recommendations, and seamless payment integration serving 50K+ monthly orders.',
    tech: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Stripe', 'Redis'],
    github: '#',
    live: '#',
    image: null,
  },
  {
    id: 2,
    title: 'Hospital Management System',
    description: 'Enterprise-grade hospital management solution featuring patient records, appointment scheduling, EHR integration, and real-time analytics dashboard.',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Docker', 'AWS'],
    github: '#',
    live: '#',
    image: null,
  },
  {
    id: 3,
    title: 'School ERP Platform',
    description: 'Comprehensive school management platform with attendance tracking, grade management, parent portal, and automated reporting for 10K+ students.',
    tech: ['React', 'Express', 'MySQL', 'Tailwind', 'Redux', 'JWT'],
    github: '#',
    live: '#',
    image: null,
  },
  {
    id: 4,
    title: 'Admin Dashboard Pro',
    description: 'Feature-rich admin dashboard with real-time data visualization, user management, role-based access control, and customizable widgets for enterprise clients.',
    tech: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Chart.js', 'WebSocket'],
    github: '#',
    live: '#',
    image: null,
  },
  {
    id: 5,
    title: 'Finance Dashboard',
    description: 'SaaS finance management platform with real-time portfolio tracking, AI-driven insights, automated reporting, and multi-currency support for 1000+ businesses.',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind', 'D3.js', 'AWS'],
    github: '#',
    live: '#',
    image: null,
  },
  {
    id: 6,
    title: 'E-Commerce Platform',
    description: 'High-performance e-commerce solution with AI product recommendations, real-time inventory management, multi-vendor support, and 99.9% uptime.',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'Redis', 'Stripe', 'Docker'],
    github: '#',
    live: '#',
    image: null,
  },
  {
    id: 7,
    title: 'Real-Time Chat App',
    description: 'Scalable real-time messaging platform with end-to-end encryption, file sharing, video calls, group chats, and offline support for 100K+ concurrent users.',
    tech: ['React', 'Socket.io', 'Node.js', 'MongoDB', 'WebRTC', 'Redis'],
    github: '#',
    live: '#',
    image: null,
  },
  {
    id: 8,
    title: 'AI SaaS Dashboard',
    description: 'AI-powered analytics dashboard with machine learning predictions, automated insights generation, custom model training, and enterprise-grade security.',
    tech: ['Next.js', 'Python', 'TensorFlow', 'PostgreSQL', 'Docker', 'AWS'],
    github: '#',
    live: '#',
    image: null,
  },
];

export const experienceData = [
  {
    id: 1,
    role: 'Senior Frontend Engineer',
    company: 'Tech Corp',
    period: '2023 - Present',
    achievements: [
      'Architected and shipped a real-time analytics dashboard serving 500K+ users with 99.9% uptime',
      'Led migration from legacy codebase to Next.js 14, improving performance by 40% and reducing bundle size by 60%',
      'Mentored 5 junior engineers and established frontend best practices across 4 product teams',
    ],
  },
  {
    id: 2,
    role: 'Full Stack Developer',
    company: 'StartupXYZ',
    period: '2021 - 2023',
    achievements: [
      'Built and launched 3 SaaS products from zero to production, generating $2M+ in ARR',
      'Designed and implemented microservices architecture handling 1M+ daily API requests',
      'Reduced infrastructure costs by 45% through optimization and migration to serverless architecture',
    ],
  },
  {
    id: 3,
    role: 'React Developer',
    company: 'Digital Agency',
    period: '2019 - 2021',
    achievements: [
      'Delivered 15+ client projects on time and under budget, maintaining 98% client satisfaction rate',
      'Built reusable component library used across 20+ projects, reducing development time by 35%',
      'Implemented CI/CD pipelines and automated testing, achieving 95% code coverage',
    ],
  },
  {
    id: 4,
    role: 'Junior Developer',
    company: 'Web Solutions',
    period: '2017 - 2019',
    achievements: [
      'Developed responsive web applications for 30+ clients using React and Node.js',
      'Optimized website performance achieving 95+ Lighthouse scores across all projects',
      'Introduced modern development workflows including Git, code reviews, and Agile methodologies',
    ],
  },
];

export const servicesData = [
  {
    id: 1,
    title: 'Frontend Development',
    description: 'Pixel-perfect, responsive interfaces with smooth animations and premium user experiences using React, Next.js, and modern CSS.',
    icon: 'SiReact',
  },
  {
    id: 2,
    title: 'Full Stack Development',
    description: 'End-to-end product development from database design to deployment, with scalable APIs and robust backend architectures.',
    icon: 'SiNodedotjs',
  },
  {
    id: 3,
    title: 'Landing Pages',
    description: 'High-converting landing pages with premium design, optimized performance, and seamless user experiences that drive results.',
    icon: 'SiNextdotjs',
  },
  {
    id: 4,
    title: 'Admin Dashboards',
    description: 'Feature-rich admin panels with real-time data, complex tables, charts, and intuitive interfaces for data management.',
    icon: 'SiMongodb',
  },
  {
    id: 5,
    title: 'API Integration',
    description: 'Seamless third-party API integration with robust error handling, caching strategies, and optimal data flow patterns.',
    icon: 'SiExpress',
  },
  {
    id: 6,
    title: 'Performance Optimization',
    description: 'Lighthouse score optimization, bundle size reduction, code splitting, and Core Web Vitals improvement for blazing-fast apps.',
    icon: 'SiReact',
  },
  {
    id: 7,
    title: 'Bug Fixing & Debugging',
    description: 'Thorough debugging, root cause analysis, and clean fixes for complex production issues across the full stack.',
    icon: 'SiDocker',
  },
  {
    id: 8,
    title: 'Responsive Design',
    description: 'Mobile-first responsive designs that look perfect on every device, from 320px phones to 4K desktop displays.',
    icon: 'SiTailwindcss',
  },
];

export const testimonialsData = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'CTO, FinTechStartup',
    content: 'Working with John was transformative for our product. He didn\'t just build features — he improved our entire architecture. The dashboard he built handles millions of requests daily with zero issues.',
    avatar: null,
  },
  {
    id: 2,
    name: 'Marcus Johnson',
    role: 'CEO, DigitalAgency',
    content: 'John is the best developer I\'ve worked with in 15 years. His attention to detail, code quality, and ability to ship fast is unmatched. Our clients consistently praise the work he delivers.',
    avatar: null,
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Product Lead, SaaS Co',
    content: 'The platform John built for us reduced our time-to-market by 60%. He thinks like an architect, builds like a craftsman, and delivers like a true professional. Absolute pleasure to work with.',
    avatar: null,
  },
  {
    id: 4,
    name: 'David Park',
    role: 'Founder, AI Labs',
    content: 'John\'s expertise in both frontend and backend is rare. He architected our entire AI SaaS platform from scratch, and it scales beautifully. Our investors were blown away by the demo.',
    avatar: null,
  },
];

export const certificatesData = [
  {
    id: 1,
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    year: '2024',
    link: '#',
  },
  {
    id: 2,
    title: 'Meta Front-End Developer',
    issuer: 'Meta (Coursera)',
    year: '2023',
    link: '#',
  },
  {
    id: 3,
    title: 'Google Advanced Web Development',
    issuer: 'Google',
    year: '2023',
    link: '#',
  },
  {
    id: 4,
    title: 'MongoDB Certified Developer',
    issuer: 'MongoDB University',
    year: '2022',
    link: '#',
  },
];

export const blogData = [
  {
    id: 1,
    title: 'Building Scalable React Apps',
    excerpt: 'Architecture patterns, state management strategies, and performance optimization techniques for production React applications serving millions of users.',
    date: 'Dec 15, 2024',
    readTime: '8 min read',
    link: '#',
    tags: ['React', 'Architecture'],
  },
  {
    id: 2,
    title: 'The Art of Clean Code',
    excerpt: 'How writing clean, maintainable code accelerates development velocity and reduces technical debt. Lessons learned from shipping production code for 10+ years.',
    date: 'Nov 28, 2024',
    readTime: '6 min read',
    link: '#',
    tags: ['Best Practices', 'Clean Code'],
  },
  {
    id: 3,
    title: 'Mastering Next.js 14',
    excerpt: 'Deep dive into the latest Next.js features including server components, streaming, and partial prerendering for building blazing-fast web applications.',
    date: 'Nov 10, 2024',
    readTime: '10 min read',
    link: '#',
    tags: ['Next.js', 'React'],
  },
];

export const serviceOptions = [
  'Frontend Development',
  'Full Stack Development',
  'Landing Pages',
  'Admin Dashboards',
  'API Integration',
  'Performance Optimization',
  'Bug Fixing',
  'Responsive Design',
  'Other',
];

export const budgetOptions = [
  'Under $300',
  '$500 - $1000',
  '$5,000 - $10,000',
  '$10,000 - $25,000',
  '$25,000+',
];
