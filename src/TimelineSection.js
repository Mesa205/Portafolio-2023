export default function TimelineSection() {
  const timeline = [
    {
      year: '2021',
      title: 'Started Programming Journey',
      description: 'Began learning JavaScript and web development fundamentals',
      type: 'education'
    },
    {
      year: '2023',
      title: 'Law & Tech Specialization',
      description: 'Certificate from International Congress on Law, Technology and Innovation',
      type: 'certification'
    },
    {
      year: '2023',
      title: 'Software Development Program',
      description: 'Completed intensive software development studies at UPB',
      type: 'education'
    },
    {
      year: '2024-2025',
      title: 'Full Stack Development',
      description: 'Building production applications with React, Node.js, and databases',
      type: 'experience'
    }
  ];

  return (
    <section className='mt-16 mb-16 py-12'>
      <h2 className='text-3xl md:text-4xl font-bold text-black mb-12 text-center'>Experience Timeline</h2>
      <div className='relative'>
        {/* Timeline line */}
        <div className='hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-teal-400 to-teal-600' />

        <div className='space-y-8'>
          {timeline.map((item, idx) => (
            <div key={idx} className={`flex gap-8 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              {/* Content */}
              <div className='flex-1'>
                <div className='bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow'>
                  <div className='flex items-center gap-2 mb-2'>
                    <span className='text-2xl'>
                      {item.type === 'education' && '🎓'}
                      {item.type === 'certification' && '🏆'}
                      {item.type === 'experience' && '💼'}
                    </span>
                    <span className='font-bold text-teal-600'>{item.year}</span>
                  </div>
                  <h3 className='text-xl font-bold text-gray-800 mb-2'>{item.title}</h3>
                  <p className='text-gray-600'>{item.description}</p>
                </div>
              </div>

              {/* Timeline dot */}
              <div className='hidden md:flex items-center justify-center'>
                <div className='w-4 h-4 bg-teal-500 rounded-full border-4 border-white shadow-lg' />
              </div>

              {/* Spacer */}
              <div className='hidden md:flex-1' />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
