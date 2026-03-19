import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import AnimatedButton from "../ButtonAnimation/AnimatedButton";

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-base-200 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/logo.jpg"
            alt="About Note Lab"
            className="shadow-xl rounded-full max-h-100"
          />
        </motion.div>

        {/* TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="space-y-6 text-center lg:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold">About Note Lab</h2>

          <p className="text-base-content/70 text-lg">
            Note Lab is a specialized digital marketplace designed to empower
            teachers, tutors and educational institutions across Bangladesh. Our
            platform provides professionally curated lecture sheets, notes and
            model questions to improve classroom teaching and learning
            efficiency.
          </p>

          <p className="text-base-content/70 text-lg">
            We aim to simplify the process of accessing high-quality academic
            resources while protecting the intellectual property of educators.
            With Note Lab, teachers can save valuable preparation time and focus
            more on delivering impactful lessons.
          </p>

          <AnimatedButton text="Join Us" onClick={() => navigate("/join-us")} />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
