import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import AnimatedButton from "../ButtonAnimation/AnimatedButton";

/* ---------------- CLASS GRID ---------------- */
const classes = [
  "Class 3",
  "Class 4",
  "Class 5",
  "Class 6",
  "Class 7",
  "Class 8",
  "Class 9",
  "Class 10",
  "Class 11",
  "Class 12",
];

const ClassGrid = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-8">
      {classes.map((cls, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: i * 0.05 }}
          viewport={{ once: false }}
          className="
            px-4 py-2 rounded-lg text-center font-medium
            bg-base-100 border border-base-300/40
            hover:border-primary hover:shadow-md
            transition-all duration-300
          "
        >
          {cls}
        </motion.div>
      ))}
    </div>
  );
};

/* ---------------- MAIN ---------------- */
const AllPackagesSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-base-200 py-28 overflow-hidden">
      {/* subtle background glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold">Our Packages</h2>

          <p className="mt-4 text-base-content/70 max-w-2xl mx-auto">
            Carefully crafted academic resources designed for teachers, tutors
            and institutions across Bangladesh.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold leading-relaxed">
              We provide structured academic sheets from
              <span className="text-primary font-bold"> Grade 3 to 12</span>.
            </h3>

            <ClassGrid />

            <div className="mt-10">
              <AnimatedButton
                text="View Details"
                onClick={() => navigate("/details")}
              />
            </div>
          </motion.div>

          {/* RIGHT */}
          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* DEMO BLOCK */}
            <div className="bg-base-100 border border-base-300/40 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <h4 className="text-xl font-semibold mb-2">
                Explore Demo Sheets
              </h4>

              <p className="text-base-content/70 mb-4">
                Get a quick preview of our high-quality academic sheets before
                purchasing. Experience the structure and teaching quality.
              </p>

              <AnimatedButton
                text="See Demo"
                onClick={() => navigate("/demo")}
              />
            </div>

            {/* PRICE BLOCK */}
            <div className="bg-base-100 border border-base-300/40 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <h4 className="text-xl font-semibold mb-2">View Pricing Plans</h4>

              <p className="text-base-content/70 mb-4">
                Check our flexible pricing for both regular and premium packages
                tailored for teachers and institutions.
              </p>

              <AnimatedButton
                text="View Price"
                onClick={() => navigate("/pricing")}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AllPackagesSection;
