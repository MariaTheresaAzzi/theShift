import { Inria_Serif, Inter } from '@next/font/google';
import Form from '../component/Form';

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
      <div className="p-8">
        <div className="text-3xl font-bold pb-4">Get in Touch</div>
        <div className={Inriaserif.className}>We're here to help your brand forward with tailored strategies and measurable results. Transform your digital presence NOW. 
        Whether you have a question, need a consultation, or just want to learn more about our services, feel free to reach out. Our team at The Shift is ready to assist you.</div>
        {/* form */}
        <Form />
      </div>
    );

}