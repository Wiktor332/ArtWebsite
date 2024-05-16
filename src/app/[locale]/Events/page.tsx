
'use client';

import Image from "next/image"
import { motion} from "framer-motion";
import {useTranslations} from 'next-intl';
  

function Events() {
  const t = useTranslations('Events');
  return (
    <motion.div 
    initial={{ y: 25, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{
      delay: 0.4,
      duration: 0.75,
    }}>
    <div className="flex flex-col p-5 mt-24"> 
      <h1 className="text-4xl font-semibold p-7 text-gray-800">{t('ev0')}</h1>
        <ul className="text-base md:text-xl list-outside font-semibold mb-4 text-gray-800">
            <li className="p-3">
              <p>{t('ev1')}</p>
            </li>
            <li className="p-3">
              <p>{t('ev2')}</p>
            </li>
            <li className="p-3">
            <p>{t('ev3')}</p>
            </li>
            
            <li className="p-3">
              <p>{t('ev4')}</p>
            </li>
            <li className="p-3">
              <p>{t('ev5')}</p>
            </li>
            <li className="p-3">
              <p>{t('ev6')}</p>
            </li>
            <li className="p-3">
              <p>{t('ev7')}</p>
            </li>
            <li className="p-3">
              <p>{t('ev8')}</p>
            </li>
            <li className="p-3">
              <p>{t('ev9')}</p>
            </li>
            <li className="p-3">
              <p>{t('ev10')}</p>
            </li>
            <li className="p-3">
              <p>{t('ev11')}</p>
            </li>
            <li className="p-3">
              <p>{t('ev12')}</p>
            </li>
            <li className="p-3">
              <p>{t('ev13')}</p>
            </li>

            <div className="hidden justify-center xl:flex xl:flex-col">
              <ul className="flex items-center justify-center gap-20 p5">
                <li>
                  <Image src="../../images/events/10.jpg" alt="photoEvents" width={400} height={400}></Image>
                </li>
                <li>
                  <Image src="../../images/events/11.jpg" alt="photoEvents" width={400} height={400}></Image>
                </li>
              </ul>
            </div>
          
        </ul>
    </div>
  </motion.div>
  )
}

export default Events