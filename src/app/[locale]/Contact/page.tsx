'use client';

import { motion} from "framer-motion";
// import { sendContactForm } from "@/lib/api";
import ContactForm from "@/src/components/ContactForm";
import {useTranslations} from 'next-intl';


export default function Contact() {
  const t = useTranslations('Contact');

  return (
    <motion.div 
    initial={{ y: 25, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{
      delay: 0.4,
      duration: 0.75,
    }}>
      <div className="w-full max-w-2xl px-4 mt-28 mb-12">
        <h1 className="mt-6 text-3xl md:text-4xl text-center font-semibold mb-6">{t('c0')}</h1>
        <ContactForm />
      </div>
    </motion.div>
  );
}
