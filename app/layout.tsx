import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Chequeo Digital Paraguay',
  description: 'Datos abiertos del Chequeo Digital del Paraguay',
  icons: {
    icon: 'https://chequeodigital.mipymes.gov.py/Content/img/favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
