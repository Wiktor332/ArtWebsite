'use client';

import Link from "next/link"
import { motion} from "framer-motion";
import Image from "next/image"
import {useTranslations} from 'next-intl';

function page() {
  const t = useTranslations('Gallery');

  return (
    <motion.div 
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.4,
          duration: 0.75,
    }}>
    <div className="relative flex justify-center mt-28 mb-10 p-4">
          <ul className="flex flex-wrap justify-center gap-20">

            {/* <li>
              <Image src="../../../../images/sketch/57122285_2341238419493488_357912638526586880_n.jpg" alt="photo" width={750} height={450} />
              <p className="font-semibold">Bez nazwy, technika własna</p>
            </li> */}

            <li>
              <Image src="../../../../images/sketch/96276823_265373114849488_1487769790796791808_n.jpg" alt="photo" width={750} height={550} />
              <p className="font-semibold">Bez nazwy, technika własna</p>
            </li>

            <li>
              <Image src="../../../../images/sketch/96287397_265373434849456_2046035566985740288_n.jpg" alt="photo" width={550} height={550} />
              <p className="font-semibold">Bez nazwy, technika własna</p>
            </li>

            <li>
              <Image src="../../../../images/sketch/96285913_265373044849495_889862827970396160_n.jpg" alt="photo" width={850} height={550} />
              <p className="font-semibold">Bez nazwy, technika własna</p>
            </li>

          </ul>
        </div>
        
        <div className="relative flex justify-center p-14">
          
            <ul className="flex flex-wrap rounded-md justify-center text-center border-4 p-2 gap-12">
            <p className="w-full text-2xl font-semibold">{t('h1-4')}</p>
                  <li>
                    <Image src="../../../../images/me/meLandArt.jpeg" alt="photo" width={700} height={550} />
                  </li>

                  <li>
                    <Image src="../../../../images/me/meLandArt2.jpeg" alt="photo" width={650} height={700} />
                  </li>

                  <li>
                    <Image src="../../../../images/sculpture/leśne.jpeg" alt="photo" width={600} height={600} />
                  </li>

                  <li>
                    <Image src="../../../../images/sculpture/leśne2.jpeg" alt="photo" width={600} height={600} />
                  </li>
            </ul>
          </div>
      </motion.div>
  )
}

export default page