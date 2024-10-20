"use client";

import Image from 'next/image';
import Logo from '../../public/theshiftlogo.png';
import { useParams } from 'next/navigation';

const blogs = [
  { id: '1', title: 'How to grow your social media', description: 'At MJA Socials, professionalism is at the core of everything we do. Our team consists of highly skilled professionals who are passionate about their work and dedicated to delivering...', date: '2024-08-08' },
  { id: '2', title: 'The best marketing strategies', description: 'At MJA Socials, professionalism is at the core of everything we do. Our team consists of highly skilled professionals who are passionate about their work and dedicated to delivering...', date: '2024-08-08' },
];

export default function BlogPage() {
  const { id } = useParams(); // Get the blog ID from the dynamic route

  // Find the blog by ID
  const blog = blogs.find(blog => blog.id === id);

  if (!blog) {
    return <div>Error: Blog ID not found</div>; // Handle case where blog is not found
  }

  return (
    <div className="p-10">
      <Image src={Logo} alt="logo" width={92} height={410} className="py-0 md:py-4 w-full" />
      <div className="flex flex-col gap-2">
        <div className="text-4xl font-bold pt-2">{id}- {blog.title}</div>
        <div className="text-sm">{blog.date}</div>
      </div>
      <div className="pt-6">{blog.description}</div>
    </div>
  );
}
