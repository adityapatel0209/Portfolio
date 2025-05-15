import React, { useState, useEffect } from 'react';
import { ChevronRight, Code, User, Brain, BookOpen, GraduationCap, Mail } from 'lucide-react';

interface SidebarProps {
  activeSection: string;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const menuItems = [
    { id: 'hero', label: 'Home', icon: <ChevronRight size={20} /> },
    { id: 'about', label: 'About', icon: <User size={20} /> },
    { id: 'skills', label: 'Skills', icon: <Brain size={20} /> },
    { id: 'projects', label: 'Projects', icon: <Code size={20} /> },
    { id: 'education', label: 'Education', icon: <GraduationCap size={20} /> },
    { id: 'contact', label: 'Contact', icon: <Mail size={20} /> },
  ];

  const handleClick = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Intersection Observer to update active section based on scrolling
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.7,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          document.querySelectorAll('.nav-item').forEach((item) => {
            item.classList.remove('active');
          });
          document.querySelector(`.nav-item[data-id="${id}"]`)?.classList.add('active');
        }
      });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('.section').forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <nav 
      className="fixed top-0 left-0 h-full bg-black z-50 flex flex-col items-center py-6 border-r border-gray-800"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ width: isHovered ? '160px' : '56px', transition: 'width 0.3s ease' }}
    >
      <div className="w-8 h-8 bg-white rounded-full mb-8 flex items-center justify-center">
        <Code size={16} className="text-black" />
      </div>
      
      <div className="flex flex-col items-start space-y-8 w-full">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleClick(item.id)}
            className={`nav-item group flex items-center w-full pl-4 pr-2 py-2 transition-all duration-300 ${
              activeSection === item.id ? 'text-white' : 'text-gray-500 hover:text-white'
            }`}
            data-id={item.id}
          >
            <div className={`flex items-center justify-center ${
              activeSection === item.id ? 'text-white' : 'text-gray-500 group-hover:text-white'
            }`}>
              {item.icon}
            </div>
            <span 
              className={`ml-3 whitespace-nowrap transition-opacity duration-300 ${
                isHovered ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {item.label}
            </span>
            {activeSection === item.id && (
              <div className="absolute right-0 w-1 h-8 bg-white rounded-l-full" />
            )}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Sidebar;