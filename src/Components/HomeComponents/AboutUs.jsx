import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import AnimatedButton from "../ButtonAnimation/AnimatedButton";

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-base-200 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="flex justify-center lg:justify-start"
        >
          <motion.img
            src="/logo.jpg"
            alt="About Note Lab"
            className="w-48 sm:w-64 md:w-72 lg:w-80 aspect-square object-cover rounded-full shadow-xl"
            animate={{
              rotateY: [
                0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360,
              ],
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 3, // 1s animation + 3s pause = 4s total
            }}
            style={{ transformStyle: "preserve-3d" }}
          />
        </motion.div>

        {/* TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="space-y-5 text-center lg:text-left max-w-xl mx-auto lg:mx-0"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            About Note Lab
          </h2>

          <p className="text-base-content/70 text-base sm:text-lg">
            Note Lab is a specialized digital marketplace designed to empower
            teachers, tutors and educational institutions across Bangladesh. Our
            platform provides professionally curated lecture sheets, notes and
            model questions to improve classroom teaching and learning
            efficiency.
          </p>

          <p className="text-base-content/70 text-base sm:text-lg">
            We aim to simplify the process of accessing high-quality academic
            resources while protecting the intellectual property of educators.
            With Note Lab, teachers can save valuable preparation time and focus
            more on delivering impactful lessons.
          </p>

          <div className="flex justify-center lg:justify-start">
            <AnimatedButton
              text="Join Us"
              onClick={() => navigate("/join-us")}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
