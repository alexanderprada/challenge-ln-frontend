import Text from "../../../text";
import type { CardAuthorProps } from "../../types/card-author-props";
import CardImage from "../card-image";

const CardAuthor = ({
  name,
  image,
  variant = "onlyText",
  colorText = "lightNeutral800"
}: CardAuthorProps) => {
  const isVertical = variant === "vertical";
  const classImage = isVertical
    ? "w-16 h-16 max-w-16 max-h-16"
    : "w-14 h-14 max-w-14 max-h-14";
  return (
    <div className={`flex items-center gap-3 pb-3 ${isVertical && "flex-col"}`}>
      {variant !== "onlyText" && image && (
        <CardImage
          classImage={`${classImage} object-cover rounded-full`}
          alt={name}
          src={image}
        />
      )}
      <Text weight="bold" color={colorText}>
        {name}
      </Text>
    </div>
  );
};

export default CardAuthor;
