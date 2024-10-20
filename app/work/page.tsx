import { Inria_Serif, Inter } from '@next/font/google';
import Work from '../component/Work';

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
        <div className="text-4xl font-bold pb-6 pt-2">Our Proven Work</div>
        <div className={Inriaserif.className}>See how we've transformed brands and driven success, professionalism is at the core of everything we do. We’ve partnered with diverse clients to create impactful digital strategies that deliver real results. From boosting website traffic by over 150% to increasing social media engagement by 300%, our proven approach combines creativity and analytics to achieve your goals. </div>
        {/* work */}
        <Work />
      </div>
    );

}