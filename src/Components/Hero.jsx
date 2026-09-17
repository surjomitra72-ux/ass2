
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import heroImage from "../assets/herof1.webp";

const Hero = () => {
  return (
    <section className="min-h-[600px] overflow-hidden bg-gradient-to-r from-black via-purple-950 to-gray-900">
      <div className="mx-auto flex min-h-[600px] max-w-7xl items-center px-6">


        <div className="z-10 w-1/2">
          <h1 className="text-5xl font-bold text-white">
            Discover Your Next{" "}
            <span className="text-purple-400">
              Favorite Movie
            </span>
          </h1>

          <p className="mt-5 text-gray-300">
            Explore amazing movies and discover something
            exciting to watch.
          </p>

          <Link
            to="/movies"
            className="mt-7 inline-block rounded-lg bg-purple-600 px-6 py-3 font-semibold text-white transition hover:bg-purple-700"
          >
            Explore Movies
          </Link>
        </div>

        <div className="flex w-1/2 justify-center overflow-hidden
         [webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            className="flex w-full"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatDelay: 0,
              repeatType: "loop",
              ease: "linear",
            }}
          >
            <img
              src={heroImage}
              alt="Movie Illustration"
              className="w-full h-[600px] flex-shrink-0 object-contain object-cover 
             whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5 }}"
            />
            <img
              src={heroImage}
              alt="Movie Illustration Duplicate"
              className="w-full h-[600px] flex-shrink-0 object-contain object-cover 
              whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5 }}"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;

