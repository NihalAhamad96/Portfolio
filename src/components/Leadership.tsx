import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Palette, Store } from "lucide-react";

const Leadership = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const roles = [
    {
      icon: Users,
      title: "NSS Lead",
      organization: "IIIT Sri City",
      description:
        "Leading community service initiatives and social responsibility programs.",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: Palette,
      title: "Design Lead",
      organization: "Gradient Club, IIIT Sri City",
      description:
        "Directed creative design projects and led the design team for events and digital content.",
      color: "from-purple-500 to-pink-500",
    },

    // ✅ NEW ROLE ADDED
    {
      icon: Store,
      title: "Stalls Team Member",
      organization: "Abhisarga 2024 | Feb 2024 – Apr 2024",
      description:
        "Managed vendor relations and coordination, enhancing the festival experience and increasing vendor engagement by 25%.",
      color: "from-emerald-500 to-teal-500",
    },
  ];

  return (
    <section
      id="leadership"
      className="py-32 bg-gray-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-900/10 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Leadership & Impact
          </h2>
          <p className="text-xl text-gray-400">
            Driving positive change through leadership, creativity, and event
            management
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-purple-500/50 to-emerald-500/50 transform -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {roles.map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.3 }}
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="flex-1" />

                <div className="relative">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${role.color} flex items-center justify-center border-4 border-gray-900`}
                  >
                    <role.icon className="w-8 h-8 text-white" />
                  </motion.div>
                </div>

                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="flex-1 group"
                >
                  <div className="p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl hover:border-gray-700/50 transition-all duration-300">
                    <div
                      className={`inline-block px-3 py-1 bg-gradient-to-r ${role.color} rounded-full text-xs font-semibold text-white mb-4`}
                    >
                      {role.organization}
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {role.title}
                    </h3>

                    <p className="text-gray-400">{role.description}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
