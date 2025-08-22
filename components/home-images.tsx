"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button"; // Assuming you have a Button component

export default function TwoImagesSection() {
  return (
    <section className="bg-white py-20 px-6 flex flex-col md:flex-row md:justify-between items-center gap-8 cursor-white-area">
      {/* Left Image */}
      <motion.div
        initial={{ opacity: 0, x: -150 }}
        animate={{ opacity: 1, x: 20 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex-shrink-0 max-w-[90%] md:max-w-[40%] lg:max-w-[35%]"
      >
        <Image
          src="/mt51.png"
          alt="Left"
          width={530}
          height={400}
          className="rounded-xl shadow-lg w-full h-auto"
        />
      </motion.div>

      {/* Middle Buttons */}
      <div className="flex flex-col items-center gap-4 w-full max-w-sm">
        <Button
          asChild
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg w-full"
        >
          <a
            href="https://play.google.com/store/apps/details?id=net.metaquotes.metatrader5&hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download MT5 Android App
          </a>
        </Button>
        <Button
          asChild
          className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg w-full"
        >
          <a
            href="https://apps.apple.com/us/app/metatrader-5/id413251709"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download MT5 iOS App
          </a>
        </Button>
        <Button
          asChild
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg w-full"
        >
          <a
            href="https://download.mql5.com/cdn/web/pakistan.mercantile.exchange/mt5/pmex5setup.exe"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Desktop MT5 App
          </a>
        </Button>
      </div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, x: 150 }}
        animate={{ opacity: 1, x: -20 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="flex-shrink-0 max-w-[90%] md:max-w-[35%] lg:max-w-[30%] mt-6 md:mt-0"
      >
        <Image
          src="/mt52.png"
          alt="Right"
          width={400}
          height={400}
          className="rounded-xl shadow-lg w-full h-auto"
        />
      </motion.div>
    </section>
  );
}
