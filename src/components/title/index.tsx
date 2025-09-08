import type { PropsWithChildren } from "react";
import type { TitleProps } from "./types/title-props";
import {
  colorsText,
  sizeClasses,
  textAlign,
  weightClasses
} from "../../types/texts";
import Text from "../text";

export default function Title({
  children,
  size = "xs",
  weight = "regular",
  lead,
  leadWeight = "bold",
  variant = "h1",
  align = "start",
  color = "lightNeutral900",
  className = ""
}: PropsWithChildren<TitleProps>) {
  const TagTitle = variant;
  return (
    <TagTitle
      data-testid="text"
      className={`${sizeClasses[size]} ${weightClasses[weight]} font-family-title ${textAlign[align]} ${colorsText[color]} ${className}`}
    >
      <Text variant="span" size="xl" color="lightBlue500" weight={leadWeight}>
        {lead}{" "}
      </Text>
      {children}
    </TagTitle>
  );
}
