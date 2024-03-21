'use client'

import { Navbar } from "@nextui-org/react";
import {NextUIProvider} from "@nextui-org/system";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  );
}
