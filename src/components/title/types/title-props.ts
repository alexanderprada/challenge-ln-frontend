import type {
  WeightFonts,
  TitleVariant,
  GeneralTextProps
} from "../../../types/texts";

export interface TitleProps extends GeneralTextProps {
  lead?: string;
  leadWeight?: WeightFonts;
  variant?: TitleVariant;
}
