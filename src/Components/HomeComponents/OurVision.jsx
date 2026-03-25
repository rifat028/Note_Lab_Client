import { motion } from "framer-motion";
import { FaGlobeAsia, FaRocket, FaChartLine } from "react-icons/fa";

// animation (same style system)
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const itemVariant = {
  hidden: {
    opacity: 0,
    scale: 0.85,
    filter: "blur(8px)",
    y: 40,
  },
  show: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 12,
    },
  },
};

const visions = [
  {
    icon: <FaGlobeAsia size={26} />,
    title: "Nationwide Impact",
    desc: "Build a unified academic resource ecosystem across all institutions in Bangladesh.",
  },
  {
    icon: <FaRocket size={26} />,
    title: "Future of Education",
    desc: "Lead the digital transformation of teaching materials and classroom preparation.",
  },
  {
    icon: <FaChartLine size={26} />,
    title: "Continuous Growth",
    desc: "Constantly improve content quality and expand our platform for educators.",
  },
];

const OurVision = () => {
  return (
    <section className="relative bg-base-200 py-24 overflow-hidden">
      {/* background glow */}
      {/* <div className="absolute top-10 right-10 w-72 h-72 bg-pink-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full"></div> */}

      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">Our Vision</h2>

          <p className="mt-4 text-base-content/70 max-w-2xl mx-auto">
            Shaping the future of academic resource sharing and teaching
            excellence.
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          className="grid md:grid-cols-3 gap-8"
        >
          {visions.map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariant}
              whileHover={{
                y: -10,
                scale: 1.04,
              }}
              className="
                bg-base-100
                border border-base-300/40
                rounded-2xl
                p-6
                text-center
                transition
                cursor-pointer
              "
            >
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.15, rotate: 6 }}
                className="flex justify-center mb-4 text-secondary"
              >
                {item.icon}
              </motion.div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>

              {/* Desc */}
              <p className="text-base-content/70 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurVision;
