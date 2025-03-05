


// app/layout.js
import React from 'react';
import {LanguageProvider} from '@/app/LanguageContext';
import { Roboto, Lato } from 'next/font/google';
import CreateUser from './components/CreateUser';
// Применение шрифтов:
const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

const lato = Lato({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export default function Layout({ children }) {
  return (
    <html lang="ua">
      <head />
      <body className={lato.className}>
      
        {/* <Home /> */}
        <LanguageProvider>
          
          <main >
          <CreateUser/> 
            {children}</main>
        </LanguageProvider>
        </body>
    </html>
  );
}
