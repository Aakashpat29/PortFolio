import React from 'react'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import { FaMapMarkedAlt } from 'react-icons/fa'
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaPhone, FaTwitter } from 'react-icons/fa6'

const Contact = () => {
  return (
    <motion.div
        initial = {{opacity:0, x:50}}
        whileInView={{opacity:1, x:0}}
        transition={{duration:2, ease:'easeOut'}}
        viewport={{once: false, amount:0.2}}
        id='Contact'
        className='py-20 bg-gray-950'
    >
        <div className='container mx-auto px-6'>
            <h2 className='text-3xl font-bold text-center mb-4'>
                Get In
                <span className='text-orange-500'>
                    Touch
                </span>
            </h2>
            <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>
                Have a project in mind or want to colavorate? Let's Talk
            </p>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto'>
                {/**contact form */}
                <div>
                    <form className='space-y-6'>
                        <div>
                            <label htmlFor='name' className='block text-gray-300 mb-2'>
                                Your Name
                            </label>
                            <input 
                            className='w-full bg-gray-700 border border-gray-900 rounded-lg
                            px-4 py-3 outline-none'
                            type='text'
                            />
                        </div>

                        <div>
                            <label htmlFor='email' className='block text-gray-300 mb-2'>
                                Your Email
                            </label>
                            <input 
                            className='w-full bg-gray-700 border border-gray-900 rounded-lg
                            px-4 py-3 outline-none'
                            type='email'
                            />
                        </div>

                        <div>
                            <label htmlFor='message' className='block text-gray-300 mb-2'>
                                Your message
                            </label>
                            <textarea 
                            className='w-full h-40 bg-gray-700 border border-gray-900 rounded-lg
                            px-4 py-3 outline-none'
                            type='text'
                            />
                        </div>

                        <button type='submit' className='w-full px-6 py-3 bg-orange-500 rounded-lg
                        font-medium hover:bg-orange-900 transition duration-300 cursor-pointer'>
                            Send
                        </button>

                    </form>
                </div>

                {/** contact information */}
                <div className='space-y-10 ml-12'>
                    <div className='flex items-start pt-8'>
                        <div className='text-orange-500 text-2xl mr-4'>
                            <FaMapMarkedAlt />
                        </div>
                        <div>
                            <h3 className='text-lg font-semibold mb-2'>Location</h3>
                            <p className='text-gray-400'>Indore, Madhya Pradesh</p>
                        </div>
                    </div>

                    <div className='flex items-start '>

                        <div className='text-orange-500 text-2xl mr-4'>
                            <FaEnvelope />
                        </div>
                        <div>
                            <h3 className='text-lg font-semibold mb-2'>Email</h3>
                            <p className='text-gray-400'>kurmiaakash29@gmail.com</p>
                        </div>
                    </div>

                    <div className='flex items-start '>  

                        <div className='text-orange-500 text-2xl mr-4'>
                            <FaPhone />
                        </div>
                        <div>
                            <h3 className='text-lg font-semibold mb-2'>Phone</h3>
                            <p className='text-gray-400'>+91 8982916719</p>
                        </div>

                    </div>

                    <div className='pt-4'>
                        <h3 className='text-lg font-semibold mb-4'>Follow Me</h3>
                        <div className='flex space-x-4'>
                            <a  href='https://github.com/Aakashpat29/' 
                            className='w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center 
                            text-white hover:bg-gray-700 hover:text-white transition duration-300'>
                                <FaGithub />
                            </a>

                            <a  href='https://www.linkedin.com/in/aakash-patel-357299293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' 
                            className='w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center 
                            text-blue-600 hover:bg-blue-500 hover:text-white transition duration-300'>
                                <FaLinkedin />
                            </a>

                            <a  href='https://x.com/AakashPate3397' 
                            className='w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center 
                            text-blue-500 hover:bg-blue-500 hover:text-white transition duration-300'>
                                <FaTwitter />
                            </a>

                            <a  href='https://www.instagram.com/__aakash_patel__/' 
                            className='w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center 
                            text-pink-500 hover:bg-pink-500 hover:text-white transition duration-300'>
                                <FaInstagram />
                            </a>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    </motion.div>
  )
}

export default Contact