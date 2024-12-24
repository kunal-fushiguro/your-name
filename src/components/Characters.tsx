import { motion } from "framer-motion";
import { AnimeCharacters } from "./character";

const Characters = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-blue-500 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold text-white text-center mb-16 relative z-10"
      >
        Anime Characters
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 relative z-10">
        {AnimeCharacters.map((character, index) => (
          <motion.div
            key={character.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            className="flex flex-col items-center"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="relative w-64 h-96 rounded-xl overflow-hidden shadow-2xl transform transition-all duration-300 hover:shadow-3xl"
            >
              <motion.img
                src={character.img}
                alt={character.name}
                className="w-full h-full object-cover"
                animate={{ scale: 1 }}
                whileHover={{ scale: 3.3 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              />
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-black bg-opacity-50 flex items-end justify-center p-4"
              >
                <h3 className="text-xl font-semibold text-white text-center">
                  {character.name}
                </h3>
              </motion.div>
            </motion.div>
            <motion.p
              animate={{ opacity: 1 }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                delay: index * 0.1 + 0.3,
                ease: "easeOut",
              }}
              className="mt-4 text-white text-center max-w-xs"
            >
              {character.about}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Characters;
