'use client';

import Link from "next/link"
import Dropdown from "./Dropdown"
import Image from "next/image";
import "../app/globals.css";
import {ReactNode} from 'react';
import {useTranslations} from 'next-intl';
import LocalSwitcher from "./LanguageSwitcher";
import {useLocale} from 'next-intl';


export interface NavItem {
    title?: ReactNode;
    path?: string;
    element?: object;
    submenu?: boolean;
    children?: NavItem[];
    value?: string;
}

type Props = {
    children?: ReactNode;
  };

export const menuItem: NavItem[] = [
    {
        title: "Strona Główna",
        path: "/",
    },
    {
        title: "Galeria",
        submenu: true,
        children: [
            { title: "Malarstwo", path: "/Gallery/painting" },

            { title: "Rzeźby", path: "/Gallery/sculpture" },

            { title: "Rysunek", path: "/Gallery/sketch" },
        ],
    },
    {
        title: "Wydarzenia",
        path: "/Events",
    },
    {
        title: "Kontakt",
        path: "/Contact",
    },
];


export default function Navbar({children}: Props) {

    return (
        <header className="fixed w-full flexBetween padding-container bg-artichokegreen-50 py-2 z-30">
                <Link href="">
                    <Image src="" width={34} height={34} alt="logo" />
                </Link>
            <div className="hidden items-center h-full gap-12 lg:flex text-white mr-2">
                {menuItem.map((item) => {
                    return item.hasOwnProperty("children") ? (
                        <Dropdown item={item} />
                    ) : (
                        <Link className="text-2xl relative group font-mono mr-7" href={item?.path || ""}>
                            {item.title}
                            <span className="absolute bottom-0 left-0 w-full h-1 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                        </Link>
                    );
                })}
                <LocalSwitcher />
            </div>
        </header>
    );
}