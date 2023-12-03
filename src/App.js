
import './App.css';
import Navbar from './Navbar'
import {AiFillLinkedin, AiFillGithub, AiFillInstagram, AiFillMail, AiFillEnvironment, AiFillPhone} from 'react-icons/ai'

function App() {
  return (
    <main className='px-8 md:px-20 lg:px-40'>
    
    <Navbar />

    <section id='home' className='min-h-screen text-center mt-4 flex flex-col justify-center '>
        <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-56 h-56 relative overflow-hidden md:h-96 md:w-96 mb-2">
          <img src='/juan.jpeg' layout="fill" objectFit="cover" />
        </div>
        <h1 className='text-3xl md:text-5xl font-medium '>Sebastian Mesa</h1>
        <h3 className='text-xl md:text-2xl'> Software Developer</h3>
        <p className='text-md py-1 text-gray-800 md:text-xl'>Front End | Back End </p>
        <div className='text-5xl py-4 flex justify-center gap-16 text-gray-600'>
          <a href="https://www.linkedin.com/in/sebastian-mesa-555283219/">
            <AiFillLinkedin /> 
          </a>
          
          <a href="https://github.com/Mesa205">
            <AiFillGithub />
          </a>
          <a href="https://www.instagram.com/_sebastianmesa_/">
            <AiFillInstagram />
          </a>
          
          
        </div>

            <div className='flex flex-col  gap-8 mt-8'>
        <div className='w-full md:w-6/6 bg-black shadow-md rounded border-black'>
          <a href="https://drive.google.com/file/d/1lV0p8to5iQhLBhHh5YFxyvPaL3upB889/view?usp=sharing">
     
          <div className='p-2'>
            <h1 className='text-xl text-white font-medium text-center'>Download CV</h1>

          </div>
          </a>

        </div>
      </div>

    </section>

    <section id='service' className=''>
      <h1 className='text-xl font-medium'>About me</h1>
      <p className='mt-3 text-xl'>As a full stack software developer I have solid programming knowledge and am willing to learn new technologies and skills. I have experience in developing web applications using programming languages such as JavaScript, HTML, CSS and frameworks such as React, Redux on the Front-End and Node.js, Java, Spring Boot, Express or Fastify on the Back-End. I am interested in working on challenging projects and collaborating with a team to achieve shared goals. I am motivated to continue learning and improving my skills and knowledge to be able to contribute effectively to any project..</p>


      <div className='mt-4 flex flex-col md:flex-row gap-8'>
        <div className='w-full shadow-lg rounded-md px-4 py-5 flex flex-col items-center text-center gap-1'>
          <img src='software.png' className='w-48' alt='gambar' />
          <h2 className='text-xl'>Software Development</h2>
          <p className='text-gray-500'>.</p>
          <p className='text-xl '> Use</p>
          <ul>
            <li>Front End</li>
            <li>Back end</li>
            <li>Data Base</li>
          </ul>
        </div>

        <div className='w-full shadow-lg rounded-md px-4 py-5 flex flex-col items-center text-center gap-1'>
          <img src='cloud.png' className='w-48' alt='gambar' />
          <h2 className='text-xl'>Idioms</h2>
          <p className='text-gray-500'>.</p>
          <p className='text-xl'>Tools </p>
          <ul>
            <li>JavaScript</li>
            <li>Java</li>
            <li>Python</li>
            <li>React</li>
          </ul>
        </div>

        <div className='w-full shadow-lg rounded-md px-4 py-5 flex flex-col items-center text-center gap-1'>
          <img src='ops.png' className='w-48' alt='gambar' />
          <h2 className='text-xl'>Frameworks</h2>
          <p className='text-gray-500'>.</p>
          <p className='text-xl '>Tools I Use</p>
          <ul>
            <li>Express</li>
            <li>Fastify</li>
            <li></li>
          </ul>
        </div>

      </div>

    </section>

    <section id='portfolio' className='mt-10'>
      <h1 className='text-xl font-medium'>Portfolio</h1>
      <p className='mt-1 text-md'></p>

      <div className='flex flex-col md:flex-row gap-8 mt-8'>
        <div className='w-full md:w-2/6 shadow-md rounded border-black'>
          <a href="https://incomparable-cajeta-5c66af.netlify.app/">
                      <div className='h-48 md:h-40 rounded-t-md relative overflow-hidden'>
                      <img src='/toutibe.png' layout="fill" objectFit="cover" />
          </div>
          <div className='p-4'>
            <h1 className='text-xl font-medium'>Clone Youtube</h1>

          </div>
          </a>

        </div>

      </div>


      <div className='flex flex-col md:flex-row gap-8 mt-8'>
        <div className='w-full md:w-2/6 shadow-md rounded border-black'>
          <a href="https://redu-prueba.netlify.app/#">
                      <div className='h-48 md:h-40 rounded-t-md relative overflow-hidden'>
                      <img src='/notas.png' layout="fill" objectFit="cover" />
          </div>
          <div className='p-4'>
            <h1 className='text-xl font-medium'>Notes</h1>

          </div>
          </a>

        </div>

      </div>


      <div className='flex flex-col md:flex-row gap-8 mt-8'>
        <div className='w-full md:w-2/6 shadow-md rounded border-black'>
          <a href="">
                      <div className='h-48 md:h-40 rounded-t-md relative overflow-hidden'>
                      <img src='/PORTAFOLIO.png' layout="fill" objectFit="cover" />
          </div>
          <div className='p-4'>
            <h1 className='text-xl font-medium'>Portfolio 2023</h1>

          </div>
          </a>

        </div>

      </div>

















    </section>

    <section id='license' className='mt-10'>
      <h1 className='text-xl font-medium'>License & Certifications</h1>
      <p className='mt-1 text-md'></p>
      
      <div className='flex flex-col md:flex-row gap-8 mt-8'>
        <div className='w-full md:w-1/6 shadow-md rounded border-black'>
          <a href="">
                      <div className='h-48 md:h-40 rounded-t-md relative overflow-hidden'>
            <img src='https://th.bing.com/th/id/R.9f497eb06380c9db735910e710a34dc3?rik=CdIVJGB%2bB6asbQ&riu=http%3a%2f%2fwww.afacom.org%2fimages%2fupb+logo.jpg&ehk=%2f0aP1xPWxUmH7HriCrCQmy9WZQJ4CJAUGIEUPCCjAZk%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1' layout="fill" objectFit="cover"/>
          </div>
          <div className='p-4'>
            <h1 className='text-xl font-medium'>Software Development</h1>
            <p className=''>Universidad Pontificia Bolivariana</p>
            <p className='text-sm text-gray-500'>Jul 2023</p>
          </div>
          </a>

        </div>

      </div>

    </section>
    
    
    <section id="footer" className="mt-5 rounded bg-black py-8 px-8">
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
            <a href="https://www.linkedin.com/in/sebastian-mesa-555283219/">
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/Mesa205">
              <AiFillGithub />
            </a>
          </div>

          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

          <p className="text-center text-sm text-gray-300 sm:text-center">
            2023
            <a> Sebastian Mesa</a>
          </p>
        </div>
      </section>

    </main>
  );
}

export default App;
