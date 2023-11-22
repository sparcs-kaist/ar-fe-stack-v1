import { Bodoni_Moda } from "next/font/google"
import localFont from "next/font/local"

export const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--next-font-family-bodoni-moda",
})

export const pretendard = localFont({
  src: "./local/PretendardVariable.woff2",
  variable: "--next-font-family-pretendard",
})
