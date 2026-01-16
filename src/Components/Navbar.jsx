import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'

const Navbar = () => {

    const[showMenu, setShowMenu] = useState(false);

  return (
    <nav className='fixed w-full z-50 bg-gray-800/90 backdrop-blur-sm py-4 px-8 shadow-lg'>
        <div className='container mx-auto flex justify-between items-center'>
            <div>
                <a href="#" className='text-3xl font-bold text-white'>
                    AAKASH
                    <span className='text-orange-500'> KURMI</span>
                    <div className='w-4 h-4 bg-orange-500 rounded-full'></div>
                </a> 
            </div>
            <div className='hidden md:flex space-x-10'>
                <a href='#Home' className='relative text-white/80 transition duration-300
                hover:text-orange-500 group'>
                    <span>Home</span>
                    <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full'></span>
                </a>
            
                <a href='#About' className='relative text-white/80 transition duration-300
                hover:text-orange-500 group'>
                    <span>About</span>
                    <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full'></span>
                </a>
            
                <a href='#Skills' className='relative text-white/80 transition duration-300
                hover:text-orange-500 group'>
                    <span>Skills</span>
                    <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full'></span>
                </a>
            
                <a href='#Projects' className='relative text-white/80 transition duration-300
                hover:text-orange-500 group'>
                    <span>Projects</span>
                    <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full'></span>
                </a>
            
                <a href='#Experience' className='relative text-white/80 transition duration-300
                hover:text-orange-500 group'>
                    <span>Experience</span>
                    <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full'></span>
                </a>
            
                <a href='#Contact' className='relative text-white/80 transition duration-300
                hover:text-orange-500 group'>
                    <span>Contact</span>
                    <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full'></span>
                </a>
            </div>

            {/* for MOBILE SCREEN */}
            <div className='md:hidden'>
                { 
                    showMenu ? 
                    <FaXmark onClick={() => setShowMenu(!showMenu)} 
                    className='text-2xl cursor-pointer'/> :
                    <FaBars onClick={() => setShowMenu(!showMenu)} 
                    className='text-2xl cursor-pointer'/>
                }
                
            </div>

        </div>
        


        {/*mobile menus */}
        {
            showMenu && (
            <div className='md:hidden mt-4 bg-gray-700  rounded-lg  p-4 flex flex-col
            space-y-4 text-center justify-center'>

                <a onClick={() => setShowMenu(!showMenu)} href='#Home' className='relative text-white/80 transition duration-300
                hover:text-orange-500 group'>
                    <span>Home</span>
                </a>
            
                <a onClick={() => setShowMenu(!showMenu)} href='#About' className='relative text-white/80 transition duration-300
                hover:text-orange-500 group'>
                    <span>About</span>
                </a>
            
                <a onClick={() => setShowMenu(!showMenu)} href='#Skills' className='relative text-white/80 transition duration-300
                hover:text-orange-500 group'>
                    <span>Skills</span>
                </a>
            
                <a onClick={() => setShowMenu(!showMenu)} href='#Projects' className='relative text-white/80 transition duration-300
                hover:text-orange-500 group'>
                    <span>Projects</span>
                </a>
            
                <a onClick={() => setShowMenu(!showMenu)} href='#Experience' className='relative text-white/80 transition duration-300
                hover:text-orange-500 group'>
                    <span>Experience</span>
                </a>
            
                <a onClick={() => setShowMenu(!showMenu)} href='#Contact' className='relative text-white/80 transition duration-300
                hover:text-orange-500 group'>
                    <span>Contact</span>
                </a>
            </div>
            )
        }
        
    </nav>
  )
}

export default Navbar