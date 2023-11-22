import type { Metadata } from "next"

import classNames from "classnames"

import "@/styles/globals.css"

import { bodoniModa, pretendard } from "@/styles/fonts/googleFonts"
import StyledComponentsRegistry from "@/common/libs/styledComponents/StyledComponentRegistry"

export const metadata: Metadata = {
  title: "SPARCS Academic Relations Team",
  description: "Frontend Standard Stack v1.0.0",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko-KR" className={classNames(pretendard.variable, bodoniModa.variable)}>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
