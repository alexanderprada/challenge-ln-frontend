import Social from "../social";
import LogoLANACION from "../../../../assets/LogoLANACION.png";
import FacebookIcon from "../../../../assets/footer/Facebook.png";
import InstagramIcon from "../../../../assets/footer/Instagram.png";
import RSSIcon from "../../../../assets/footer/RSS.png";
import TwitterIcon from "../../../../assets/footer/Twitter Filled.png";
import AndroidIcon from "../../../../assets/footer/Android.png";
import iOSIcon from "../../../../assets/footer/iOS.png";
import type { SocialProps } from "../../types/social-props";

const SocialSection = () => {
  const stores: SocialProps[] = [
    {
      icon: AndroidIcon,
      link: "https://play.google.com/store/apps/details?id=app.lanacion.activity&hl=es_419&pli=1",
      title: "Android Play Store"
    },
    {
      icon: iOSIcon,
      link: "https://apps.apple.com/ar/app/la-nacion/id410689702",
      title: "Apple Store"
    }
  ];
  const socialNetworks: SocialProps[] = [
    {
      icon: FacebookIcon,
      link: "https://www.facebook.com/lanacion",
      title: "Facebook link"
    },
    {
      icon: InstagramIcon,
      link: "https://www.instagram.com/lanacioncom/",
      title: "Instagram link"
    },
    {
      icon: TwitterIcon,
      link: "https://x.com/LANACION/",
      title: "Facebook link"
    },
    {
      icon: RSSIcon,
      link: "https://www.lanacion.com.ar/arc/outboundfeeds/rss/?outputType=xml",
      title: "RSS link"
    }
  ];

  return (
    <section className="flex flex-col gap-8">
      <img
        className="m-auto block h-max max-w-max sm:hidden"
        alt="logo-LANACION"
        src={LogoLANACION}
      />
      <div className="border-light-neutral-300 border-b sm:hidden" />
      <div className="flex flex-col gap-8 sm:flex-row" role="navigation">
        <div
          data-testid="social-network-list"
          className="flex flex-row items-center justify-center gap-8"
        >
          {socialNetworks.map((social) => (
            <Social {...social} />
          ))}
        </div>
        <img
          className="margin-bottom m-auto hidden h-max max-w-max sm:block"
          alt="logo-LANACION"
          src={LogoLANACION}
        />
        <div
          data-testid="stores-list"
          className="flex flex-row items-center justify-center gap-8"
        >
          {stores.map((store) => (
            <Social {...store} />
          ))}
        </div>
      </div>
      <div className="border-light-neutral-300 hidden border-b sm:block" />
    </section>
  );
};

export default SocialSection;
