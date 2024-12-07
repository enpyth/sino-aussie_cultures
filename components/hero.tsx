import Image from 'next/image'

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="/images/placeholder.jpeg?height=1080&width=1920"
        alt="China-Australia cultural collage"
        fill
        style={{ objectFit: 'cover' }}
        className="absolute z-0"
      />
      <div className="relative z-10 text-center text-white">
        <h1 className="text-6xl font-bold mb-4 shadow-text">Bridging Cultures, Building Friendships</h1>
        <p className="text-2xl mb-8 shadow-text">Explore the rich tapestry of Chinese and Australian cultures</p>
        <button className="bg-red-600 text-white font-bold py-3 px-6 rounded-full hover:bg-red-700 transition duration-300 transform hover:scale-105">
          Join Us Today
        </button>
      </div>
    </section>
  )
}

