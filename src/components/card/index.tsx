import { imageAlignConst, type CardProps } from "./types/card-props";
import CardImage from "./components/card-image";
import Title from "../title";
import CardAuthor from "./components/card-author";
import Text from "../text";

const Card = ({
  cardData,
  authorVariant = "onlyText",
  imageAlign = "top",
  titleAlign = "start",
  withAuthor = true,
  withImage = true,
  withSubtitle = true,
  className = "",
  isMain = false
}: CardProps) => {
  return (
    <article className={className}>
      <a href={cardData.linkToDetail} title={cardData.title}>
        <figure
          className={`relative flex flex-col ${imageAlignConst[imageAlign]} ${isMain && "w-full"}`}
        >
          {withImage && (
            <CardImage
              alt={cardData.title}
              src={cardData.imageUrl}
              badge={cardData.badge}
            />
          )}
          <div
            className={`${isMain && "absolute bottom-0 left-1/2 -translate-x-1/2"} z-50 m-auto flex max-w-[925px] flex-col gap-3 px-4 sm:px-0 ${["left", "right"].includes(imageAlign) ? "w-full md:w-6/8 lg:w-6/8" : "w-full"}`}
          >
            <Title
              align={titleAlign}
              variant="h2"
              weight="medium"
              size="xl"
              className={isMain ? "text-xs text-white sm:text-xl" : ""}
              lead={cardData.lead}
            >
              {cardData.title}
            </Title>
            {!isMain && withSubtitle && (
              <Text weight="light" size="sm">
                {cardData.description}
              </Text>
            )}
            {withAuthor && cardData.authorName && (
              <CardAuthor
                variant={authorVariant}
                name={cardData.authorName}
                image={cardData.authorImageUrl}
                colorText={isMain ? "neutralWhite" : "lightNeutral900"}
              />
            )}
          </div>
          {isMain && (
            <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-black/85 from-15% to-transparent sm:h-80" />
          )}
        </figure>
      </a>
    </article>
  );
};

export default Card;
