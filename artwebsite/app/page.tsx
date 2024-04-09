
import Image from "next/image"
import Link from "next/link"
import ShakeAnimation from "@/components/ShakeAnimation"

export default function Home() {
  return (
      <div className="flex-col">
        <div className="flex m-7 p-5 items-center">
        <ShakeAnimation />
          <div className="flex flex-col border-2 border-black font-mono m-7 p-6 w-3/5 h-full font-semibold">
            <h1 className="text-3xl">KUTA KATARZYNA</h1>
            <p className="text-xl italic">Urodzona w 1985 roku w Puławach.  Absolwentka Państwowego Liceum Sztuk Plastycznych w Nałęczowie.  Studia w Instytucie Sztuk Pięknych UJK w Kielcach oraz na Wydziale Sztuki Uniwersytetu Rzeszowskiego. Dyplom (2011 r.) w pracowni rzeźby prof. UR Józefa Jerzego Kierskiego.  W dorobku artystycznym udział w wystawach i plenerach w Polsce i za granicą. W swojej twórczości głównie inspiruje się naturą w której otoczeniu żyje.</p>
          </div>
        </div>
        
        <div className="font-mono mt-20 bg-artichokegreen-50 flex flex-row justify-center">
          <div className="p-7 font-semibold flex flex-col justify-center w-1/2">
            <h1 className="text-3xl italic text-center">Natura to instynkt sztuki</h1>
            <ul className="text-xl">
              <li className="p-7">
                <p>Wychowałam się na wsi wśród pięknych łąk i lasów. Miłość do przyrody jest we mnie od dziecka. Świat natury to przecież niezgłębiony zasób form, kształtów i materii. Dostarcza mi dużo wzruszeń, emocji, pobudza moją wyobraźnię. Nieustannie inspiruje. Niejednokrotnie, niby bohater powieści Goethego, Werter, "upadam pod przemocą wspaniałości tych zjawisk".</p>
              </li>
              <li className="p-7">
                <p>Jestem zafascynowana światem roślin, ich witalnością, różnorodnym pięknem. Wnikliwa obserwacja natury to istotna częścią mojego życia. Zmienające się pory roku są dla mnie najciekawszym filmem, kórego genialnym reżyserem jest natura.</p>
              </li>
              <li className="p-7">
                <p>W malarstwie próbuję odtworzyć ziarnistość natury i niezwykły układ barw. Analizuję strukturę organizmów, takich jak mchy, grzyby, porosty, następnie je przetwarzam, multiplikuje i powiększam do skali makro. W ten sposób powstają organiczne obiekty, których podstawowym składnikiem jest papier.</p>
              </li>
            </ul>
          </div>
          <div className="w-1/2">
            <div className="flex justify-center items-center mt-20">
              <Image src="/images/me/_DSC0044.JPG" alt="photo" width={550} height={550} className="rounded-md"/>
            </div>
          </div>
        </div>

        

        
        <div className="bg-aspargus-50 flex flex-col place-items-center p-7">         
          <p className="p-5 text-xl text-center font-semibold font-mono">Zapraszam wszystkich, aby weszli w mój świat. To będzie wędrówka w nieznane. Podążanie za instynktem, który każe patrzeć.</p>
          <Link href="/Gallery" className="text-2xl font-semibold font-mono relative group w-auto">
            Galeria
            <span className="absolute bottom-0 left-0 w-full h-1 bg-black transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform"></span>
          </Link>
        </div>



    </div>
  )
}
