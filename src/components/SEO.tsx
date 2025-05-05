import Head from "next/head";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
}

export default function SEO({
  title = "Tapacables | Transformamos fachadas, tapando cables",
  description = "Transformamos fachadas, tapando cables de manera profesional y estética.",
  canonical = "https://tapacables.com/",
  image = "https://tapacables.com/og-image.jpg",
}: SEOProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <h1 className="text-transparent select-none">Tapacables</h1>
      <h1 className="text-transparent select-none">Canaleta para Cables Fachada</h1>
      <h1 className="text-transparent select-none">Empresa tapar Cables Fachada</h1>
      <h1 className="text-transparent select-none">Empresa tapar Cables Fachadas</h1>
      <h1 className="text-transparent select-none">Empresa cubrir cables fachadas</h1>
      <h1 className="text-transparent select-none">Empresa cubrir cables fachada</h1>
      <h1 className="text-transparent select-none">empresa ocultar cables fachadas</h1>
      <h1 className="text-transparent select-none">empresa ocultar cables fachada</h1>
      <h1 className="text-transparent select-none">Tapacables fachadas</h1>
      <h1 className="text-transparent select-none">Tapacables fachada</h1>
    </Head>
  );
} 