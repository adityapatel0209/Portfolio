import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { projectsData } from '../../data/portfolioData';

interface ProjectsProps {
  setActiveSection: (section: string) => void;
}

const Projects: React.FC<ProjectsProps> = ({ setActiveSection }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

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
    <div ref={sectionRef} className="flex flex-col justify-center w-full max-w-6xl mx-auto px-2 md:px-6">
      <div className="space-y-16">
        <div className="fade-in">
          <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
          <div className="w-16 h-1 bg-white mt-4"></div>
          <p className="text-gray-300 mt-6 max-w-2xl">
            Here are some of my notable projects that showcase my skills and approach to problem-solving.
          </p>
        </div>
        
        <div className="space-y-24">
          {projectsData.slice(0, 3).map((project, index) => (
            <div 
              key={project.id}
              className="group relative bg-gray-900/50 backdrop-blur-sm rounded-xl p-6
                border border-white/10 overflow-hidden transition-all duration-300
                hover:shadow-[0_0_40px_rgba(255,255,255,0.1)]
                transform hover:scale-[1.02]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row gap-8">
                {/* Project Image */}
                <div className="w-full md:w-1/2 aspect-video relative overflow-hidden rounded-xl">
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/50 to-transparent z-10"></div>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 
                      group-hover:scale-110 group-hover:rotate-1"
                  />
                </div>

                {/* Project Details */}
                <div className="w-full md:w-1/2 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                      <span 
                        key={tech} 
                        className="px-3 py-1 bg-white/5 rounded-full text-sm
                          border border-white/10 group-hover:border-white/20
                          transition-all duration-300
                          group-hover:translate-y-[-2px]
                          group-hover:shadow-[0_4px_12px_rgba(255,255,255,0.1)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4">
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg
                        transform transition-all duration-300
                        hover:translate-y-[-2px] hover:shadow-[0_4px_12px_rgba(255,255,255,0.3)]"
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </a>
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border border-white/20 rounded-lg
                        transform transition-all duration-300
                        hover:bg-white/10 hover:border-white/40
                        hover:translate-y-[-2px] hover:shadow-[0_4px_12px_rgba(255,255,255,0.1)]"
                    >
                      <Github size={18} />
                      <span>View Code</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-xl border border-white/0 group-hover:border-white/20 
                transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]" />
            </div>
          ))}
        </div>

        <div className="text-center fade-in">
          <a 
            href="https://github.com/adityapatel0209" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 text-white rounded-lg
              border border-white/10 hover:border-white/20
              transform transition-all duration-300
              hover:translate-y-[-2px]
              hover:shadow-[0_4px_12px_rgba(255,255,255,0.1)]"
          >
            <Github size={20} />
            More Projects on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;