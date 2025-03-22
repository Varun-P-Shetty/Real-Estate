import React from 'react'
import Navbar from './Navbar'
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='min-h-screen mb-4 bg-cover bg-center bg-no-repeat bg-fixed flex-center w-full overflow-hidden'  style={{ backgroundImage: `url(${assets.images.header_img})` }}  id='Header'>
      <Navbar />
      <div className='container text-center mx-auto py-10 px-6 md:px-20 lg:px-32 text-white'>
        <h2 className='  text-5xl sm:text-6xl md:text-7xl lg:text-[82px] inline-block max-w-3xl'> Explore homes that fit your dreams</h2>
        <div className='mt-10 space-x-6'>
            <Link to='/Projects' className=' border border-white px-6 py-2 rounded'>Projects</Link>
            <Link to='/' className=' bg-blue-700  hover:bg-blue-800 px-6 py-2 rounded'>Contact Us</Link>
        </div>
      </div>
    </div>
  )
}

export default Header
