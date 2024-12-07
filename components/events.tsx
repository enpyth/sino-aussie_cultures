import Image from 'next/image'
import Link from 'next/link'
import { events } from '../data/events'

export function Events() {
  return (
    <section id="events" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event) => (
            <Link href={`/events/${event.id}`} key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 hover:shadow-xl">
              <div className="relative h-48">
                <Image
                  src={event.image}
                  alt={event.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-red-600 mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-2">{event.date}</p>
                <p className="text-gray-600 mb-4">{event.location}</p>
                <p className="text-gray-700">{event.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

