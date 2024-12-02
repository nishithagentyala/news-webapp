export default async function Home() {
  const news = await fetch(
    `https://newsapi.org/v2/everything?q=tesla&from=2024-10-29&sortBy=publishedAt&apiKey=b7b54353da044c9ebb6eefe4bb46963e`
  );
  const data = await news.json();
  console.log(data);

  return (
    <>
      <div>Today News</div>;
    </>
  );
}
