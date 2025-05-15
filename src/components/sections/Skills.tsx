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

  return (
    <div ref={sectionRef} className="flex flex-col justify-center w-full max-w-6xl mx-auto">
      <div className="space-y-12">
        <div className="fade-in">
          <h2 className="text-3xl md:text-4xl font-bold">Skills & Technologies</h2>
          <div className="w-16 h-1 bg-white mt-4"></div>
          <p className="text-gray-300 mt-6 max-w-2xl">
            I've worked with a variety of technologies in the web development world.
            From front-end to back-end, here's my technical expertise:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8 slide-in-left">
            <h3 className="text-xl font-semibold">Frontend Development</h3>
            <div className="grid grid-cols-2 gap-4">
              {skillsData.frontend.map((skill, index) => (
                <div 
                  key={skill.name}
                  className="bg-gray-900 p-4 rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <div className="text-lg font-medium">{skill.name}</div>
                  <div className="text-sm text-gray-400 mt-1">{skill.description}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-8 slide-in-right">
            <h3 className="text-xl font-semibold">Backend Development</h3>
            <div className="grid grid-cols-2 gap-4">
              {skillsData.backend.map((skill, index) => (
                <div 
                  key={skill.name}
                  className="bg-gray-900 p-4 rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <div className="text-lg font-medium">{skill.name}</div>
                  <div className="text-sm text-gray-400 mt-1">{skill.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="space-y-6 fade-in">
          <h3 className="text-xl font-semibold">Tools & Platforms</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {skillsData.tools.map((tool, index) => (
              <div 
                key={tool.name}
                className="bg-gray-900 p-4 rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1 text-center"
                style={{ animationDelay: `${0.05 * index}s` }}
              >
                <div className="text-lg font-medium">{tool.name}</div>
                <div className="text-sm text-gray-400 mt-1">{tool.category}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;