import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Dropdown from "@/components/Dropdown";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-aspargus-50">
          <Navbar />
            <main className="flex flex-col justify-center items-center flex-grow">
              {children}
            </main>
          <Footer />
      </body>
    </html>
  );
}
