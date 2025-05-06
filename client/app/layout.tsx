import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import type React from "react" // Added import for React


const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Amrita Model United Nations Society",
  description: "Model United Nations Club Website",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

