import type { CardAuthorVariant } from "./card-author-props";
import type { CardData } from "./card-data";

export const imageAlignConst = {
  top: "flex-col",
  right: "md:flex-row-reverse",
  left: "md:flex-row",
  bottom: "md:flex-col-reverse"
} as const;

export type ImageAlign = keyof typeof imageAlignConst;
export type TitleAlign = "start" | "center" | "end";

export interface CardResponsive {
  default?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}
export interface CardProps {
  cardData: CardData;
  onlySuscriptors?: boolean;
  withImage?: boolean;
  imageAlign?: ImageAlign;
  titleAlign?: TitleAlign;
  withAuthor?: boolean;
  authorVariant?: CardAuthorVariant;
  withSubtitle?: boolean;
  className?: string;
  isMain?: boolean;
}
