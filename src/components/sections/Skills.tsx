import React, { useEffect, useRef } from 'react';
import { skillsData } from '../../data/portfolioData';

interface SkillsProps {
  setActiveSection: (section: string) => void;
}

const Skills: React.FC<SkillsProps> = ({ setActiveSection }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection('skills');
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [setActiveSection]);

  const getSkillIcon = (skillName: string): string | undefined => {
    const icons: { [key: string]: string } = {
      'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      'HTML/CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      'React.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
      'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      'Express.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg',
      'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      'Cassandra': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cassandra/cassandra-original.svg',
      'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      'GitHub': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
      'Bash': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg',
      'PowerShell': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/powershell/powershell-original.svg',
      'Agile': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg',
      'CI/CD': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
      'VS Code': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
      'Postman': 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg',
      'Figma': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
      'Jira': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg',
      'REST APIs': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
    };
    return icons[skillName];
  };

  return (
    <div ref={sectionRef} className="flex flex-col justify-center w-full max-w-6xl mx-auto px-2 md:px-6">
      <div className="space-y-16">
        <div className="fade-in">
          <h2 className="text-3xl md:text-4xl font-bold">Skills</h2>
          <div className="w-16 h-1 bg-white mt-4"></div>
          <p className="text-gray-300 mt-6 max-w-2xl">
            My technical expertise across various domains of web development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.toolsAndTech.map((category) => (
            <div 
              key={category.name}
              className="border border-white/10 rounded-xl p-6 hover:border-white/20 
                transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.1)]"
            >
              <h3 className="text-xl font-semibold text-white mb-4">{category.name}</h3>
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, index) => (
                  <div
                    key={skill}
                    className="group relative bg-gray-900/50 backdrop-blur-sm rounded-xl p-3
                      border border-white/10 overflow-hidden transition-all duration-300
                      hover:bg-gray-800/80
                      hover:shadow-[0_0_40px_rgba(255,255,255,0.1)]
                      transform hover:scale-[1.02]"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="relative z-10 flex items-center gap-2">
                      {getSkillIcon(skill) && (
                        <img 
                          src={getSkillIcon(skill) || ''} 
                          alt={`${skill} icon`} 
                          className={`w-5 h-5 ${
                            skill === 'Express' || skill === 'GitHub' 
                              ? 'brightness-0 invert' 
                              : ''
                          }`}
                        />
                      )}
                      <h3 className="text-sm font-medium group-hover:text-white transition-colors">
                        {skill}
                      </h3>
                    </div>
                    <div className="absolute inset-0 rounded-xl border border-white/0 group-hover:border-white/20 
                      transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;