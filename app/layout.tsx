import { COPY } from '@/lib/copy'
import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

const font = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: COPY.meta.title,
  description: COPY.meta.description,
  icons: [{ rel: "icon", url: COPY.meta.icon }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
