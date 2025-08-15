"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button"; // Assuming you have a Button component

export default function TwoImagesSection() {
  return (
    <section className="bg-white py-20 px-6 flex flex-col md:flex-row md:justify-between items-center gap-8">
      {/* Left Image */}
      <motion.div
        initial={{ opacity: 0, x: -150 }}
        animate={{ opacity: 1, x: 20 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex-shrink-0"
      >
        <Image
          src="/mt51.png"
          alt="Left"
          width={530}
          height={400}
          className="rounded-xl shadow-lg max-w-full h-auto"
        />
      </motion.div>

      {/* Middle Buttons */}
      <div className="flex flex-col items-center gap-4 -ml-center">
        <Button
          asChild
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
        >
          <a href="YOUR_ANDROID_LINK" target="_blank" rel="noopener noreferrer">
            Download MT5 Android App
          </a>
        </Button>
        <Button
          asChild
          className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg"
        >
          <a href="YOUR_IOS_LINK" target="_blank" rel="noopener noreferrer">
            Download MT5 iOS App
          </a>
        </Button>
      </div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, x: 150 }}
        animate={{ opacity: 1, x: -20 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="flex-shrink-0 ml-6 md:ml-0"
      >
        <Image
          src="/mt52.png"
          alt="Right"
          width={400}
          height={400}
          className="rounded-xl shadow-lg max-w-full h-auto"
        />
      </motion.div>
    </section>
  );
}
