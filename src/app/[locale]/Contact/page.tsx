import {useTranslations} from 'next-intl';
 
export default function Contact() {
  const t = useTranslations('Contact');
  return <h1 className="font-bold text-teal-500 text-2xl">{t('title')}</h1>;
}