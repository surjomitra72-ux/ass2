const MovieCard = ({ movie, onViewDetails }) => {
  return (
    <div className="overflow-hidden rounded-xl bg-gray-900 shadow-lg">
      {/* Movie Image */}
      <img
        src={movie.image?.medium}
        alt={movie.name}
        className="h-80 w-full object-cover"
      />

      <div className="p-5">
        {/* Movie Name */}
        <h2 className="text-xl font-bold text-white">
          {movie.name}
        </h2>

        {/* Genres */}
        <p className="mt-2 text-sm text-gray-400">
          {movie.genres?.join(", ") || "No genres"}
        </p>

        {/* Rating */}
        <p className="mt-3 text-yellow-400">
          ⭐ {movie.rating?.average || "N/A"}
        </p>

        {/* View Details Button */}
        <button
          onClick={onViewDetails}
          className="mt-4 rounded-lg bg-purple-600 px-4 py-2 text-white hover:bg-purple-700"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default MovieCard;