import React from 'react'
import { motion } from 'framer-motion'
import { assets } from '../assets/assets'
import { aboutInfo } from '../assets/assets'

const About = () => {
  return (
    <motion.div
    initial = {{opacity:0, y:50}}
    whileInView={{opacity:1, y:0}}
    transition={{duration:0.6, ease:'easeOut'}}
    viewport={{once: false}}
    id='About'
    className=' py-20 bg-gray-950 '
    >
        <div className='container mx-auto px-6 '>
            {/* heading */}
            <h2 className='text-3xl text-center font-bold mb-4'>About 
                <span className='text-orange-500'>me</span>
            </h2>
            <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>
                Get to know about my background and passion
            </p>

            {/* image + my Journey */}
            <div className='flex flex-col md:flex-row items-center gap-12 '>
                {/* image */}
                <div className='md:w-1/2 rounded-2xl overflow-hidden'>
                    <motion.img
                        initial = {{opacity:0, x:50}}
                        whileInView={{opacity:1, x:0}}
                        transition={{duration:2, ease:'easeOut'}}
                        viewport={{once: false, amount:0.2}}
                        className='w-full h-full object-cover'
                        src={assets.profileImg} 
                        alt='Profile Img'
                    />
                </div>
                {/* content */}
                <motion.div
                        initial = {{opacity:0, x:50}}
                        whileInView={{opacity:1, x:0}}
                        transition={{duration:2, ease:'easeOut'}}
                        viewport={{once: false, amount:0.2}}
                        className="md:w-1/2"
                >
                    <div className='rounded-2xl p-8'>
                        <h3 className='text-2xl font-semibold mb-6'>
                            My Journey
                        </h3>
                        <p className='text-gray-300 mb-6'>
                            I am an aspiring web developer with a strong interest in frontend development. 
                            I have hands-on experience with HTML, CSS, JavaScript, React, and Tailwind CSS. 
                            I enjoy turning ideas into functional and responsive websites and continuously 
                            learning to improve my coding skills.
                        </p>
                        {/* <p className='text-gray-300 mb-12'>
                            I am constantly exploring new tools and best practices to enhance my development 
                            workflow. I believe in learning by building projects and enjoy solving problems 
                            that help me grow as a developer. My goal is to create meaningful and user-friendly 
                            web applications.
                        </p> */}

                        {/** cards */}
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                {
                                    aboutInfo.map((data, index)=>(
                                        <div key={index} className='bg-gray-900 border border-gray-800
                                        p-6 rounded-2xl transition-transform duration-300
                                        hover:-translate-y-2 cursor-pointer'>
                                            <div className='text-orange-500 text-4xl mb-4'>
                                                    <data.icon />
                                            </div>
                                            <h3 className='text-xl font-semibold mb-3'>
                                                {data.title}
                                            </h3>
                                            <p className='text-gray-400'>
                                                {data.description}
                                            </p>
                                            
                                        </div>
                                    ))
                                }
                        </div>

                    </div>

                </motion.div>

            </div>

        </div>
    </motion.div>
  )
}

export default About