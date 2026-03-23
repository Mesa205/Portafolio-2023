import { useState, useEffect } from 'react';

export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);

  const skills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Java', level: 75 },
    { name: 'Spring Boot', level: 75 },
    { name: 'MongoDB', level: 80 },
    { name: 'MySQL', level: 85 },
    { name: 'Express', level: 80 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    });
    const element = document.getElementById('skills-section');
    if (element) observer.observe(element);
  }, []);

  return (
    <section id='skills-section' className='mt-16 mb-16'>
      <h2 className='text-3xl md:text-4xl font-bold text-black mb-12 text-center'>Technical Skills</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {skills.map((skill, idx) => (
          <div key={idx} className='bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow'>
            <div className='flex justify-between mb-2'>
              <span className='font-semibold text-gray-800'>{skill.name}</span>
              <span className='text-teal-500 font-bold'>{skill.level}%</span>
            </div>
            <div className='w-full bg-gray-300 rounded-full h-3 overflow-hidden'>
              <div
                className='bg-gradient-to-r from-teal-400 to-teal-600 h-full transition-all duration-1000 ease-out'
                style={{ width: isVisible ? `${skill.level}%` : '0%' }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
