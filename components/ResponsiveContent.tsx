import { useState, useEffect } from 'react';
import ShakeAnimation from './ShakeAnimation';

const ResponsiveContent = () => {
  const [isLargeDevice, setIsLargeDevice] = useState(false);

  useEffect(() => {
    setIsLargeDevice(window.innerWidth >= 1205);

    const handleResize = () => {
      setIsLargeDevice(window.innerWidth >= 1205);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='flex flex-wrap'>
      {isLargeDevice ? (
        <div className="flex flex-wrap space-evenly items-center ml-5">
          <ShakeAnimation />
          <div className="flex flex-col ml-4 font-mono p-4 w-1/2 h-auto font-semibold border-2 border-gray-800">
            <h1 className="text-2xl md:text-3xl text-gray-800">KUTA KATARZYNA</h1>
            <p className="text-base md:text-2xl italic text-gray-800">
              Urodzona w 1985 roku w Puławach. Absolwentka Państwowego Liceum Sztuk Plastycznych w Nałęczowie. Studia w Instytucie Sztuk Pięknych UJK w Kielcach oraz na Wydziale Sztuki Uniwersytetu Rzeszowskiego. Dyplom (2011 r.) w pracowni rzeźby prof. UR Józefa Jerzego Kierskiego. W dorobku artystycznym udział w wystawach i plenerach w Polsce i za granicą. W swojej twórczości głównie inspiruje się naturą w której otoczeniu żyje.
            </p>
          </div>
        </div>
      ) : (
        <div className="flex flex-wrap space-evenly p-5 items-center place-content-center">
          <ShakeAnimation />
          <div className="flex flex-col font-mono p-4 w-full h-auto font-semibold border-2 border-gray-800 m-5">
            <h1 className="text-2xl md:text-3xl text-gray-800">KUTA KATARZYNA</h1>
            <p className="text-base md:text-2xl italic text-gray-800">
              Urodzona w 1985 roku w Puławach. Absolwentka Państwowego Liceum Sztuk Plastycznych w Nałęczowie. Studia w Instytucie Sztuk Pięknych UJK w Kielcach oraz na Wydziale Sztuki Uniwersytetu Rzeszowskiego. Dyplom (2011 r.) w pracowni rzeźby prof. UR Józefa Jerzego Kierskiego. W dorobku artystycznym udział w wystawach i plenerach w Polsce i za granicą. W swojej twórczości głównie inspiruje się naturą w której otoczeniu żyje.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResponsiveContent;
