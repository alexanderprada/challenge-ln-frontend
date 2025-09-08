import ListCategory from "../list-category";

const FooterMiddleSection = () => {
  const listCategories = [
    "Últimas noticias",
    "Política",
    "Economía",
    "Sociedad",
    "Deportes",
    "Espectáculos",
    "LN+"
  ];

  const magazines = [
    "OHLALÁ!",
    "¡HOLA!",
    "ROLLING STONE",
    "LIVING",
    "BRANDO",
    "JARDIN",
    "LUGARES"
  ];

  const shippings = [
    "HOP",
    "Colecciones",
    "Máster en periodismo",
    "Fundación LA NACION",
    "Avisos solidarios"
  ];

  return (
    <section
      data-testid="footer-middle-section-test"
      className="hidden flex-col gap-8 sm:flex"
    >
      <ListCategory
        list={listCategories.map((category) => ({
          link: "#",
          text: category
        }))}
        withSeparator={false}
      />
      <ListCategory
        title="Revistas"
        list={magazines.map((category) => ({
          link: "#",
          text: category
        }))}
        withSeparator={false}
      />
      <div className="flex flex-row gap-4">
        <ListCategory
          title="Club del vino:"
          list={["Bon vivir"].map((category) => ({
            link: "#",
            text: category
          }))}
          withSeparator={false}
        />
        <ListCategory
          title="Envíos"
          list={shippings.map((category) => ({
            link: "#",
            text: category
          }))}
          withSeparator={false}
        />
      </div>
      <div
        data-testid="line-separator"
        className="border-light-neutral-300 hidden border-b sm:block"
      />
    </section>
  );
};

export default FooterMiddleSection;
