import type { ColorText } from "../../../types/texts";

export interface ButtonProps {
  onClick: () => void;
  text: string;
  icon?: string;
  className?: string;
  isPrimary?: boolean;
  colorText?: ColorText;
}
