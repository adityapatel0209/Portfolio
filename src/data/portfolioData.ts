// Skills data
export const skillsData = {
  categories: [
    {
      name: 'Frontend',
      icon: 'Layout',
      items: [
        {
          name: 'React.js',
          description: 'Component-based UI development with modern hooks and context API',
          level: 'Advanced',
          color: 'blue',
          projects: 5
        },
        {
          name: 'TypeScript',
          description: 'Type-safe JavaScript development for robust applications',
          level: 'Intermediate',
          color: 'indigo',
          projects: 4
        },
        {
          name: 'Next.js',
          description: 'Server-side React applications with optimized performance',
          level: 'Intermediate',
          color: 'purple',
          projects: 3
        },
        {
          name: 'HTML/CSS',
          description: 'Semantic markup and modern styling with responsive design',
          level: 'Advanced',
          color: 'orange',
          projects: 6
        },
        {
          name: 'JavaScript',
          description: 'Modern ES6+ development with async programming',
          level: 'Advanced',
          color: 'yellow',
          projects: 7
        }
      ]
    },
    {
      name: 'Backend',
      icon: 'Server',
      items: [
        {
          name: 'Node.js',
          description: 'Server-side JavaScript runtime for scalable applications',
          level: 'Intermediate',
          color: 'green',
          projects: 4
        },
        {
          name: 'Express.js',
          description: 'Web application framework for building RESTful APIs',
          level: 'Intermediate',
          color: 'teal',
          projects: 3
        },
        {
          name: 'MongoDB',
          description: 'NoSQL database for flexible data storage',
          level: 'Intermediate',
          color: 'emerald',
          projects: 3
        },
        {
          name: 'MySQL',
          description: 'Relational database management system',
          level: 'Intermediate',
          color: 'cyan',
          projects: 2
        },
        {
          name: 'Cassandra',
          description: 'Distributed database for high scalability',
          level: 'Basic',
          color: 'sky',
          projects: 1
        }
      ]
    },
    {
      name: 'Tools',
      icon: 'Tool',
      items: [
        {
          name: 'Git/GitHub',
          description: 'Version control and collaboration platform',
          level: 'Advanced',
          color: 'gray',
          projects: 8
        },
        {
          name: 'Agile',
          description: 'Development methodology for efficient project management',
          level: 'Intermediate',
          color: 'slate',
          projects: 4
        },
        {
          name: 'VS Code',
          description: 'Integrated development environment',
          level: 'Advanced',
          color: 'zinc',
          projects: 8
        },
        {
          name: 'Mongoose',
          description: 'MongoDB object modeling tool',
          level: 'Intermediate',
          color: 'stone',
          projects: 3
        },
        {
          name: 'CI/CD',
          description: 'Continuous Integration and Deployment practices',
          level: 'Intermediate',
          color: 'neutral',
          projects: 3
        }
      ]
    }
  ]
};

// Projects data
export const projectsData = [
  {
    id: 1,
    title: 'Belong - Inclusive Communities Platform',
    description: 'First place winning project at the Inclusive Communities Hackathon. A full-stack web platform designed to support socially isolated individuals, featuring an AI chatbot and dynamic content management.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg', // Community/connection themed image
    technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'SQL'],
    liveUrl: 'https://github.com/adityapatel0209/Belong',
    githubUrl: 'https://github.com/adityapatel0209/Belong',
  },
  {
    id: 2,
    title: 'Companion Bot',
    description: 'AI-powered conversational agent built with React.js and Gemini API, achieving 30% higher user engagement through emotionally intelligent responses.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg', // AI/chatbot themed image
    technologies: ['React.js', 'JavaScript', 'Gemini API'],
    liveUrl: 'https://github.com/adityapatel0209/Companion_Bot',
    githubUrl: 'https://github.com/adityapatel0209/Companion_Bot',
  },
  {
    id: 3,
    title: 'Guhuza Quiz App',
    description: 'API-driven quiz platform with leaderboard and authentication system, featuring responsive design and real-time score tracking.',
    image: 'https://images.pexels.com/photos/5905708/pexels-photo-5905708.jpeg', // Quiz/education themed image
    technologies: ['React.js', 'JavaScript', 'SQLite', 'Guhuza API'],
    liveUrl: 'https://github.com/adityapatel0209/guhuza',
    githubUrl: 'https://github.com/adityapatel0209/guhuza',
  }
];

// Education data
export const educationData = {
  formal: [
    {
      degree: 'Diploma in Computer Programming',
      institution: 'Niagara College',
      description: 'President\'s Honour Roll – Fall 2023, Cumulative GPA: 80 (82)',
      period: 'September 2023 - March 2025',
      courses: [
        'Software Development (98)',
        'Web Authoring Fundamentals (99)',
        'Database Essentials (92)',
        'The Art of Script Programming (89)',
        'Network Security (90)',
        'Project Planning & Design'
      ],
      achievements: [
        'First Place Winner - Inclusive Communities Hackathon',
        'President\'s Honour Roll – Fall 2023',
        'Cumulative GPA: 80 (82)'
      ]
    },
  ],
  certifications: [
    {
      title: 'Diploma in Computer Programming',
      issuer: 'Niagara College',
      date: 'March 2025',
      achievements: [
        'President\'s Honour Roll – Fall 2023',
        'Cumulative GPA: 80 (82)',
        'First Place Winner - Inclusive Communities Hackathon'
      ]
    }
  ],
};