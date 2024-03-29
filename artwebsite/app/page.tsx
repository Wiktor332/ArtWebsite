
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
      <div className="flex-col">
        <div className="flex m-7 items-center">
            <Image src="/images/me/WhatsApp Image 2022-10-24 at 13.47.52.jpeg" alt="photo" width={450} height={450} className="rounded-full pr-8"/>
          <div className="flex flex-col border-2 border-black font-mono p-6 h-full font-semibold">
            <h1 className="text-3xl">KUTA KATARZYNA</h1>
            <p className="text-xl italic">Urodzona w 1985 roku w Puławach.  Absolwentka Państwowego Liceum Sztuk Plastycznych w Nałęczowie.  Studia w Instytucie Sztuk Pięknych UJK w Kielcach oraz na Wydziale Sztuki Uniwersytetu Rzeszowskiego. Dyplom (2011 r.) w pracowni rzeźby prof. UR Józefa Jerzego Kierskiego.  W dorobku artystycznym udział w wystawach i plenerach w Polsce i za granicą. W swojej twórczości głównie inspiruje się naturą w której otoczeniu żyje.</p>
          </div>
        </div>
        
        <div className="font-mono mt-20 bg-green-500">
          <div className="p-7 font-semibold">
            <h1 className="text-3xl italic text-center">Natura to instynkt sztuki</h1>
            <ul className="text-xl text-center">
              <li className="py-5">
                <p>Wychowałam się na wsi wśród pięknych łąk i lasów. Miłość do przyrody jest we mnie od dziecka. Świat natury to przecież  niezgłębiony zasób form,  kształtów i materii. Dostarcza mi dużo wzruszeń, emocji,  pobudza moją wyobraźnię. Nieustannie inspiruje. Niejednokrotnie, niby bohater powieści Goethego, Werter, "upadam po przemocą wspaniałości tych zjawisk".</p>
              </li>
              <li className="py-5">
                <p>Jestem zafascynowana światem roślin,  ich witalnością, różnorodnym pięknem. Wnikliwa obserwacja natury to istotna częścią mojego życia. Zmienające się pory roku są dla mnie najciekawszym filmem, kórego genialnym reżyserem jest natura.</p>
              </li>
              <li className="py-5">
                <p>W malarstwie próbuję odtworzyć ziarnistość natury i niezwykły układ barw. Analizuję strukturę organizmów, takich jak mchy, grzyby, porosty,  następnie je przetwarzam, multiplikuje i powiększam do skali makro. W ten sposób powstają  organiczne obiekty, których podstawowym składnikiem jest papier.</p>
              </li>
              
            </ul>
          </div>
        </div>
        

        <Link href="/Gallery">
        <div className="bg-green-400 cursor-pointer p-7">         
            <p className="py-5 text-xl text-center font-semibold font-mono">Zapraszam wszystkich, aby weszli w mój świat. To będzie wędrówka w nieznane. Podążanie za instynktem, który każe patrzeć.</p>
        </div>
        </Link>

      </div>
  )
}
