"use client";

import Link from 'next/link';
import { useDarkMode } from '../context/DarkModeContext'
import Image from 'next/image';
import Logo from '../public/theshiftlogo.png';
import { Inria_Serif } from '@next/font/google';
import { FaInstagram, FaFacebookF, FaTiktok } from 'react-icons/fa';
import { FaCreativeCommons } from "react-icons/fa6";

const Inriaserif = Inria_Serif({
  subsets: ['latin'],
  weight: ['400', '700']
});

export default function Footer() {
  const { darkMode, toggleDarkMode } = useDarkMode();

    return(
        <div className={`${darkMode ? 'bg-black text-white' : 'text-gray-900'}`}>
        <div className={Inriaserif.className}>
            <div className="flex flex-col px-4 sm:px-8 md:px-10 lg:px-12 border-t">
            <div>
                <Image src={Logo} alt="logo" width={192} height={172} className="py-0 md:py-2" />
            </div>
            <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-6 p-2">
                <div className='flex flex-col gap-2'>
                    <p className="font-bold">Media:</p>
                    <div className='flex space-x-4'>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className={`${darkMode ? 'text-gray-400' : 'dark:text-gray-500'} hover:text-[#8243FF]`}>
                        <FaInstagram className="h-4 w-4" />
                    </a>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className={`${darkMode ? 'text-gray-400' : 'dark:text-gray-500'} hover:text-[#8243FF]`}>
                        <FaFacebookF className="h-4 w-4" />
                    </a>
                    <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className={`${darkMode ? 'text-gray-400' : 'dark:text-gray-500'} hover:text-[#8243FF]`}>
                        <FaTiktok className="h-4 w-4" />
                    </a>
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className="font-bold">Address:</p>
                    <div>City, Country</div>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className="font-bold">Phone number:</p>
                    <div>(123) 456-789</div>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className="font-bold">Email:</p>
                    <div>Info@theshiftagency.com</div>
                </div>
            </div>
            <div>
            <div className="border-t border-gray-300 mt-4"></div>
            </div>
            <div className='flex justify-center items-center py-4 gap-2'>
                <FaCreativeCommons className={`${darkMode ? 'text-gray-400' : 'dark:text-gray-500'} h-4 w-4`} />
                <div>All Right Reserved to The Shift Agency</div>
            </div>
            </div>
        </div>
        </div>
    );

}