import { useEffect, useState } from "react";
import { getNews } from "../../services/news";
import type { New } from "../../types/news";
import Card from "../../components/card";
import { cardVariant } from "../../components/card/types/card-props";

function Home() {
  const [news, setNews] = useState<Array<New>>([]);

  useEffect(() => {
    getNews()
      .then((newsData) => {
        setNews(newsData.data);
      })
      .catch(console.log);
  }, []);

  return (
    <>
      {news.map(
        (
          { title, url, autor, autorImage, imageUrl, badge, subtitle, lead },
          index
        ) => {
          if (index === 0)
            return (
              <Card
                cardData={{
                  linkToDetail: url,
                  authorName: autor,
                  imageUrl: imageUrl,
                  badge,
                  description: subtitle,
                  readTime: 0,
                  title,
                  lead
                }}
                key={title}
                onlySuscriptors={false}
              />
            );

          if (index === 1)
            return (
              <Card
                cardData={{
                  linkToDetail: url,
                  authorName: autor,
                  imageUrl: imageUrl,
                  description: subtitle,
                  readTime: 0,
                  title,
                  lead
                }}
                key={title}
                variant={cardVariant.COMPACT}
              />
            );

          return (
            <Card
              cardData={{
                linkToDetail: url,
                authorName: autor,
                imageUrl: autorImage || imageUrl,
                description: subtitle,
                readTime: 0,
                title,
                lead
              }}
              key={title}
              variant={cardVariant.HERO}
            />
          );
        }
      )}
    </>
  );
}

export default Home;
