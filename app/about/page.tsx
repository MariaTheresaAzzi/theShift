import { Inria_Serif, Inter } from '@next/font/google';
import Image from 'next/image';

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
        <div className="text-4xl font-bold pb-6 pt-2">About The Shift</div>
        <div className={Inriaserif.className}>At The Shift, we don’t just work for your business—we become a part of it.<br/>
        The Shift Media Group, a social media agency based out of Los Angeles specializing in celebrity and lifestyle brand social media, is expanding their team and has immediate openings
        </div>

        {/* have images come and go and shake */}
        <div className={Inriaserif.className}>
        <div className='flex flex-col-reverse lg:flex-row gap-8 pt-14 items-center justify-center'> 
          <div className='w-full pr-2 lg:pr-8'>
          We understand that your brand is more than just a project, it’s your passion, your vision, and your livelihood. That’s why we dive deep into your world, aligning ourselves with your goals, dreams, and challenges. Our mission is to be more than a service provider—we’re your dedicated partner in success.
          <br/>
          <br/>
          With every strategy we build, every website we design, and every piece of content we create, we do so with the same care and commitment as if it were our own. We’re here to turn your challenges into opportunities, your ideas into impact, and your vision into reality. 
          <br/>
          <br/>
          When you succeed, we succeed. Together, we’ll shape a future where your brand stands out, grows, and thrives.
          At The Shift, we don’t just deliver results—we help you create lasting change. Let’s shift your business to new heights, together.
          </div>
          
          <div className="relative h-[32rem] w-full">
            {/* Image 1 with float animation */}
              <div className="absolute top-0 left-0 w-50% h-72 animate-float transition-transform duration-500 ease-in-out hover:scale-105 hover:animate-shake">
                <Image src="https://via.placeholder.com/800x900" alt="Image 1" width={192} height={288} />
              </div>

            {/* Image 2 with float animation */}
              <div className="absolute top-20 left-60 w-48 h-55 animate-float2 transition-transform duration-500 ease-in-out hover:scale-105 hover:animate-shake">
                <Image src="https://via.placeholder.com/800x900" alt="Image 2" width={192} height={288} />
              </div>

            {/* Image 3 with float animation */}
              <div className="absolute top-60 left-20 w-48 h-55 animate-float transition-transform duration-500 ease-in-out hover:scale-105 hover:animate-shake">
                <Image src="https://via.placeholder.com/800x900" alt="Image 3" width={192} height={288} />
              </div>
          </div>
        </div>
        </div>
      </div>
    );

}
