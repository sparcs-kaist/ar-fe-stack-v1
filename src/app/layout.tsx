import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import StyledComponentsRegistry from "@/common/libs/StyledComponentRegistry"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SPARCS Academic Relations Team",
  description: "Frontend Standard Stack v1.0.0",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko-KR">
      <body className={inter.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
