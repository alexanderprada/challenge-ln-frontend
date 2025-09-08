import type { SocialProps } from "../../types/social-props";

const Social = ({ icon, title, link }: SocialProps) => {
  return (
    <a data-testid="social-icon" href={link} title={title}>
      <img className="h-max max-w-max" src={icon} alt={title} />
    </a>
  );
};

export default Social;
