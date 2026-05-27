import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import AnimatedButton from "../ButtonAnimation/AnimatedButton";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="relative w-full flex items-center justify-center bg-base-100 overflow-hidden py-15 md:py-20 lg:py-25">
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
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="space-y-6 text-center lg:text-left md:col-span-2"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-center">
            <span className="bg-linear-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent">
              Premium Academic
            </span>
            <br />
            Resources
          </h1>

          <p className="text-base-content/70 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 text-center">
            Access high-quality notes, sheets, and curated question sets built
            for teachers, tutors, and institutions.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center ">
            <AnimatedButton
              text="Explore All"
              onClick={() => navigate("/packages")}
            />

            <motion.a
              href="https://drive.google.com/drive/folders/1yJSfeBVvAizvs0ysqCy-Tt8tnoBnCVPQ?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-xl border-2 border-yellow-500 bg-base-200/50 backdrop-blur-md font-medium hover:bg-base-300 transition"
            >
              View Demo
            </motion.a>
          </div>
        </motion.div>

        {/* RIGHT */}
        {/* <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex justify-center items-center"
        >
          <img src="/Hero.png" alt="Hero" className="z-10 max-w-full" />
        </motion.div> */}
      </div>
    </section>
  );
};

export default HeroSection;
