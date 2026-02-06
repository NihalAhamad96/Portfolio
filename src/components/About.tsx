import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Brain, Lightbulb } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

const cards = [
  {
    icon: GraduationCap,
    title: "Education",
    description: "B.Tech in Artificial Intelligence & Data Science",
    detail:
      "IIIT Sri City (2023 – Present)\n" +
      "Inter Narayana junior college tirupathi, Andhra Pradesh\n" +
      "Score: 935\n" +
      "M P L.HIGH SCHOOL, KOTHAINDLU, PUNGANUR, CHITTOOR Andhra Pradesh\n" +
      "Score: 569/600",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Brain,
    title: "Expertise",
    description: "AI, Machine Learning & Full-Stack Development",
    detail:
      "Machine Learning, Deep Learning, Computer Vision, NLP\n" +
      "Full-Stack Web Development (Frontend + Backend)\n" +
      "REST APIs, Databases, Authentication",
    color: "from-blue-500 to-purple-500",
  },
  {
    icon: Lightbulb,
    title: "Passion",
    description: "Building Real-World, Scalable Applications",
    detail:
      "AI-powered Systems\n" +
      "Full-Stack Web Applications\n" +
      "Leadership, Problem Solving & Innovation",
    color: "from-purple-500 to-pink-500",
  },
];


  return (
    <section
      id="about"
      className="py-32 bg-gradient-to-b from-gray-900 to-gray-950 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/10 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            I’m an AI & Data Science undergraduate with hands-on experience in
            Machine Learning, Computer Vision, NLP, and Full-Stack Web
            Development, focused on building intelligent systems that solve
            real-world problems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${card.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl`}
              />

              <div className="relative h-full p-8 bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl hover:border-gray-700/50 transition-all duration-300">
                <div
                  className={`inline-flex p-4 bg-gradient-to-r ${card.color} rounded-xl mb-6`}
                >
                  <card.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">
                  {card.title}
                </h3>

                <p className="text-lg text-gray-300 mb-2">
                  {card.description}
                </p>

                <p className="text-sm text-gray-500 whitespace-pre-line">
                  {card.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
