"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HomepageMinimal() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="bg-white-50 pt-8 pb-16 px-4 sm:px-6 lg:px-8 cursor-white-area"> {/* Changed from min-h-screen flex items-center justify-center to pt-8 pb-16 */}
      <div className="mx-auto text-center"> {/* Removed mt-[-5rem] */}
        {/* Logo/Icon */}
        <div
          className={`mb-0 transition-all duration-1000 ${ /* Changed my-0 to mb-0 */
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
<div className="flex justify-center mb-0">
  <video
    src="/22.mp4" // Put your video in /public folder
    width={500}
    height={500}
    autoPlay
    loop
    muted
    playsInline
    className="hover:scale-105 transition-transform duration-300 rounded-lg"
    onTimeUpdate={(e) => {
      const vid = e.target;
      if (vid.currentTime >= vid.duration - 0.05) {
        vid.currentTime = 0.05; // jump before black frame
      }
    }}
  />
</div>

        </div>

        {/* Main Heading */}
        <div
          className={`mb-0 transition-all duration-1000 delay-300 ${ /* Changed my-0 to mb-0 */
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
  <h1 className="text-xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-0 whitespace-nowrap">
            Empowering Trade & Enabling Trust
          </h1>
        </div>

        {/* Action Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-500 mt-6 ${ /* Changed mt-4 to mt-6 for slight separation */
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
<Link href="/products" passHref>
  <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-3 rounded-lg text-base transition-all duration-300 hover:scale-105 transform hover:shadow-lg min-w-[180px]">
    Explore Our Products
  </Button>
</Link>
          
<a
  href="https://www.aof.com.pk/login.php"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-3 rounded-lg text-base transition-all duration-300 hover:scale-105 transform hover:shadow-lg min-w-[180px]">
    Start Trading
  </Button>
</a>

        </div>
      </div>
    </section>
  )
}
