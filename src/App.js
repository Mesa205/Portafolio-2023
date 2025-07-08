import './App.css';
import Navbar from './Navbar'
import { useState } from 'react';
import { AiFillLinkedin, AiFillGithub, AiFillInstagram, AiFillMail, AiFillEnvironment } from 'react-icons/ai'

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className='px-4 sm:px-8 md:px-20 lg:px-40'>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <section
        id='home'
        className='min-h-screen text-center flex flex-col justify-center pt-8'
      >
        <div className='mx-auto bg-gradient-to-b from-teal-500 rounded-full w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 relative overflow-hidden mb-2'>
          <img src='/juan.jpeg' className="object-cover w-full h-full" alt="profile" />
        </div>
        <h1 className='text-2xl sm:text-3xl md:text-4xl font-medium mt-2'>Sebastian Mesa</h1>
        <h3 className='text-base sm:text-lg md:text-xl'>Software Developer | Law Student</h3>
        <p className='text-xs sm:text-sm py-1 text-gray-800 md:text-lg'>Front End | Back End</p>
        <div className='text-2xl sm:text-3xl md:text-4xl py-2 flex justify-center gap-6 sm:gap-10 md:gap-12 text-gray-600'>
          <a href="https://www.linkedin.com/in/sebastian-mesa-555283219/" className="transform hover:-translate-y-2 active:scale-95 transition-all duration-200"><AiFillLinkedin /></a>
          <a href="https://github.com/Mesa205" className="transform hover:-translate-y-2 active:scale-95 transition-all duration-200"><AiFillGithub /></a>
          <a href="https://www.instagram.com/_sebastianmesa_/" className="transform hover:-translate-y-2 active:scale-95 transition-all duration-200"><AiFillInstagram /></a>
        </div>
        <div className='flex flex-col gap-4 mt-6'>
          <div className='w-full bg-black shadow-md rounded border-black cursor-pointer transform hover:-translate-y-2 hover:shadow-2xl active:scale-95 transition-all duration-200'>
            <a href="https://drive.google.com/drive/folders/11gbAZOe3SWwPq_Xo6NPvuW0S98p4Wv2Q?usp=drive_link">
              <div className='p-2'>
                <h1 className='text-base sm:text-lg text-white font-medium text-center'>Download CV</h1>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section id='service' className='mt-10'>
        <h1 className='text-2xl font-bold text-black mb-6 tracking-wide'>About me</h1>
        <div className='mt-3 text-lg sm:text-xl md:text-2xl space-y-8 bg-neutral-900 rounded-xl shadow p-8 cursor-pointer transform hover:-translate-y-2 hover:shadow-2xl active:scale-95 transition-all duration-200'>
          <p className="text-white font-bold">
            <span className="text-teal-400">A passionate Full Stack Developer and Law Student.</span> I study at Universidad Pontificia Bolivariana in Colombia, pursuing both disciplines in parallel. My independent work in software development has allowed me to design and build technology solutions tailored to each client, strengthening my skills in analysis, creativity, and project management.
          </p>
          <p className="text-white font-bold">
            <span className="text-teal-400">Solid programming knowledge and hands-on experience.</span> I build web applications using JavaScript, HTML, and CSS. On the Front-End, I work with React and Redux; on the Back-End, I use Node.js, Java, Spring Boot, Express, and Fastify. I am always eager to learn new technologies and expand my skill set.
          </p>
          <p className="text-white font-bold">
            <span className="text-teal-400">Disciplined, proactive, and motivated by growth.</span> My goal is to add value to initiatives that benefit from both technical expertise and legal understanding, building a career that bridges law and technology. I enjoy collaborating with teams and am committed to contributing effectively to every project I’m involved in.
          </p>
        </div>
      </section>

      <div className='mt-4 flex flex-col md:flex-row gap-8'>
        <div className='bg-neutral-900 shadow rounded-xl p-8 flex flex-col items-center text-center gap-1 cursor-pointer transform hover:-translate-y-2 hover:shadow-2xl active:scale-95 transition-all duration-200 w-full'>
          <img src='software.png' className='w-32 sm:w-40 md:w-48' alt='Software' />
          <h2 className='text-lg sm:text-xl font-bold text-white'>Software Development</h2>
          <p className='text-lg sm:text-xl font-semibold text-white'>Areas</p>
          <ul className='text-white'>
            <li>Front End</li>
            <li>Back end</li>
            <li>Data Base</li>
          </ul>
        </div>
        <div className='bg-neutral-900 shadow rounded-xl p-8 flex flex-col items-center text-center gap-1 cursor-pointer transform hover:-translate-y-2 hover:shadow-2xl active:scale-95 transition-all duration-200 w-full'>
          <img src='cloud.png' className='w-32 sm:w-40 md:w-48' alt='Cloud' />
          <h2 className='text-lg sm:text-xl font-bold text-white'>Programming Languages</h2>
          <p className='text-lg sm:text-xl font-semibold text-white'></p>
          <ul className='text-white'>
            <li>JavaScript</li>
            <li>Java</li>
            <li>Python</li>
            <li>Visual Studio</li>
          </ul>
        </div>
        <div className='bg-neutral-900 shadow rounded-xl p-8 flex flex-col items-center text-center gap-1 cursor-pointer transform hover:-translate-y-2 hover:shadow-2xl active:scale-95 transition-all duration-200 w-full'>
          <img src='ops.png' className='w-32 sm:w-40 md:w-48' alt='Ops' />
          <h2 className='text-lg sm:text-xl font-bold text-white'>Technologies & Tools</h2>
          <p className='text-lg sm:text-xl font-semibold text-white'>Libraries / Frameworks</p>
          <ul className='text-white'>
            <li>Express</li>
            <li>Fastify</li>
            <li>React</li>
            <li>React Native</li>
            <li>Spring Boot</li>
            <li>Node.js</li>
            <li>MongoDB</li>
            <li>MySQL</li>
            <li>Postman</li>
          </ul>
        </div>
      </div>

      <section id='portfolio' className='mt-10'>
        <h1 className='text-xl font-medium'>Portfolio Software Developer</h1>
        <p className='mt-1 text-md'></p>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-8'>
          {/* Primer cuadro */}
          <div className='bg-neutral-900 rounded-xl shadow p-8 flex-shrink-0 cursor-pointer transform hover:-translate-y-2 hover:shadow-2xl active:scale-95 transition-all duration-200 mx-auto'>
            <a href="https://incomparable-cajeta-5c66af.netlify.app/">
              <div className='h-40 sm:h-48 md:h-40 rounded-t-md relative overflow-hidden'>
                <img src='/toutibe.png' className="object-cover w-full h-full" alt="clo" />
              </div>
              <div className='p-4'>
                <h1 className='text-lg sm:text-xl font-medium text-white'>YouTube Clone</h1>
                <p className='mt-2 text-base sm:text-lg text-white font-bold'>This project is a functional clone of the YouTube platform, where users can add videos and interact with a dynamic interface. Built using JavaScript and powered by Vite for fast and modern development, the application replicates the core structure of YouTube, including video thumbnails, titles, and a responsive layout. It focuses on clean UI design, efficient performance, and component-based architecture for easy scalability and future improvements.</p>
              </div>
            </a>
          </div>
          {/* Segundo cuadro */}
          <div className='bg-neutral-900 rounded-xl shadow p-8 flex-shrink-0 cursor-pointer transform hover:-translate-y-2 hover:shadow-2xl active:scale-95 transition-all duration-200 mx-auto'>
            <a href="https://api-ip.vercel.app/">
              <div className='h-40 sm:h-48 md:h-40 rounded-t-md relative overflow-hidden'>
                <img src='/ip.png' className="object-cover w-full h-full" alt="Public IP information" />
              </div>
              <div className='p-4'>
                <h1 className='text-lg sm:text-xl font-medium text-white'>Public IP information</h1>
                <p className='mt-2 text-base sm:text-lg text-white font-bold'>A page has been developed to provide information about your IP address, provided it is public. This tool is very useful for identifying the origin of your emails, messages, files, and other sources.</p>
              </div>
            </a>
          </div>
          {/* Tercer cuadro */}
          <div className='bg-neutral-900 rounded-xl shadow p-8 flex-shrink-0 cursor-pointer transform hover:-translate-y-2 hover:shadow-2xl active:scale-95 transition-all duration-200 mx-auto'>
            <a href="https://redu-prueba.netlify.app/#">
              <div className='h-40 sm:h-48 md:h-40 rounded-t-md relative overflow-hidden'>
                <img src='/notas.png' className="object-cover w-full h-full" alt="Notes" />
              </div>
              <div className='p-4'>
                <h1 className='text-lg sm:text-xl font-medium text-white'>Quick Notes</h1>
                <p className='mt-2 text-base sm:text-lg text-white font-bold'>It was developed so you can create quick notes, categorizing them according to importance, with the importance of not deleting them.<br/>Vite and React were used.</p>
              </div>
            </a>
          </div>
          {/* Cuarto cuadro */}
          <div className='bg-neutral-900 rounded-xl shadow p-8 flex-shrink-0 cursor-pointer transform hover:-translate-y-2 hover:shadow-2xl active:scale-95 transition-all duration-200 mx-auto'>
            <a href="">
              <div className='h-40 sm:h-48 md:h-40 rounded-t-md relative overflow-hidden'>
                <img src='/PORTAFOLIO.png' className="object-cover w-full h-full" alt="Portfolio" />
              </div>
              <div className='p-4'>
                <h1 className='text-lg sm:text-xl font-medium text-white'>Portfolio</h1>
                <p className='mt-2 text-base sm:text-lg text-white font-bold'>It was developed to showcase my knowledge of software development and law. The idea is to upload the progress of each completed project here.<br/>React and JavaScript were used.</p>
              </div>
            </a>
          </div>
        </div>
      </section>

            <section id='portfolio' className='mt-10'>
        <h1 className='text-xl font-medium'>Portfolio Law Student</h1>
        <p className='mt-1 text-md'></p>
        <div className='flex flex-col md:flex-row gap-8 mt-8'>
          <div className='w-full md:w-1/2 lg:w-2/5 bg-neutral-900 rounded-xl shadow p-8 flex-shrink-0 cursor-pointer transform hover:-translate-y-2 hover:shadow-2xl active:scale-95 transition-all duration-200 mx-auto'>
            <a href="https://www.linkedin.com/posts/sebastian-mesa-555283219_derecho-traernsito-prescripciaejn-activity-7302394554584899584-HMl_?utm_source=share&utm_medium=member_desktop&rcm=ACoAADcJB1EBAnrN2gXfCZIExnqwGIXgi9_0dvA">
              <div className='h-40 sm:h-48 md:h-40 rounded-t-md relative overflow-hidden'>
                <img src='/Girardota.png' className="object-cover w-full h-full" alt="Traffic Ticket Prescription" />
              </div>
              <div className='p-4'>
                <h1 className='text-lg sm:text-xl font-medium text-white'>Traffic Ticket Prescription</h1>
                <h2 className='text-white'>Girardota, Antioquia</h2>
                <p className='mt-2 text-base sm:text-lg text-white font-bold'>I successfully managed to have a traffic fine declared time-barred through a legal petition submitted to the Municipality of Girardota, Colombia. Based on Article 159 of Law 769 of 2002, I filed a formal request which led the authorities to recognize the statute of limitations and remove the debt from their local system and the national traffic database (SIMIT).</p>
              </div>
            </a>
          </div>
          <div className='w-full md:w-1/2 lg:w-2/5 bg-neutral-900 rounded-xl shadow p-8 flex-shrink-0 cursor-pointer transform hover:-translate-y-2 hover:shadow-2xl active:scale-95 transition-all duration-200 mx-auto'>
            <a href="https://www.linkedin.com/posts/sebastian-mesa-555283219_derecho-traernsito-prescripciaejn-activity-7302394554584899584-HMl_?utm_source=share&utm_medium=member_desktop&rcm=ACoAADcJB1EBAnrN2gXfCZIExnqwGIXgi9_0dvA">
              <div className='h-40 sm:h-48 md:h-40 rounded-t-md relative overflow-hidden'>
                <img src='/Barbosa.png' className="object-cover w-full h-full" alt="Traffic Ticket Prescription" />
              </div>
              <div className='p-4'>
                <h1 className='text-lg sm:text-xl font-medium text-white'>Traffic Ticket Prescription</h1>
                <h2 className='text-white'>Barbosa, Antioquia</h2>
                <p className='mt-2 text-base sm:text-lg text-white font-bold'>I also obtained a favorable outcome in a coercive collection process before the Municipality of Barbosa, Antioquia. Relying on the same legal basis, I presented a petition that resulted in the debt being officially declared prescribed and eliminated from the records and SIMIT.</p>
              </div>
            </a>
          </div>

        </div>
      </section>

      <section id='license' className='mt-10'>
        <h1 className='text-xl font-medium'>License & Certifications</h1>
        <p className='mt-1 text-md'></p>
        <div className='flex flex-col md:flex-row gap-8 mt-8'>
          <div className='w-full md:w-1/2 lg:w-2/5 bg-neutral-900 rounded-xl shadow p-8 flex-shrink-0 cursor-pointer transform hover:-translate-y-2 hover:shadow-2xl active:scale-95 transition-all duration-200 mx-auto'>
            <a href="https://drive.google.com/file/d/1TNkdd1enIgVc4iRPzUFYqPRZu45OEaeM/view?usp=drive_link">
              <div className='h-40 sm:h-48 md:h-40 rounded-t-md relative overflow-hidden'>
                <img src='xx.png' className="object-cover w-full h-full" alt="UPB" />
              </div>
              <div className='p-4'>
                <h1 className='text-lg sm:text-xl font-medium text-white'>Software Development</h1>
                <h2 className='text-white'>Universidad Pontificia Bolivariana</h2>
                <p className='mt-2 text-base sm:text-lg text-white font-bold'>Jul 2023</p>
              </div>
            </a>
          </div>
          <div className='w-full md:w-1/2 lg:w-2/5 bg-neutral-900 rounded-xl shadow p-8 flex-shrink-0 cursor-pointer transform hover:-translate-y-2 hover:shadow-2xl active:scale-95 transition-all duration-200 mx-auto'>
            <a href="https://drive.google.com/file/d/1_4f7-zS5gQ8sgh7J8wzej5rTOtQYYHgQ/view?usp=sharing">
              <div className='h-40 sm:h-48 md:h-40 rounded-t-md relative overflow-hidden'>
                <img src='dd.png' className="object-cover w-full h-full" alt="UPB" />
              </div>
              <div className='p-4'>
                <h1 className='text-lg sm:text-xl font-medium text-white'>Certificate of the International Congress on Law, Technology and Innovation</h1>
                <h2 className='text-white'>Universidad Pontificia Bolivariana</h2>
                <p className='mt-2 text-base sm:text-lg text-white font-bold'>Mar 2023</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section id="footer" className="mt-5 rounded bg-black py-8 px-4 sm:px-8">
        <div className="text-white md:text-center">
          <h1 className="font-medium text-lg">Contact Me</h1>
          <ul className="md:flex justify-center gap-4">
            <li className="flex items-center gap-2">
              <AiFillMail />
              <a href="mailto:sebasmesar7@gmail.com?">sebasmesar7@gmail.com</a>
            </li>
            <li className="flex items-center gap-2">
              <AiFillEnvironment />
              <p>Medellin, Colombia</p>
            </li>
          </ul>
          <div className="flex text-xl text-white gap-6 mt-4 md:justify-center">
            <a href="https://www.linkedin.com/in/sebastian-mesa-555283219/"><AiFillLinkedin /></a>
            <a href="https://github.com/Mesa205"><AiFillGithub /></a>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <p className="text-center text-sm text-gray-300 sm:text-center">
            2025 <a> Sebastian Mesa</a>
          </p>
        </div>
      </section>
    </main>
  );
}

export default App;
