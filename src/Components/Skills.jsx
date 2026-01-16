import React from 'react'
import { motion } from 'framer-motion'
import { skills } from '../assets/assets'

const Skills = () => {
  return (
    <motion.div
        initial = {{opacity:0, x:50}}
        whileInView={{opacity:1, x:0}}
        transition={{duration:2, ease:'easeOut'}}
        viewport={{once: false, amount:0.2}}
        id='Skills'
        className='py-20 bg-gray-950'
    >
        <div className='container mx-auto px-6'>
            <h2 className='text-3xl text-center font-bold mb-4'>My 
                <span className='text-orange-500'> Skills
                </span>
            </h2>
            <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16 '>
                Technologies I work with to bring ideas to life
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
            gap-8 max-w-5xl mx-auto'>
                {
                    skills.map((skill, index) => (
                        <div key={index} className='bg-gray-800 rounded-2xl p-6  
                        hover:-translate-y-2 transition-transform duration-300 cursor-pointer'>
                            <div className='flex items-center mb-4'>
                                <skill.icon className='w-12 h-12 text-orange-500 mr-6'/>
                                <h3 className='text-xl font-semibold'>{skill.title}</h3>
                            </div>
                            <p className='text-gray-400 mb-4 '>{skill.description}</p>
                            <div className='flex flex-wrap gap-2 mt-2'>
                                {skill.tags.map((tech) => (
                                    <span key={tech} className='px-3 py-1 bg-gray-600 
                                    rounded-full text-sm'>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))
                }

            </div>

        </div>

    </motion.div>
  )
}

export default Skills