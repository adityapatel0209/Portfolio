// Skills data
export const skillsData = {
  frontend: [
    { 
      name: 'React.js',
      description: 'Component-based UI development'
    },
    { 
      name: 'TypeScript',
      description: 'Type-safe JavaScript development'
    },
    { 
      name: 'Next.js',
      description: 'Server-side React applications'
    },
    { 
      name: 'Tailwind CSS',
      description: 'Utility-first styling'
    },
    { 
      name: 'HTML5',
      description: 'Semantic markup'
    },
    { 
      name: 'CSS3',
      description: 'Modern styling & animations'
    }
  ],
  backend: [
    { 
      name: 'Node.js',
      description: 'Server-side JavaScript runtime'
    },
    { 
      name: 'Express.js',
      description: 'Web application framework'
    },
    { 
      name: 'MongoDB',
      description: 'NoSQL database'
    },
    { 
      name: 'PostgreSQL',
      description: 'Relational database'
    },
    { 
      name: 'REST APIs',
      description: 'API architecture'
    },
    { 
      name: 'GraphQL',
      description: 'Query language for APIs'
    }
  ],
  tools: [
    { name: 'Git', category: 'Version Control' },
    { name: 'Docker', category: 'Containerization' },
    { name: 'AWS', category: 'Cloud Platform' },
    { name: 'Jest', category: 'Testing' },
    { name: 'Webpack', category: 'Build Tool' },
    { name: 'VS Code', category: 'IDE' },
    { name: 'Figma', category: 'Design' },
    { name: 'GitHub', category: 'Collaboration' },
    { name: 'Redux', category: 'State Management' },
    { name: 'Vercel', category: 'Deployment' },
    { name: 'Firebase', category: 'Backend as a Service' },
    { name: 'Postman', category: 'API Testing' }
  ]
};

// Projects data
export const projectsData = [
  {
    id: 1,
    title: 'Task Manager Dashboard',
    description: 'A responsive task management application with drag-and-drop functionality, user authentication, and real-time updates.',
    image: 'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example',
  },
  {
    id: 2,
    title: 'E-commerce Platform',
    description: 'A full-featured online shopping platform with product catalog, shopping cart, user authentication, and payment processing.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
    technologies: ['Next.js', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example',
  },
  {
    id: 3,
    title: 'Weather Forecast App',
    description: 'A weather application that shows current conditions and 5-day forecast with interactive charts and location-based data.',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg',
    technologies: ['React', 'TypeScript', 'OpenWeather API', 'Chart.js'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example',
  },
  {
    id: 4,
    title: 'Social Media Dashboard',
    description: 'A comprehensive dashboard for managing social media accounts, scheduling posts, and analyzing engagement metrics.',
    image: 'https://images.pexels.com/photos/920382/pexels-photo-920382.jpeg',
    technologies: ['React', 'Redux', 'Express.js', 'Social APIs'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example',
  },
  {
    id: 5,
    title: 'Recipe Finder App',
    description: 'A recipe application that allows users to search for recipes by ingredients, save favorites, and create shopping lists.',
    image: 'https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg',
    technologies: ['React Native', 'Firebase', 'Spoonacular API'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example',
  },
  {
    id: 6,
    title: 'Fitness Tracker',
    description: 'A workout tracking application with exercise logging, progress charts, and personalized workout recommendations.',
    image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg',
    technologies: ['React', 'TypeScript', 'MongoDB', 'D3.js'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example',
  },
];

// Education data
export const educationData = {
  formal: [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Technology',
      description: 'Specialized in Software Engineering with a focus on web technologies and databases.',
      period: '2019 - 2023',
    },
  ],
  certifications: [
    {
      title: 'Full Stack Web Development',
      issuer: 'Udemy',
      date: 'June 2023',
    },
    {
      title: 'React - The Complete Guide',
      issuer: 'Academind',
      date: 'March 2023',
    },
    {
      title: 'JavaScript Algorithms and Data Structures',
      issuer: 'freeCodeCamp',
      date: 'January 2023',
    },
    {
      title: 'MongoDB for Developers',
      issuer: 'MongoDB University',
      date: 'November 2022',
    },
  ],
};