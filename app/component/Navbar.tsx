"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Logo from '../public/blacklogo.png';
import { Inria_Serif } from '@next/font/google';
import { useDarkMode } from '../context/DarkModeContext'

const Inriaserif = Inria_Serif({
  subsets: ['latin'],
  weight: ['400', '700']
});


export default function Navbar() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={Inriaserif.className}>
    <div className={`${darkMode ? 'bg-black text-white ' : 'text-gray-900'}`}>
      {/* <nav className="flex px-6 border-b md:shadow-lg items-center relative"> */}
      <nav className="flex px-4 sm:px-8 md:px-10 lg:px-12 border-b items-center relative">
        <div className="text-lg font-bold md:py-0 py-4 ">
        <Link href="/">
        <Image src={Logo} alt="logo" width={92} height={72} className="py-0 md:py-4" />
        </Link>
        </div>
        {/* <ul className="md:px-2 ml-auto md:flex md:space-x-2 absolute md:relative top-full left-0 right-0"> */}
        <ul className={`md:flex md:space-x-2 md:ml-auto md:relative absolute top-full left-0 right-0 ${menuOpen ? 'block' : 'hidden md:block'} ${darkMode ? 'bg-black text-white ' : ' text-gray-900 '}`}>
          <li>
          <Link href="/about" className="flex md:inline-flex p-4 items-center hover:text-[#8243FF] hover:underline hover:underline-offset-4 hover:decoration-[#8243FF]">About</Link>
          </li>
          <li>
          <Link href="/services" className="flex md:inline-flex p-4 items-center hover:text-[#8243FF] hover:underline hover:underline-offset-4 hover:decoration-[#8243FF]">Services</Link>
          </li>
          <li>
          <Link href="/work" className="flex md:inline-flex p-4 items-center hover:text-[#8243FF] hover:underline hover:underline-offset-4 hover:decoration-[#8243FF]">Work</Link>
          </li>
          <li>
          <Link href="/blog" className="flex md:inline-flex p-4 items-center hover:text-[#8243FF] hover:underline hover:underline-offset-4 hover:decoration-[#8243FF]">Blog</Link>
          </li>
          <li>
          <Link href="/contact" className="flex md:inline-flex p-4 items-center hover:text-[#8243FF] hover:underline hover:underline-offset-4 hover:decoration-[#8243FF]">Contact</Link>
          </li>
          <li className="hidden md:flex items-center ml-auto">
          <div className="border-l border-gray-300 h-8"></div>
          </li>

          {/* Light/Dark Mode Toggle Icon for Bigger Screens */}
          <li className="hidden md:flex items-center ml-auto">
          <Link href={''} className="flex md:inline-flex p-4 items-center hover:text-[#8243FF]">EN</Link>
            <div className="cursor-pointer flex md:inline-flex p-4 items-center" onClick={toggleDarkMode}>
              {darkMode ? (
                <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </div>
          </li>
        </ul>

        {/* Light/Dark Mode Toggle Icon for Smaller Screens */}
        <div className="flex md:hidden ml-auto items-center">
          <Link href={''} className="flex md:inline-flex p-4 items-center hover:text-[#8243FF]">EN</Link>
          <div className="cursor-pointer flex md:inline-flex p-4 items-center" onClick={toggleDarkMode}>
            {darkMode ? (
              <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            ) : (
              <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            )}
          </div>
            {/* Hamburger Icon for Small Screens */}
        <div className="ml-auto md:hidden flex items-center p-4">
            <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
          </div>
      </nav>
    </div>
    </div>
  );
}
