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
              <Image src="./images/painting/jesienna sonata.jpg olej na płotnie, 80x120 cm , 2023 rok.jpg" alt="photo" width={750} height={550} />
              <p className="font-mono font-semibold">Jesienna sonata, 80x120, 2023</p>
            </li>

            <li>
              <Image src="./images/painting/jesienna sonata 3.jpg" alt="photo" width={750} height={550} />
              <p className="font-mono font-semibold">Jesienna sonata 3</p>
            </li>

            <li>
              <Image src="./images/painting/Nocą w lesie, olej na płótnie 3d, 100x100 cm, 2022.jpg" alt="photo" width={850} height={550} />
              <p className="font-mono font-semibold">Nocą w lesie, 100x100, 2022</p>
            </li>

            <li>
              <Image src="./images/painting/Rzeka , olej na płótnie, 120x80 cm , 2023 .jpg" alt="photo" width={550} height={550} />
              <p className="font-mono font-semibold">Rzeka, 120x80, 2023</p>
            </li>
            
            <li>
              <Image src="./images/painting/Rzeka II, olej na płótnie, 120x80 cm, 2023 .jpg" alt="photo" width={750} height={550} />
              <p className="font-mono font-semibold">Rzeka II, 120x80, 2023</p>
            </li>

            <li>
              <Image src="./images/painting/Unerwienie, olej na płótnie 3d, 100x100 cm, 2022.jpg" alt="photo" width={750} height={550} />
              <p className="font-mono font-semibold">Unerwienie, 100x100, 2022</p>
            </li>

            <li>
              <Image src="./images/painting/Wiosna, olej na płótnie, 80x120cm , 2022.jpg" alt="photo" width={750} height={550} />
              <p className="font-mono font-semibold">Wiosna, 80x120, 2022</p>
            </li>

            <li>
              <Image src="./images/painting/z cyklu _Dynamika natury_ olej na płótnie, 100x160 cm, 2022 rok (1).jpg" alt="photo" width={750} height={550} />
              <p className="font-mono font-semibold">Z cyklu dynamika natury, 100x160, 2022</p>
            </li>

            <li>
              <Image src="./images/painting/Duchy leśne, olej na płótnie 3d, 100x160 cm, 2023.jpg" alt="photo" width={750} height={550} />
              <p className="font-mono font-semibold">Duchy leśne, 100x160, 2023</p>
            </li>

            <li>
              <Image src="./images/painting/Eksplozja, olej na płótnie, 80x120 cm, 2024.jpg" alt="photo" width={750} height={550} />
              <p className="font-mono font-semibold">Eksplozja, 80x120, 2024</p>
            </li>

            <li>
              <Image src="./images/painting/Galaktyka, olej na płótnie 3d, 100x100 cm, 2022 rok.jpg" alt="photo" width={750} height={550} />
              <p className="font-mono font-semibold">Galaktyka, 100x100, 2022</p>
            </li>

            <li>
              <Image src="./images/painting/Bez tytułu, olej na płótnie 3d, 100x100 cm, 2023.jpg" alt="photo" width={750} height={550} />
              <p className="font-mono font-semibold">Bez tytułu, 100x100, 2023</p>
            </li>

            <li>
              <Image src="./images/painting/bez tytułu, olej na płótnie, 50x50, 2023 rok.jpg" alt="photo" width={750} height={550} />
              <p className="font-mono font-semibold">Bez tytułu, 50x50, 2023</p>
            </li>

            <li>
              <Image src="./images/painting/_DSC0024.JPG" alt="photo" width={750} height={550} />
              <p className="font-mono font-semibold">Bez tytułu</p>
            </li>

            <li>
              <Image src="./images/painting/_DSC0034.JPG" alt="photo" width={750} height={550} />
              <p className="font-mono font-semibold">Bez tytułu</p>
            </li>

            <li>
              <Image src="./images/painting/1701860698641.jpg" alt="photo" width={750} height={550} />
              <p className="font-mono font-semibold">Bez tytułu</p>
            </li>

          </ul>
        </div>
      </motion.div>
  )
}

export default page