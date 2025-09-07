import type { PropsWithChildren } from "react";
import type { TitleProps } from "./types/title-props";
import {
  colorsText,
  sizeClasses,
  textAlign,
  weightClasses
} from "../../types/texts";

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
      className={`${sizeClasses[size]} ${weightClasses[weight]} font-family-title ${textAlign[align]} ${colorsText[color]} ${className}`}
    >
      <span className={`${weightClasses[leadWeight]}`}>{lead} </span>
      {children}
    </TagTitle>
  );
}
