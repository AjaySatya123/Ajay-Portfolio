import type { Metadata } from 'next'
import { Orbitron, Space_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const orbitron = Orbitron({ subsets: ["latin"], variable: '--font-orbitron' });
const spaceMono = Space_Mono({ subsets: ["latin"], weight: ['400', '700'], variable: '--font-space-mono' });

export const metadata: Metadata = {
  title: 'Full Stack Developer Portfolio | Cyberpunk',
  description: 'Futuristic cyberpunk portfolio showcasing full stack development skills',
  generator: 'v0.app',
  icons: {
    icon: '/favico.jpeg',
    apple: '/favico.jpeg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <style>{`
          :root {
            --font-orbitron: ${orbitron.variable};
            --font-space-mono: ${spaceMono.variable};
          }
        `}</style>
      </head>
      <body className={`${orbitron.className} ${spaceMono.className} font-sans antialiased bg-slate-950 text-slate-50 overflow-x-hidden`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
