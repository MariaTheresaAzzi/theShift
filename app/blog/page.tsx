import { Inria_Serif, Inter } from '@next/font/google';
import Blog from '../component/Blogs';

const Inriaserif = Inria_Serif({
  subsets: ['latin'],
  weight: ['400', '700']
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700']
});

export default function Page() {
  
    return(
      <div className="p-4 sm:p-8 md:p-14">
        <div className="text-4xl font-bold pb-6 pt-2">Blogs</div>
        <div className={Inriaserif.className}>At MJA Socials, professionalism is at the core of everything we do. Our team consists of highly skilled professionals who are passionate about their work and dedicated to delivering unparalleled results for our clients.<br/>
        Ready to transform your brand's social media presence?</div>
        {/* work */}
        <div className="flex flex-col p-4">
        <Blog />
        </div>
      </div>
    );

}