// Bootcamp courses configuration

export const bootcamps = [
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    duration: '16 Weeks',
    schedule: 'Full-time',
    price: 12999,
    monthlyPrice: 1083,
    description: 'Master the fundamentals of artificial intelligence, machine learning algorithms, deep learning, and neural networks. Build real-world AI applications and deploy them to production.',
    icon: {
      svg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>`,
      gradient: 'from-blue-500 to-cyan-500'
    },
    curriculum: [
      'Python programming and data science libraries',
      'Machine learning algorithms and frameworks',
      'Deep learning with TensorFlow and PyTorch',
      'Computer vision and natural language processing',
      'MLOps and model deployment'
    ],
    buttonColor: 'bg-blue-600 hover:bg-blue-700',
    borderColor: 'hover:border-blue-500',
    textColor: 'text-blue-400'
  },
  {
    id: 'fullstack',
    title: 'Full-Stack Development',
    duration: '14 Weeks',
    schedule: 'Full-time',
    price: 10999,
    monthlyPrice: 916,
    description: 'Learn to build complete web applications from front-end to back-end. Master modern frameworks, databases, and deployment strategies used by top tech companies.',
    icon: {
      svg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>`,
      gradient: 'from-purple-500 to-pink-500'
    },
    curriculum: [
      'HTML, CSS, JavaScript fundamentals',
      'React, Vue.js, and modern frontend frameworks',
      'Node.js, Express.js, and backend development',
      'Database design and management (SQL & NoSQL)',
      'Cloud deployment and DevOps basics'
    ],
    buttonColor: 'bg-purple-600 hover:bg-purple-700',
    borderColor: 'hover:border-purple-500',
    textColor: 'text-purple-400'
  },
  {
    id: 'data-science',
    title: 'Data Science & Analytics',
    duration: '12 Weeks',
    schedule: 'Full-time',
    price: 9999,
    monthlyPrice: 833,
    description: 'Transform raw data into actionable insights. Learn statistical analysis, data visualization, and predictive modeling to drive business decisions.',
    icon: {
      svg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>`,
      gradient: 'from-green-500 to-teal-500'
    },
    curriculum: [
      'Python and R for data analysis',
      'Statistical analysis and hypothesis testing',
      'Data visualization with Tableau and Power BI',
      'SQL and database querying',
      'Predictive modeling and machine learning'
    ],
    buttonColor: 'bg-green-600 hover:bg-green-700',
    borderColor: 'hover:border-green-500',
    textColor: 'text-green-400'
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    duration: '18 Weeks',
    schedule: 'Full-time',
    price: 13999,
    monthlyPrice: 1166,
    description: 'Protect digital assets and infrastructure from cyber threats. Learn ethical hacking, security analysis, and incident response to become a cybersecurity professional.',
    icon: {
      svg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>`,
      gradient: 'from-red-500 to-orange-500'
    },
    curriculum: [
      'Network security and protocols',
      'Ethical hacking and penetration testing',
      'Incident response and forensics',
      'Risk assessment and compliance',
      'Security tools and technologies'
    ],
    buttonColor: 'bg-red-600 hover:bg-red-700',
    borderColor: 'hover:border-red-500',
    textColor: 'text-red-400'
  }
];

// Success stories configuration
export const successStories = [
  {
    name: 'Subash Shrestha',
    initials: 'SM',
    position: 'AI Engineer at Google',
    bootcamp: 'AI & Machine Learning Bootcamp',
    testimonial: 'The AI bootcamp completely changed my career trajectory. I went from working in retail to landing a dream job at Google in just 6 months after graduation.',
    gradient: 'from-blue-500 to-cyan-500',
    textColor: 'text-blue-400'
  },
  {
    name: 'Aarati Thapa',
    initials: 'MJ',
    position: 'Full-Stack Developer at E-Sewa',
    bootcamp: 'Full-Stack Development Bootcamp',
    testimonial: 'The hands-on approach and real-world projects prepared me perfectly for the industry. I got multiple job offers before even graduating!',
    gradient: 'from-purple-500 to-pink-500',
    textColor: 'text-purple-400'
  },
  {
    name: 'Aman Ghimire',
    initials: 'AL',
    position: 'Data Scientist at Daraz',
    bootcamp: 'Data Science & Analytics Bootcamp',
    testimonial: 'The data science program gave me the skills and confidence to transition from finance to tech. The career support was incredible!',
    gradient: 'from-green-500 to-teal-500',
    textColor: 'text-green-400'
  }
];

// Why choose us features
export const features = [
  {
    title: 'Industry Experts',
    description: 'Learn from professionals with years of experience at top tech companies and startups.',
    icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>`,
    gradient: 'from-blue-500 to-cyan-500',
    borderColor: 'hover:border-blue-500'
  },
  {
    title: 'Hands-on Projects',
    description: 'Build a portfolio of real-world projects that demonstrate your skills to potential employers.',
    icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>`,
    gradient: 'from-green-500 to-teal-500',
    borderColor: 'hover:border-green-500'
  },
  {
    title: 'Career Support',
    description: 'Get personalized career coaching, resume reviews, and interview preparation to land your dream job.',
    icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>`,
    gradient: 'from-purple-500 to-pink-500',
    borderColor: 'hover:border-purple-500'
  },
  {
    title: 'Job Guarantee',
    description: 'We\'re so confident in our program that we offer a job guarantee or your money back.',
    icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>`,
    gradient: 'from-orange-500 to-red-500',
    borderColor: 'hover:border-orange-500'
  }
];

// FAQ configuration
export const faqs = [
  {
    question: 'Do I need prior experience to join a bootcamp?',
    answer: 'No prior experience is required for most of our bootcamps. We welcome complete beginners and provide foundational training to get everyone up to speed. However, some programs may have recommended prerequisites which will be clearly stated.'
  },
  {
    question: 'What kind of job support do you provide?',
    answer: 'We offer comprehensive career services including resume reviews, interview preparation, portfolio development, networking opportunities, and direct connections with our hiring partners. Our career coaches work with you throughout the program and for 6 months after graduation.'
  },
  {
    question: 'Are there financing options available?',
    answer: 'Yes! We offer several financing options including income share agreements (ISA), monthly payment plans, and partnerships with lending institutions. We also accept GI Bill benefits for eligible veterans.'
  },
  {
    question: 'What is the time commitment for bootcamps?',
    answer: 'Our full-time bootcamps require 40-50 hours per week including class time, labs, and homework. We also offer part-time evening and weekend options for working professionals, which typically require 20-25 hours per week over a longer duration.'
  },
  {
    question: 'Can I attend remotely?',
    answer: 'Yes! All our bootcamps are available both in-person and remotely. Our online learning platform provides the same interactive experience with live instruction, group projects, and peer collaboration.'
  }
];