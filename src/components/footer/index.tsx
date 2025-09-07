import SocialSection from "./components/social-section";
import ListCategory from "./components/list-category";
import FooterMiddleSection from "./components/footer-middle-section";
import FooterBottomSection from "./components/footer-bottom-section";

export default function Footer() {
  const listCategories = [
    "Últimas noticias",
    "Política",
    "Economía",
    "Sociedad",
    "Deportes",
    "Espectáculos",
    "LN+"
  ];

  return (
    <footer className="m-auto flex max-w-[925px] flex-col gap-20 px-4 pt-12">
      {/* Título con categorías */}
      <ListCategory
        title="Título:"
        titleWeight="bold"
        itemWeight="regular"
        list={listCategories.map((category) => ({
          link: "#",
          text: category
        }))}
      />
      <div className="flex flex-col gap-8">
        {/* Redes, logo y botones de playstore */}
        <SocialSection />
        {/* Más cateogrías */}
        <FooterMiddleSection />

        {/* Información sobre la página */}
        <FooterBottomSection />
      </div>
    </footer>
  );
}
