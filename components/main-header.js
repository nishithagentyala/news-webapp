import Link from "next/link";
import NavLink from "./Nav-Link";

export default function MainHeader() {
  return (
    <header className="header-news">
      <div>
        <Link href="/">Next News</Link>
      </div>
      <nav>
        <ul className="newslist">
          <li>
            <NavLink href="/archive">Archive</NavLink>
          </li>
          <li>
            <NavLink href="/news"> News </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
