"use client";

import type { AppProps } from 'next/app';
import { DarkModeProvider } from './context/DarkModeContext';

export default function Home({ Component, pageProps }: AppProps) {
  return (
    <DarkModeProvider>
      <main className="">
        <div>HOme</div>
      </main>
    </DarkModeProvider>
  );
}
