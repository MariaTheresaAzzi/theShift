"use client";

import { Inria_Serif } from '@next/font/google';
import { useDarkMode } from '../context/DarkModeContext'

const Inriaserif = Inria_Serif({
  subsets: ['latin'],
  weight: ['400', '700']
});


export default function Services() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className='p-2'>
        <div className={Inriaserif.className}>
            <p className='text-3xl font-bold pb-6'>1. Strategy & Consulting</p>
        </div>
        <hr className="my-4 border-t border-gray-300" />
        <div>We create tailored digital marketing strategies based on your business goals and audience, helping you navigate everything from SEO and paid ads to content strategy and influencer marketing for measurable success.</div>
    </div>
  );

}