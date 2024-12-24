import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="relative flex flex-col items-center justify-center text-white text-center px-4 sm:px-6 lg:px-8 py-16 bg-white">
      <motion.div
        className="bg-blue-500 rounded-xl shadow-lg p-6 sm:p-8 md:p-12 max-w-4xl w-full flex flex-col md:flex-row items-center gap-8"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <motion.div
          className="flex-1 text-gray-100 text-lg sm:text-xl leading-relaxed"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p>
            <span className="text-white font-bold">"Your Name"</span>
            (Japanese: 君の名は。, Hepburn: Kimi no Na wa.) is a 2016 Japanese
            animated fantasy film written and directed by Makoto Shinkai,
            produced by CoMix Wave Films, and distributed by Toho. It depicts
            the story of high school students Taki Tachibana and Mitsuha
            Miyamizu, who suddenly began to swap bodies despite having never
            met, unleashing chaos on each other's lives. The film was inspired
            by the frequency of natural disasters in Japan.
          </p>
        </motion.div>

        <motion.img
          src="./p1.jpg"
          alt="Your Name Scene"
          className="flex-1 rounded-lg shadow-md max-w-full h-auto object-cover md:max-w-xs"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        />
      </motion.div>
    </div>
  );
};

export default About;
