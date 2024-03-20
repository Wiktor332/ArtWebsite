
import {useTranslations} from 'next-intl';
 
export default function Gallery() {
  const t = useTranslations('Gallery');
  return <h1 className="font-bold text-teal-500 text-2xl">{t('title')}</h1>;
}


