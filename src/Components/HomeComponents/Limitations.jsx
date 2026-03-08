import { motion } from "framer-motion";
import {
  FaDownload,
  FaUserSlash,
  FaShareAlt,
  FaBan,
  FaExclamationTriangle,
  FaCopy,
} from "react-icons/fa";

const limitations = [
  {
    icon: <FaDownload size={26} />,
    title: "Limited Downloads",
    desc: "Users may have limits on the number of downloads depending on their subscription plan.",
  },
  {
    icon: <FaShareAlt size={26} />,
    title: "No Unauthorized Sharing",
    desc: "Purchased resources cannot be redistributed or shared with others.",
  },
  {
    icon: <FaCopy size={26} />,
    title: "No Reselling",
    desc: "Reselling Note Lab materials without permission is strictly prohibited.",
  },
  {
    icon: <FaUserSlash size={26} />,
    title: "Account Sharing Restricted",
    desc: "Multiple users cannot access a single account simultaneously.",
  },
  {
    icon: <FaBan size={26} />,
    title: "Violation May Lead to Ban",
    desc: "Accounts violating platform policies may be suspended or permanently banned.",
  },
  {
    icon: <FaExclamationTriangle size={26} />,
    title: "Educational Use Only",
    desc: "Resources are intended only for academic and teaching purposes.",
  },
];

const Limitation = () => {
  return (
    <section className="bg-base-200 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold">
            Platform Limitations
          </h2>

          <p className="mt-4 text-lg text-base-content/70 max-w-2xl mx-auto">
            To protect our intellectual property and ensure fair use, certain
            restrictions apply to the use of Note Lab resources.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {limitations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-base-100 rounded-xl p-6 shadow-md border border-base-300/30 hover:shadow-lg transition duration-300"
            >
              <div className="text-error mb-4">{item.icon}</div>

              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>

              <p className="text-base-content/70 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Limitation;
