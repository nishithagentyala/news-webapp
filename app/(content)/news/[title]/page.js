import { NewsApi } from "@/components/NewsApi";
import { notFound } from "next/navigation";

export default async function NewsDetailPage({ params }) {
  const name = params.title;
  console.log(name);

  const data = await NewsApi();
  const news = data.articles;

  const newsItem = news.find((newsItem) => newsItem.title === name);

  console.log(newsItem);

  if (!newsItem) {
    notFound();
  }
  return (
    <article>
      <img src={newsItem.urlToImage} alt={newsItem.title} className="img" />
      <h2>{newsItem.title}</h2>
      <time dateTime={newsItem.publishedAt}>{newsItem.publishedAt}</time>
      <p>{newsItem.content}</p>
    </article>
  );
}
