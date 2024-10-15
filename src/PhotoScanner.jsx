import React, { useState } from "react";
import { toast } from "react-toastify";
import { storage } from "./firebase";
import { uploadBytes, ref } from "firebase/storage";
import Tesseract from "tesseract.js";
import { motion } from "framer-motion";

const PhotoScanner = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [extractedText, setExtractedText] = useState("");
  const [loading, setLoading] = useState(false);
  const [ellipses, setEllipses] = useState("...");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
      setExtractedText("");
    }
  };

  const formatExtractedText = (text) => {
    const formattedText = text.split("\n").map((line, index) => {
      if (line.trim() === "") return null;
      const isHeading = line === line.toUpperCase();
      return (
        <React.Fragment key={index}>
          {isHeading ? (
            <h2 className="text-2xl font-bold mt-4">{line}</h2>
          ) : (
            <p className="mt-2">{line}</p>
          )}
        </React.Fragment>
      );
    });
    return formattedText;
  };

  const performOCR = async (file) => {
    setLoading(true);
    setEllipses("...");

    const ellipsisInterval = setInterval(() => {
      setEllipses((prev) => (prev.length < 3 ? prev + "." : "."));
    }, 500);

    try {
      const {
        data: { text },
      } = await Tesseract.recognize(file, "eng", {
        logger: (info) => console.log(info),
      });
      const formattedText = formatExtractedText(text);
      setExtractedText(formattedText);
      toast.success("Text extracted successfully!");
    } catch (err) {
      console.error(err);
      toast.error("Error extracting text. Please try again.");
    } finally {
      setLoading(false);
      clearInterval(ellipsisInterval);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!selectedImage) {
      toast.error("Please select an image before uploading.");
      return;
    }

    const storageRef = ref(
      storage,
      `images/${Date.now()}_${selectedImage.name}`
    );
    const response = await fetch(selectedImage);
    const blob = await response.blob();

    uploadBytes(storageRef, blob)
      .then((snapshot) => {
        toast.success("Image uploaded successfully!");
      })
      .catch((error) => {
        console.error("Upload failed:", error);
        toast.error("Image upload failed. Please try again.");
      });
  };

  const copyToClipboard = () => {
    if (extractedText) {
      navigator.clipboard
        .writeText(extractedText)
        .then(() => {
          toast.success("Text copied to clipboard!");
        })
        .catch((err) => {
          console.error("Failed to copy text:", err);
          toast.error("Failed to copy text. Please try again.");
        });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-blue-100 to-blue-200">
      <nav className="bg-blue-600 p-4">
        <h1 className="text-white text-2xl text-center font-bold">
          OCR Photo Scanner
        </h1>
      </nav>
      <div className="flex flex-col md:flex-row items-center justify-center flex-grow p-8">
        <motion.div
          className={`bg-white rounded-lg shadow-lg p-6 w-full max-w-md transition-all duration-500 ${
            loading ? "translate-x-[-50%]" : ""
          }`}
          initial={{ x: 0 }}
          animate={loading ? { x: "-50%" } : { x: 0 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-center">
            Upload Your Photo
          </h2>
          <p className="mb-4 text-gray-600 text-center">
            Use this tool to extract text from your images. Simply upload an
            image, and the text will be extracted and displayed below.
          </p>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="mb-4 w-full border border-gray-300 rounded-lg p-2"
          />
          {selectedImage && (
            <div className="mb-4">
              <img
                src={selectedImage}
                alt="Selected"
                className="w-full h-auto rounded-md shadow-md"
              />
            </div>
          )}
          <button
            onClick={() => performOCR(selectedImage)}
            disabled={loading}
            className={`bg-blue-500 text-white p-3 rounded-lg shadow-lg w-full ${
              loading
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-blue-600 transition duration-300"
            }`}
          >
            {loading ? "Extracting..." : "Extract Text"}
          </button>

          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
              <h3 className="text-white text-xl font-semibold">
                Extracting text{ellipses}
              </h3>
            </div>
          )}
        </motion.div>

        {extractedText && !loading && (
          <motion.div
            className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md mt-6 md:ml-6 md:mt-0 flex-grow"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-2">Extracted Text:</h3>
            <div className="relative max-h-[65vh] overflow-y-scroll">
              {extractedText}
            </div>
            <button
              onClick={copyToClipboard}
              className="bg-blue-500 text-white p-2 rounded-lg shadow-lg mt-4 hover:bg-blue-600 transition duration-300"
            >
              Copy Text
            </button>
          </motion.div>
        )}
      </div>
      <footer className="bg-blue-600 p-4 text-white text-center">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <a href="github.com/freddyfavour">Favour Alfred</a>
        </p>
        <p>
          Instructions: Upload an image to extract text. Ensure the image is
          clear for best results.
        </p>
      </footer>
    </div>
  );
};

export default PhotoScanner;
