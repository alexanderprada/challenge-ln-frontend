import { type PropsWithChildren } from "react";
import type { TextProps } from "./types/text-props";
import {
  colorsText,
  sizeClasses,
  textAlign,
  weightClasses
} from "../../types/texts";

export default function Text({
  children,
  size = "xs",
  weight = "regular",
  variant = "p",
  color = "lightNeutral700",
  className = "",
  align = "start"
}: PropsWithChildren<TextProps>) {
  const Tag = variant;
  return (
    <Tag
      data-testid={`text-${children}`}
      className={`${sizeClasses[size]} ${weightClasses[weight]} ${colorsText[color]} ${textAlign[align]} font-family-body ${className}`}
    >
      {children}
    </Tag>
  );
}
