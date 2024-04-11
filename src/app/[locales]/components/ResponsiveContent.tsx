import { useState, useEffect } from 'react';
import ShakeAnimation from './ShakeAnimation';
import {useTranslations} from 'next-intl';

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

  const t = useTranslations('Home');

  return (
    <div className='flex flex-wrap'>
      {isLargeDevice ? (
        <div className="flex flex-wrap space-evenly items-center ml-5">
          <ShakeAnimation />
          <div className="flex flex-col ml-4 font-mono p-4 w-1/2 h-auto font-semibold border-2 border-gray-800">
            <h1 className="text-2xl md:text-3xl text-gray-800">{t('h1-1')}</h1>
            <p className="text-base md:text-2xl italic text-gray-800">
              {t('p1-1')}
            </p>
          </div>
        </div>
      ) : (
        <div className="flex flex-wrap space-evenly p-5 items-center place-content-center">
          <ShakeAnimation />
          <div className="flex flex-col font-mono p-4 w-full h-auto font-semibold border-2 border-gray-800 m-5">
            <h1 className="text-2xl md:text-3xl text-gray-800">{t('h1-1')}</h1>
            <p className="text-base md:text-2xl italic text-gray-800">
            {t('p1-1')}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResponsiveContent;
