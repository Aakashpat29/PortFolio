import React from 'react'
import { motion } from 'framer-motion'
import { projects } from '../assets/assets'
import ProjectsCard from './ProjectsCard'
import { FaArrowRight } from 'react-icons/fa'

const Projects = () => {
  return (
    <motion.div
        initial = {{opacity:0, x:50}}
        whileInView={{opacity:1, x:0}}
        transition={{duration:2, ease:'easeOut'}}
        viewport={{once: false, amount:0.2}}
        id='Projects'
        className='py-20 bg-gray-950'>

        <div className='container mx-auto px-6'>
            <h2 className='text-3xl text-center font-bold mb-4'>My
                <span className='text-orange-500'> Projects</span>
            </h2>
            <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16 '>
                A section of my recent work
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
            gap-8 max-w-5xl mx-auto'>
                {
                    projects.map((projects, index)=>(
                        <ProjectsCard key={index}{...projects}/>
                    ))
                }

            </div>
            <div className='text-center mt-12'>
                <a href='#'className='inline-flex items-center px-6 py-3 border border-orange-500
                rounded-lg font-medium hover:bg-orange-500/20 transition duration-300'>
                    <span>View More Project</span>
                    <FaArrowRight className='ml-2' />
                </a>

            </div>
        </div>

    </motion.div>
  )
}

export default Projects