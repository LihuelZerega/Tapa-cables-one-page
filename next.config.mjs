/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com', 'images.unsplash.com', 'medusajs.com', 'aceternity.com', 'framerusercontent.com'],
  },
  async redirects() {
    return [
      {
        // Link limpio para pegar en la bio de Instagram (u otras RRSS).
        // Instagram convierte '#' en '%23' al guardar un link con hash,
        // así que usamos una ruta sin '#' que redirige al formulario.
        source: '/contacto',
        destination: '/#contacto',
        permanent: false,
      },
      {
        source: '/solicitar-presupuesto',
        destination: '/#contacto',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
