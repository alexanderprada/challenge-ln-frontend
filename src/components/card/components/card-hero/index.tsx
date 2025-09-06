import { type CardProps } from "../../types/card-props";

const CardHero = (props: CardProps) => {
  return <>Esta es una cardHero {props.cardData.linkToDetail} </>;
};

export default CardHero;
