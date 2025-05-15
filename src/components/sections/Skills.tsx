import React, { useEffect, useRef, useState } from 'react';
import { Layout, Server, PenTool as Tool, Search } from 'lucide-react';
import { skillsData } from '../../data/portfolioData';

interface SkillsProps {
  setActiveSection: (section: string) => void;
}

const iconMap = {
  Layout: Layout,
  Server: Server,
  Tool: Tool,
};

const Skills: React.FC<SkillsProps> = ({ setActiveSection }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

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

  const getIcon = (iconName: string) => {
    const IconComponent = iconMap[iconName as keyof typeof iconMap];
    return IconComponent ? <IconComponent size={24} /> : null;
  };

  const toggleCategory = (categoryName: string) => {
    setSelectedCategories(prev => 
      prev.includes(categoryName)
        ? prev.filter(c => c !== categoryName)
        : [...prev, categoryName]
    );
  };

  const allSkills = skillsData.categories.flatMap(category => 
    category.items.map(item => ({
      ...item,
      category: category.name
    }))
  );

  const filteredSkills = allSkills.filter(skill => {
    const matchesSearch = skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         skill.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(skill.category);
    return matchesSearch && matchesCategory;
  });

  return (
    <div ref={sectionRef} className="flex flex-col justify-center w-full max-w-6xl mx-auto">
      <div className="space-y-12">
        <div className="fade-in">
          <h2 className="text-3xl md:text-4xl font-bold">Skills & Technologies</h2>
          <div className="w-16 h-1 bg-white mt-4"></div>
          <p className="text-gray-300 mt-6 max-w-2xl">
            My technical expertise spans across various domains of web development,
            from frontend frameworks to backend technologies and development tools.
          </p>
        </div>

        <div className="space-y-8">
          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-900 rounded-lg border border-gray-700 focus:outline-none focus:border-white/40 transition-colors"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {skillsData.categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => toggleCategory(category.name)}
                  className={`px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-2
                    ${selectedCategories.includes(category.name)
                      ? 'bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.3)]'
                      : 'bg-gray-800 text-white hover:bg-gray-700'}`}
                >
                  {getIcon(category.icon)}
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((skill) => (
              <div
                key={skill.name}
                className={`group cursor-pointer transform transition-all duration-500 ${
                  hoveredSkill === skill.name ? 'scale-105' : ''
                }`}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className="relative bg-gray-900 rounded-xl p-6 border border-white/10 overflow-hidden">
                  {/* Animated gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-${skill.color}-500/20 to-${skill.color}-700/20 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Glowing effect */}
                  <div className={`absolute -inset-px bg-gradient-to-r from-${skill.color}-500 to-${skill.color}-700 
                    rounded-xl opacity-0 group-hover:opacity-30 blur transition-all duration-500`} />
                  
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold">{skill.name}</h3>
                      <span className={`text-${skill.color}-400 text-sm font-medium px-2 py-1 rounded-full bg-${skill.color}-500/10`}>
                        {skill.level}
                      </span>
                    </div>
                    
                    <p className="text-gray-400 mb-4">{skill.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {skill.projects} projects completed
                      </span>
                      <div className={`w-2 h-2 rounded-full bg-${skill.color}-400 animate-pulse`} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;