import {useTranslations} from 'next-intl';

export default function Home() {
  const t = useTranslations('Home');
  return <h1 className="font-bold text-teal-500 text-2xl">{t('title')}</h1>;
}