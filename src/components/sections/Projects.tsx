import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { projectsData } from '../../data/portfolioData';

interface ProjectsProps {
  setActiveSection: (section: string) => void;
}

const Projects: React.FC<ProjectsProps> = ({ setActiveSection }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection('projects');
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

  return (
    <div ref={sectionRef} className="flex flex-col justify-center w-full max-w-6xl mx-auto">
      <div className="space-y-12">
        <div className="fade-in">
          <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
          <div className="w-16 h-1 bg-white mt-4"></div>
          <p className="text-gray-300 mt-6 max-w-2xl">
            Here are some of the projects I've worked on. Each project reflects my 
            approach to problem-solving and my technical skills.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <div 
              key={project.id}
              className="group relative h-80 bg-gray-900 rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 slide-up"
              style={{ animationDelay: `${0.15 * index}s` }}
              onMouseEnter={() => setSelectedProject(index)}
              onMouseLeave={() => setSelectedProject(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70 z-10"></div>
              <img 
                src={project.image} 
                alt={project.title} 
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform transition-transform duration-300">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map(tech => (
                    <span key={tech} className="bg-black bg-opacity-50 text-xs px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-white hover:text-gray-300">
                    <ExternalLink size={16} className="mr-1" /> Live
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-white hover:text-gray-300">
                    <Github size={16} className="mr-1" /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center fade-in">
          <a 
            href="https://github.com/alexchen" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-white text-white font-medium rounded hover:bg-white hover:bg-opacity-10 transition-colors duration-300"
          >
            <Github size={18} className="mr-2" /> 
            More Projects on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;