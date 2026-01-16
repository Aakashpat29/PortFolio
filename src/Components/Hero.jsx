import React from 'react'
import { motion } from 'framer-motion'
import {assets} from '../assets/assets'

const Hero = () => {
  return (
    <motion.div
    initial = {{opacity:0, y:50}}
    whileInView={{opacity:1, y:0}}
    transition={{duration:0.6, ease:'easeOut'}}
    viewport={{once: true}}
    id='Home'
    className='min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-r 
    from-gray-950 via-gray-900 to-gray-950
'
    >
        <div className='container mx-auto px-6 flex flex-col md:flex-row 
        items-center justify-between'>
            {/* left side Content */}
            <div className='md:w-1/2 mb-10 md:mb-0'>
                <h1 className='text-4xl md:text-6xl font-bold mb-4'>Welcome to 
                    <span className='text-orange-500'> My PortFolio</span> 
                </h1>

                <h2 className='text-2xl md:text-4xl font-semibold mb-6 typewriter'>
                    Hi I'm Aakash Kurmi
                </h2>

                <p className='text-xl text-gray-300 mb-8'>
                    I am a passionate and dedicated developer with expertise in web development 
                    and programming. I specialize in HTML, CSS, and JavaScript, along with 
                    frameworks like React.js, Redux, and Tailwind CSS. I also have a solid 
                    foundation in Data Structures and Algorithms using C++ and other programming 
                    languages. I enjoy building intuitive and user-friendly applications and am 
                    committed to continuously learning and improving my skills to create impactful 
                    solutions in the tech industry
                </p>

                <div>
                    <a href='#Projects' className='px-6 py-3 mr-5 bg-orange-500 rounded-lg 
                    font-medium hover:bg-orange-800 transition duration-300'>
                        View work
                    </a>
                    <a href='#Contact' className='px-6 py-3 border border-orange-500 rounded-lg 
                    font-medium hover:bg-orange-500/35 transition duration-300'>
                        Contact me
                    </a>
                </div>
            </div>

            {/* right side Image*/}

            <div className='md:w-1/2 flex justify-center '>
                <div className='relative w-64 h-64 md:w-80 md:h-80'>
                    <div className='absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 
                    to-red-800 opacity-70'>
                        <motion.img
                            src={assets.profileImg}
                            alt="Profile"
                            animate= {{y: [0,-20, 0]}}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                repeatType: 'loop',
                                ease: "easeInOut"
                            }}
                            className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover
                            z-10 "
                        />
                    </div>
                </div>
            </div>

        </div>

    </motion.div>
  )
}

export default Hero