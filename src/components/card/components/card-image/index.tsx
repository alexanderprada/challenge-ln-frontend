import { useCallback, useState } from "react";
import type { CardImageProps } from "../../types/card-image-props";
import Text from "../../../text";

const CardImage = ({
  src,
  alt,
  classImage = "w-full max-h-[768px]",
  badge
}: CardImageProps) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const handleOnLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative max-h-[768px] w-full">
      {badge && (
        <div className="absolute bottom-1.5 left-1.5 rounded-2xl bg-black px-4 py-1 text-white">
          <Text size="md" color="neutralWhite" align="center">
            {badge}
          </Text>
        </div>
      )}
      <picture>
        <img
          onLoad={handleOnLoad}
          src={src}
          alt={`card_image_${alt}`}
          className={classImage}
        />
        {!isLoaded && (
          <div className="w-full bg-blue-200">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-solid border-gray-200 border-t-transparent"></div>
          </div>
        )}
      </picture>
    </div>
  );
};

export default CardImage;
