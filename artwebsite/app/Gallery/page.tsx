import Link from "next/link"
import Image from "next/image"

function page() {
  return (
    <div className="pb-20">
        <h1 className="text-center pt-10 text-4xl font-mono font-semibold italic">Natura to instynkt sztuki</h1>
        <div className="relative flex flex-col justify-center mt-10">
            <ul className="flex flex-wrap justify-center space-y-20 space-x-10">

                <Link href="/Gallery/painting">
                <li className="border-4 rounded-md p-5 text-center hover:shadow-3xl">
                    <p className="font-mono text-xl font-semibold pb-3">Zapraszam do odwiedzenia sekcji: Malarstwo</p>
                    <Image src="/images/painting/Wiosna, olej na płótnie, 80x120cm , 2022.jpg" alt="photo" width={750} height={450} className="rounded-md"/>
                </li>
                </Link>

                <Link href="/Gallery/sculpture">
                <li className="border-4 rounded-md p-5 text-center hover:shadow-3xl">
                    <p className="font-mono text-xl font-semibold pb-3">Zapraszam do odwiedzenia sekcji: Rzeźby</p>
                    <Image src="/images/sculpture/katarzyna Kuta, Kokon III, rzeźba, 40x40, 2020r.,cena 500zł.jpg" alt="photo" width={750} height={450} className="rounded-md"/>
                </li>
                </Link>

                <Link href="/Gallery/sketch">
                <li className="border-4 rounded-md p-5 text-center hover:shadow-3xl">
                    <p className="font-mono text-xl font-semibold pb-3">Zapraszam do odwiedzenia sekcji: Rysunek</p>
                    <Image src="/images/sketch/96285913_265373044849495_889862827970396160_n.jpg" alt="photo" width={750} height={450} className="rounded-md"/>
                </li>
                </Link>


            </ul>
        </div>
    </div>
  )
}

export default page