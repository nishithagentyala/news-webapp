import NewsList from "@/components/newsList";
import { getLatestNews } from "@/lib/news";

export default function Latest() {
  const latestNews = getLatestNews();
  return (
    <div>
      <NewsList news={latestNews} />
    </div>
  );
}
