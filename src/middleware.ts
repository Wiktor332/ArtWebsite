import createMiddleware from 'next-intl/middleware';
import {locales, localePrefix, pathnames} from '../constants/navigation';
 
export default createMiddleware({
  defaultLocale: 'pl',
  localePrefix,
  locales,
  pathnames
});
 
