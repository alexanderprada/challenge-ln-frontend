import { type CardProps } from "../../types/card-props";

const CardDefault = (props: CardProps) => {
  return <>Esta es una CardDefault {props.cardData.linkToDetail} </>;
};

export default CardDefault;
