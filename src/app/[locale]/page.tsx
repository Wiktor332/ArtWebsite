
import { useTranslations } from 'next-intl';
import "../globals.css";
import {unstable_setRequestLocale} from 'next-intl/server';
import MainPageLayout from '@/src/components/MainPageLayout';

type Props = {
  params: {locale: string};
};

export default function Home({params: {locale}}: Props) {
  unstable_setRequestLocale(locale);
  return (
      <MainPageLayout />
  );
}
