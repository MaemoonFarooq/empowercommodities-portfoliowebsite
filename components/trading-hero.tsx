"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
export function TradingHero({
  downloadBtnPosition = { top: "10px", left: "69px" },
  startTradingBtnPosition = { top: "10px", left: "69px" },
}) {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <div className="bg-white min-h-[80vh] flex items-center justify-center p-8 cursor-white-area">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Arrow + Heading */}
          <motion.div
            variants={fadeUp}
            custom={0}
            className="flex items-start"
          >

            <div className="lg:[transform:translateX(0px)_translateY(0px)]">
              <h1 className="text-5xl lg:text-6xl font-black text-black leading-tight tracking-tight lg:[letter-spacing:0] lg:[line-height:1.2]">
                LICENSED ACCESS
                <br />
                TO GLOBAL AND
                <br />
                LOCAL FUTURES
              </h1>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            custom={0.2}
            className="text-black text-lg font-medium leading-relaxed max-w-md lg:[max-width:28rem] lg:[margin-left:78px] lg:[margin-top:-15px]"
          >
            EXPLORE A COMPLETE RANGE OF PMEX-TRADABLE COMMODITIES — FROM GOLD AND
            OIL TO RED CHILLI AND WHEAT — BACKED BY SECP COMPLIANCE.
          </motion.p>

          {/* Buttons Container - Added relative positioning for mobile adjustments */}
          <motion.div
            variants={fadeUp}
            custom={0.4}
            className="flex flex-col sm:flex-row gap-4 lg:[gap:1.5rem] relative"
          >
            <div className="flex flex-col lg:flex-col lg:items-end lg:space-y-4 -ml-5 lg:ml-0 -mt-2 lg:mt-0">
              {/* Download Button - Mobile adjustments via Tailwind classes */}
              <div
                className="lg:block w-full relative lg:left-[69px] lg:top-[10px] -left 10 -top-2"
              >
                <motion.div whileHover={{ scale: 1.05 }}>
  <a
    href="/Product Specification Sheet of Empower Commodities.pdf"
    download
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button
      variant="outline"
      size="lg"
      className="border-2 border-black text-black hover:bg-black hover:text-white font-semibold px-8 py-3 rounded-full bg-transparent lg:px-10 transition-all duration-300"
    >
      DOWNLOAD PRODUCT SPECIFICATION SHEET
    </Button>
  </a>
</motion.div>

              </div>

              {/* Start Trading Button - Mobile adjustments via Tailwind classes */}
            <div className="w-full relative 
  lg:left-[69px] lg:top-[10px] 
  !-right-25 !-top 8"  // !important equivalent in Tailwind
>
                <motion.div whileHover={{ scale: 1.05 }}>
<Link
  href="https://www.aof.com.pk/login.php"
  passHref
  target="_blank"
  rel="noopener noreferrer"
>
  <Button
    size="lg"
    className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-8 py-3 rounded-full lg:px-10 transition-all duration-300"
  >
    START TRADING
  </Button>
</Link>

                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
          className="hidden lg:block bg-gray-300 rounded-lg
            lg:[width:350px]
            lg:[height:570px]
            lg:[margin-left:200px]
            lg:[margin-right:0px]
            lg:[margin-top:-28px]
            lg:[margin-bottom:0px]
            lg:[transform:translateX(0px)_translateY(0px)]"
        ></motion.div>
      </div>
    </div>
  );
}