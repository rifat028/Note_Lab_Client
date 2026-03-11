import { useNavigate } from "react-router";
import { motion } from "framer-motion";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full min-h-[90vh] flex items-center bg-base-100 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-20 pt-5 md:pt-10 grid lg:grid-cols-2 gap-14 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -120 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-8 text-center lg:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight bg-linear-to-r from-blue-800 to-pink-600 bg-clip-text text-transparent">
            <span>Greatest Collection of</span>
            <br />
            Sheet, Note and Question.
          </h1>

          <p className="text-base-content/70 text-lg md:text-xl max-w-xl mx-auto lg:mx-0">
            A professional platform for the teachers, tutors and institute
            owners.
          </p>

          <button
            onClick={() => navigate("/packages")}
            className="btn btn-primary btn-lg group bg-yellow-500 text-black border-0 transition-transform duration-300 hover:scale-105"
          >
            View Sheets
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 120 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="p-12"
        >
          <img src="/Hero.png" alt="Hero image" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
