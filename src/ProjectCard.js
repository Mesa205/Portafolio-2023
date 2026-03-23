export default function ProjectCard({ title, description, image, link, technologies = [] }) {
  return (
    <div className='bg-neutral-900 rounded-xl shadow-lg overflow-hidden cursor-pointer transform hover:-translate-y-3 hover:shadow-2xl active:scale-95 transition-all duration-300 group'>
      <a href={link} target='_blank' rel='noopener noreferrer'>
        <div className='h-40 sm:h-48 md:h-40 relative overflow-hidden bg-gray-800'>
          <img src={image} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" alt={title} />
          <div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300' />
        </div>
        <div className='p-4'>
          <h1 className='text-lg sm:text-xl font-bold text-white mb-2'>{title}</h1>
          {technologies.length > 0 && (
            <div className='flex flex-wrap gap-2 mb-3'>
              {technologies.map((tech, idx) => (
                <span key={idx} className='text-xs bg-teal-500 text-white px-2 py-1 rounded-full'>
                  {tech}
                </span>
              ))}
            </div>
          )}
          <p className='text-sm sm:text-base text-gray-300 line-clamp-3'>{description}</p>
        </div>
      </a>
    </div>
  );
}
