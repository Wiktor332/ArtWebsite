import {Pathnames} from 'next-intl/navigation';

export const locales = ['eng', 'pl'] as const;

export const pathnames = {
  '/': '/',
  '/pathnames': {
    eng: '/pathnames',
    pl: '/sciezka'
  }
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;