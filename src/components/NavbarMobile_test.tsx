'use client';

import {MenuItemWithSubMenu} from './MenuItemWithSubMenu';
import { useEffect, useRef, useState, ReactNode } from "react";
import { motion, useCycle } from "framer-motion";
import { usePathname } from "next/navigation";
import { Icon }  from "@iconify/react";
import { useTranslations } from 'next-intl';
import LocalSwitcher from "./LanguageSwitcher";
import NavigationLink from './NavigationLink';
import Link from "next/link";
import Image from "next/image";

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

const HeaderMobile = () => {
    const t = useTranslations('Home');
    const pathname = usePathname();
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);
    const [isOpen, toggleOpen] = useCycle(false, true);

    return (
        <motion.nav
            initial={false}
            animate={isOpen ? 'open' : 'closed'}
            custom={height}
            className={`fixed inset-0 z-50 w-full lg:hidden ${isOpen ? '' : 'pointer-events-none'}`}
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
            {/* <div className='ml-10'>
                <Link href="/">
                   <Image src="../../../../images/logo/KasiaKuta.svg" width={50} height={50} alt="logo" />
                </Link>
            </div> */}
                <MenuItem>
                    <div className="items-center h-full gap-4 lg:flex text-white mr-4">
                        <NavigationLink onClick={() => toggleOpen()} href="/">{t('n1')}</NavigationLink>
                        <hr className="border-2 border-aspargus-50 mb-6" />
                        
                        <MenuItemWithSubMenu toggleOpen={toggleOpen} />
                        <hr className="border-2 border-aspargus-50 mb-6" />
                            
                        <NavigationLink onClick={() => toggleOpen()} href="/Events">{t('n6')}</NavigationLink>
                        <hr className="border-2 border-aspargus-50 mb-6" />
                        
                        <NavigationLink onClick={() => toggleOpen()} href="/Contact">{t('n7')}</NavigationLink>
                        <hr className="border-2 border-aspargus-50 mb-6" />
                        
                        <LocalSwitcher />
                    </div>
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
        <svg width="65" height="65" viewBox="0 0 23 23">
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

export const MenuItem = ({
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
