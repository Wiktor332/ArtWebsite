'use client'

import { useState } from 'react';
import Image from 'next/image';

const ShakeAnimation = () => {

  return (
    <a href="https://www.instagram.com/bambiogorek/" target='_blank' className={"block relative rounded-full overflow-hidden m-6 w-96 h-96"}>
      <Image
        src="/images/me/WhatsApp Image 2022-10-24 at 13.47.52.jpeg"
        alt="me"
        width={900}
        height={900}
        className="object-cover w-full h-full shake-animation"
      />
    </a>
  );
};

export default ShakeAnimation;
