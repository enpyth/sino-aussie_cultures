import Image from 'next/image'

export function FilmFestival() {
  const films = [
    { title: "The Farewell", director: "Lulu Wang", country: "China/USA" },
    { title: "The Dressmaker", director: "Jocelyn Moorhouse", country: "Australia" },
    { title: "Ash Is Purest White", director: "Jia Zhangke", country: "China" },
    { title: "Animal Kingdom", director: "David Michôd", country: "Australia" },
  ]

  return (
    <section id="film-festival" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">China-Australia Film Festival</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/placeholder.jpeg?height=600&width=800"
              alt="Film Festival Poster"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div>
            <p className="text-xl mb-6">Join us for a celebration of Chinese and Australian cinema, showcasing the best films from both countries.</p>
            <h3 className="text-2xl font-semibold mb-4">Featured Films</h3>
            <ul className="space-y-4">
              {films.map((film, index) => (
                <li key={index} className="bg-white rounded-lg p-4 shadow">
                  <h4 className="text-lg font-semibold text-red-600">{film.title}</h4>
                  <p className="text-gray-600">Director: {film.director}</p>
                  <p className="text-gray-600">Country: {film.country}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

