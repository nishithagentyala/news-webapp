import Link from "next/link";

export default function NewsPage() {
  return (
    <div>
      <h1>News Page</h1>
      <Link href="/news/first">First News</Link>
      <Link href="/news/second">Second News</Link>
      <Link href="/news/third">Third news</Link>
    </div>
  );
}
