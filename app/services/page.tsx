import { Inria_Serif, Inter } from '@next/font/google';
import Services from '../component/Services';

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
        <div className="text-4xl font-bold pb-6 pt-2">What We Offer</div>
        <div className={Inriaserif.className}>Is navigating the online world leaving you confused? Don’t worry, we’ve got your back! At The Shift, we specialize in turning chaos into clarity. Our expert team works collaboratively to create customized solutions that drive results—From building your brand strategy to executing powerful marketing campaigns, we’ll help you find your way and achieve real results. </div>
        {/* serrvices */}
        {/* <div className="grid grid-cols-1 gap-10 items-center py-8 px-2 sm:grid-cols-2 md:grid-cols-3"> */}
        <Services />
        {/* </div> */}
      </div>
    );

}