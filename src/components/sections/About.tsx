import React, { useEffect, useRef } from 'react';
import hackathonImage from '../../data/hackathon.jpg';

interface AboutProps {
  setActiveSection: (section: string) => void;
}

const About: React.FC<AboutProps> = ({ setActiveSection }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection('about');
        }
      },
      { threshold: 0.5 }
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          <div className="w-16 h-1 bg-white"></div>
          <p className="text-gray-300 text-lg">
            I'm a passionate full stack developer with a keen interest in building 
            robust web applications that solve real-world problems.
          </p>
          <p className="text-gray-400">
            With a strong foundation in both front-end and back-end technologies,
            I strive to create seamless, intuitive user experiences powered by 
            clean, efficient code. My journey in web development started during 
            my university days and has evolved into a career that I'm truly passionate about.
          </p>
          <p className="text-gray-400">
            When I'm not coding, you can find me exploring new technologies,
            contributing to open-source projects, or enjoying outdoor activities.
          </p>
          
          <div className="flex flex-wrap gap-4 mt-6">
            <div className="bg-gray-800 px-4 py-2 rounded-full text-sm">Problem Solver</div>
            <div className="bg-gray-800 px-4 py-2 rounded-full text-sm">Clean Code Advocate</div>
            <div className="bg-gray-800 px-4 py-2 rounded-full text-sm">UI/UX Enthusiast</div>
            <div className="bg-gray-800 px-4 py-2 rounded-full text-sm">Continuous Learner</div>
          </div>
        </div>
        
        <div className="relative h-80 md:h-[500px] w-full rounded-lg overflow-hidden slide-in-right">
          <div></div>
          <img 
            src={hackathonImage} 
            alt="Aditya Patel" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
            <p className="text-2xl font-semibold">Aditya Patel</p>
            <p className="text-gray-300">Full Stack Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;