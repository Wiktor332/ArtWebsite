'use client';

import { BiLogoFacebookCircle, BiLogoInstagramAlt, BiLogoPinterest } from "react-icons/bi";
import { IconContext } from "react-icons";
import '../app/globals.css';
import {useTranslations} from 'next-intl';
import {ReactNode} from 'react';


type Props = {
  children?: ReactNode;
};

export default function Footer({children}: Props) {

  const t = useTranslations('Home');
  return (
    <div className="bg-artichokegreen-50 py-2 mt-3">
      <div className="flex flex-row gap-10 w-full p-4 place-content-center">
        <a href='https://www.facebook.com/canaletta.qta?locale=pl_PL' target='_blank'>
          <IconContext.Provider value={{ color: "lightgray", className: "mediaIcon" }}>    
            <BiLogoFacebookCircle style={{width: '40px', height: '40px', cursor: 'pointer'}}/>
          </IconContext.Provider>
        </a>
        <a href='https://www.instagram.com/bambiogorek/' target='_blank'>
          <IconContext.Provider value={{ color: "lightgray", className: "mediaIcon" }}> 
            <BiLogoInstagramAlt style={{width: '40px', height: '40px', cursor: 'pointer'}}/>
          </IconContext.Provider>
        </a>
        <a  href='' target='_blank'>
          <IconContext.Provider value={{ color: "lightgray", className: "mediaIcon" }}> 
            <BiLogoPinterest style={{width: '40px', height: '40px', cursor: 'pointer'}}/>
          </IconContext.Provider>
        </a>
      </div>
      <div className="w-full">
        <p className="text-center text-white font-mono">{t('f1-1')}</p>
      </div>
    </div>
  );
}
