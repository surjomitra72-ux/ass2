import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="flex min-h-[600px] items-center justify-center bg-gradient-to-r from-black via-purple-950 to-gray-900 px-6">
      <div className="max-w-3xl text-center">
        
        <h1 className="text-5xl font-bold text-white md:text-6xl">
          Discover Movies
        </h1>

        <p className="mt-6 text-lg text-gray-300">
          Explore and discover your favorite movies and TV shows
          from around the world.
        </p>

        <Link
          to="/movies"
          className="mt-8 inline-block rounded-lg bg-purple-600 px-6 py-3 font-semibold text-white hover:bg-purple-700"
        >
          Explore Now
        </Link>

      </div>
    </section>
  );
};

export default Hero;