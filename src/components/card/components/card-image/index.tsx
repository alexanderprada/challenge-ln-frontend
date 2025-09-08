import { useCallback, useState } from "react";
import type { CardImageProps } from "../../types/card-image-props";
import Text from "../../../text";

const CardImage = ({
  src,
  alt,
  className = "w-full max-h-[768px]",
  badge
}: CardImageProps) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const handleOnLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative max-h-[768px]">
      {badge && (
        <div className="absolute bottom-1.5 left-1.5 rounded-2xl bg-black px-4 py-1 text-white">
          <Text size="md" color="neutralWhite" align="center">
            {badge}
          </Text>
        </div>
      )}
      <div className={`${!isLoaded && "min-h-[150px] w-full"}`}>
        <picture className="relative">
          <img
            data-testid="card-image"
            onLoad={handleOnLoad}
            src={src}
            alt={`card_image_${alt}`}
            className={className}
          />
          {!isLoaded && (
            <div data-testid="loader" className="loader absolute">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-solid border-gray-200 border-t-transparent"></div>
            </div>
          )}
        </picture>
      </div>
    </div>
  );
};

export default CardImage;
