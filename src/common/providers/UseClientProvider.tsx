"use client"

/**
 * @file UseClientProvider.tsx
 * @description This file provides a provider that can be used to wrap components that use client-side rendering.
 * @author night@sparcs.org (Jiho Park)
 */

import React from "react"

import { ThemeProvider as StyledProvider } from "styled-components"

import theme from "@/styles/themes"

export const UseClientProvider: React.FC<React.PropsWithChildren> = (props) => {
  // @ts-ignore-next-line
  return <StyledProvider theme={theme}>{props.children}</StyledProvider>
}
