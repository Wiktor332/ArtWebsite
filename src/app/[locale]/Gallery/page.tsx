'use client';

import { motion} from "framer-motion";
import Link from "next/link"
import Image from "next/image"
import { ClassNames } from "@emotion/react";
import '../../globals.css';
import {useTranslations} from 'next-intl';
import {ReactNode} from 'react';

type Props = {
  children?: ReactNode;
};


export default function Gallery({children}: Props) {

  const t = useTranslations('Gallery');
  return (
    <motion.div 
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.4,
            duration: 0.75,
          }}>
    <div className="pb-20 mt-20">
        <h1 className="text-center text-4xl  mt-24 font-mono font-semibold italic">{t('h1-0')}</h1>
        <div className="relative flex justify-center mt-8 p-4">
            <ul className="flex flex-wrap justify-center gap-10">

                <Link href="/Gallery/painting">
                  <li className="border-4 rounded-md p-5 text-center hover:shadow-3xl transition duration-500 ease-in-out containersGallery"> 
                      <p className="font-mono text-xl font-semibold pb-3">{t('h1-1')}</p>
                      <Image src="./images/painting/Wiosna, olej na płótnie, 80x120cm , 2022.jpg" alt="photo" width={750} height={450} className="rounded-md"/>
                  </li>
                </Link>

                <Link href="/Gallery/sculpture">
                  <li className="border-4 rounded-md p-5 text-center hover:shadow-3xl transition duration-500 ease-in-out containersGallery">
                      <p className="font-mono text-xl font-semibold pb-3">{t('h1-2')}</p>
                      <Image src="./images/sculpture/katarzyna Kuta, Kokon III, rzeźba, 40x40, 2020r.,cena 500zł.JPG" alt="photo" width={750} height={450} className="rounded-md"/>
                  </li>
                </Link>

                <Link href="/Gallery/sketch">
                  <li className="border-4 rounded-md p-5 text-center hover:shadow-3xl transition duration-500 ease-in-out containersGallery">
                      <p className="font-mono text-xl font-semibold pb-3">{t('h1-3')}</p>
                      <Image src="./images/sketch/96285913_265373044849495_889862827970396160_n.jpg" alt="photo" width={750} height={450} className="rounded-md"/>
                  </li>
                </Link>


            </ul>
        </div>
    </div>
    </motion.div>
  )
}

