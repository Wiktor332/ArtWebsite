import {NextIntlClientProvider, useMessages} from 'next-intl';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import HeaderMobile from "@/src/components/NavbarMobile";
import {ReactNode} from "react";
import {locales} from '../../config';
import { unstable_setRequestLocale } from 'next-intl/server';


const inter = Inter({ subsets: ["latin"] });

type Props = {
  children: ReactNode;
  params: {locale: string};
};

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export const metadata: Metadata = {
  title: "Katarzyna Kuta",
  description: "Generated by create next app",
};

export default function LocaleLayout({
  children,
  params: { locale },
}: Props) {
  unstable_setRequestLocale(locale);
  const messages = useMessages();
  return (
    <html lang={locale}>
      <body className="bg-aspargus-50">
        <NextIntlClientProvider locale={locale} messages={messages}>
           <Navbar />
             <HeaderMobile /> 
               <main className="flex flex-col justify-center items-center flex-grow overflow-hidden">
                {children}
               </main>
           <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
