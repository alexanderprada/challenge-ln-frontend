/* import Card from "../../components/card";
import Title from "../../components/title";
import newsResponse from "../../mocks/data/news";

function Home() {
  const news = newsResponse.data;
  const sectionClassName =
    "pt-10 sm:px-3 max-w-[925px] m-auto flex flex-col gap-4";

  return (
    <>
      <Card
        cardData={{
          linkToDetail: news[0].url,
          authorName: news[0].author,
          imageUrl: news[0].imageUrl,
          authorImageUrl: news[0].authorImage,
          description: news[0].subtitle,
          readTime: news[0].readTime,
          title: news[0].title,
          lead: news[0].lead,
          badge: news[0].badge
        }}
        isMain
        className="flex flex-col"
        key={news[0].title}
      />
      <section className={sectionClassName}>
        <div className="border-bottom row-span-1 px-4 pb-5 sm:px-0">
          <Title size="xl" weight="bold">
            Focal Izquierdo
          </Title>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-rows-2 md:grid-cols-6 lg:grid-cols-12">
          <Card
            cardData={{
              linkToDetail: news[0].url,
              authorName: news[0].author,
              imageUrl: news[0].imageUrl,
              authorImageUrl: news[0].authorImage,
              description: news[0].subtitle,
              readTime: news[0].readTime,
              title: news[0].title,
              lead: news[0].lead,
              badge: news[0].badge
            }}
            imageAlign="bottom"
            className="border-right col-span-1 flex flex-col sm:col-span-4 sm:row-span-2 lg:col-span-8 lg:row-span-2"
            key={news[0].title}
          />
          <Card
            cardData={{
              linkToDetail: news[1].url,
              authorName: news[1].author,
              imageUrl: news[1].imageUrl,
              authorImageUrl: news[1].authorImage,
              description: news[1].subtitle,
              readTime: news[1].readTime,
              title: news[1].title,
              lead: news[1].lead,
              badge: news[1].badge
            }}
            withSubtitle={false}
            className="border-bottom col-span-1 flex flex-col sm:col-span-2 sm:row-span-1 lg:col-span-4 lg:row-span-1"
            key={news[1].title}
          />
          <Card
            cardData={{
              linkToDetail: news[2].url,
              authorName: news[2].author,
              imageUrl: news[2].imageUrl,
              authorImageUrl: news[2].authorImage,
              description: news[2].subtitle,
              readTime: news[2].readTime,
              title: news[2].title,
              lead: news[2].lead,
              badge: news[2].badge
            }}
            withSubtitle={false}
            className="col-span-1 flex flex-col sm:col-span-2 sm:row-span-1 lg:col-span-4"
            key={news[2].title}
          />
        </div>
      </section>
      <section className={sectionClassName}>
        <div className="border-bottom row-span-1 mb-5 px-4 py-4 sm:px-0">
          <Title size="xl" weight="bold">
            Focal Derecho
          </Title>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-6 lg:grid-cols-12">
          <Card
            cardData={{
              linkToDetail: news[3].url,
              authorName: news[3].author,
              imageUrl: news[3].imageUrl,
              authorImageUrl: news[3].authorImage,
              description: news[3].subtitle,
              readTime: news[3].readTime,
              title: news[3].title,
              lead: news[3].lead,
              badge: news[3].badge
            }}
            withImage={false}
            className="border-right col-span-1 flex flex-col sm:col-span-2 lg:col-span-8 lg:row-span-2"
            key={news[3].title}
          />
          <Card
            cardData={{
              linkToDetail: news[4].url,
              authorName: news[4].author,
              imageUrl: news[4].imageUrl,
              authorImageUrl: news[4].authorImage,
              description: news[4].subtitle,
              readTime: news[4].readTime,
              title: news[4].title,
              lead: news[4].lead,
              badge: news[4].badge
            }}
            withSubtitle={false}
            className="col-span-1 flex flex-col sm:col-span-4 lg:col-span-4 lg:row-span-1"
            key={news[4].title}
          />
        </div>
      </section>
      <section className={sectionClassName}>
        <div className="border-bottom row-span-1 mb-5 px-4 py-4 sm:px-0">
          <Title size="xl" weight="bold">
            Card Group x2
          </Title>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-6 lg:grid-cols-12">
          <Card
            cardData={{
              linkToDetail: news[5].url,
              authorName: news[5].author,
              imageUrl: news[5].imageUrl,
              authorImageUrl: news[5].authorImage,
              description: news[5].subtitle,
              readTime: news[5].readTime,
              title: news[5].title,
              lead: news[5].lead,
              badge: news[5].badge
            }}
            className="border-right col-span-1 flex flex-col sm:col-span-3 lg:col-span-6"
            key={news[5].title}
          />
          <Card
            cardData={{
              linkToDetail: news[6].url,
              authorName: news[6].author,
              imageUrl: news[6].imageUrl,
              authorImageUrl: news[6].authorImage,
              description: news[6].subtitle,
              readTime: news[6].readTime,
              title: news[6].title,
              lead: news[6].lead,
              badge: news[6].badge
            }}
            className="col-span-1 flex flex-col sm:col-span-3 lg:col-span-6"
            key={news[6].title}
          />
        </div>
      </section>
      <section className={sectionClassName}>
        <div className="border-bottom row-span-1 mb-5 px-4 py-4 sm:px-0">
          <Title size="xl" weight="bold">
            Card Group x6
          </Title>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-6 lg:grid-cols-12">
          <Card
            cardData={{
              linkToDetail: news[7].url,
              authorName: news[7].author,
              imageUrl: news[7].imageUrl,
              authorImageUrl: news[7].authorImage,
              description: news[7].subtitle,
              readTime: news[7].readTime,
              title: news[7].title,
              lead: news[7].lead,
              badge: news[7].badge
            }}
            withSubtitle={false}
            className="border-right col-span-1 flex flex-col sm:col-span-2 lg:col-span-4"
            key={news[7].title}
          />
          <Card
            cardData={{
              linkToDetail: news[8].url,
              authorName: news[8].author,
              imageUrl: news[8].imageUrl,
              authorImageUrl: news[8].authorImage,
              description: news[8].subtitle,
              readTime: news[8].readTime,
              title: news[8].title,
              lead: news[8].lead,
              badge: news[8].badge
            }}
            withSubtitle={false}
            className="border-right col-span-1 flex flex-col sm:col-span-2 lg:col-span-4"
            key={news[8].title}
          />
          <Card
            cardData={{
              linkToDetail: news[9].url,
              authorName: news[9].author,
              imageUrl: news[9].imageUrl,
              authorImageUrl: news[9].authorImage,
              description: news[9].subtitle,
              readTime: news[9].readTime,
              title: news[9].title,
              lead: news[9].lead,
              badge: news[9].badge
            }}
            withSubtitle={false}
            className="col-span-1 flex flex-col sm:col-span-2 lg:col-span-4"
            key={news[9].title}
          />
          <Card
            cardData={{
              linkToDetail: news[10].url,
              authorName: news[10].author,
              imageUrl: news[10].imageUrl,
              authorImageUrl: news[10].authorImage,
              description: news[10].subtitle,
              readTime: news[10].readTime,
              title: news[10].title,
              lead: news[10].lead,
              badge: news[10].badge
            }}
            withSubtitle={false}
            className="border-right col-span-1 flex flex-col sm:col-span-2 lg:col-span-4"
            key={news[10].title}
          />
          <Card
            cardData={{
              linkToDetail: news[11].url,
              authorName: news[11].author,
              imageUrl: news[11].imageUrl,
              authorImageUrl: news[11].authorImage,
              description: news[11].subtitle,
              readTime: news[11].readTime,
              title: news[11].title,
              lead: news[11].lead,
              badge: news[11].badge
            }}
            withSubtitle={false}
            className="border-right col-span-1 flex flex-col sm:col-span-2 lg:col-span-4"
            key={news[11].title}
          />
          <Card
            cardData={{
              linkToDetail: news[12].url,
              authorName: news[12].author,
              imageUrl: news[12].imageUrl,
              authorImageUrl: news[12].authorImage,
              description: news[12].subtitle,
              readTime: news[12].readTime,
              title: news[12].title,
              lead: news[12].lead,
              badge: news[12].badge
            }}
            withSubtitle={false}
            className="col-span-1 flex flex-col sm:col-span-2 lg:col-span-4"
            key={news[12].title}
          />
        </div>
      </section>
    </>
  );
}

export default Home;
 */
