import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "AI, ML & Deep Learning",
      skills: [
        "Machine Learning",
        "Deep Learning",
        "Neural Networks",
        "Computer Vision",
        "CNNs",
        "Object Detection (YOLO)",
        "Data Analytics",
      ],
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "Natural Language Processing",
      skills: [
        "NLP Pipelines",
        "Intent Recognition",
        "Entity Extraction",
        "spaCy",
        "NLTK",
        "scikit-learn",
      ],
      color: "from-blue-500 to-indigo-500",
    },
    {
      title: "Programming Languages",
      skills: [
        "Python",
        "JavaScript",
        "TypeScript",
        "C",
        "SQL",
      ],
      color: "from-indigo-500 to-purple-500",
    },
    {
      title: "Web & Full-Stack Development",
      skills: [
        "Next.js",
        "React",
        "REST APIs",
        "JWT Authentication",
        "MongoDB",
        "Mongoose",
        "Flask / Django",
      ],
      color: "from-purple-500 to-pink-500",
    },
    // {
    //   title: "Robotics & Embedded Systems",
    //   skills: [
    //     "Arduino",
    //     "Sensor Integration",
    //     "Control Systems",
    //     "Autonomous Navigation",
    //     "Real-time Processing",
    //   ],
    //   color: "from-pink-500 to-rose-500",
    // },
    {
      title: "Tools, Frameworks & Design",
      skills: [
        "TensorFlow",
        "PyTorch",
        "OpenCV",
        "Git & GitHub",
        "Docker (Basics)",
        "Figma",
        "Canva",
      ],
      color: "from-rose-500 to-orange-500",
    },
  ];

  return (
    <section
      id="skills"
      className="py-32 bg-gray-950 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-400">
            Skills built through real-world AI, full-stack, and systems projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl hover:border-gray-700/50 transition-all duration-300">
                <div
                  className={`inline-block px-4 py-2 bg-gradient-to-r ${category.color} rounded-lg mb-6`}
                >
                  <h3 className="text-lg font-bold text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.4,
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      }}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 p-3 bg-gray-800/30 rounded-lg hover:bg-gray-800/50 transition-colors group/skill"
                    >
                      <div
                        className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color} group-hover/skill:scale-125 transition-transform`}
                      />
                      <span className="text-gray-300 group-hover/skill:text-white transition-colors">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
