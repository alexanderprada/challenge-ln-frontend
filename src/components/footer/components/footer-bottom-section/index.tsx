import Text from "../../../text";
import ListCategory from "../list-category";
import DataFiscalIcon from "../../../../assets/footer/dataFiscal.png";
import LogoGDA from "../../../../assets/footer/logoGda.png";

const FooterBottomSection = () => {
  const listCategories = [
    "Mapa del sitio",
    "Ayuda",
    "Términos y condiciones",
    "¿Cómo anunciar?",
    "Suscribirse al diario impreso"
  ];

  const captcha = ["Condiciones", "Privacidad"];

  return (
    <section className="flex-col gap-8 sm:flex">
      <div
        data-testid="list-category-captcha"
        className="hidden flex-row sm:flex"
      >
        <ListCategory
          list={listCategories.map((category) => ({
            link: "#",
            text: category
          }))}
          itemWeight="regular"
          withSeparator={false}
        />
        <ListCategory
          list={captcha.map((category) => ({
            link: "#",
            text: category
          }))}
          title="Protegido por re CAPTCHA"
          itemWeight="regular"
          withSeparator={false}
        />
      </div>
      <div className="flex gap-8">
        <Text className="hidden sm:block">
          Copyright 2019 SA LA NACION | Todos los derechos reservados
        </Text>
        <div className="flex flex-col justify-center gap-8 pb-8">
          <div className="flex items-center gap-4 sm:items-start">
            <div className="flex gap-4">
              <img className="h-max max-w-max" alt="logo-GDA" src={LogoGDA} />
              <Text color="lightNeutral800">
                Miembro de GDA. Grupo de Diarios América
              </Text>
            </div>
            <img
              className="h-max max-w-max"
              alt="data-fiscal"
              src={DataFiscalIcon}
            />
          </div>
          <Text className="sm:hidden" align="center">
            Copyright {"{Year}"} SA LA NACION | Todos los derechos reservados
          </Text>
        </div>
      </div>
    </section>
  );
};

export default FooterBottomSection;
