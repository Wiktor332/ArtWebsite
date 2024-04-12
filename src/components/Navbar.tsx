'use client';

import Link from "next/link"
import Dropdown from "./Dropdown"
import Image from "next/image";
import "../app/globals.css";


// import { NavItem } from "@/public/styles/types";

// export interface MenuItem {
//     title: string;
//     route?: string;
//     children?: MenuItem[];
// }

// export const menuItem: MenuItem[] = [
//     {
//         title: "Strona Główna",
//         route: "/",
//     },
//     {
//         title: "Galeria",
//         children: [
//             {
//                 title: "Malarstwo",
//                 route: "/Gallery/painting",
//             },
//             {
//                 title: "Rzeźby",
//                 route: "/Gallery/sculpture",
//             },
//             {
//                 title: "Rysunek",
//                 route: "/Gallery/sketch",
//             },
//         ],
//     },
//     {
//         title: "Wydarzenia",
//         route: "/Events",
//     },
//     {
//         title: "Kontakt",
//         route: "/Contact",
//     },
// ];

// export default function Navbar() {
//     return (
//         <header className="flexBetween padding-container bg-artichokegreen-50 py-5 z-30">
//             <Link href="">
//                 <Image src="" width={34} height={34} alt="logo" />
//             </Link>
//         <div className="hidden h-full gap-12 lg:flex text-white">
//             {menuItem.map((item) => {
//                 return item.hasOwnProperty("children") ? (
//                     <Dropdown item={item} />
//                 ) : (
//                     <Link className="text-2xl relative group font-mono mr-6" href={item?.route || ""}>
//                         {item.title}
//                         <span className="absolute bottom-0 left-0 w-full h-1 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
//                     </Link>
                    
//                 );
//             })}
//         </div>
//         </header>
//     );
// }

export interface NavItem {
    title: string;
    path?: string;
    submenu?: boolean;
    children?: NavItem[];
}


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

export default function Navbar() {
    return (
        <header className="fixed w-full flexBetween padding-container bg-artichokegreen-50 py-5 z-30">
                <Link href="">
                    <Image src="" width={34} height={34} alt="logo" />
                </Link>
            <div className="hidden h-full gap-12 lg:flex text-white">
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
            </div>
        </header>
    );
}