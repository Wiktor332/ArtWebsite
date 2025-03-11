'use client';

import Link from "next/link"
import Dropdown from "./Dropdown"
import Image from "next/image";
import "../app/globals.css";
import {ReactNode} from 'react';
import LocalSwitcher from "./LanguageSwitcher";
import {useLocale} from 'next-intl';
import { useState, useEffect } from 'react';

export interface NavItem {
    title: ReactNode;
    href?: string;
    submenu?: boolean;
    children?: NavItem[];
};

type Props = {
    children?: ReactNode;
  };

export const menuItem: NavItem[] = [
    {
        title: 'Home',
        href: "/"
    },
    {
        title: 'Gallery',
        submenu: true,
        children: [
            { title: 'Painting', href: "/Gallery/painting" },
            { title: 'Sculpture', href: "/Gallery/sculpture" },
            { title: 'Sketch', href: "/Gallery/sketch" },
        ],
    },
    {
        title: 'Events',
        href: "/Events"
    },
    {
        title: 'Contact',
        href: "/Contact"
    }
];


import {useTranslations} from 'next-intl';
import LocaleSwitcher from '../components/LanguageSwitcher';
import NavigationLink from './NavigationLink';

export default function Navigation() {
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
    <header className="fixed w-full flexBetween padding-container bg-artichokegreen-50 py-2 z-30">
        {isLargeDevice ? (
        <div className="ml-10">
            <Link href="/">
                   <Image src="../../../../images/logo/KasiaKuta.svg" width={80} height={80} alt="logo" />
              </Link>
        </div>
        ) : (
            <div className="left-4">
            <Link href="/">
                   <Image src="../../../../images/logo/KasiaKuta.svg" width={65} height={65} alt="logo" />
              </Link>
        </div>
        )}
        <div className="hidden items-center h-full gap-4 lg:flex text-white mr-4">
          <NavigationLink href="/">{t('n1')}
          <span className="absolute bottom-0 left-0 w-full h-1 bg-white transform scale-x-0   group-hover:scale-x-100 transition-transform"></span></NavigationLink>
          <Dropdown />
          <NavigationLink href="/Events">{t('n6')}
          <span className="absolute bottom-0 left-0 w-full h-1 bg-white transform scale-x-0   group-hover:scale-x-100 transition-transform"></span></NavigationLink>
          <NavigationLink href="/Contact">{t('n7')}
          <span className="absolute bottom-0 left-0 w-full h-1 bg-white transform scale-x-0   group-hover:scale-x-100 transition-transform"></span></NavigationLink>
        
            <LocaleSwitcher />
        </div>
    </header>
  );
}

