'use client';

import Link from "next/link"
import { motion} from "framer-motion";
import Image from "next/image"


function page() {
  return (
    <motion.div 
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.4,
          duration: 0.75,
      }}>
        <div className="relative flex justify-center mt-24 mb-10 p-4">
          <ul className="flex flex-wrap justify-center gap-20">

            <li>
              <Image src="../images/sculpture/katarzyna Kuta, Kokon III, rzeźba, 40x40, 2020r.,cena 500zł.JPG" alt="photo" width={750} height={450} />
              <p className="font-mono font-semibold">Kokon III, 40x40, 2020</p>
            </li>

            <li>
              <Image src="../images/sculpture/Katarzyna Kuta, Kokon II, rzeźba, 50x35, 2020r.,cena 500zł.JPG" alt="photo" width={750} height={550} />
              <p className="font-mono font-semibold">Kokon II, 50x35, 2020</p>
            </li>

            <li>
              <Image src="../images/sculpture/Katarzyna Kuta, Kokony - tryptyk, rzeźba, (84x50; 40x40; 50x35) 2020 r., cena 2500 zł.JPG" alt="photo" width={850} height={550} />
              <p className="font-mono font-semibold">Kokon - tryptyk, (84x50; 40x40, 50x35), 2020</p>
            </li>

            <li>
              <Image src="../images/sculpture/Katarzyna Kuta, Wzorzec geograficzny,58x52x30, 2019r,cena 1200zł.JPG" alt="photo" width={550} height={550} />
              <p className="font-mono font-semibold">Wzorzec geograficzny, 58x52x30, 2019</p>
            </li>
            
            <li>
              <Image src="../images/sculpture/Katarzyna Kuta,Kokon I, rzeźba, wym. 84x50, 2020r.,1500zł.JPG" alt="photo" width={750} height={550} />
              <p className="font-mono font-semibold">Kokon I, 84x50, 2020</p>
            </li>

          </ul>
        </div>
      </motion.div>
  )
}

export default page