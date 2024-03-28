import Link from "next/link"
import Image from "next/image"

function page() {
  return (
    
        <div className="relative flex justify-center mt-10">
          <ul className="flex flex-wrap justify-center space-y-20 space-x-10">

            <li>
              <Image src="/images/painting/jesienna sonata.jpg olej na płotnie, 80x120 cm , 2023 rok.jpg" alt="photo" width={750} height={550} />
              <p className="font-mono">Jesienna sonata, 80x120, 2023</p>
            </li>

            <li>
              <Image src="/images/painting/jesienna sonata 3.jpg" alt="photo" width={750} height={550} />
              <p className="font-mono">Jesienna sonata 3</p>
            </li>

            <li>
              <Image src="/images/painting/Nocą w lesie, olej na płótnie 3d, 100x100 cm, 2022.jpg" alt="photo" width={850} height={550} />
              <p className="font-mono">Nocą w lesie, 100x100, 2022</p>
            </li>

            <li>
              <Image src="/images/painting/Rzeka , olej na płótnie, 120x80 cm , 2023 .jpg" alt="photo" width={550} height={550} />
              <p className="font-mono">Rzeka, 120x80, 2023</p>
            </li>
            
            <li>
              <Image src="/images/painting/Rzeka II, olej na płótnie, 120x80 cm, 2023 .jpg" alt="photo" width={750} height={550} />
              <p className="font-mono">Rzeka II, 120x80, 2023</p>
            </li>

            <li>
              <Image src="/images/painting/Unerwienie, olej na płótnie 3d, 100x100 cm, 2022.jpg" alt="photo" width={750} height={550} />
              <p className="font-mono">Unerwienie, 100x100, 2022</p>
            </li>

            <li>
              <Image src="/images/painting/Wiosna, olej na płótnie, 80x120cm , 2022.jpg" alt="photo" width={750} height={550} />
              <p className="font-mono">Wiosna, 80x120, 2022</p>
            </li>

            <li>
              <Image src="/images/painting/z cyklu _Dynamika natury_ olej na płótnie, 100x160 cm, 2022 rok (1).jpg" alt="photo" width={750} height={550} />
              <p className="font-mono">Z cyklu dynamika natury, 100x160, 2022</p>
            </li>

            <li>
              <Image src="/images/painting/Duchy leśne, olej na płótnie 3d, 100x160 cm, 2023.jpg" alt="photo" width={750} height={550} />
              <p className="font-mono">Duchy leśne, 100x160, 2023</p>
            </li>

            <li>
              <Image src="/images/painting/Eksplozja, olej na płótnie, 80x120 cm, 2024.jpg" alt="photo" width={750} height={550} />
              <p className="font-mono">Eksplozja, 80x120, 2024</p>
            </li>

            <li>
              <Image src="/images/painting/Galaktyka, olej na płótnie 3d, 100x100 cm, 2022 rok.jpg" alt="photo" width={750} height={550} />
              <p className="font-mono">Galaktyka, 100x100, 2022</p>
            </li>

            <li>
              <Image src="/images/painting/Bez tytułu, olej na płótnie 3d, 100x100 cm, 2023.jpg" alt="photo" width={750} height={550} />
              <p className="font-mono">Bez tytułu, 100x100, 2023</p>
            </li>

            <li>
              <Image src="/images/painting/bez tytułu, olej na płótnie, 50x50, 2023 rok.jpg" alt="photo" width={750} height={550} />
              <p className="font-mono">Bez tytułu, 50x50, 2023</p>
            </li>

          </ul>
        </div>
  )
}

export default page