import { useNavigate } from "react-router";
import { motion } from "framer-motion";

const packages = [
  {
    class: "Class 6",
    type: "Regular",
    subjects: "Bangla, English, Math",
    price: "৳499",
    image: "/package1.jpg",
  },
  {
    class: "Class 7",
    type: "Premium",
    subjects: "Bangla, English, Math, Science",
    price: "৳799",
    image: "/package2.jpg",
  },
  {
    class: "Class 8",
    type: "Regular",
    subjects: "All Core Subjects",
    price: "৳599",
    image: "/package3.jpg",
  },
  {
    class: "Class 9",
    type: "Premium",
    subjects: "Science Group Full Pack",
    price: "৳1299",
    image: "/package4.jpg",
  },
  {
    class: "Class 10",
    type: "Premium",
    subjects: "Board Exam Preparation",
    price: "৳1499",
    image: "/package5.jpg",
  },
  {
    class: "HSC 1st Year",
    type: "Regular",
    subjects: "Science / Commerce",
    price: "৳999",
    image: "/package6.jpg",
  },
  {
    class: "HSC 2nd Year",
    type: "Premium",
    subjects: "CQ + MCQ + Model Test",
    price: "৳1799",
    image: "/package7.jpg",
  },
  {
    class: "Admission",
    type: "Premium",
    subjects: "University Preparation",
    price: "৳2499",
    image: "/package8.jpg",
  },
];

const AllPackages = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-base-200 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold">Our Packages</h2>

          <p className="mt-4 text-lg text-base-content/70 max-w-2xl mx-auto">
            High quality lecture sheets, notes and model questions designed for
            teachers and institutions.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-base-100 rounded-xl shadow-lg overflow-hidden border border-base-300/30 hover:shadow-xl transition duration-300"
            >
              <img
                src={pkg.image}
                alt={pkg.class}
                className="w-full h-40 object-cover"
              />

              <div className="p-5 space-y-3">
                <h3 className="text-lg font-semibold">{pkg.class}</h3>

                <span
                  className={`badge ${
                    pkg.type === "Premium" ? "badge-warning" : "badge-primary"
                  }`}
                >
                  {pkg.type}
                </span>

                <p className="text-sm text-base-content/70">{pkg.subjects}</p>

                <div className="text-xl font-bold text-primary">
                  {pkg.price}
                </div>

                <button
                  onClick={() => navigate("/packages")}
                  className="btn btn-sm btn-outline w-full mt-2"
                >
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="text-center mt-14">
          <button
            onClick={() => navigate("/packages")}
            className="btn btn-primary btn-lg group bg-yellow-500 text-black border-0 transition-transform duration-300 hover:scale-105"
          >
            All Package
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AllPackages;
