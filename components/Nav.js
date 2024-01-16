"use client"

import Link from 'next/link';
import React, {useState, useEffect} from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';

const Nav = () => {
    const [navVisible, setNavVisible] = useState(false);
    const [isActive, setIsActive] = useState('//');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const NavItems = [
        {
            title: "Home",
            page: '/',
        },
        {
            title: 'Coaching',
            page: '/coaching',
        },
        {
            title: 'Results',
            page: '/results',
        },
        {
            title: 'Partners',
            page: '/partners',
        },
        {
            title: 'Social',
            page: 'https://www.instagram.com/devinvolk/?hl=en',
        },
        {
            title: 'Contact',
            page: '/contact',
        },
    ]

    const handleClick = (page) => {
        setIsActive(page);
    }

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    }

    const scrolling = () => {
      if (window.scrollY >= 1) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    useEffect(() => {
      const delay = setTimeout(() => {
        setNavVisible(true);
      }, 300);
    
      return () => {
        clearTimeout(delay);
      }
    }, [])

    useEffect(() => {
      window.addEventListener('scroll', scrolling);
    
      return () => {
        window.removeEventListener('scroll', scrolling);
      }
    }, [])
    
    useEffect(() => {
      if (isMenuOpen) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'auto'
      }
    }, [isMenuOpen])
    

  return (
    <nav className={`fixed z-50 h-14 py-2 md:py-4 md:h-20 w-full ${isMenuOpen ? 'bg-white shadow-md' : (isScrolled ? 'bg-white shadow-md' : 'bg-transparent')}`}>
        {/* desktop nav */}
        <div className={`hidden md:flex flex-row justify-end space-x-8 mr-6 ${navVisible ? 'opacity-100 transition-opacity duration-1000' : 'opacity-0'}`}>
            {NavItems.map((item, index) => 
            item.title === 'Social' ? (
            <a
            key={index}
            href={item.page}
            target='_blank'
            rel='noopener noreferrer'
            className={`text-xl text-neutral-200 cursor-pointer transition-colors duration-300 hover:text-neutral-500 ${
              isActive === `/${item.page}` ? 'border-b-2 border-neutral-200 hover:border-neutral-500' : ''
            }`}
          >
            {item.title}
          </a>
          ) : (
                <Link key={index} href={item.page}
                  className={`text-xl text-neutral-200 cursor-pointer transition-colors duration-300 hover:text-neutral-500 ${isActive === `/${item.page}` ? 'border-b-2 border-neutral-200 hover:border-neutral-500' : ''}`}
                  onClick={() => {handleClick(item.page)}}
                >
                  {item.title}
              </Link>
            ))}
        </div>

        {/* mobile nav */}
        <div className='md:hidden flex justify-end mr-4'>
          <button>
            {isMenuOpen ? (
            <AiOutlineClose
            color={isMenuOpen ? 'black' : (isScrolled ? 'black' : 'white')}
            size={30}
            onClick={toggleMenu}
            />) : (
            <GiHamburgerMenu
            color={isScrolled ? 'black' : 'white'}
            size={30}
            onClick={toggleMenu}
            />)}
          </button>
        </div>

        {/* mobile drop down */}
        <div className={`${isMenuOpen ? 'mr-0' : 'mr-[-240px]'} transition-[margin-right] ease-in-out duration-500 fixed flex flex-col bottom-0 top-12 right-0 w-60 z-40 bg-white`}>
              {NavItems.map((item, index) => (
                <Link key={index} href={item.page} onClick={toggleMenu} className='text-2xl font-bold text-slate-950 mx-auto mt-14'>
                  {item.title}
                </Link>
              ))}
        </div>
    </nav>
  )
}

export default Nav