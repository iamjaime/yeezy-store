import { Inter } from "next/font/google"
import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import "styles/globals.css"
import Footer from "@modules/layout/templates/footer"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light">
      <body>
        <main className="relative mt-16">{props.children}</main>
        <Footer />
      </body>
    </html>
  )
}
