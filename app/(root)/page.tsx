import SearchForm from "../../components/SearchForm";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query: string }>;
}) {
  const query = (await searchParams).query;
  return (
    <>
      <section className="modern_container">
        <h1 className="heading">
          Spotlight Your Startup, <br /> Empower with Entrepreneurs{" "}
        </h1>
        <p className="sub-heading !max-w-3xl">
          Pitch Your Ideas, Gather Support, and Make a Statement in Virtual
          Competitions
        </p>
        <SearchForm query={query} />
      </section>
    </>
  );
}
