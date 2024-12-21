import Link from "next/link";

export default function NewsList({ news }) {
  console.log(news);

  return (
    <ul className="newsItems">
      {news.map((newsItem) => (
        <li key={Math.random() * 100}>
          <Link href={`/news/${newsItem.title}`}>
            <img
              src={newsItem.urlToImage}
              alt={newsItem.title}
              className="img"
            />
            <span>{newsItem.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
