import Image from "next/image";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import type { AppProps } from 'next/app';
import { DarkModeProvider } from './context/DarkModeContext';

export default function Home({ Component, pageProps }: AppProps) {
  return (
    <DarkModeProvider>
    <div className="">
      <main className="">
      <Navbar />
      <div>New</div>
      <Footer />
      </main>
    </div>
    </DarkModeProvider>
  );
}
