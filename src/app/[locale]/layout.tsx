
import type { Metadata } from "next";
import "@/src/app/ui/globals.css";
// import Navbar from "@/components/App";
import Footer from "@/components/Footer";

import * as React from "react";

import {NextUIProvider} from "@nextui-org/system";
import App from "@/components/Navbar";

export const metadata: Metadata = {
  title: "ArtByKasiaKuta",
  description: "Description",
};

export default function LocalePage({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  return (
      <html lang={locale}>
        <body>
          <App />
          <main className="relative owerflow-hidden">{children}</main>
          <Footer />
        </body>
      </html>
  );
}

