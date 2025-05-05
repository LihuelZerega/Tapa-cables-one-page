import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SEO from "@/components/SEO";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tapacables | Transformamos fachadas, tapando cables",
  description: "Transformamos fachadas, tapando cables",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <SEO />
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-89WPGPSTKL"></script>
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-89WPGPSTKL');
        `}} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
