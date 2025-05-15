import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  setActiveSection: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ setActiveSection }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection('hero');
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

  const scrollToNextSection = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div ref={sectionRef} className="flex flex-col justify-center w-full max-w-6xl mx-auto h-screen">
      <div className="space-y-6">
        <div className="slide-in-left">
          <h2 className="text-xl md:text-2xl font-light text-gray-400">Hello, I'm</h2>
        </div>
        <div className="slide-in-left" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
            Aditya Patel
          </h1>
        </div>
        <div className="slide-in-left" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-300">
            Full Stack Developer
          </h3>
        </div>
        <div className="slide-in-left" style={{ animationDelay: '0.6s' }}>
          <p className="text-gray-400 max-w-2xl mt-4 text-lg">
            I build modern web applications with a focus on clean code,
            performance, and intuitive user experiences.
          </p>
        </div>
        <div className="slide-in-left flex space-x-4" style={{ animationDelay: '0.8s' }}>
          <button className="px-6 py-3 mt-4 bg-white text-black font-medium rounded hover:bg-gray-200 transition-colors duration-300">
            View My Work
          </button>
          <button className="px-6 py-3 mt-4 border border-white text-white font-medium rounded hover:bg-white hover:bg-opacity-10 transition-colors duration-300">
            Contact Me
          </button>
        </div>
      </div>

      <button 
        onClick={scrollToNextSection} 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-label="Scroll to next section"
      >
        <ChevronDown className="text-white" size={32} />
      </button>
    </div>
  );
};

export default Hero;