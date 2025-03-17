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
        <div className="flex justify-center mt-24 mb-10 p-4">
          <ul className="flex flex-wrap justify-center gap-20">

            {/* <li>
              <Image src="../../../../images/painting/Rzeka II, olej na płótnie, 120x80 cm, 2023 .jpg" alt="photo" height={500} width={400}/>
              <p className="font-semibold">Rzeka II, 120x80, 2023</p>
            </li> */}

            <li>
              <Image src="/images/painting/Rzeka II, olej na płótnie, 120x80 cm, 2023 .jpg" alt="photo" height={500} width={400}/>
              <p className="font-semibold italic mt-[2px]">Rzeka II, 120x80, 2023</p>
            </li>

            {/* <li>
              <Image src="/images/painting/jesienna sonata 3.jpg" alt="photo"  width={450} height={450}/>
              <p className="font-semibold italic mt-[2px]">Jesienna sonata 3</p>
            </li> */}

            <li>
              <Image src="/images/painting/Nocą w lesie, olej na płótnie 3d, 100x100 cm, 2022.jpg" alt="photo" width={450} height={450} />
              <p className="font-semibold italic mt-[2px]">Nocą w lesie, 100x100, 2022</p>
            </li>

            <li>
              <Image src="/images/painting/Rzeka , olej na płótnie, 120x80 cm , 2023 .jpg" alt="photo" height={500} width={400}/>
              <p className="font-semibold italic mt-[2px]">Rzeka, 120x80, 2023</p>
            </li>

            <li>
              <Image src="/images/painting/Ogień i dym, olej na płótnie 100x160 cm.jpeg" alt="photo" height={500} width={650}/>
              <p className="font-semibold italic mt-[2px]">Ogień i dym, olej na płótnie 100x160</p>
            </li>

            <li>
              <Image src="/images/painting/Unerwienie, olej na płótnie 3d, 100x100 cm, 2022.jpg" alt="photo" width={450} height={450}/>
              <p className="font-semibold italic mt-[2px]">Unerwienie, 100x100, 2022</p>
            </li>

            <li>
              <Image src="/images/painting/jesienna sonata.jpg olej na płotnie, 80x120 cm , 2023 rok.jpg" alt="photo" width={600} height={400}/>
              <p className="font-semibold italic mt-[2px]">Jesienna sonata, 80x120, 2023</p>
            </li>

            <li>
              <Image src="/images/painting/Wiosna, olej na płótnie, 80x120cm , 2022.jpg" alt="photo" width={600} height={400}/>
              <p className="font-semibold italic mt-[2px]">Wiosna, 80x120, 2022</p>
            </li>

            <li>
              <Image src="/images/painting/z cyklu _Dynamika natury_ olej na płótnie, 100x160 cm, 2022 rok (1).jpg" alt="photo" width={750} height={450}/>
              <p className="font-semibold italic mt-[2px]">Z cyklu "Dynamika natury", 100x160, 2022</p>
            </li>

            <li>
              <Image src="/images/painting/Duchy leśne, olej na płótnie 3d, 100x160 cm, 2023.jpg" alt="photo" width={750} height={450}/>
              <p className="font-semibold italic mt-[2px]">Duchy leśne, 100x160, 2023</p>
            </li>

            <li>
              <Image src="/images/painting/Eksplozja, olej na płótnie, 80x120 cm, 2024.jpg" alt="photo" width={450} height={450}/>
              <p className="font-semibold italic mt-[2px]">Eksplozja, 100x100, 2024</p>
            </li>

            <li>
              <Image src="/images/painting/Galaktyka, olej na płótnie 3d, 100x100 cm, 2022 rok.jpg" alt="photo" width={450} height={450}/>
              <p className="font-semibold italic mt-[2px]">Galaktyka, 100x100, 2022</p>
            </li>

            <li>
              <Image src="/images/painting/Bez tytułu, olej na płótnie 3d, 100x100 cm, 2023.jpg" alt="photo" width={450} height={450}/>
              <p className="font-semibold italic mt-[2px]">Bez tytułu, 100x100, 2023</p>
            </li>

            <li>
              <Image src="/images/painting/bez tytułu, olej na płótnie, 50x50, 2023 rok.jpg" alt="photo" width={350} height={350}/>
              <p className="font-semibold italic mt-[2px]">Bez tytułu, 50x50, 2023</p>
            </li>

            <li>
              <Image src="/images/painting/_DSC0024.JPG" alt="photo" width={750} height={450}/>
              <p className="font-semibold italic mt-[2px]">Z cyklu "Dynamika natury", 100x160</p>
            </li>

            <li>
              <Image src="/images/painting/_DSC0034.JPG" alt="photo" width={750} height={450}/>
              <p className="font-semibold italic mt-[2px]">Z cyklu "Dynamika natury", 100x160</p>
            </li>

            <li>
              <Image src="/images/painting/Zima w Kozim Borze, olej na płotnie, 80x120 cm, 2024.jpg" alt="photo" width={750} height={450}/>
              <p className="font-semibold italic mt-[2px]">Zima w Kozim Borze, olej na płótnie, 80x120 cm, 2024</p>
            </li>

            {/* <li>
              <Image src="/images/painting/1701860698641.jpg" alt="photo" width={750} height={450}/>
              <p className="font-semibold italic">Z cyklu "Dynamika natury", 100x160</p>
            </li>  */}

          </ul>
        </div>
      </motion.div>
  )
}

export default page