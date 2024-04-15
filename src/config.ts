// import {
//   createLocalizedPathnamesNavigation,
//   Pathnames
// } from 'next-intl/navigation';
// export const locales = ['en', 'pl'] as const;
// export const localePrefix = 'always';

// export const pathnames = {
//   '/': '/',
//   '/Gallery': {
//     en: '/Gallery',
//     pl: '/Galeira'
//   }, 
//   'Painting': {
//     en: '/Gallery/painting',
//     pl: '/Galeira/malarstwo'
//   },
//   'Sculpture': {
//     en: '/Gallery/sculpture',
//     pl: '/Galeria/rzeźby'
//   },
//   'Sketch': {
//     en: '/Gallery/sketch',
//     pl: '/Galeria/rysunki'
//   },
//   '/Events': {
//     en: '/Events',
//     pl: '/Wydarzenia'
//   },
//   '/Contact': {
//     en: '/Contact',
//     pl: '/Kontakt'
//   }
// } satisfies Pathnames<typeof locales>;

// // Use the default: `always`
// export const {Link, redirect, usePathname, useRouter, getPathname} =
//   createLocalizedPathnamesNavigation({locales, localePrefix, pathnames});
import {ReactNode} from 'react';
import {Pathnames} from 'next-intl/navigation';

export const locales = ['en', 'pl'] as const;


export const pathnames = {
  '/': '/',

  '/Gallery': {
    en: '/Gallery',
    pl: '/Galeria'
  }, 

  '/Gallery/painting': {
    en: '/Gallery/painting',
    pl: '/Galeria/malarstwo'
  },
  '/Gallery/sculpture': {
    en: '/Gallery/sculpture',
    pl: '/Galeria/rzeźby'
  },
  '/Gallery/sketch': {
    en: '/Gallery/sketch',
    pl: '/Galeria/rysunki'
  },

  '/Events': {
    en: '/Events',
    pl: '/Wydarzenia'
  },
  '/Contact': {
    en: '/Contact',
    pl: '/Kontakt'
  }
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;