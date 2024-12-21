import NewsList from "@/components/newsList";
import getAvailableNewsMonths, {
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearandMonth,
} from "@/lib/news";

import Link from "next/link";

export default async function ArchivePage({ params }) {
  const { filter } = await params;
  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];
  let news;
  let links = getAvailableNewsYears();

  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(selectedYear);
    links = getAvailableNewsMonths(selectedYear);
  }
  if (selectedMonth && selectedYear) {
    news = getNewsForYearandMonth(selectedYear, selectedMonth);
    links = [];
  }
  let newsContent = <p>No News Found for the selected Year</p>;
  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }
  if (
    (selectedYear && !getAvailableNewsYears().includes(+selectedYear)) ||
    (selectedMonth &&
      !getAvailableNewsMonths(selectedYear).includes(+selectedMonth))
  ) {
    throw new Error("Invalid Filter");
  }
  return (
    <>
      <header>
        <nav>
          <ul className="newslist">
            {links.map((link) => {
              const href = selectedYear
                ? `/archive/${selectedYear}/${link}`
                : `/archive/${link}`;
              return (
                <li key={link}>
                  <Link href={href}>{link}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      {newsContent}
    </>
  );
}
