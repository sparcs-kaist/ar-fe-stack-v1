import colors from "./themes/colors"
import sizes from "./themes/sizes"

export type ColorTheme = typeof colors
export type SizeTheme = typeof sizes

export type Theme = {
  colors: ColorTheme
  sizes: SizeTheme
}

declare module "styled-components" {
  export interface ThemeArgument {
    colors: ColorTheme
    sizes: SizeTheme
  }
}
