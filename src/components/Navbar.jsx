import React, { useEffect,useState} from 'react'
import {assets} from '../assets/assets'
import { Link, useLocation} from 'react-router-dom';
const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  useEffect(() => {
    // Only disable scroll if mobile menu is open and on small screens
    if (showMobileMenu && window.innerWidth < 768) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    // Cleanup: reset overflow when component unmounts
    return () => {
      document.body.style.overflow = '';
    };
  }, [showMobileMenu]);

  return (
    <div  className={`fixed top-0 w-full left-0 z-10 transition-all ${
      isHomePage ? 'bg-transparent' : 'nav-bg bg-opacity-90'
    }`}>
      <div className='container mx-auto flex justify-between items-center px-3 py-2 md:px-3 md:py-2 lg:px-5 '>
        <img src={assets.logo} alt='logo'  className='w-20' />
        <ul className='hidden md:flex gap-7 text-white'>
          <li><Link to='/' className='cursor-pointer hover:text-gray-400'>Home</Link></li>
          <li><Link to='/About' className='cursor-pointer hover:text-gray-400'>About</Link></li>
          <li><Link to='/Projects' className='cursor-pointer hover:text-gray-400'>Projects</Link></li>
          <li><Link to='/Testimonials' className='cursor-pointer hover:text-gray-400'>Testimonials</Link></li>
        </ul>
        <button className='hidden md:block bg-white text-black rounded-full px-4 py-2'>Sign up</button>
        <img src={assets.menu_icon} alt='menu' className='md:hidden w-8 cursor-pointer' onClick={() => { console.log("Mobile menu link clicked"); setShowMobileMenu(true)}} />
      </div>
      {/* -----------------Mobile Menu -------------------- */}
      <div className={`md:hidden fixed right-0 top-0 bottom-0 overflow-hidden bg-white transition-all  ${showMobileMenu ? 'w-full h-full' : 'w-0 h-0'}`}>
        <div className='flex justify-end p-5'>
         <img src={assets.cross_icon} alt='cross' id='#Header' className='w-7' onClick={() => setShowMobileMenu(false)} />
        </div>
        <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
        <li><Link to='/' onClick={() => setShowMobileMenu(false)} className='px-4 py-2 rounded-full inline-block'>Home</Link></li>
          <li><Link to='/about' onClick={() => setShowMobileMenu(false)} className='px-4 py-2 rounded-full inline-block'>About</Link></li>
          <li><Link to='/projects' onClick={() => setShowMobileMenu(false)} className='px-4 py-2 rounded-full inline-block'>Projects</Link></li>
          <li><Link to='/testimonials' onClick={() => setShowMobileMenu(false)} className='px-4 py-2 rounded-full inline-block'>Testimonials</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
