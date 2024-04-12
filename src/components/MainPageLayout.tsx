'use client';

import { useState, useEffect } from 'react';
import {useTranslations} from 'next-intl';
import { motion} from "framer-motion";
import ResponsiveContent from './ResponsiveContent';
import Link from 'next/link';
import {ReactNode} from 'react';

type Props = {
  children?: ReactNode;
};

export default function MainPageLayout({children}: Props) {

    const t = useTranslations('Home');
  return (
    <div className="flex flex-col mt-24">
        <motion.div 
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.4,
            duration: 0.75,
          }}>
        <ResponsiveContent />
        </motion.div>
        
        <motion.div 
          initial={{ y: 45, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.75,
            duration: 0.8,
          }}>
        <div className="flex-wrap font-mono mt-20 bg-artichokegreen-50 flex p-5">
          <div className="p-7 font-semibold flex flex-col text-center">
            <h1 className="text-2xl md:text-3xl italic text-center text-gray-200">{t('h2-1')}</h1>
            <hr className="mt-4 border-2 border-aspargus-50"></hr>
            <ul className="text-base md:text-xl text-gray-200">
              <li className="p-7">
                <p>{t('p2-1')}</p>
              </li>
              <hr className="border-2 border-aspargus-50"></hr>
              <li className="p-7">
                <p>{t('p2-2')}</p>
              </li>
              <hr className="border-2 border-aspargus-50"></hr>
              <li className="p-7">
                <p>{t('p2-3')}</p>
              </li>
            </ul>
          </div>
          {/* <div className="">
            <div className="flex items-center mt-20">
              <Image src="/images/me/_DSC0044.JPG" alt="photo" width={500} height={500} className="rounded-md"/>
            </div>
          </div> */}
        </div>
        </motion.div>

        <motion.div 
          initial={{ y: 45, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.75,
            duration: 0.8,
          }}>
        <div className="bg-aspargus-50 flex flex-col place-items-center p-7">         
          <p className="p-5 text-base md:text-xl text-center font-semibold font-mono text-gray-800">{t('p3-1')}</p>
          <Link href="/Gallery" className="text-2xl font-semibold font-mono relative group w-auto text-gray-800">
          {t('p3-2')}
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gray-800 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform"></span>
          </Link>
        </div>
        </motion.div>
    </div>
  );
}

