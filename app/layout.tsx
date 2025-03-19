import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "WaliilaW",
  description: "A terminal-style portfolio website",
    generator: 'v0.dev',
    icons:{
      icon : '/favicon.ico'
    }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.className}>{children}</body>
    </html>
  )
}



import './globals.css'