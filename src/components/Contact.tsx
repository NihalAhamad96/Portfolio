// src/components/Contact.tsx
// ✅ Full working Contact component with EmailJS + Framer Motion + Tailwind
// ✅ Uses Vite .env variables (recommended + safer)

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Linkedin, Github, Send, Loader2, CheckCircle2, XCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMsg, setStatusMsg] = useState("");

  // ✅ Your social links
  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "nihalahamadb@gmail.com",
      href: "mailto:nihalahamadb@gmail.com",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/nihal-ahamad-b-83574b28a/",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "View my code",
      href: "https://github.com/NihalAhamad96",
      color: "from-gray-600 to-gray-800",
    },
  ];

  // ✅ EmailJS send handler
  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);
    setStatus("idle");
    setStatusMsg("");

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "Missing EmailJS env variables. Add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY in .env and restart the dev server."
        );
      }

      const res = await emailjs.sendForm(serviceId, templateId, formRef.current, {
        publicKey,
      });

      console.log("✅ EmailJS success:", res);
      setStatus("success");
      setStatusMsg("Message sent successfully! I’ll get back to you soon.");
      formRef.current.reset();
    } catch (err: any) {
      console.error("❌ EmailJS error:", err);
      setStatus("error");
      setStatusMsg(err?.text || err?.message || "Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-32 bg-gradient-to-b from-gray-900 to-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-cyan-900/10 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={sectionRef}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Let’s create something amazing together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 10, transition: { duration: 0.2 } }}
                  className="flex items-center gap-4 p-4 bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-xl hover:border-gray-700/50 transition-all duration-300 group"
                >
                  <div className={`p-3 bg-gradient-to-r ${link.color} rounded-lg group-hover:scale-110 transition-transform`}>
                    <link.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">{link.label}</div>
                    <div className="text-white font-medium">{link.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-8 bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl"
          >
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              {/* IMPORTANT: These name fields MUST match EmailJS template variables */}
              <div>
                <motion.input
                  name="from_name"
                  type="text"
                  placeholder="Your Name"
                  required
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  animate={{
                    borderColor: focusedField === "name" ? "rgb(34, 211, 238)" : "rgba(55, 65, 81, 0.5)",
                  }}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all"
                />
              </div>

              <div>
                <motion.input
                  name="from_email"
                  type="email"
                  placeholder="Your Email"
                  required
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  animate={{
                    borderColor: focusedField === "email" ? "rgb(34, 211, 238)" : "rgba(55, 65, 81, 0.5)",
                  }}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all"
                />
              </div>

              <div>
                <motion.textarea
                  name="message"
                  rows={5}
                  placeholder="Your Message"
                  required
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  animate={{
                    borderColor: focusedField === "message" ? "rgb(34, 211, 238)" : "rgba(55, 65, 81, 0.5)",
                  }}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all resize-none"
                />
              </div>

              {/* Status Banner */}
              {status !== "idle" && (
                <div
                  className={`flex items-start gap-2 rounded-lg border p-3 text-sm ${
                    status === "success"
                      ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-200"
                      : "border-rose-500/30 bg-rose-500/10 text-rose-200"
                  }`}
                >
                  {status === "success" ? (
                    <CheckCircle2 className="w-5 h-5 mt-0.5" />
                  ) : (
                    <XCircle className="w-5 h-5 mt-0.5" />
                  )}
                  <span className="leading-5">{statusMsg}</span>
                </div>
              )}

              {/* Button */}
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={loading ? {} : { scale: 1.02, boxShadow: "0 0 30px rgba(34, 211, 238, 0.5)" }}
                whileTap={loading ? {} : { scale: 0.98 }}
                className={`w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-shadow ${
                  loading ? "opacity-80 cursor-not-allowed" : ""
                }`}
              >
                {loading ? (
                  <>
                    Sending <Loader2 className="w-5 h-5 animate-spin" />
                  </>
                ) : (
                  <>
                    Send Message <Send className="w-5 h-5" />
                  </>
                )}
              </motion.button>

              <p className="text-xs text-gray-500">
                EmailJS template variables must be:{" "}
                <span className="text-gray-300">{`{{from_name}}`}</span>,{" "}
                <span className="text-gray-300">{`{{from_email}}`}</span>,{" "}
                <span className="text-gray-300">{`{{message}}`}</span>
              </p>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 pt-8 border-t border-gray-800/50 text-center"
        >
          <p className="text-gray-500">© 2024 B Nihal Ahamad. Built with React, Tailwind CSS & Framer Motion.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
