
const MovieModal = ({ movie, onClose }) => {
  if (!movie) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
      <div className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-gray-900 p-6 text-white">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-2xl text-gray-400 hover:text-white"
        >
          ✕
        </button>

        {/* Movie Image */}
        <img
          src={movie.image?.original || movie.image?.medium}
          alt={movie.name}
          className="h-80 w-full rounded-xl object-cover"
        />

        {/* Movie Information */}
        <div className="mt-6">
          <h2 className="text-3xl font-bold">
            {movie.name}
          </h2>

          <p className="mt-3 text-yellow-400">
            ⭐ {movie.rating?.average || "N/A"}
          </p>

          <p className="mt-3 text-gray-400">
            {movie.genres?.join(", ") || "No genres available"}
          </p>

          <div
            className="mt-5 text-gray-300"
            dangerouslySetInnerHTML={{
              __html: movie.summary || "No description available.",
            }}
          />
        </div>

      </div>
    </div>
  );
};

export default MovieModal;

