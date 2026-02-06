import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, X } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  details: string[];
  technologies: string[];
  status: string;
  gradient: string;
}

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    // {
    //   id: 1,
    //   title: "Neural Networks for Printed Character Recognition",
    //   description:
    //     "CNN-based character recognition system with improved accuracy over traditional OCR methods.",
    //   details: [
    //     "Developed a Convolutional Neural Network architecture for accurate character recognition",
    //     "Implemented advanced image preprocessing and normalization techniques",
    //     "Achieved significant accuracy improvements over traditional OCR systems",
    //     "Optimized model performance through hyperparameter tuning and data augmentation",
    //   ],
    //   technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "NumPy"],
    //   status: "Completed",
    //   gradient: "from-cyan-500 to-blue-500",
    // },
    // {
    //   id: 2,
    //   title: "Robotic Intelligence – Line Following Robot",
    //   description:
    //     "Autonomous navigation system with obstacle avoidance capabilities using sensor integration.",
    //   details: [
    //     "Built an autonomous robot capable of line following and obstacle detection",
    //     "Integrated multiple sensors with Arduino for real-time environmental perception",
    //     "Developed control algorithms in Python for decision-making and navigation",
    //     "Implemented real-time perception and adaptive navigation strategies",
    //   ],
    //   technologies: [
    //     "Python",
    //     "Arduino",
    //     "Computer Vision",
    //     "Robotics",
    //     "Control Systems",
    //   ],
    //   status: "Ongoing",
    //   gradient: "from-blue-500 to-purple-500",
    // },

    // ✅ ThinkTrace — Decision Diary
    {
      id: 1,
      title: "ThinkTrace — Decision Diary",
      description:
        "Full-stack app to track decisions, review outcomes, and discover patterns across confidence, mood, and categories with a premium dashboard.",
      details: [
        "Built with Next.js 14 (App Router) + MongoDB (Mongoose) and a premium UI using Tailwind, shadcn/Radix, and Framer Motion",
        "Implemented secure JWT auth in httpOnly cookies with access + refresh token flow",
        "Created decision lifecycle: OPEN → REVIEW_DUE → CLOSED with outcome reviews and learning notes",
        "Built insights dashboard using Recharts (mood vs success, category averages, confidence vs outcome) and pattern cards",
        "Added CSV export and an optional cron API to auto-mark follow-up decisions as REVIEW_DUE",
      ],
      technologies: [
        "Next.js 14",
        "TypeScript",
        "Tailwind CSS",
        "shadcn/Radix",
        "Framer Motion",
        "MongoDB",
        "Mongoose",
        "JWT (httpOnly cookies)",
        "Zod",
        "TanStack Query",
        "React Hook Form",
        "Recharts",
      ],
      status: "Completed",
      gradient: "from-emerald-500 to-cyan-500",
    },

    // ✅ Face Recognition Attendance
    {
      id: 2,
      title: "Face Recognition Based Smart Attendance System (Web App + ML)",
      description:
        "Automates attendance using real-time facial recognition and a web dashboard for managing records, authentication, and reports.",
      details: [
        "Built an intelligent attendance system using face recognition to mark attendance automatically in real-time",
        "Developed a web dashboard to manage students/faculty, sessions, and attendance records",
        "Implemented secure role-based authentication for students, teachers, and administrators",
        "Generated attendance reports with daily/weekly/monthly analytics and export support",
        "Designed scalable multi-user support for multiple classes and sessions",
      ],
      technologies: [
        "Python",
        "Flask/Django",
        "OpenCV",
        "face_recognition",
        "NumPy",
        "MySQL/SQLite/MongoDB",
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap/React",
      ],
      status: "Completed",
      gradient: "from-fuchsia-500 to-purple-500",
    },

    // ✅ Parking Detection
    {
      id: 3,
      title: "Real-Time Car Parking Detection System",
      description:
        "Computer vision + deep learning system that detects occupied and vacant parking slots from CCTV/live video with real-time overlays.",
      details: [
        "Processed CCTV/live video streams to detect vehicles in real-time using deep learning-based object detection",
        "Mapped detected vehicle bounding boxes to predefined parking slots and classified each slot as Occupied/Vacant",
        "Rendered real-time overlays with clear visual indicators for parking availability monitoring",
        "Designed the pipeline to work with different parking layouts and both live and pre-recorded videos",
        "Planned enhancements like multi-camera support, license plate recognition, and cloud analytics dashboard",
      ],
      technologies: [
        "Python",
        "OpenCV",
        "NumPy",
        "YOLO",
        "TensorFlow/PyTorch",
        "Deep Learning",
        "CCTV/Live Streams",
      ],
      status: "Completed",
      gradient: "from-orange-500 to-rose-500",
    },

    // ✅ NEW: Doctor Appointment Chatbot
    {
      id: 4,
      title: "Doctor Appointment Chatbot (NLP + ML)",
      description:
        "AI-powered chatbot that understands natural language to find doctors, check availability, and book appointments automatically.",
      details: [
        "Built an NLP-based chatbot to book, reschedule, and query doctor appointments through natural language conversations",
        "Implemented intent recognition and entity extraction (specialization, date/time, symptoms) to process user requests",
        "Designed dialogue management to maintain context across multi-turn conversations for a smooth user experience",
        "Developed backend APIs to manage doctor availability, patient details, and appointment confirmations",
        "Outlined future upgrades like voice booking, multi-language support, and SMS/Email reminders",
      ],
      technologies: [
        "Python",
        "Flask/Django",
        "scikit-learn",
        "spaCy",
        "NLTK",
        "TensorFlow/PyTorch",
        "MySQL/MongoDB",
        "HTML",
        "CSS",
        "JavaScript",
      ],
      status: "Completed",
      gradient: "from-sky-500 to-emerald-500",
    },
  ];

  return (
    <>
      <section
        id="projects"
        className="py-32 bg-gradient-to-b from-gray-950 to-gray-900 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent" />

        <div className="max-w-7xl mx-auto px-6 relative z-10" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-400">
              Innovative AI and full-stack solutions for real-world challenges
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer relative"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl blur-xl`}
                />

                <div className="relative h-full p-8 bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl hover:border-gray-700/50 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`px-3 py-1 bg-gradient-to-r ${project.gradient} rounded-full text-xs font-semibold text-white`}
                    >
                      {project.status}
                    </div>
                    <motion.div
                      whileHover={{ rotate: 45 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                    </motion.div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mb-6">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-800/50 border border-gray-700/50 rounded-full text-xs text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-gray-800/50 border border-gray-700/50 rounded-full text-xs text-gray-300">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gray-900 border border-gray-800 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8 relative"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 hover:bg-gray-800 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-gray-400" />
              </button>

              <div
                className={`inline-block px-4 py-2 bg-gradient-to-r ${selectedProject.gradient} rounded-full text-sm font-semibold text-white mb-6`}
              >
                {selectedProject.status}
              </div>

              <h3 className="text-3xl font-bold text-white mb-4">
                {selectedProject.title}
              </h3>

              <p className="text-lg text-gray-300 mb-8">
                {selectedProject.description}
              </p>

              <div className="mb-8">
                <h4 className="text-xl font-semibold text-white mb-4">
                  Key Features
                </h4>
                <ul className="space-y-3">
                  {selectedProject.details.map((detail, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div
                        className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${selectedProject.gradient} mt-2`}
                      />
                      <span className="text-gray-300">{detail}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-white mb-4">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-full text-sm text-gray-300 hover:border-cyan-500/50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;
