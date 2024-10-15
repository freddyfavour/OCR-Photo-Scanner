import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaCamera,
  FaCloudUploadAlt,
  FaRegFileAlt,
  FaQuestionCircle,
} from "react-icons/fa";

const LandingPage = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(null);

  const handleGetStarted = () => {
    navigate("/auth");
  };

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col">
      <motion.section
        className="flex items-center justify-center min-h-screen bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521747116042-5a810fda9664')",
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative text-center text-white p-8 md:p-12 lg:p-16">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold animate__animated animate__fadeInDown">
            Welcome to OCR Photo Scanner
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mt-4 animate__animated animate__fadeIn">
            Effortlessly extract text from images using cutting-edge OCR
            technology.
          </p>
          <p className="text-lg md:text-xl lg:text-2xl mt-2 font-semibold animate__animated animate__fadeIn">
            It's completely free — no subscriptions!
          </p>
          <button
            onClick={handleGetStarted}
            className="mt-6 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-4 rounded-lg shadow-lg transition-all hover:bg-blue-700 transform hover:scale-105"
          >
            Get Started
          </button>
        </div>
      </motion.section>

      <motion.section
        className="flex flex-col items-center justify-center min-h-screen bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl md:text-5xl font-semibold text-blue-800 mb-10">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 w-full max-w-screen-lg p-8">
          {[
            {
              icon: <FaCamera size={64} />,
              title: "Capture Images",
              description: "Quickly capture images using your device's camera.",
            },
            {
              icon: <FaCloudUploadAlt size={64} />,
              title: "Upload Photos",
              description:
                "Upload photos directly from your device for processing.",
            },
            {
              icon: <FaRegFileAlt size={64} />,
              title: "Text Extraction",
              description: "Extract and view text in a structured format.",
            },
            {
              icon: <FaQuestionCircle size={64} />,
              title: "User-Friendly Interface",
              description: "Navigate easily with our intuitive design.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-8 border rounded-lg shadow-md hover:shadow-xl transition-shadow bg-gray-100 glassmorphism transform hover:scale-105"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-blue-600 mb-4">{feature.icon}</div>
              <h3 className="font-bold text-xl md:text-2xl">{feature.title}</h3>
              <p className="text-center text-lg">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-200 to-blue-400"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl md:text-5xl font-semibold text-blue-800 mb-10">
          Boost Your Productivity
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-screen-lg p-8">
          {[
            {
              title: "Enhance Efficiency",
              description: "Quickly convert images to editable text.",
            },
            {
              title: "Reduce Stress",
              description: "Eliminate tedious typing tasks.",
            },
            {
              title: "Improve Accuracy",
              description: "Minimize errors in data entry.",
            },
          ].map((benefit, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-8 border rounded-lg shadow-md hover:shadow-xl transition-shadow bg-white glassmorphism transform hover:scale-105"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="font-bold text-xl md:text-2xl">{benefit.title}</h3>
              <p className="text-center text-lg">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="flex flex-col items-center justify-center min-h-screen bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl md:text-5xl font-semibold text-blue-800 mb-10">
          Frequently Asked Questions
        </h2>
        {[
          {
            question: "What is OCR?",
            answer:
              "OCR stands for Optical Character Recognition. It is a technology that converts different types of documents, such as scanned paper documents or PDFs, into editable and searchable data.",
          },
          {
            question: "How does the app work?",
            answer:
              "Simply upload an image containing text, and our app uses advanced OCR technology to extract the text for you. You can then edit or copy the extracted text as needed.",
          },
          {
            question: "Is my data safe?",
            answer:
              "Yes! Your data is secure. We do not store any of your images or extracted texts. Everything happens locally on your device.",
          },
          {
            question: "Can I extract text from any image?",
            answer:
              "Yes! You can extract text from various types of images, including documents, receipts, and handwritten notes.",
          },
          {
            question: "Is the app free?",
            answer:
              "Absolutely! Our app is completely free to use with no subscriptions or hidden fees.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className={`border-b ${
              activeIndex === index ? "border-blue-500" : "border-gray-300"
            } w-full max-w-md`}
          >
            <button
              onClick={() => toggleAccordion(index)}
              className={`flex justify-between w-full py-6 focus:outline-none ${
                activeIndex === index ? "bg-blue-100" : ""
              }`}
            >
              <span
                className={`font-semibold ${
                  activeIndex === index ? "text-blue-800" : "text-gray-700"
                } text-lg`}
              >
                {item.question}
              </span>
              <span>{activeIndex === index ? "-" : "+"}</span>
            </button>
            {activeIndex === index && (
              <p className="py-2 text-gray-600">{item.answer}</p>
            )}
          </div>
        ))}
      </motion.section>

      <footer className="bg-white py-4 text-gray-600 text-sm text-center">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <a href="github.com/freddyfavour">Favour Alfred</a>
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
