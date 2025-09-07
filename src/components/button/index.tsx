import Text from "../text";
import type { ButtonProps } from "./types/button-props";

const Button = ({
  text,
  className = "",
  icon = "",
  isPrimary = true,
  onClick,
  colorText = "lightNeutral700"
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${isPrimary ? "bg-light-neutral-200" : "border-2 border-blue-500"} flex h-[40px] cursor-pointer flex-row items-center gap-2 rounded-sm px-4 py-3 ${className}`}
    >
      {icon && (
        <img
          className="h-max max-w-max"
          alt={`icon-${text}-button`}
          src={icon}
        />
      )}
      <Text weight="bold" color={colorText}>
        {text}
      </Text>
    </button>
  );
};

export default Button;
