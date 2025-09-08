import CardImage from "./components/card-image";
import Title from "../title";
import CardAuthor from "./components/card-author";
import Text from "../text";
import type { CardProps } from "./types/card-props";
import type { CardAuthorVariant } from "./types/card-author-props";

const Card = ({ cardData, className = "", variant = "DEFAULT" }: CardProps) => {
  const authorVariant = {
    DEFAULT: "onlyText",
    COMPACT: "horizontal",
    HERO: "vertical"
  };
  return (
    <article className={className}>
      <a href={cardData.linkToDetail} title={cardData.title}>
        <figure className={`relative flex flex-col`}>
          {variant === "DEFAULT" && (
            <CardImage
              alt={cardData.title}
              src={cardData.imageUrl}
              badge={cardData.badge}
            />
          )}
          <div
            className={`z-50 m-auto flex max-w-[925px] flex-col gap-3 px-4 sm:px-0`}
          >
            <Title
              align={variant === "HERO" ? "center" : "start"}
              variant="h2"
              weight="medium"
              size="xl"
              lead={cardData.lead}
            >
              {cardData.title}
            </Title>
            {variant === "DEFAULT" && (
              <Text weight="light" size="sm">
                {cardData.description}
              </Text>
            )}
            {cardData.authorName && (
              <CardAuthor
                variant={authorVariant[variant] as CardAuthorVariant}
                name={cardData.authorName}
                image={cardData.authorImageUrl}
              />
            )}
          </div>
        </figure>
      </a>
    </article>
  );
};

export default Card;
