// Skills data
export const skillsData = {
  technicalSkills: [
    { name: 'JavaScript', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'React.js', level: 90 },
    { name: 'Next.js', level: 80 },
    { name: 'Node.js', level: 85 }
  ],
  toolsAndTech: [
    {
      name: 'Languages & Markup',
      skills: ['JavaScript', 'TypeScript', 'HTML/CSS']
    },
    {
      name: 'Frontend',
      skills: ['React.js', 'Next.js']
    },
    {
      name: 'Backend & Frameworks',
      skills: ['Node.js', 'Express.js', 'REST APIs']
    },
    {
      name: 'Databases',
      skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Cassandra']
    },
    {
      name: 'Development & Tools',
      skills: ['Agile', 'CI/CD', 'VS Code', 'Postman', 'Figma', 'Jira']
    },
    {
      name: 'Scripting & Version Control',
      skills: ['Bash', 'PowerShell', 'Git', 'GitHub']
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