export async function NewsApi() {
  const news = await fetch(
    `https://newsapi.org/v2/everything?q=india&from=2024-11-03&sortBy=publishedAt&apiKey=b7b54353da044c9ebb6eefe4bb46963e`
  );
  const data = await news.json();

  return data;
}
