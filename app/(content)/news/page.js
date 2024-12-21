import { NewsApi } from "@/components/NewsApi";
import NewsList from "@/components/newsList";

export default async function NewsPage() {
  const data = await NewsApi();
  const news = data.articles;

  return (
    <div>
      <h1>News Page</h1>
      <NewsList news={news} />
    </div>
  );
}
