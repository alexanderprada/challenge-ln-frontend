import LogoClub from "../../../../assets/LogoClub.png";
import WheaterIcon from "../../../../assets/WheaterIcon.png";
import Text from "../../../text";

const SubHeader = () => {
  return (
    <div className="xl:bg-light-neutral-200">
      <div className="m-auto flex h-[40px] max-w-[925px] flex-row items-center justify-center py-1 sm:justify-between">
        <div className="sm:justify-bet flex flex-row justify-center gap-4">
          <Text
            className="hidden sm:block"
            size="xs"
            weight="bold"
            color="lightBlue500"
          >
            Dólar:
          </Text>
          <Text>
            BNA:{" "}
            <Text variant="span" weight="bold">
              $00,00 / $00,00
            </Text>
          </Text>
          <Text>
            Blue:{" "}
            <Text variant="span" weight="bold">
              $00,00 / $00,00
            </Text>
          </Text>
        </div>
        <div className="hidden flex-row items-center gap-2 xl:flex">
          <img
            className="h-max max-w-max"
            src={WheaterIcon}
            alt="Wheater Icon"
          />
          <Text weight="bold">
            00.0°{" "}
            <Text weight="light" variant="span">
              Capital Federal
            </Text>
          </Text>
        </div>
        <a
          title="Enlace a página para recibir newsletters"
          className="hidden xl:block"
          href="https://newsletter.lanacion.com.ar/?_ga=2.115587013.2111665650.1713785519-1414281100.1711030569"
        >
          <Text color="lightBlue500">Recibí Newsletters</Text>
        </a>

        <a
          title="Enlace a página para descubrir tus beneficios"
          className="hidden flex-row items-center gap-3 sm:flex"
          href="https://suscripciones.lanacion.com.ar/suscribirme?callback=aHR0cHM6Ly93d3cubGFuYWNpb24uY29tLmFyLw=="
          target="_blank"
        >
          <img className="h-max max-w-max" alt="logo-LANACION" src={LogoClub} />
          <Text color="lightBlue500">Descubrí tus beneficios</Text>
        </a>
      </div>
    </div>
  );
};

export default SubHeader;
