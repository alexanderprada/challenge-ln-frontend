import CardCompact from "./components/card-compact";
import CardDefault from "./components/card-default";
import CardHero from "./components/card-hero";
import { cardVariant, type CardProps } from "./types/card-props";

const Card = ({ variant = cardVariant.DEFAULT, ...props }: CardProps) => {
  switch (variant) {
    case cardVariant.COMPACT:
      return <CardCompact {...props} variant={variant} />;
    case cardVariant.HERO:
      return <CardHero {...props} variant={variant} />;
    default:
      return <CardDefault {...props} variant={variant} />;
  }
};

export default Card;
