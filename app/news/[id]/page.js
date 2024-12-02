
export default function NewsDetailPage({ params }) {
  const newsId = params.id;
  return (
    <div >
      News Detail Page:
      <p>News Id: {newsId} </p>
    </div>
  );
}
