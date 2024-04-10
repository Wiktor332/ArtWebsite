
'use client';

import Image from "next/image"
import { motion} from "framer-motion";

function Events() {
  return (
    <motion.div 
    initial={{ y: 25, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{
      delay: 0.4,
      duration: 0.75,
    }}>
    <div className="flex flex-col p-5 mt-24"> 
      <h1 className="font-mono text-4xl font-semibold text-center p-7">Ważniejsze osiągnięcia i wystawy:</h1>
        <ul className="font-mono text-2xl list-outside text-center font-semibold">
          
            <div className="flex flex-wrap justify-center">
              <ul className="flex items-center justify-center gap-10 p-5">
                <li>
                  <Image src="/images/events/1.jpg" alt="photo" width={500} height={500}></Image>
                </li>
                <li>
                  <Image src="/images/events/2.jpg" alt="photo" width={500} height={500}></Image>
                </li>
                <li>
                  <Image src="/images/events/3.jpg" alt="photo" width={500} height={500}></Image>
                </li>
              </ul>
            </div>
            <li className="p-3">
              <p>2024 - Wystawa indywidualna „Kolor-faktura-struktura” Biblioteka Miejska w Puławach</p>
            </li>
            <li className="p-3">
              <p>2023 - Wystawa indywidualna „W głąb natury” Biuro Wystaw Artystycznych w Sandomierzu.</p>
            </li>
            <li className="p-3">
            <p>2022 - Udział w Międzynarodowym Plenerze artystycznym w Debrad na Słowacji i poplenerowej wystawie „Together”</p>
            </li>
            <div className="flex flex-wrap justify-center">
              <ul className="flex items-center justify-center gap-10 p-5">
                <li>
                  <Image src="/images/events/4.jpg" alt="photo" width={500} height={400}></Image>
                </li>
                <li>
                  <Image src="/images/events/5.jpg" alt="photo" width={400} height={400}></Image>
                </li>
                <li>
                  <Image src="/images/events/6.jpg" alt="photo" width={600} height={400}></Image>
                </li>
              </ul>
            </div>
            <li className="p-3">
              <p>2020 - Zbiorowa wystawa pokonkursowa 25. Wschodniego Salonu Sztuki organizowanego przez Związek Polskich Artystów Plastyków Okręg Lubelski, Centrum Spotkania Kultur.</p>
            </li>
            <li className="p-3">
              <p>2020 - Wystawa indywidualna „Biomorfy” Galeria Kotłownia , Centrum Sportu i Kultury w Garwolinie</p>
            </li>
            <li className="p-3">
              <p>2019 - Wystawa indywidualna „Formy natury” Galeria Inter Libros, Biblioteka Miejska w Puławach</p>
            </li>
            <li className="p-3">
              <p>2018 - Wystawa indywidualna „MAKRO/mikro” z okazji Dni Wąwolnicy, budynek starego przedszkola</p>
            </li>
            <div className="flex flex-wrap justify-center">
              <ul className="flex items-center justify-center gap-10 p-5">
                <li>
                  <Image src="/images/events/7.jpg" alt="photo" width={500} height={400}></Image>
                </li>
                <li>
                  <Image src="/images/events/8.jpg" alt="photo" width={500} height={400}></Image>
                </li>
                <li>
                  <Image src="/images/events/9.jpg" alt="photo" width={500} height={400}></Image>
                </li>
              </ul>
            </div>
            <li className="p-3">
              <p>2016 - Wystawa indywidualna „Drugie życie natury”, Galeria ANEKS, Puławski Ośrodek Kultury Dom Chemika</p>
            </li>
            <li className="p-3">
              <p>2015 - Wyróżnienie w kategorii malarstwo i rysunek w XII Ogólnopolskim Biennale Twórczości Plastycznej Nauczycieli.</p>
            </li>
            <li className="p-3">
              <p>2014 - Wystawa indywidualna „Wzrastanie”, Galeria „Piwnica”, Młodzieżowy Dom Kultury w Puławach.</p>
            </li>
            <li className="p-3">
              <p>2010 - Pierwsze miejsce w konkursie twórczości technicznej - projekt zabawki rozwijającej motorykę dzieci, Rzeszów.</p>
            </li>
            <li className="p-3">
              <p>2009 - Wystawa zbiorowa „Rysunek i Rzeźba” Galeria „Pentagon”, Radom.</p>
            </li>
            <li className="p-3">
              <p>2005 - Wyróżnienie na VII Ogólnopolskim Biennale Rysunku i Malarstwa uczniów średnich szkół plastycznych; Bielsko Biała.</p>
            </li>

            <div className="flex flex-wrap justify-center">
              <ul className="flex items-center justify-center gap-10 p-5">
                <li>
                  <Image src="/images/events/10.jpg" alt="photo" width={400} height={400}></Image>
                </li>
                <li>
                  <Image src="/images/events/11.jpg" alt="photo" width={400} height={400}></Image>
                </li>
              </ul>
            </div>
          
        </ul>
    </div>
  </motion.div>
  )
}

export default Events