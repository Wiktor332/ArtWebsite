
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, useCycle } from "framer-motion";
import { MenuItem } from "@/components/Navbar";


const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 100% 0)`,
        transition: {
            type: "spring",
            stifness: 20,
            restDelta: 2,
        },
    }),
    closed: {
        clipPath: `circle(0px at 100% 0)`,
        transition: {
            type: "spring",
            stifness: 400,
            dumping: 40,
        },
    },
};

const variants = {
    open: {
        transition: { staggerChildren: 0.02, delayChildren: 0.15 },
    },
    closed: {
        transition: { staggerChildren: 0.01, delayChildren: -1 },
    },
};

const HeaderMobile = () => {
    const pathname = usePathname();
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);
    const [isOpen, toggleOpen] = useCycle(false, true);

    return (
    <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        className={`fixed inset-0 z-50 w-full md:hidden ${
            isOpen ? "" : "pointer-events-none"
        }`}
        ref={containerRef}
    >
        <motion.div
            className="absolute inset-0 right-0 w-full bg-aspargus-50"
            variants={sidebar}
        />

        <motion.ul
            className="absolute grid w-full gap-3 px-10 py-16"
            variants={variants}
        >
            {MenuItem.map}

        </motion.ul>
    </motion.nav>
    );
};

export default HeaderMobile;

const useDimensions = (ref: any) => {
    const dimensions = useRef({ width: 0, height: 0});

    useEffect(() => {
        if (ref.current) {
            dimensions.current.width = ref.current.offsetWidth;
            dimensions.current.height = ref.current.offsetheight;
        }
    }, [ref]);
}