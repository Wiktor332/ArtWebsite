'use client'

import {Navbar , NavbarContent, NavbarItem, DropdownItem, DropdownTrigger, Button, Dropdown, DropdownMenu} from "@nextui-org/react";
import Link from "next/link"
import Image from "next/image"
// import Button from "./Button"
// import Dropdown from "./Dropdown"

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
        title: "Rysunek",
        route: "/gallery/rysunek",
      },
    ],
  },
];

// const Navbar = () => {
//   return (
//     <nav className="flexBetween max-container padding-container relative z-30 py-5">
//       <Link href="/">
//         <Image src="/" alt="logo" width={74} height={30}/>
//       </Link>

//       <ul className="hidden h-full gap-12 lg:flex">
//         <Link href="./Home">
//           Strona Główna
//         </Link>
//         <Link href="./Gallery">
//           Galeria prac
//         </Link>
//         <Link href="./Events">
//           Wydarzenia
//         </Link>
//         <Link href="./Contact">
//           Kontakt
//         </Link>
//       </ul>
//       <div className="relative regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
//         <Button type="button" title="PL"/>
//       </div>
//     </nav>
  
//   );
// }

export default function App() {
  return (
    <Navbar>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
      <NavbarItem className="border-red-500">
          <Link color="foreground" href="./Home">
            Strona Główna
          </Link>
        </NavbarItem>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                radius="sm"
                variant="light"
                href="./Gallery"
              >
                Galeria prac
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="malarstwo"
              href="./"
            >
              Malarstwo
            </DropdownItem>
            <DropdownItem
              key="Rzeźba"
              href="./"
            >
              Rzeźba
            </DropdownItem>
            <DropdownItem
              key="Rysunek"
              href="./"
            >
              Rysunek
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem isActive>
          <Link href="./Events" aria-current="page">
            Wydarzenia
          </Link>
        </NavbarItem>
        <NavbarItem className="font-bold">
          <Link href="./Contact">
            Kontakt
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
