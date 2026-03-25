import { motion } from "framer-motion";
import { FaLightbulb, FaShieldAlt, FaUsers } from "react-icons/fa";

const missions = [
  {
    icon: <FaLightbulb size={26} />,
    title: "Empower Educators",
    desc: "Provide high-quality academic resources to help teachers deliver better and more effective lessons.",
  },
  {
    icon: <FaShieldAlt size={26} />,
    title: "Protect Content",
    desc: "Ensure intellectual property is secure and prevent unauthorized distribution.",
  },
  {
    icon: <FaUsers size={26} />,
    title: "Build Community",
    desc: "Create a strong network of teachers, tutors and institutions across Bangladesh.",
  },
];

// container animation (stagger)
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// card animation (scale + blur style)
const cardVariant = {
  hidden: {
    opacity: 0,
    scale: 0.8,
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

const OurMission = () => {
  return (
    <section className="relative bg-base-100 py-24 overflow-hidden">
      {/* subtle background glow */}
      {/* <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full"></div> */}

      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">Our Mission</h2>

          <p className="mt-4 text-base-content/70 max-w-2xl mx-auto">
            Transforming the way academic resources are created and used.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          className="grid md:grid-cols-3 gap-8"
        >
          {missions.map((item, i) => (
            <motion.div
              key={i}
              variants={cardVariant}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="
                bg-base-200
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
                whileHover={{ rotate: 8, scale: 1.1 }}
                className="flex justify-center mb-4 text-primary"
              >
                {item.icon}
              </motion.div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>

              {/* Description */}
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

export default OurMission;
