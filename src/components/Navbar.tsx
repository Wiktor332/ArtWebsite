'use client';

import Link from "next/link"
import Dropdown from "./Dropdown"
import Image from "next/image";
import "../app/globals.css";
import {ReactNode} from 'react';
import LocalSwitcher from "./LanguageSwitcher";
import {useLocale} from 'next-intl';


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
  const t = useTranslations('Home');

  return (
    <header className="fixed w-full flexBetween padding-container bg-artichokegreen-50 py-2 z-30">
            <Link href="">
                   <Image src="" width={34} height={34} alt="logo" />
              </Link>
 
        <div className="hidden items-center h-full gap-4 lg:flex text-white mr-4">
          <NavigationLink href="/">{t('n1')}
          <span className="absolute bottom-0 left-0 w-full h-1 bg-white transform scale-x-0   group-hover:scale-x-100 transition-transform"></span></NavigationLink>
          {/* <NavigationLink href="/Gallery">{t('n2')}
          <span className="absolute bottom-0 left-0 w-full h-1 bg-white transform scale-x-0   group-hover:scale-x-100 transition-transform"></span></NavigationLink> */}
          {/* <NavigationLink href="/Gallery/painting">{t('n3')}
          </NavigationLink>
          <NavigationLink href="/Gallery/sculpture">{t('n4')}
          </NavigationLink>
          <NavigationLink href="/Gallery/sketch">{t('n5')}
          </NavigationLink> */}
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

