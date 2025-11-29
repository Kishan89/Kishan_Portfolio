import React, { useState, forwardRef } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Instagram,
  Twitter,
  Check,
  ChevronDown,
} from "lucide-react";
import { Listbox } from "@headlessui/react";
import { motion } from "framer-motion";
import { personalInfo } from "./data/portfolioData";

const topics = [
  { id: "", name: "Choose a topic" },
  { id: "react-native", name: "React Native" },
  { id: "nextjs", name: "Next.js" },
  { id: "uiux", name: "UI/UX Design" },
];

const ContactMe = forwardRef((props, ref) => {
  const { isDarkMode } = props;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");

  const sectionBg = isDarkMode ? "bg-gradient-primary" : "bg-slate-100";
  const cardBg = isDarkMode
    ? "bg-white/5 backdrop-blur-lg border border-white/10 text-white"
    : "bg-white/90 backdrop-blur-md border border-gray-200 text-gray-900";

  const inputStyles = isDarkMode
    ? "bg-white/10 text-white border-white/20 placeholder-gray-300"
    : "bg-gray-50 text-gray-900 border-gray-300";

  const focusStyles = "focus:outline-none focus:ring-2 focus:ring-cyan-400";

  return (
    <section
      id="contact"
      ref={ref}
      className={`py-16 sm:py-20 px-4 sm:px-6 lg:px-8 ${sectionBg}`}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {/* Left Column */}
          <div>
            <h3
              className={`text-xl sm:text-2xl font-semibold mb-5 sm:mb-6 ${
                isDarkMode ? "text-sky-400" : "text-blue-600"
              }`}
            >
              Let's Connect
            </h3>
            <p
              className={`mb-6 sm:mb-8 text-sm sm:text-base md:text-lg leading-relaxed ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              I'm always open to new opportunities, collaborations, or a quick
              hello! Drop a message anytime.
            </p>

            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 mr-3 sm:mr-4 text-sky-500 flex-shrink-0" />
                <span
                  className={`text-sm sm:text-base md:text-lg break-all ${
                    isDarkMode ? "text-white" : "text-gray-800"
                  }`}
                >
                  {personalInfo.email}
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 mr-3 sm:mr-4 text-sky-500 flex-shrink-0" />
                <span
                  className={`text-sm sm:text-base md:text-lg ${
                    isDarkMode ? "text-white" : "text-gray-800"
                  }`}
                >
                  {personalInfo.phone}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 sm:gap-5 mt-6 sm:mt-8">
              {[
                personalInfo.github,
                personalInfo.linkedin,
                personalInfo.instagram,
                personalInfo.twitter,
              ].map((link, idx) => (
                <a
                  key={idx}
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className={`touch-target hover:text-sky-500 transition-colors ${
                    isDarkMode ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  {idx === 0 && <Github className="w-7 h-7 sm:w-8 sm:h-8" />}
                  {idx === 1 && <Linkedin className="w-7 h-7 sm:w-8 sm:h-8" />}
                  {idx === 2 && <Instagram className="w-7 h-7 sm:w-8 sm:h-8" />}
                  {idx === 3 && <Twitter className="w-7 h-7 sm:w-8 sm:h-8" />}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Form */}
          <div className={`rounded-xl p-5 sm:p-6 shadow-xl ${cardBg}`}>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                setStatusMessage("⏳ Sending...");
                try {
                  const res = await fetch(
                    "https://formsubmit.co/ajax/kishan895737@gmail.com",
                    {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                      },
                      body: JSON.stringify({
                        Name: formData.name,
                        Email: formData.email,
                        Topic: formData.topic,
                        Message: formData.message,
                      }),
                    }
                  );
                  const result = await res.json();
                  if (result.success === "true") {
                    setStatusMessage("✅ Message sent successfully!");
                    setFormData({
                      name: "",
                      email: "",
                      topic: "",
                      message: "",
                    });
                  } else {
                    setStatusMessage("❌ Failed to send message.");
                  }
                } catch {
                  setStatusMessage("❌ Something went wrong.");
                }
              }}
              className="space-y-5 sm:space-y-6"
            >
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className={`w-full border rounded-md px-4 py-3 sm:py-3.5 text-sm sm:text-base touch-target ${inputStyles} ${focusStyles}`}
              />

              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className={`w-full border rounded-md px-4 py-3 sm:py-3.5 text-sm sm:text-base touch-target ${inputStyles} ${focusStyles}`}
              />

              <div className="relative">
                <Listbox
                  value={formData.topic}
                  onChange={(value) =>
                    setFormData({ ...formData, topic: value })
                  }
                >
                  <Listbox.Button
                    className={`w-full flex justify-between items-center rounded-md border px-4 py-3 sm:py-3.5 text-sm sm:text-base touch-target ${inputStyles} ${focusStyles}`}
                  >
                    {topics.find((t) => t.id === formData.topic)?.name ||
                      "Choose a topic"}
                    <ChevronDown className="w-5 h-5 ml-2" />
                  </Listbox.Button>

                  <Listbox.Options
                    className={`absolute mt-2 w-full rounded-md z-20 shadow-lg overflow-hidden ${
                      isDarkMode
                        ? "bg-[#2f2d45] text-white border border-white/20"
                        : "bg-white text-gray-900 border border-gray-200"
                    }`}
                  >
                    {topics.map((topic, idx) => (
                      <Listbox.Option
                        key={idx}
                        value={topic.id}
                        className={({ active }) =>
                          `px-4 py-2.5 sm:py-3 cursor-pointer touch-target ${
                            active
                              ? isDarkMode
                                ? "bg-cyan-600"
                                : "bg-cyan-100"
                              : ""
                          }`
                        }
                      >
                        {({ selected }) => (
                          <div className="flex justify-between items-center">
                            <span>{topic.name}</span>
                            {selected && (
                              <Check className="w-4 h-4 text-cyan-400" />
                            )}
                          </div>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Listbox>
              </div>

              <textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                rows="5"
                className={`w-full border rounded-md px-4 py-3 text-sm sm:text-base resize-none ${inputStyles} ${focusStyles}`}
              ></textarea>

              <motion.button
                type="submit"
                className="touch-target w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold text-base sm:text-lg py-3 sm:py-3.5 rounded-md shadow-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 ease-in-out relative overflow-hidden group"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Send Message</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>

              {statusMessage && (
                <p
                  className={`font-medium mt-2 text-sm sm:text-base ${
                    statusMessage.startsWith("✅")
                      ? "text-green-400"
                      : statusMessage.startsWith("⏳")
                      ? "text-yellow-400"
                      : "text-red-400"
                  }`}
                >
                  {statusMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
});

export default ContactMe;
