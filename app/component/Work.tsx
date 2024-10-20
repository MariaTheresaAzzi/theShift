"use client";

import Image from 'next/image';
import Logo from '../public/theshiftlogo.png';
import { Inria_Serif } from '@next/font/google';
import { useDarkMode } from '../context/DarkModeContext'

const Inriaserif = Inria_Serif({
  subsets: ['latin'],
  weight: ['400', '700']
});


const Projects = [
  { id: '1', key: '1',title: 'Social Media Marketing', description: 'Branding' },
  { id: '2', key: '2', title: 'Website Design', description: 'Web Design' },
];

export default function Work() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="grid grid-cols-1 gap-10 items-center py-8 px-2 md:grid-cols-2 p-2 pt-14">
      {Projects.map((project) => (
        <div>
        <Image src={Logo} alt="logo" width={92} height={72} className="py-0 w-full md:py-4" />
        <div className="flex flex-row">
            <p className="font-bold items-center justify-center">{project.title}</p>
            <div className="text-xs ml-auto font-bold border border-[#783feb] text-[#783feb] p-1 px-3 rounded-xl">{project.description}</div>
        </div>
        </div>
      ))}
    </div>
  );

}