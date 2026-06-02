import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Code Craft Ke - Software Development & Web Design',
  description: 'Professional software development, web design, and MPesa integration services for small businesses in Kenya',
  keywords: 'web development, software engineering, web design, MPesa integration, Kenya',
  authors: [{ name: 'Brian Mbugua Gitau' }],
  creator: 'Code Craft Ke',
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    url: 'https://codecraft.ke',
    siteName: 'Code Craft Ke',
    title: 'Code Craft Ke - Software Development & Web Design',
    description: 'Professional software development and web design services',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-primary text-slate-200">
        {children}
      </body>
    </html>
  )
}
