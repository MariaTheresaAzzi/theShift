"use client";

import Image from 'next/image';
import Logo from '../public/theshiftlogo.png';
import { Inria_Serif } from '@next/font/google';
import Link from 'next/link';

const Inriaserif = Inria_Serif({
  subsets: ['latin'],
  weight: ['400', '700']
});

const blogs = [
  { id: '1', title: 'How to grow your social media', description: 'At MJA Socials, professionalism is at the core of everything we do. Our team consists of highly skilled professionals who are passionate about their work and dedicated to delivering...', date: '2024-08-08' },
  { id: '2', title: 'The best marketing strategies', description: 'At MJA Socials, professionalism is at the core of everything we do. Our team consists of highly skilled professionals who are passionate about their work and dedicated to delivering...', date: '2024-08-08' },
];

export default function Blog() {
  return (
    <>
      {blogs.map((blog) => (
        <div className='pt-6 pb-6 border-b' key={blog.id}>
          <Link href={`/blog/${blog.id}`} className="block"> {/* Ensure Link wraps entire clickable area */}
            <div className="flex flex-row gap-6 cursor-pointer">
              <Image src={Logo} alt="logo" width={472} height={165} className="flex-[2] py-0" />
              <div className="flex-[3] flex flex-col gap-2 w-full justify-center">
                <p className="text-2xl font-bold">{blog.title}</p>
                <div className="text-sm">{blog.description}</div>
                <div className="text-xs">{blog.date}</div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
}
