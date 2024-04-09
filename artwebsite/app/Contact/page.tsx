
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Dropdown from "@/components/Dropdown";
import { sendContactForm } from "../../lib/api";
import ContactForm from "@/components/ContactForm";

export default function Contact() {

  return (

    <div className="max-auto w-full max-w-2xl px-4 my-10">
      <h1 className="font-mono text-4xl text-center font-semibold mb-4">Formularz kontaktowy:</h1>
      <ContactForm />
    </div>
  );
}
