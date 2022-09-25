import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Navbar = () => {
  const gitHubLink = 'https://github.com/gabifija';
  const emailLink = 'mailto:gabrielapapier@gmail.com';

  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-white text-black'>
      <div>
        gaby.
      </div>
      {/* menu */}
      <ul className='hidden md:flex'>
        <li>
          <Link to='home' smooth={true} duration={500}>
            home
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={500}>
            about
          </Link>
        </li>
        <li>
          <Link to='skills' smooth={true} duration={500}>
            skills
          </Link>
        </li>
        <li>
          <Link to='work' smooth={true} duration={500}>
            work
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={500}>
            contact
          </Link>
        </li>
      </ul>

      {/* hamburger menu */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {nav ? <FaTimes /> : <FaBars />}
      </div>

      {/* mobile menu */}
      <ul className={nav ? 'absolute top-0 left-0 w-full h-screen bg-[#ffffff] flex flex-col justify-center items-center' : 'hidden'}>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            about
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            work
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            contact
          </Link>
        </li>
      </ul>

      {/* social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a className='flex justify-between items-center w-full text-white hover:text-[#9fb9ac]' href={gitHubLink} target='_blank' rel='noreferrer'>
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#b66b53]'>
            <a className='flex justify-between items-center w-full text-white hover:text-black' href={emailLink}>
              Email <HiOutlineMail size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
