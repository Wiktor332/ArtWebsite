import { useState, useEffect } from 'react';
import ShakeAnimation from './ShakeAnimation';

const ResponsiveContent = () => {
  const [isLargeDevice, setIsLargeDevice] = useState(true); // Initial state for large devices

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      setIsLargeDevice(windowWidth >= 725);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex flex-wrap space-evenly p-5 items-center">
      {isLargeDevice ? (
        <>
          <ShakeAnimation />
          <div className="flex flex-col font-mono p-4 w-3/2 h-full font-semibold border-2 border-black m-5">
            <h1 className="text-3xl">KUTA KATARZYNA</h1>
            <p className="text-xl italic">
              Urodzona w 1985 roku w Puławach. Absolwentka Państwowego Liceum Sztuk Plastycznych w Nałęczowie. Studia w Instytucie Sztuk Pięknych UJK w Kielcach oraz na Wydziale Sztuki Uniwersytetu Rzeszowskiego. Dyplom (2011 r.) w pracowni rzeźby prof. UR Józefa Jerzego Kierskiego. W dorobku artystycznym udział w wystawach i plenerach w Polsce i za granicą. W swojej twórczości głównie inspiruje się naturą w której otoczeniu żyje.
            </p>
          </div>
        </>
      ) : (
        <>
          <ShakeAnimation />
          <div className="flex flex-col font-mono p-4 w-full h-full font-semibold border-2 border-black m-5">
            <h1 className="text-3xl">KUTA KATARZYNA</h1>
            <p className="text-md italic">
              Urodzona w 1985 roku w Puławach. Absolwentka Państwowego Liceum Sztuk Plastycznych w Nałęczowie. Studia w Instytucie Sztuk Pięknych UJK w Kielcach oraz na Wydziale Sztuki Uniwersytetu Rzeszowskiego. Dyplom (2011 r.) w pracowni rzeźby prof. UR Józefa Jerzego Kierskiego. W dorobku artystycznym udział w wystawach i plenerach w Polsce i za granicą. W swojej twórczości głównie inspiruje się naturą w której otoczeniu żyje.
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default ResponsiveContent;
