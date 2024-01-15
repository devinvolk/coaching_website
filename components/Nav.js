"use client"

import Link from 'next/link';
import React, {useState, useEffect} from 'react'

const Nav = () => {
    const [navVisible, setNavVisible] = useState(false);
    const [isActive, setIsActive] = useState('//');

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
        setIsActive(page)
    }

    useEffect(() => {
      const delay = setTimeout(() => {
        setNavVisible(true);
      }, 500);
    
      return () => {
        clearTimeout(delay);
      }
    }, [])
    


  return (
    <nav className={`fixed z-50 h-14 py-2 md:py-4 md:h-20 w-full ${navVisible ? 'opacity-100 transition-opacity duration-1000' : 'opacity-0'}`}>
        {/* desktop nav */}
        <div className='flex flex-row justify-end space-x-6 mr-4'>
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
    </nav>
  )
}

export default Nav