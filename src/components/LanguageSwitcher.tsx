'use client';

import {useLocale} from 'next-intl';
import {useRouter} from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {ChangeEvent, useTransition} from 'react';
import { useState } from 'react';
import { MaterialSymbolsLightLanguage } from './LangIcon';
import { motion, useCycle } from "framer-motion";


export default function LocalSwitcher() {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const localActive = useLocale();

    const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const nextLocale = e.target.value;
        startTransition(() => {
            router.replace(`/${nextLocale}`);
        });
    };

    return (
        <div className='rounded items-center h-auto mt-4'>
            <MaterialSymbolsLightLanguage />
            <select
                id="locale-switcher"
                value={localActive}
                onChange={onSelectChange}
                disabled={isPending}
                className='p-0.5 bg-artichokegreen-50 border rounded font-mono text-semibold text-xl text-white z-10'
            >
                <option value="en">Eng</option>
                <option value="pl">Pl</option>
            </select>
        </div>
    );
};