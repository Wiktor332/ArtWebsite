import Link from "next/link";


// export default function Home() {
//   return (
//     <h1 className="font-bold text-teal-500 text-2xl">ArtWebsite dla Kasi</h1>
//   );
// }

import {useTranslations} from 'next-intl';
 
export default function Index() {
  const t = useTranslations('Index');
  return <h1 className="font-bold text-teal-500 text-2xl">{t('title')}</h1>;
}