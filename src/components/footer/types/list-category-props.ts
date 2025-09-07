import type { WeightFonts } from "../../../types/texts";

export interface ListItem {
  text: string;
  link: string;
}

export interface ListCategoryProps {
  list: ListItem[];
  title?: string;
  withSeparator?: boolean;
  titleWeight?: WeightFonts;
  itemWeight?: WeightFonts;
}
