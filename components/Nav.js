"use client"

import React, {useState, useEffect} from 'react'

const Nav = () => {
    const [navVisible, setNavVisible] = useState(false);

    const NavItems = [
        {
            title: "Home",
            page: 'home',
        },
        {
            title: 'Coaching',
            page: 'coaching',
        },
        {
            title: 'Results',
            page: 'results',
        },
        {
            title: 'Partners',
            page: 'partners',
        },
        {
            title: 'Social',
            page: 'social',
        },
        {
            title: 'Contact',
            page: 'contact',
        },
    ]

    useEffect(() => {
      const delay = setTimeout(() => {
        setNavVisible(true);
      }, 1000);
    
      return () => {
        clearTimeout(delay);
      }
    }, [])
    


  return (
    <nav className={`fixed z-50 h-14 py-2 md:py-4 md:h-20 w-full ${navVisible ? 'opacity-100 transition-opacity duration-1000' : 'opacity-0'}`}>
        {/* desktop nav */}
        <div className='flex flex-row justify-end space-x-6 mr-4'>
            {NavItems.map((item, index) => (
                <div className='text-xl cursor-pointer transition-colors duration-300 hover:text-gray-700' key={index}>{item.title}</div>
            ))}
        </div>
    </nav>
  )
}

export default Nav