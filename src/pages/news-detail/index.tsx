import Button from "../../components/button";
import ItemSeparator from "../../components/item-separator";
import Text from "../../components/text";
import Title from "../../components/title";
import newsResponse from "../../mocks/data/news";

export default function NewsDetail() {
  const newDetail = newsResponse.data[0];

  return (
    <article className="m-auto flex max-w-[925px] flex-col gap-4 p-4">
      <Title className="pb-4" weight="bold" size="2xl">
        {newDetail.title}
      </Title>
      <Text>{newDetail.subtitle}</Text>

      <div className="flex flex-row items-center gap-4">
        <Text>7 de septiembre de 2025</Text>
        <ItemSeparator />
        <Text>20:12</Text>
        {newDetail.readTime && (
          <>
            <ItemSeparator />
            <Text>{newDetail.readTime} minutos de lectura</Text>
          </>
        )}
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <Text size="lg" weight="bold">
          LA NACION
        </Text>
        <Button
          text="Escuchar nota"
          className="bg-button-blue"
          onClick={() => console.log("Escuchar nota")}
        ></Button>
      </div>
      <picture>
        <img src={newDetail.imageUrl} alt="Imagen donde aparece Milei." />
      </picture>
      <div className="border-light-neutral-300 hidden border-b sm:block" />
      <Text>{newDetail.subtitle} </Text>
    </article>
  );
}
