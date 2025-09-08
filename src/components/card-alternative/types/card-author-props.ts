import type { ColorText } from "../../../types/texts";

export type CardAuthorVariant = "onlyText" | "vertical" | "horizontal";

export interface CardAuthorProps {
  name: string;
  image?: string;
  variant?: CardAuthorVariant;
  colorText?: ColorText;
}
