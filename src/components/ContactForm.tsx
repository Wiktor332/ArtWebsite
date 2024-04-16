'use client';
import { useState } from "react";
import { useFormStatus } from "react-dom";
import {useTranslations} from 'next-intl';


export default function ContactForm() {
    const [loading, setLoading] = useState(false)
    const { pending } = useFormStatus()
    const t = useTranslations('Contact');
    async function handleSubmit(event: any) {
        event.preventDefault();
        setLoading(true);
      
        const data = {
          name: String(event.target.name.value),
          email: String(event.target.email.value),
          subject: String(event.target.subject.value),
          message: String(event.target.message.value),
        }
      
        const response = await fetch ("./api/contact", {
           method: "POST",
           headers: {
            "Content-Type": "application/json",
           },
           body: JSON.stringify(data),
        })

        if (response.ok) {
            console.log("Message send succesfully");
            alert("Wiadomość wysłana pomyślnie");
            setLoading(false)
            event.target.name.value = "";
            event.target.email.value = "";
            event.target.subject.value = "";
            event.target.message.value = "";
        } 
        if (!response.ok) {
            console.log("Error sendig message");
            alert("Błąd podczas wysyłania wiadomości");
            setLoading(false)
        }
      }
    return (
      <form onSubmit={handleSubmit} className="flex flex-col justify-center mt-10">

      <div className="w-full flex flex-col p-4">
        <label className="font-mono font-semibold text-xl md:text-2xl text-center mb-2" htmlFor="name">{t('c1')}</label>
        <input type="text" minLength={3} maxLength={30} required className="p-4 bg-artichokegreen-50 border-2 border-white rounded-md text-center text-xl font-mono" autoComplete="off" id="name"/>
      </div>
    
      <div className="w-full flex flex-col p-4">
        <label className="font-mono font-semibold text-xl md:text-2xl text-center mb-2" htmlFor="email">{t('c2')}</label>
        <input minLength={10} maxLength={150} type="email" required className=" p-4 bg-artichokegreen-50 border-2 border-white rounded-md text-center text-xl font-mono" autoComplete="off" id="email"/>
      </div>
    
      <div className="w-full flex flex-col p-4">
        <label className="font-mono font-semibold text-xl md:text-2xl text-center mb-2" htmlFor="subject">{t('c3')}</label>
        <input maxLength={100} type="text" required className="p-4 bg-artichokegreen-50 border-2 border-white rounded-md text-center text-xl font-mono" autoComplete="off" id="subject"/>
      </div>
    
      <div className="w-full flex flex-col p-4">
        <label className="font-mono font-semibold text-xl md:text-2xl mb-2 text-center" htmlFor="message">{t('c4')}</label>
        <textarea
          rows={4}
          required
          minLength={10}
          maxLength={500}
          disabled={loading}
          name="message"
          className="w-full p-4 bg-artichokegreen-50 border-2 border-white rounded-md font-mono"
        />
      </div>
      
      <div className="w-full flex justify-center">
        <button 
          type="submit" 
          className="px-4 py-2 bg-artichokegreen-50 w-32 disabled:bg-gray-300 disabled:text-gray-100 text-black font-semibold text-base md:text-xl mt-4 font-mono rounded-md hover:bg-green-800" disabled={pending}
        >
         {t('c5')}
        </button>
      </div>
    </form>
  )
}