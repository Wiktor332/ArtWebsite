'use client';

import Image from "next/image"
import Link from "next/link"
import { motion} from "framer-motion";
import ShakeAnimation from "@/components/ShakeAnimation"
import ResponsiveContent from "@/components/ResponsiveContent";

export default function Home() {
  return (
    
      <div className="flex flex-col mt-24">
        <motion.div 
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.4,
            duration: 0.75,
          }}>
        <ResponsiveContent />
        </motion.div>
        
        <motion.div 
          initial={{ y: 45, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.75,
            duration: 0.8,
          }}>
        <div className="flex-wrap font-mono mt-20 bg-artichokegreen-50 flex p-5">
          <div className="p-7 font-semibold flex flex-col text-center">
            <h1 className="text-2xl md:text-3xl italic text-center text-gray-200">Natura to instynkt sztuki</h1>
            <hr className="mt-4 border-2 border-aspargus-50"></hr>
            <ul className="text-base md:text-xl text-gray-200">
              <li className="p-7">
                <p>Wychowałam się na wsi wśród pięknych łąk i lasów. Miłość do przyrody jest we mnie od dziecka. Świat natury to przecież niezgłębiony zasób form, kształtów i materii. Dostarcza mi dużo wzruszeń, emocji, pobudza moją wyobraźnię. Nieustannie inspiruje. Niejednokrotnie, niby bohater powieści Goethego, Werter, "upadam pod przemocą wspaniałości tych zjawisk".</p>
              </li>
              <hr className="border-2 border-aspargus-50"></hr>
              <li className="p-7">
                <p>Jestem zafascynowana światem roślin, ich witalnością, różnorodnym pięknem. Wnikliwa obserwacja natury to istotna częścią mojego życia. Zmienające się pory roku są dla mnie najciekawszym filmem, kórego genialnym reżyserem jest natura.</p>
              </li>
              <hr className="border-2 border-aspargus-50"></hr>
              <li className="p-7">
                <p>W malarstwie próbuję odtworzyć ziarnistość natury i niezwykły układ barw. Analizuję strukturę organizmów, takich jak mchy, grzyby, porosty, następnie je przetwarzam, multiplikuje i powiększam do skali makro. W ten sposób powstają organiczne obiekty, których podstawowym składnikiem jest papier.</p>
              </li>
            </ul>
          </div>
          {/* <div className="">
            <div className="flex items-center mt-20">
              <Image src="/images/me/_DSC0044.JPG" alt="photo" width={500} height={500} className="rounded-md"/>
            </div>
          </div> */}
        </div>
        </motion.div>

        <motion.div 
          initial={{ y: 45, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.75,
            duration: 0.8,
          }}>
        <div className="bg-aspargus-50 flex flex-col place-items-center p-7">         
          <p className="p-5 text-base md:text-xl text-center font-semibold font-mono text-gray-800">Zapraszam wszystkich, aby weszli w mój świat. To będzie wędrówka w nieznane. Podążanie za instynktem, który każe patrzeć.</p>
          <Link href="/Gallery" className="text-2xl font-semibold font-mono relative group w-auto text-gray-800">
            Galeria
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gray-800 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform"></span>
          </Link>
        </div>
        </motion.div>
    </div>
  )
}
