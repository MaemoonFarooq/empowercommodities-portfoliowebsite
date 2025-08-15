import Image from "next/image"

export default function Home() {
  return (
    <section className="relative h-screen">
      <Image
        src="/modern-curved-building.png"
        alt="Test"
        fill
        className="object-cover"
      />
    </section>
  )
}
