const MovieCard = ({ movie, onViewDetails }) => {
  return (
    <div className="overflow-hidden rounded-xl bg-gray-900 shadow-lg">

      <img
        src={movie.image?.medium}
        alt={movie.name}
        className="h-80 w-full object-cover"
      />

      <div className="p-5">

        <h2 className="text-xl font-bold text-white">
          {movie.name}
        </h2>


        <p className="mt-2 text-sm text-gray-400">
          📅 {movie.premiered?.slice(0, 4) || "N/A"}
        </p>

        <p className="mt-2 text-sm text-gray-400">
          {movie.genres?.join(", ") || "No genres"}
        </p>

        <p className="mt-3 text-yellow-400">
          ⭐ {movie.rating?.average || "N/A"}
        </p>


        <button
          onClick={onViewDetails}
          className="mt-4 rounded-lg bg-purple-600 px-4 py-2 text-white transition hover:bg-purple-700"
        >
          See Details
        </button>
      </div>
    </div>
  );
};

export default MovieCard;