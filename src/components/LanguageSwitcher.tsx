'use client';

import LocaleSwitcherSelect from './LocaleSwitcherSelect';
import {useLocale, useTranslations} from 'next-intl';
import {locales} from '../config';


// export default function LocalSwitcher() {
//     const [isPending, startTransition] = useTransition();
//     const router = useRouter();
//     const localActive = useLocale();

//     const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
//         const nextLocale = e.target.value;
//         startTransition(() => {
//             router.replace(`/${nextLocale}`);
//         });
//     };

//     return (
//         <div className='rounded items-center h-auto mt-4'>
//             <MaterialSymbolsLightLanguage />
//             <select
//                 id="locale-switcher"
//                 value={localActive}
//                 onChange={onSelectChange}
//                 disabled={isPending}
//                 className='p-0.5 bg-artichokegreen-50 border rounded font-mono text-semibold text-xl text-white z-10'
//             >
//                 <option value="en">Eng</option>
//                 <option value="pl">Pl</option>
//             </select>
//         </div>
//     );
// };

export default function LocaleSwitcher() {
    const t = useTranslations('LocaleSwitcher');
    const locale = useLocale();
  
    return (
      <LocaleSwitcherSelect defaultValue={locale} label={t('label')}>
        {locales.map((cur) => (
          <option key={cur} value={cur}>
            {t('locale', {locale: cur})}
          </option>
        ))}
      </LocaleSwitcherSelect>
    );
  }
