import Link from "next/link";
export default function MainHeader() {
  return (
    <header className="header-news">
      <div>
        <Link href="/">Next News</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/news">News</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
