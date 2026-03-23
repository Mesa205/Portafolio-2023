import './App.css';
import Navbar from './Navbar'
import SkillsSection from './SkillsSection'
import StatsSection from './StatsSection'
import TimelineSection from './TimelineSection'
import ProjectCard from './ProjectCard'
import { useState } from 'react';
import { AiFillLinkedin, AiFillGithub, AiFillInstagram, AiFillMail, AiFillEnvironment } from 'react-icons/ai'

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const softwareProjects = [
    {
      title: 'YouTube Clone',
      description: 'A functional clone of YouTube with video upload capabilities and dynamic interface. Features video management, responsive layout, and performance optimization.',
      image: '/toutibe.png',
      link: 'https://incomparable-cajeta-5c66af.netlify.app/',
      technologies: ['JavaScript', 'Vite', 'HTML/CSS']
    },
    {
      title: 'Public IP Information',
      description: 'Tool to identify and display public IP address details. Useful for tracking email origins and network diagnostics.',
      image: '/ip.png',
      link: 'https://api-ip.vercel.app/',
      technologies: ['React', 'API', 'Vercel']
    },
    {
      title: 'Quick Notes',
      description: 'Create and organize quick notes with importance categorization. Features persistent storage and intuitive UI.',
      image: '/notas.png',
      link: 'https://redu-prueba.netlify.app/#',
      technologies: ['React', 'Vite', 'JavaScript']
    },
    {
      title: 'My Portfolio',
      description: 'Personal portfolio showcasing software development and legal achievements, demonstrating the intersection of tech and law.',
      image: '/PORTAFOLIO.png',
      link: '#home',
      technologies: ['React', 'JavaScript', 'Tailwind']
    }
  ];

  const legalProjects = [
    {
      title: 'Traffic Ticket Prescription',
      subtitle: 'Girardota, Antioquia',
      description: 'Successfully managed a traffic fine declaration as time-barred through legal petition based on Article 159 of Law 769 of 2002. Result: debt removal from local and national traffic database (SIMIT).',
      image: '/Girardota.png',
      link: 'https://www.linkedin.com/posts/sebastian-mesa-555283219_derecho-traernsito-prescripciaejn-activity-7302394554584899584-HMl_?utm_source=share&utm_medium=member_desktop'
    },
    {
      title: 'Traffic Ticket Prescription',
      subtitle: 'Barbosa, Antioquia',
      description: 'Obtained favorable outcome in coercive collection process. Petition resulted in debt officially declared as prescribed and eliminated from records and SIMIT.',
      image: '/Barbosa.png',
      link: 'https://www.linkedin.com/posts/sebastian-mesa-555283219_derecho-traernsito-prescripciaejn-activity-7302394554584899584-HMl_?utm_source=share&utm_medium=member_desktop'
    }
  ];

  const certifications = [
    {
      title: 'Software Development',
      institution: 'Universidad Pontificia Bolivariana',
      date: 'Jul 2023',
      image: 'xx.png',
      link: 'https://drive.google.com/file/d/1TNkdd1enIgVc4iRPzUFYqPRZu45OEaeM/view?usp=drive_link'
    },
    {
      title: 'International Congress on Law, Technology and Innovation',
      institution: 'Universidad Pontificia Bolivariana',
      date: 'Mar 2023',
      image: 'dd.png',
      link: 'https://drive.google.com/file/d/1_4f7-zS5gQ8sgh7J8wzej5rTOtQYYHgQ/view?usp=sharing'
    }
  ];

  return (
    <main className='px-4 sm:px-8 md:px-20 lg:px-40'>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      {/* Hero Section */}
      <section
        id='home'
        className='min-h-screen text-center flex flex-col justify-center pt-16 sm:pt-24 md:pt-32 lg:pt-36 animate-fade-in-up'
      >
        <div className='mx-auto bg-gradient-to-b from-teal-500 rounded-full w-44 h-44 sm:w-56 sm:h-56 md:w-60 md:h-60 lg:w-64 lg:h-64 relative overflow-hidden mb-6 shadow-lg border-4 border-white card-hover animate-glow'>
          <img src='/juan.jpeg' className="object-cover w-full h-full" alt="profile" />
        </div>
        
        <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold mt-2 gradient-text'>Sebastian Mesa</h1>
        <h3 className='text-lg sm:text-xl md:text-2xl font-semibold text-teal-600 mt-3'>Full Stack Developer | Law Student</h3>
        <p className='text-sm sm:text-base py-3 text-gray-700 md:text-lg font-medium max-w-2xl mx-auto'>Building innovative technology solutions that bridge the worlds of software development and legal expertise</p>
        
        <div className='text-3xl sm:text-4xl md:text-5xl py-6 flex justify-center gap-6 sm:gap-10 md:gap-12 text-gray-600'>
          <a href="https://www.linkedin.com/in/sebastian-mesa-555283219/" className="transform hover:-translate-y-2 hover:text-teal-500 active:scale-95 transition-all duration-200"><AiFillLinkedin /></a>
          <a href="https://github.com/Mesa205" className="transform hover:-translate-y-2 hover:text-teal-500 active:scale-95 transition-all duration-200"><AiFillGithub /></a>
          <a href="https://www.instagram.com/_sebastianmesa_/" className="transform hover:-translate-y-2 hover:text-teal-500 active:scale-95 transition-all duration-200"><AiFillInstagram /></a>
        </div>
        
        <div className='flex flex-col gap-4 mt-10'>
          <div className='w-full bg-gradient-to-r from-teal-500 to-teal-600 shadow-lg rounded border-teal-600 cursor-pointer transform hover:-translate-y-2 hover:shadow-2xl hover:from-teal-600 hover:to-teal-700 active:scale-95 transition-all duration-200'>
            <a href="https://drive.google.com/drive/folders/11gbAZOe3SWwPq_Xo6NPvuW0S98p4Wv2Q?usp=drive_link">
              <div className='p-4'>
                <h1 className='text-lg sm:text-xl text-white font-bold text-center'>📥 Download CV</h1>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id='service' className='mt-20 scroll-mt-20'>
        <h1 className='text-3xl md:text-4xl font-bold text-black mb-10 text-center animate-fade-in-up'>About Me</h1>
        <div className='mt-6 space-y-6'>
          <div className='bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-xl shadow-lg p-8 cursor-pointer transform hover:-translate-y-3 hover:shadow-2xl active:scale-95 transition-all duration-300 border border-teal-500 border-opacity-30'>
            <p className="text-white font-semibold text-lg leading-relaxed">
              <span className="text-teal-400 font-bold block mb-3">🎯 A passionate Full Stack Developer and Law Student</span>
              I study at Universidad Pontificia Bolivariana in Colombia, pursuing both disciplines in parallel. My independent work in software development has allowed me to design and build technology solutions tailored to each client, strengthening my skills in analysis, creativity, and project management.
            </p>
          </div>
          <div className='bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-xl shadow-lg p-8 cursor-pointer transform hover:-translate-y-3 hover:shadow-2xl active:scale-95 transition-all duration-300 border border-teal-500 border-opacity-30'>
            <p className="text-white font-semibold text-lg leading-relaxed">
              <span className="text-teal-400 font-bold block mb-3">💪 Solid programming knowledge and hands-on experience</span>
              I build web applications using JavaScript, HTML, and CSS. On the Front-End, I work with React and Redux; on the Back-End, I use Node.js, Java, Spring Boot, Express, and Fastify. I am always eager to learn new technologies and expand my skill set.
            </p>
          </div>
          <div className='bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-xl shadow-lg p-8 cursor-pointer transform hover:-translate-y-3 hover:shadow-2xl active:scale-95 transition-all duration-300 border border-teal-500 border-opacity-30'>
            <p className="text-white font-semibold text-lg leading-relaxed">
              <span className="text-teal-400 font-bold block mb-3">🚀 Disciplined, proactive, and motivated by growth</span>
              My goal is to add value to initiatives that benefit from both technical expertise and legal understanding, building a career that bridges law and technology. I enjoy collaborating with teams and am committed to contributing effectively to every project I'm involved in.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Timeline Section */}
      <TimelineSection />

      {/* Software Portfolio */}
      <section id='portfolio' className='mt-20 scroll-mt-20'>
        <h2 className='text-3xl md:text-4xl font-bold text-black mb-12 text-center'>Software Development Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {softwareProjects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </section>

      {/* Legal Portfolio */}
      <section className='mt-20 scroll-mt-20'>
        <h2 className='text-3xl md:text-4xl font-bold text-black mb-12 text-center'>Legal Practice Highlights</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {legalProjects.map((project, idx) => (
            <div key={idx} className='bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-xl shadow-lg overflow-hidden cursor-pointer transform hover:-translate-y-3 hover:shadow-2xl active:scale-95 transition-all duration-300 group'>
              <a href={project.link} target='_blank' rel='noopener noreferrer'>
                <div className='h-48 relative overflow-hidden bg-gray-800'>
                  <img src={project.image} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" alt={project.title} />
                  <div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300' />
                </div>
                <div className='p-6'>
                  <h3 className='text-2xl font-bold text-white mb-1'>{project.title}</h3>
                  <p className='text-teal-400 font-semibold mb-3'>{project.subtitle}</p>
                  <p className='text-sm text-gray-300 leading-relaxed'>{project.description}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section id='license' className='mt-20 scroll-mt-20'>
        <h2 className='text-3xl md:text-4xl font-bold text-black mb-12 text-center'>Certifications & Education</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {certifications.map((cert, idx) => (
            <div key={idx} className='bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform hover:-translate-y-3 hover:shadow-2xl active:scale-95 transition-all duration-300 group'>
              <a href={cert.link} target='_blank' rel='noopener noreferrer'>
                <div className='h-40 relative overflow-hidden bg-gradient-to-br from-teal-500 to-teal-600'>
                  <img src={cert.image} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" alt={cert.title} />
                  <div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300' />
                </div>
                <div className='p-6'>
                  <h3 className='text-xl font-bold text-gray-800 mb-1'>{cert.title}</h3>
                  <p className='text-teal-600 font-semibold mb-2'>{cert.institution}</p>
                  <p className='text-sm text-gray-600'>{cert.date}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="footer" className="mt-20 rounded-xl bg-gradient-to-br from-gray-900 to-black py-12 px-6 sm:px-10">
        <div className="text-white text-center">
          <h1 className="font-bold text-3xl mb-8">Let's Connect</h1>
          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-center gap-3 text-lg">
              <AiFillMail className="text-teal-400 text-xl" />
              <a href="mailto:sebasmesar7@gmail.com" className="hover:text-teal-400 transition-colors">sebasmesar7@gmail.com</a>
            </div>
            <div className="flex items-center justify-center gap-3 text-lg">
              <AiFillEnvironment className="text-teal-400 text-xl" />
              <span>Medellin, Colombia</span>
            </div>
          </div>
          <div className="flex text-3xl text-white gap-8 justify-center mb-8">
            <a href="https://www.linkedin.com/in/sebastian-mesa-555283219/" className="hover:text-teal-400 transform hover:scale-110 transition-all"><AiFillLinkedin /></a>
            <a href="https://github.com/Mesa205" className="hover:text-teal-400 transform hover:scale-110 transition-all"><AiFillGithub /></a>
            <a href="https://www.instagram.com/_sebastianmesa_/" className="hover:text-teal-400 transform hover:scale-110 transition-all"><AiFillInstagram /></a>
          </div>
          <hr className="my-8 border-gray-700" />
          <p className="text-center text-sm text-gray-400">
            © 2025 Sebastian Mesa. All rights reserved.
          </p>
        </div>
      </section>
    </main>
  );
}

export default App;
