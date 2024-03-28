import Link from "next/link"
import Image from "next/image"


function page() {
  return (
        <div className="relative flex justify-center mt-10">
          <ul className="flex flex-wrap justify-center space-y-20 space-x-10">

            <li>
              <Image src="/images/sculpture/katarzyna Kuta, Kokon III, rzeźba, 40x40, 2020r.,cena 500zł.jpg" alt="photo" width={750} height={450} />
              <p className="font-mono">Kokon III, 40x40, 2020</p>
            </li>

            <li>
              <Image src="/images/sculpture/Katarzyna Kuta, Kokon II, rzeźba, 50x35, 2020r.,cena 500zł.jpg" alt="photo" width={750} height={550} />
              <p className="font-mono">Kokon II, 50x35, 2020</p>
            </li>

            <li>
              <Image src="/images/sculpture/Katarzyna Kuta, Kokony - tryptyk, rzeźba, (84x50; 40x40; 50x35) 2020 r., cena 2500 zł.jpg" alt="photo" width={850} height={550} />
              <p className="font-mono">Kokon - tryptyk, (84x50; 40x40, 50x35), 2020</p>
            </li>

            <li>
              <Image src="/images/sculpture/Katarzyna Kuta, Wzorzec geograficzny,58x52x30, 2019r,cena 1200zł.jpg" alt="photo" width={550} height={550} />
              <p className="font-mono">Wzorzec geograficzny, 58x52x30, 2019</p>
            </li>
            
            <li>
              <Image src="/images/sculpture/Katarzyna Kuta,Kokon I, rzeźba, wym. 84x50, 2020r.,1500zł.jpg" alt="photo" width={750} height={550} />
              <p className="font-mono">Kokon I, 84x50, 2020</p>
            </li>

          </ul>
        </div>
  )
}

export default page