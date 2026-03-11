import { motion } from "framer-motion";
import CountUp from "react-countup";
import { FaUsers, FaBookOpen, FaDownload, FaSchool } from "react-icons/fa";

const stats = [
  {
    icon: <FaUsers size={30} />,
    value: 500,
    label: "Active Users",
  },
  {
    icon: <FaBookOpen size={30} />,
    value: 12000,
    label: "Study Resources",
  },
  {
    icon: <FaDownload size={30} />,
    value: 25000,
    label: "Total Downloads",
  },
  {
    icon: <FaSchool size={30} />,
    value: 30000,
    label: "Teachers & Institutes",
  },
];

const Stats = () => {
  return (
    <section className="bg-base-100 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold">Stats of Note Lab</h2>

          <p className="mt-4 text-lg text-base-content/70 max-w-2xl mx-auto">
            Thousands of teachers and institutions trust Note Lab for
            high-quality academic resources.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-base-200 py-8 px-1 md:px-8 rounded-xl text-center shadow-md border border-base-300/30 flex flex-col justify-center"
            >
              <div className="text-primary mb-4 flex justify-center">
                {stat.icon}
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-primary">
                <CountUp end={stat.value} duration={2} />+
              </h3>

              <p className="mt-2 text-base-content/70">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
