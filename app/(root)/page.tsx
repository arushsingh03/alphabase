import React from "react";
import SearchForm from "@/components/SearchForm";
import { STARTUPS_QUERIES } from "@/sanity/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import StartupCard, { StartupTypeCard } from "@/components/StartupCard";

const Home = async ({
  searchParams,
}: {
  searchParams: Promise<{ query: string }>;
}) => {
  const query = (await searchParams).query;
  const params = { search: query || null };
  const { data: posts } = await sanityFetch({ query: STARTUPS_QUERIES, params })

  return (
    <main className="min-h-screen w-full">
      <div className="pattern-container">
        <section className="modern_container">
          <h1 className="heading">
            Spotlight Your Startup, <br /> Empower with Entrepreneurs
          </h1>

          <p className="sub-heading !max-w-3xl">
            Pitch Your Ideas, Gather Support, and Make a Statement in Virtual
            Competitions
          </p>

          <SearchForm query={query} />
        </section>
      </div>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>

      <SanityLive />
    </main>
  );
};

export default Home;
