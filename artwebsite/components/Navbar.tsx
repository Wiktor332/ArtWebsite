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
        <header className="flex gap-5 items-center bg-zinc-600 py-2 px-2">
            <Link href="">
                <Image src="" width={34} height={34} alt="logo" />
            </Link>
        <div className="m-6 relative flex gap-8 items-center text-white">
            {menuItem.map((item) => {
                return item.hasOwnProperty("children") ? (
                    <Dropdown item={item} />
                ) : (
                    <Link className="text-2xl font-imbue relative group" href={item?.route || ""}>
                        {item.title}
                        <span className="absolute bottom-0 left-0 w-full h-1 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                    </Link>
                    
                );
            })}
        </div>
        </header>
    );
}