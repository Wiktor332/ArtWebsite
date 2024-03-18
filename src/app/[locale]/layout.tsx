import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ArtByKasiaKuta",
  description: "Description",
};

export default function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  return (
    <html lang={locale}>
      <body>
        <Navbar />
        <main className="relative owerflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

