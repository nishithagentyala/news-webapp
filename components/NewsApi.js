export async function NewsApi() {
  const news = await fetch(
    `https://newsapi.org/v2/everything?q=india&from=2024-11-03&sortBy=publishedAt&apiKey=${process.env.API_key}`
  );
  const data = await news.json();

  return data;
}
