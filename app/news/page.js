import Link from "next/link";
import classes from "./page.module.css";

export default function NewsPage() {
  return (
    <div>
      <h1>News Page</h1>
      <ul className={classes.newsItems}>
        <li>
          <Link href="/news/first">First News Item</Link>
        </li>
        <li>
          <Link href="/news/second">Second News Item</Link>
        </li>
        <li>
          <Link href="/news/third">Third news Item</Link>
        </li>
      </ul>
    </div>
  );
}
