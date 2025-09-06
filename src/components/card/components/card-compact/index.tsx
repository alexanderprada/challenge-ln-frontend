import { type CardProps } from "../../types/card-props";

const CardCompact = (props: CardProps) => {
  return <>Esta es una CardCompact {props.cardData.linkToDetail} </>;
};

export default CardCompact;
