/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },
  // Garantir que o app rode corretamente em produção
  output: 'standalone',
  // Configurações de performance
  poweredByHeader: false,
  compress: true,
}

module.exports = nextConfig
