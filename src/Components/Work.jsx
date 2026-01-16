import React from 'react'
import { motion } from 'framer-motion'
import { workData } from '../assets/assets'

const Work = () => {
  return (
    <motion.div
        initial = {{opacity:0, x:50}}
        whileInView={{opacity:1, x:0}}
        transition={{duration:2, ease:'easeOut'}}
        viewport={{once: false, amount:0.2}}
        id='Experience'
        className='py-20 bg-gray-950'
    >
        <div className='container mx-auto px-6'>
            <h2 className='text-3xl text-center font-bold mb-4'>Work
                <span className='text-orange-500'> Experience</span>
            </h2>
            <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16 '>
                My professional Journey so far
            </p>

            <div className='max-w-3xl mx-auto'>
                <div className='space-y-12'>
                    {
                        workData.map((data, index)=>(
                             <div key={index} className="relative pl-12 before:content-[''] 
                             before:absolute before:left-0 before:top-0 before:w-[2px]
                             before:h-full before:bg-orange-500 cursor-pointer 
                             hover:translate-y-2 transition-all duration-300">
                                {/**timeline dot */}
                                <div className='absolute left-[-0.5rem] top-0 w-6 h-6 rounded-full 
                                bg-orange-500 mr-2'>

                                </div>



                                {/**box slot */}
                                <div className='bg-gray-800 rounded-2xl p-6 '>
                                    <div className='flex justify-between items-start mb-2 '>
                                        <h3 className='text-xl font-semibold'>
                                            {data.role}
                                        </h3>
                                        <span className='px-3 py-1 bg-orange-700/20 
                                        text-orange-600 rounded-full text-ms md:text-sm'>
                                            {data.duration}
                                        </span>
                                    </div>
                                    <p className='text-gray-400 mb-2'>
                                        {data.company}
                                    </p>
                                    <p className='text-gray-300'>
                                        {data.description}
                                    </p>
                                </div>


                             </div>
                        ))
                    }
                </div>
            </div>

        </div>
    </motion.div>
  )
}

export default Work