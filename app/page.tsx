"use client";

import type { AppProps } from 'next/app';
import { DarkModeProvider } from './context/DarkModeContext';
import Form from './component/Form';
import Services from './component/Services';

export default function Home({ Component, pageProps }: AppProps) {
  return (
    <DarkModeProvider>
      <main className="p-4 sm:p-8 md:p-14">
        <div >
        <div className="text-4xl font-bold pb-6 pt-2">Home</div>
        <div>See how we've transformed brands and driven success, professionalism is at the core of everything we do. We’ve partnered with diverse clients to create impactful digital strategies that deliver real results. From boosting website traffic by over 150% to increasing social media engagement by 300%, our proven approach combines creativity and analytics to achieve your goals. </div>
      </div>

      <Services />
      <Form />
      </main>
    </DarkModeProvider>
  );
}
