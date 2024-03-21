'use client'

import {NavbarContent, NavbarItem, DropdownItem, DropdownTrigger, Button, Dropdown, DropdownMenu} from "@nextui-org/react";
import Link from "next/link"
import Image from "next/image"
import { useRouter } from 'next/navigation'
// import Button from "./Button"
// import Dropdown from "./Dropdown"

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5 font-mono">
      <Link href="/">
        <Image src="/" alt="logo" width={74} height={30}/>
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        <Link href="/">
          Strona Główna
        </Link>
        <Link href="./Gallery">
          Galeria prac
        </Link>
        <Link href="./Events">
          Wydarzenia
        </Link>
        <Link href="./Contact">
          Kontakt
        </Link>
      </ul>
      <div className="relative regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
        <Button type="button" title="PL"/>
      </div>
    </nav>
  
  );
}

export default Navbar;


// const Navigation = () => {
//   return (
//     <Navbar className="flex justify-center">
//       <NavbarContent>
//         <NavbarItem className="font-mono">
//           <Link href="/">
//             Strona Główna
//           </Link>
//         </NavbarItem>
//         <Dropdown>
//           <NavbarItem className="font-mono">
//             <DropdownTrigger>
//               <Button
//                 disableRipple
//                 className="p-0 bg-transparent data-[hover=true]:bg-transparent"
//                 radius="sm"
//                 variant="light"
//                 href="/Gallery"
//               >
//                 Galeria prac
//               </Button>
//             </DropdownTrigger>
//           </NavbarItem>
//           <DropdownMenu
//             className="w-[200px]"
//             itemClasses={{
//               base: "gap-4",
//             }}
//           >
//             <DropdownItem
//               key="malarstwo"
//               href="/Gallery/painting"
//             >
//               Malarstwo
//             </DropdownItem>
//             <DropdownItem
//               key="Rzeźba"
//               href="/Gallery/sculpture"
//             >
//               Rzeźba
//             </DropdownItem>
//             <DropdownItem
//               key="Rysunek"
//               href="/Gallery/sketch"
//             >
//               Rysunek
//             </DropdownItem>
//           </DropdownMenu>
//         </Dropdown>
//         <NavbarItem className="font-mono">
//           <Link href="/Events" aria-current="page">
//             Wydarzenia
//           </Link>
//         </NavbarItem>
//         <NavbarItem className="font-mono">
//           <Link href="/Contact">
//             Kontakt
//           </Link>
//         </NavbarItem>
//       </NavbarContent>
//       <NavbarContent justify="end">
//         <NavbarItem>
//           <Button as={Link} color="primary" href="#" variant="flat">
//             Sign Up
//           </Button>
//         </NavbarItem>
//       </NavbarContent>
//     </Navbar>
//   );
// }

// export default Navigation;


// const Navbar = () => {
//   const router = useRouter();
//   const { locale } = router;

//   return (
//       <nav className="flexBetween max-container padding-container relative z-30 py-5">
//           <Link href="/">
//               <Image src="/" alt="logo" width={74} height={30} />
//           </Link>

//           <ul className="hidden h-full gap-12 lg:flex">
//               <Link href={`/[locale]/Home`} as={`/${locale}/Home`}>
//                   <a>Strona Główna</a>
//               </Link>
//               <Link href={`/[locale]/Gallery`} as={`/${locale}/Gallery`}>
//                   <a>Galeria prac</a>
//               </Link>
//               <Link href={`/[locale]/Events`} as={`/${locale}/Events`}>
//                   <a>Wydarzenia</a>
//               </Link>
//               <Link href={`/[locale]/Contact`} as={`/${locale}/Contact`}>
//                   <a>Kontakt</a>
//               </Link>
//           </ul>
//           <div className="relative regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
//               <Button type="button" title="PL" />
//           </div>
//       </nav>
//   );
// };

// export default Navbar;

