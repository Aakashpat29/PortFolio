import React from 'react'

const ProjectsCard = ({title, description , image, tech = []}) => {
  return (
    <div className='bg-gray-800 border-2 rounded-2xl overflow-hidden hover:-translate-y-2 
    transition duration-300 cursor-pointer'>
        <img  src={image} alt={title} className='w-full h-60 object-cover'/>
        <div className='p-6'>
            <h3 className='text-xl font-semibold mb-2'>{title}</h3>
            <p className='text-gray-400 mb-4'>{description}</p>
            <div className='flex flex-wrap gap-2 mb-1'>
                {tech.map((item, index)=>(
                    <span key={index} className='px-3 py-1 bg-gray-600 rounded-full text-sm'>
                        {item}
                    </span>
                ))}
            </div>

            <div className='flex gap-2'>
                <a href="#" className='flex-1 text-center mt-3 px-4 py-2 bg-orange-500 rounded-lg font-medium 
                hover:bg-orange-900 transition duration-300'>
                    View Demo
                </a>
                <a href="#" className='flex-1 text-center mt-3 px-4 py-2 border border-orange-500 rounded-lg font-medium 
                hover:bg-orange-500/20 transition duration-300'>
                    Code
                </a>
            </div>
        </div>
    </div>
  )
}

export default ProjectsCard