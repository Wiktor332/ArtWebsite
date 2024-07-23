'use client';

import { useState, useEffect } from 'react';
import ShakeAnimation from './ShakeAnimation';
import {useTranslations} from 'next-intl';
import ShakeAnimation2 from './ShakeAnimation2';

const ResponsiveContent = () => {
  const [isLargeDevice, setIsLargeDevice] = useState(false);

  useEffect(() => {
    setIsLargeDevice(window.innerWidth >= 770);

    const handleResize = () => {
      setIsLargeDevice(window.innerWidth >= 770);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const t = useTranslations('Home');

  return (
    <div className='flex flex-wrap space-evenly'>
      {isLargeDevice ? (
        <div className="flex flex-wrap items-center ml-16">
          <ShakeAnimation />
          <div className="flex flex-col ml-4 p-4 w-1/2 h-auto font-semibold border-2 border-gray-800">
            <h1 className="text-2xl md:text-3xl text-gray-800">{t('h1-1')}</h1>
            <p className="text-base md:text-2xl italic text-gray-800">
              {t('p1-1')}
            </p>
          </div>
        </div>
      ) : (
        <div className="flex flex-wrap space-evenly p-5 items-center place-content-center">
          <ShakeAnimation2 />
          <div className="flex flex-col p-4 w-full h-auto font-semibold border-2 border-gray-800 m-5">
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
