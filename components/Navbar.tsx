import Link from "next/link"
import Image from "next/image"
import { NAV_LINKS } from "@/constants"
import Button from "./Button"
import Dropdown from "./Dropdown"

export interface MenuItem {
  title: string;
  route?: string;
  children?: MenuItem[];
}

const MenuItem: MenuItem[] = [
  {
    title: "Galeria prac",
    children: [
      {
        title: "Obrazy",
        route: "/gallery/obrazy",
      },
      {
        title: "Rzeźby",
        route: "/gallery/rzeźby",
      },
      {
        title: "Szkice",
        route: "/gallery/szkice",
      },
    ],
  },
];

const Navbar = () => {
  return (
   <nav className="flexBetween max-container padding-container relative z-30 py-5">
    <Link href="/">
      <Image src="/" alt="logo" width={74} height={30}/>
    </Link>

    <ul className="hidden h-full gap-12 lg:flex">
      {NAV_LINKS.map((link) => (
        <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
          {link.label}
        </Link>
      ))}
    </ul>
    <div className="relative regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
      <Button type="button" title="PL"/>
    </div>

   </nav>
  )
}

export default Navbar