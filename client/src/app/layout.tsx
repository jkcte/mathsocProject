import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"

import { Button } from "@/components/ui/button"

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
      <body className={inter.className}>
        <div className="text-right sticky top-0">
        <Button className="text-slate-200 hover:text-slate-950" variant="ghost">Announcement</Button>
        <Button className="text-slate-200 hover:text-slate-950" variant="ghost">Event</Button>
        <Button className="text-slate-200 hover:text-slate-950" variant="ghost">Who We are</Button>
        <Button className="text-slate-200 hover:text-slate-950" variant="ghost">Articles</Button>
        <Button className="text-slate-200 hover:text-slate-950" variant="ghost">Contacts</Button>
        <Button className="text-slate-200 hover:text-slate-950" variant="ghost">Register Now</Button>
        </div>
        <div>{children}</div>
      </body>
    </html>
  );
}
