const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold">
              🎬 MovieExplorer
            </h2>

            <p className="mt-3 max-w-sm text-gray-400">
              Discover amazing movies, explore new stories,
              and find your next favorite movie.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Quick Links
            </h3>

            <div className="flex flex-col gap-2 text-gray-400">
              <a href="/" className="hover:text-white">
                Home
              </a>

              <a href="/movies" className="hover:text-white">
                Movies
              </a>

              <a href="/movies" className="hover:text-white">
                Explore Movies
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Follow Us
            </h3>

            <div className="flex gap-4 text-gray-400">
              <a href="#" className="hover:text-white">
                Facebook
              </a>

              <a href="#" className="hover:text-white">
                Instagram
              </a>

              <a href="#" className="hover:text-white">
                YouTube
              </a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          <p>
            © 2026 MovieExplorer. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;