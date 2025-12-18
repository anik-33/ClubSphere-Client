import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { FaUsers, FaCalendarAlt, FaRocket, FaGlobe } from "react-icons/fa";

const features = [
  {
    icon: <FaRocket />,
    title: "All-in-One Platform",
    desc: "Manage clubs, events, and members from a single powerful dashboard.",
  },
  {
    icon: <FaUsers />,
    title: "Strong Community",
    desc: "Connect with like-minded people who share your passion and interests.",
  },
  {
    icon: <FaCalendarAlt />,
    title: "Verified Events",
    desc: "Attend trusted, well-organized events hosted by official clubs.",
  },
  {
    icon: <FaGlobe />,
    title: "Inclusive & Open",
    desc: "Open to everyone regardless of background or experience level.",
  },
];

const stats = [
  { value: 25, label: "Active Clubs" },
  { value: 180, label: "Events Hosted" },
  { value: 3200, label: "Community Members" },
  { value: 12, label: "Universities" },
];

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const WhyChoose = () => {
  return (
    <section className="py-28 relative overflow-hidden">
      {/* glow background */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-600/20 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Why Choose <span className="text-blue-500">ClubSphere?</span>
          </h2>
          <p className="text-gray-900 mt-4">
            Everything you need to build, manage, and grow your club community —
            all in one place.
          </p>
        </motion.div>

        {/* feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {features.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 hover:border-blue-500/50 transition-all"
            >
              <div className="text-4xl text-blue-500 mb-5 group-hover:-translate-y-1 transition">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* stats section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800">
                <CountUp end={stat.value} duration={2} />+
              </h3>
              <p className="text-gray-600 text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChoose;