'use client'

import Link from "next/link";

import { useState } from "react";
import { MenuItem } from './Navbar';

interface Props {
    item: MenuItem;
}

export default function Dropdown(props: Props) {
    const { item } = props;
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const menuItems = item?.children ? item.children : [];

    const toggle = () => {
        setIsOpen(old => !old);
    }

    const transClass = isOpen
        ?
        "flex"
        :
        "hidden";

    return (
        <>
            <div className="relative text-2xl font-mono">
                <button
                    className="relative group"
                    onClick={toggle}
                >{item.title}
                <span className="absolute bottom-0 left-0 w-full h-1 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                </button>
                <div className={`absolute top-8 z-30 w-[170px] min-h-[200px] flex flex-col py-4 bg-green-400 rounded-md ${transClass}`}>
                    {
                        menuItems.map(item =>
                            <Link
                                key={item.route}
                                className="hover:bg-green-300 w-full hover:text-zinc-600 p-2 "
                                href={item?.route || ''}
                                onClick={toggle}
                            >{item.title}</Link>
                        )
                    }
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