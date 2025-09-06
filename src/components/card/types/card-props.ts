import type { CardData } from "./card-data";

export const cardVariant = {
  DEFAULT: "DEFAULT",
  COMPACT: "COMPACT",
  HERO: "HERO"
} as const;

export type CardVariant = (typeof cardVariant)[keyof typeof cardVariant];

export interface CardProps {
  cardData: CardData;
  variant?: CardVariant;
  onlySuscriptors?: boolean;
}
