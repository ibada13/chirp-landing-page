import type { Metadata } from "next";
import { Cairo } from 'next/font/google'
import "./globals.css";

 
const cairo = Cairo({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: "Chrip",
  description: "Chrip real world projects ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html  lang="en">
      <body
        className={`${cairo.className}} antialiased  text-text bg-default`}
        
      >
        {children}
      </body>
    </html>
  );
}
