export default function ArchiveLayout({ archive, latest }) {
  return (
    <div>
      <h1>News Archive</h1>
      <section>{archive}</section>
      <br />
      <hr />
      <br />
      <section>{latest}</section>
    </div>
  );
}
