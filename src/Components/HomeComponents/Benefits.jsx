import { motion } from "framer-motion";
import {
  FaBookOpen,
  FaLock,
  FaRocket,
  FaUserGraduate,
  FaClock,
  FaCloudDownloadAlt,
} from "react-icons/fa";

const benefits = [
  {
    icon: <FaBookOpen size={28} />,
    title: "High Quality Notes",
    desc: "Professionally curated lecture sheets and model questions prepared for teachers and institutes.",
  },
  {
    icon: <FaRocket size={28} />,
    title: "Boost Teaching Efficiency",
    desc: "Save preparation time and deliver better lectures with ready-made structured materials.",
  },
  {
    icon: <FaLock size={28} />,
    title: "Secure Access",
    desc: "Your purchased resources remain safe with secure access control and account protection.",
  },
  {
    icon: <FaUserGraduate size={28} />,
    title: "Teacher Friendly",
    desc: "Designed specially for school teachers, tutors and coaching center owners.",
  },
  {
    icon: <FaClock size={28} />,
    title: "Instant Availability",
    desc: "Get immediate access to resources after purchase without waiting for manual delivery.",
  },
  {
    icon: <FaCloudDownloadAlt size={28} />,
    title: "Easy Download",
    desc: "Download your purchased files anytime from your personal dashboard.",
  },
];

const Benefits = () => {
  return (
    <section className="bg-base-100 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold">
            Why Choose Note Lab
          </h2>

          <p className="mt-4 text-lg text-base-content/70 max-w-2xl mx-auto">
            Empower your teaching with high quality academic resources designed
            specifically for educators and institutions.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-base-200 rounded-xl p-6 shadow-md border border-base-300/30 hover:shadow-lg transition duration-300"
            >
              <div className="text-primary mb-4">{benefit.icon}</div>

              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>

              <p className="text-base-content/70 text-sm">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
