
import type { Metadata } from "next";
import "@/src/app/ui/globals.css";
import Navbar from "@/src/app/components/Navbar";
import Footer from "@/src/app/components/Footer";

// import Navigation from "@/components/Navbar";
import Providers from "../providers";

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
          {/* <Providers > */}
              <Navbar />
                <main className="relative owerflow-hidden">{children}</main>
              <Footer />
          {/* </Providers > */}
        </body>
      </html>
  );
}

