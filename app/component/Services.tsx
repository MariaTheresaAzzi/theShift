"use client";

import { Inria_Serif } from '@next/font/google';
import { useDarkMode } from '../context/DarkModeContext'

const Inriaserif = Inria_Serif({
  subsets: ['latin'],
  weight: ['400', '700']
});


const services = [
  { id: '1', title: '1. Strategy & Consulting', description: 'We create tailored digital marketing strategies based on your business goals and audience, helping you navigate everything from SEO and paid ads to content strategy and influencer marketing for measurable success.' },
  { id: '2', title: '2. Platform Management', description: 'Our Platform Management service ensures consistent brand messaging and engagement across all digital channels, handling everything from content creation and social media management to overall brand strategy.' },
  { id: '3', title: '3. Branding & Content Creation', description: 'Through our Branding and Content Creation service, we craft a unique brand identity and produce compelling content that resonates with your audience, ensuring your brand stands out both visually and strategically' },
  { id: '4', title: '4. Paid Media', description: 'Our Paid Media service maximizes your reach with targeted ads across search engines and social media platforms, driving traffic, boosting conversions, and delivering measurable results with precision.' },
  { id: '5', title: '5. Analytics', description: 'With our Analytics service, we track key metrics and provide data-driven insights, helping you understand what’s working and where to optimize, ensuring continuous improvement in your digital performance.' },
  { id: '6', title: '6. Web Development & Design', description: 'We design and build high-performance websites that are visually appealing, user-friendly, and optimized for SEO, ensuring your digital presence not only looks great but also drives engagement and growth.' },
];


export default function Services() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="grid grid-cols-1 gap-12 items-start py-8 px-2 sm:grid-cols-2 lg:grid-cols-3 p-2 pt-14">
      {services.map((service) => (
        <div key={service.id} className="flex flex-col h-full">
          <div className={Inriaserif.className}>
            <p className="text-3xl font-bold pb-6"> 
              {service.title}
            </p>
          </div>
          
          <div className="flex-grow">
          </div>
          
          <hr className="my-4 border-t border-gray-300" />
          <div className="ml-auto">
            {service.description}
          </div>
        </div>
      ))}
    </div>
  );
  

}