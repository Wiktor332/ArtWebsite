
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex justify-center bg-hero/[.06] bg-no-repeat bg-center">
      <h1 className="font-bold text-teal-500 text-2xl">
        ArtWebsite dla Kasi!
      </h1>
      <div className="">
        
          <Link href="/">
            <Image src="/images/me/WhatsApp Image 2022-10-24 at 13.47.52.jpeg" alt="photo" width={450} height={600} className=""/>
          </Link>
        
      </div>
    </div>
  )
}
