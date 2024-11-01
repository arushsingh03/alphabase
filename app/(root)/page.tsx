import React from 'react';
import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

const Home = async ({ searchParams }: { searchParams: Promise<{ query: string }> }) => {
  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: "Arush" },
      _id: 1,
      description: "This is description",
      image:
        "https://plus.unsplash.com/premium_photo-1721852724547-769249f94c4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGtpZHN8ZW58MHx8MHx8fDA%3D",
      category: "Kids",
      title: "Innocent Kids",
    },
  ];

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
            posts.map((post) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>
    </main>
  );
};

export default Home;