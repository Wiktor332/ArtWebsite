'use client'

import { useState } from 'react';
import Image from 'next/image';

const ShakeAnimation = () => {
  const [shake, setShake] = useState(false);

  const startShake = () => {
    setShake(true);
  };

  const stopShake = () => {
    setShake(false);
  };

  return (
    <a href="https://www.instagram.com/bambiogorek/" target='_blank' className={"block relative rounded-full overflow-hidden"} style={{ width: '650px', height: '650px' }}>
      <Image
        src="/images/me/WhatsApp Image 2022-10-24 at 13.47.52.jpeg"
        alt="me"
        width={500}
        height={500}
        className="object-cover w-full h-full shake-animation"
      />
    </a>
  );
};

export default ShakeAnimation;
