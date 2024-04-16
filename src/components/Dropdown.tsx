'use client'

import Link from "next/link";
import { useState } from "react";
import { NavItem } from './Navbar';
import {useTranslations} from 'next-intl';
import NavigationLink from './NavigationLink';



interface Props {
    item?: NavItem;
}

export default function Dropdown(props: Props) {
    const { item } = props;
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const menuItems = item?.children ? item.children : [];
    const t = useTranslations('Home');
    const toggle = () => {
        setIsOpen(old => !old);
    }

    const transClass = isOpen ? "flex" : "hidden";

    return (
        <>
            <div className="relative text-2xl font-mono">
                <button
                    className="relative group mr-6"
                    onClick={toggle}
                >{t('n2')}
                <span className="absolute bottom-0 left-0 w-full h-1 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                </button>
                <div className={`absolute top-8 z-30 w-[170px] min-h-[200px] flex flex-col py-4 bg-aspargus-50 rounded-md ${transClass}`}>

                         <NavigationLink onClick={toggle} className="hover:bg-artichokegreen-50 w-full p-2" href="/Gallery/painting">{t('n3')}
                         </NavigationLink>

                        <NavigationLink onClick={toggle} className="hover:bg-artichokegreen-50 w-full p-2" href="/Gallery/sculpture">{t('n4')}
                        </NavigationLink>

                        <NavigationLink onClick={toggle} className="hover:bg-artichokegreen-50 w-full p-2" href="/Gallery/sketch">{t('n5')}
                        </NavigationLink>
                       
                        
                </div>
            </div>
            {
                isOpen
                    ?
                    <div
                        className="fixed top-0 right-0 bottom-0 left-0 z-20 bg-black/40"
                        onClick={toggle}
                    ></div>
                    :
                    <></>
            }
        </>
    )
}


