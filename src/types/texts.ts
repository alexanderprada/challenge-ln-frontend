export const sizeClasses = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
  "4xl": "text-4xl"
} as const;

export const weightClasses = {
  light: "font-light",
  regular: "font-regular",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold"
} as const;

export const colorsText = {
  lightNeutral900: "text-light-neutral-900",
  lightNeutral800: "text-light-neutral-800",
  lightNeutral700: "text-light-neutral-700",
  lightNeutral400: "text-light-neutral-400",
  lightNeutral300: "text-light-neutral-300",
  lightNeutral200: "text-light-neutral-200",
  lightNeutral50: "text-light-neutral-50",
  lightBlue500: "text-light-blue-500",
  lightBlue200: "text-light-blue-200",
  pink600: "text-pink-600",
  pink100: "text-pink-100",
  neutralDark800: "text-neutral-dark-800",
  neutralWhite: "text-neutral-white"
} as const;

export const textAlign = {
  start: "text-start",
  center: "text-center",
  end: "text-end"
} as const;

export type TextAlign = keyof typeof textAlign;
export type SizeFonts = keyof typeof sizeClasses;
export type WeightFonts = keyof typeof weightClasses;
export type VariantsText = "span" | "p";
export type TitleVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export type ColorText = keyof typeof colorsText;

export interface GeneralTextProps {
  align?: TextAlign;
  weight?: WeightFonts;
  size?: SizeFonts;
  color?: ColorText;
  className?: string;
}
