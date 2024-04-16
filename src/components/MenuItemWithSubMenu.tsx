'use client';
import { useEffect, useRef, useState, ReactNode } from "react";
import { usePathname } from "next/navigation";
import { useTranslations } from 'next-intl';
import NavigationLink from './NavigationLink';
import { Icon }  from "@iconify/react";
import { MenuItem } from "./NavbarMobile_test";
import { motion, useCycle } from "framer-motion";


type MenuItemWithSubMenuProps = {
    toggleOpen: () => void;
};


export const MenuItemWithSubMenu: React.FC<MenuItemWithSubMenuProps> = ({
    toggleOpen,
}) => {
    const pathname = usePathname() as any;
    const [subMenuOpen, setSubMenuOpen] = useState(false);
    const t = useTranslations('Home');

    return (
        <>
            <div>
                <button
                    className="flex w-full text-2xl font-mono text-white"
                    onClick={() => setSubMenuOpen(!subMenuOpen)}
                >
                    <div className="flex flex-row justify-between w-full items-center">
                        <span className={`${pathname.includes('/Gallery') ? 'font-semibold' : ''}`}>
                        {t('n2')}
                        </span>
                        <div className={`${subMenuOpen && 'rotate-180'}`}>
                            <Icon icon="lucide:chevron-down" width="24" height="24" />
                        </div>
                    </div>
                </button>
            </div>
            <motion.div
                className="mt-2 ml-2 flex space-y-2 font-mono text-white text-xl"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: subMenuOpen ? 1 : 0, height: subMenuOpen ? 'auto' : 0 }}
                transition={{ duration: 0.35 }}
            >
                {subMenuOpen && (
                    <div className="flex flex-col">
                        <NavigationLink onClick={() => toggleOpen()} href="/Gallery/painting">{t('n3')}</NavigationLink>
                        <NavigationLink onClick={() => toggleOpen()} href="/Gallery/sculpture">{t('n4')}</NavigationLink>
                        <NavigationLink onClick={() => toggleOpen()} href="/Gallery/sketch">{t('n5')}</NavigationLink>
                    </div>
                )}
            </motion.div>
        </>
    );
};
