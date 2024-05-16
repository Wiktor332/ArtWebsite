'use client';

import clsx from 'clsx';
import {useParams} from 'next/navigation';
import {ChangeEvent, ReactNode, useTransition} from 'react';
import {useRouter, usePathname} from '../navigation';
import { MaterialSymbolsLightLanguage } from './LangIcon';


type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
  label
}: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        {pathname, params},
        {locale: nextLocale}
      );
    });
  }

  return (
    <div className='rounded flex flex:col items-center h-auto'>
        <MaterialSymbolsLightLanguage />
      <select
        className="p-0.5 bg-artichokegreen-50 border rounded font-mono text-semibold text-xl text-white z-10"
        defaultValue={defaultValue}
        onChange={onSelectChange}
      >
        {children}
      </select>
      </div>
  );
}