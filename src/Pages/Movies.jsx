
import { useEffect, useState } from "react";

import MovieCard from "../Components/MovieCard";
import MovieModal from "../Components/MovieModal";
import Loading from "../Components/Loading";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  // Selected movie for modal
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);

      try {
        let url = "https://api.tvmaze.com/shows";

        // Search API
        if (search.trim()) {
          url = `https://api.tvmaze.com/search/shows?q=${search}`;
        }

        const res = await fetch(url);
        const data = await res.json();

        // Search API returns objects inside "show"
        if (search.trim()) {
          setMovies(data.map((item) => item.show));
        } else {
          setMovies(data);
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
        setMovies([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [search]);

  return (
    <section className="min-h-screen bg-gray-950 px-6 py-12">
      <div className="mx-auto max-w-7xl">

        {/* Page Title */}
        <h1 className="mb-8 text-center text-4xl font-bold text-white">
          Explore Movies
        </h1>

        {/* Search Bar */}
        <div className="mb-10">
          <input
            type="text"
            placeholder="🔍 Search for a movie..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-gray-700 bg-gray-900 px-5 py-4 text-white outline-none focus:border-purple-500"
          />
        </div>

        {/* Loading / No Result / Movies */}
        {loading ? (
          <Loading />
        ) : movies.length === 0 ? (
          <p className="py-20 text-center text-xl text-gray-400">
            No movies found.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                onViewDetails={() => setSelectedMovie(movie)}
              />
            ))}
          </div>
        )}

        {/* Movie Modal */}
        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />

      </div>
    </section>
  );
};

export default Movies;

