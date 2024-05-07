'use client';

import Link from "next/link";
import { useEffect, useRef, useState, ReactNode } from "react";
import { usePathname } from "next/navigation";
import { motion, useCycle } from "framer-motion";
import { NavItem, menuItem } from "@/src/components/Navbar";
import { NavItem_Men, MenuItemWithMenuProps } from "@/public/styles/types";
import { Icon }  from "@iconify/react";
import LocalSwitcher from "./LanguageSwitcher";
import NavigationLink from './NavigationLink';
import {useTranslations} from 'next-intl';
import {NextIntlClientProvider, useMessages} from 'next-intl';
import {locales} from '../config';




type MenuItemWithSubMenuProps = {
    item: NavItem;
    toggleOpen: () => void;
  };
  
  const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 100% 0)`,
      transition: {
        type: 'spring',
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: 'circle(0px at 100% 0)',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  };

  type Props = {
    children: ReactNode;
    params: {locale: string};
  };
  
  export function generateStaticParams() {
    return locales.map((locale) => ({locale}));
  }
  
  
  const HeaderMobile = ({
    children,
    params: { locale },
  }: Props) => {
    const messages = useMessages();
    const pathname = usePathname();
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);
    const [isOpen, toggleOpen] = useCycle(false, true);
  
    return (
        <motion.nav
          initial={false}
          animate={isOpen ? 'open' : 'closed'}
          custom={height}
          className={`fixed inset-0 z-50 w-full lg:hidden ${
            isOpen ? '' : 'pointer-events-none'
          }`}
          ref={containerRef}
        >
          <motion.div
            className="absolute inset-0 right-0 w-full bg-artichokegreen-50"
            variants={sidebar}
          />
          <motion.ul
            variants={variants}
            className="absolute grid w-full gap-3 px-10 py-16 max-h-screen overflow-y-auto"
          >
            {menuItem.map((item, idx) => {
              const isLastItem = idx === menuItem.length - 1; 
              return (
                <div key={idx}>
                  {item.submenu ? (
                    <MenuItemWithSubMenu item={item} toggleOpen={toggleOpen} />
                  ) : (
                    <MenuItem>
                      <Link
                        href={item?.href || ''}
                        onClick={() => toggleOpen()}
                        className={`flex w-full text-2xl  text-white  ${
                          item.href === pathname ? 'font-semibold' : ''
                        }`}
                      >
                        {item.title}
                      </Link>
                    </MenuItem>
                  )}
                  {!isLastItem && (
                    <MenuItem className="my-3 h-1 w-full bg-aspargus-50" />
                  )}
                </div>
              );
            })}
            <MenuItem>
              <hr className="border-2 border-aspargus-50 mb-6"></hr>
              <LocalSwitcher />
            </MenuItem>
          </motion.ul>
          <MenuToggle toggle={toggleOpen} />
        </motion.nav>
    );
  };
  
  export default HeaderMobile;
  
  const MenuToggle = ({ toggle }: { toggle: any }) => (
    <button
      onClick={toggle}
      className="pointer-events-auto absolute right-4 top-[14px] z-30"
    >
      <svg width="34" height="34" viewBox="0 0 23 23">
        <Path
          variants={{
            closed: { d: 'M 2 2.5 L 20 2.5' },
            open: { d: 'M 3 16.5 L 17 2.5' },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: 'M 2 16.346 L 20 16.346' },
            open: { d: 'M 3 2.5 L 17 16.346' },
          }}
        />
      </svg>
    </button>
  );
  
  const Path = (props: any) => (
    <motion.path
      fill="transparent"
      strokeWidth="2"
      stroke="hsl(0, 0%, 18%)"
      strokeLinecap="round"
      {...props}
    />
  );
  
  const MenuItem = ({
    className,
    children,
  }: {
    className?: string;
    children?: ReactNode;
  }) => {
    return (
      <motion.li variants={MenuItemVariants} className={className}>
        {children}
      </motion.li>
    );
  };
  
  const MenuItemWithSubMenu: React.FC<MenuItemWithSubMenuProps> = ({
    item,
    toggleOpen,
  }) => {
    const pathname = usePathname() as any;
    const [subMenuOpen, setSubMenuOpen] = useState(false);
  
    return (
      <>
        <MenuItem>
          <button
            className="flex w-full text-2xl  text-white"
            onClick={() => setSubMenuOpen(!subMenuOpen)}
          >
            <div className="flex flex-row justify-between w-full items-center">
              <span
                className={`${pathname.includes(item.href) ? 'font-semibold' : ''}`}
              >
                {item.title}
              </span>
              <div className={`${subMenuOpen && 'rotate-180'}`}>
                <Icon icon="lucide:chevron-down" width="24" height="24" />
              </div>
            </div>
          </button>
        </MenuItem>
        <motion.div
          className="mt-2 ml-2 flex flex-col space-y-2  text-white text-xl"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: subMenuOpen ? 1 : 0, height: subMenuOpen ? 'auto' : 0 }}
          transition={{ duration: 0.35 }}
        >
          {subMenuOpen && (
            <>
              {item.children?.map((subItem, subIdx) => {
                return (
                  <MenuItem key={subIdx}>
                    <Link
                      href={subItem.href || ''}
                      onClick={() => toggleOpen()}
                      className={` ${
                        subItem.href === pathname ? '' : ''
                      }`}
                    >
                      {subItem.title}
                    </Link>
                  </MenuItem>
                );
              })}
            </>
          )}
        </motion.div>
      </>
    );
  };
  
  const MenuItemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
        duration: 0.02,
      },
    },
  };
  
  const variants = {
    open: {
      transition: { staggerChildren: 0.02, delayChildren: 0.15 },
    },
    closed: {
      transition: { staggerChildren: 0.01, staggerDirection: -1 },
    },
  };
  
  const useDimensions = (ref: any) => {
    const dimensions = useRef({ width: 0, height: 0 });
  
    useEffect(() => {
      if (ref.current) {
        dimensions.current.width = ref.current.offsetWidth;
        dimensions.current.height = ref.current.offsetHeight;
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ref]);
  
    return dimensions.current;
  };