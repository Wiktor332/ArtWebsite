import Link from "next/link"
import Dropdown from "./Dropdown"
import Image from "next/image";

export interface MenuItem {
    title: string;
    route?: string;
    children?: MenuItem[];
}

const menuItem: MenuItem[] = [
    {
        title: "Strona Główna",
        route: "/",
    },
    {
        title: "Galeria",
        children: [
            {
                title: "Malarstwo",
                route: "/Gallery/painting",
            },
            {
                title: "Rzeźby",
                route: "/Gallery/sculpture",
            },
            {
                title: "Rysunek",
                route: "/Gallery/sketch",
            },
        ],
    },
    {
        title: "Wydarzenia",
        route: "/Events",
    },
    {
        title: "Kontakt",
        route: "/Contact",
    },
];

export default function Navbar() {
    return (
        <header className="flexBetween padding-container bg-green-600 py-5 z-30">
            <Link href="">
                <Image src="" width={34} height={34} alt="logo" />
            </Link>
        <div className="hidden h-full gap-12 lg:flex text-white">
            {menuItem.map((item) => {
                return item.hasOwnProperty("children") ? (
                    <Dropdown item={item} />
                ) : (
                    <Link className="text-2xl relative group font-mono" href={item?.route || ""}>
                        {item.title}
                        <span className="absolute bottom-0 left-0 w-full h-1 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                    </Link>
                    
                );
            })}
        </div>
        </header>
    );
}