import {
    createLocalizedPathnamesNavigation,
    Pathnames
  } from 'next-intl/navigation';
   
  export const locales = ['eng', 'pl'] as const;
  export const localePrefix = 'always'; // Default
   
  // The `pathnames` object holds pairs of internal
  // and external paths, separated by locale.
  export const pathnames = {
    // If all locales use the same pathname, a
    // single external path can be provided.
   
    // If locales use different paths, you can
    // specify each external path per locale.
    '/Home': {
      eng: '/Home',
      pl: '/Strona_Główna'
    },
   
    // Dynamic params are supported via square brackets
    '/Gallery/painting': {
      eng: '/Gallery/painting',
      pl: '/Galeria/malarstwo'
    },

    '/Gallery/sculpture': {
        eng: '/Gallery/sculpture',
        pl: '/Galeria/rzeźby'
    },

    '/Gallery/sketch': {
        eng: '/Gallery/sketch',
        pl: '/Galeria/rysunek'
    },
   
    '/Events': {
      eng: '/Events',
      pl: '/Wydarzenia'
    },

    '/Contact': {
        eng: '/Contact',
        pl: '/Kontakt'
      }
  } satisfies Pathnames<typeof locales>;
   
  export const {Link, redirect, usePathname, useRouter, getPathname} =
    createLocalizedPathnamesNavigation({locales, localePrefix, pathnames});