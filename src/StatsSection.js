import { useState, useEffect } from 'react';

export default function StatsSection() {
  const [counters, setCounters] = useState({ projects: 0, languages: 0, years: 0 });
  const [isVisible, setIsVisible] = useState(false);

  const stats = [
    { label: 'Projects Completed', value: 15, icon: '💼' },
    { label: 'Programming Languages', value: 4, icon: '💻' },
    { label: 'Experience (Months)', value: 18, icon: '⏱️' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    });
    const element = document.getElementById('stats-section');
    if (element) observer.observe(element);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const intervals = [];
    stats.forEach((stat, idx) => {
      const increment = stat.value / 50;
      let current = 0;
      intervals.push(
        setInterval(() => {
          current += increment;
          if (current >= stat.value) current = stat.value;
          setCounters(prev => ({
            ...prev,
            [idx]: Math.floor(current)
          }));
        }, 20)
      );
    });

    return () => intervals.forEach(interval => clearInterval(interval));
  }, [isVisible]);

  return (
    <section id='stats-section' className='mt-16 mb-16 py-12'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className='bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl p-8 text-white shadow-lg hover:shadow-2xl transition-all transform hover:scale-105'
          >
            <div className='text-5xl mb-4'>{stat.icon}</div>
            <div className='text-4xl font-bold mb-2'>{Object.values(counters)[idx] || 0}</div>
            <p className='text-lg opacity-90'>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
