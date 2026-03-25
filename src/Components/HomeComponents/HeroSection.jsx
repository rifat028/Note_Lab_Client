import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-base-100 overflow-hidden">
      {/* ANIMATED DOTTED BACKGROUND */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0.15)_2px,transparent_1px)] dark:bg-[radial-gradient(circle,rgba(255,255,255,0.15)_2px,transparent_1px)] bg-size-[20px_20px]"></div>
        <motion.div
          animate={{ backgroundPosition: ["0px 0px", "40px 40px"] }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0.15)_2px,transparent_1px)] dark:bg-[radial-gradient(circle,rgba(255,255,255,0.15)_2px,transparent_1px)] bg-size-[20px_20px]"
        />
      </div>
      {/* BACKGROUND GRADIENT */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 via-transparent to-pink-500/10 dark:from-blue-400/10 dark:to-pink-400/10"></div>

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 text-center lg:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            <span className="bg-linear-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent">
              Premium Academic
            </span>
            <br />
            Resources Simplified
          </h1>

          <p className="text-base-content/70 text-lg md:text-xl max-w-xl mx-auto lg:mx-0">
            Access high-quality notes, sheets, and curated question sets built
            for teachers, tutors, and institutions.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <motion.a
              href="/packages"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-xl bg-linear-to-r from-blue-600 to-pink-500 text-white font-semibold shadow-lg hover:shadow-xl transition"
            >
              Explore Packages
            </motion.a>

            <motion.a
              href="https://drive.google.com/your-link"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-xl border border-base-300 bg-base-200/50 backdrop-blur-md font-medium hover:bg-base-300 transition"
            >
              View Demo
            </motion.a>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="absolute w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute w-72 h-72 bg-pink-500/20 rounded-full blur-3xl translate-x-20 translate-y-10"></div>

          <img
            src="/Hero.png"
            alt="Hero"
            className="relative z-10 max-w-full w-100 md:w-125 drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
