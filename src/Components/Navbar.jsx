import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-950 px-6 py-5">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        
        <Link
          to="/"
          className="text-2xl font-bold text-white"
        >
          🎬 MovieExplorer
        </Link>

        <Link
          to="/movies"
          className="rounded-lg bg-purple-600 px-5 py-2 text-white hover:bg-purple-700"
        >
          Movies
        </Link>

      </div>
    </nav>
  );
};

export default Navbar;