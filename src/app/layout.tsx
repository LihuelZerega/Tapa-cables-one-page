import type { Metadata } from "next";
import { Inter, Varela_Round } from "next/font/google";
import "./globals.css";
import SEO from "@/components/SEO";

const inter = Inter({ subsets: ["latin"] });
const varela = Varela_Round({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-varela",
  display: "swap",
});

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
    <html lang="es" className={varela.variable}>
      <head>
        <SEO />
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-89WPGPSTKL"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
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
