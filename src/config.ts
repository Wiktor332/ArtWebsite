
import {Pathnames} from 'next-intl/navigation';

export const locales = ['en', 'pl'] as const;


export const pathnames = {
  '/': '/',

  '/Gallery': {
    en: '/Gallery',
    pl: '/Gallery'
  }, 

  '/Gallery/painting': {
    en: '/Gallery/painting',
    pl: '/Gallery/painting'
  },
  '/Gallery/sculpture': {
    en: '/Gallery/sculpture',
    pl: '/Gallery/sculpture'
  },
  '/Gallery/sketch': {
    en: '/Gallery/sketch',
    pl: '/Gallery/sketch'
  },

  '/Events': {
    en: '/Events',
    pl: '/Events'
  },
  '/Contact': {
    en: '/Contact',
    pl: '/Contact'
  }
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;