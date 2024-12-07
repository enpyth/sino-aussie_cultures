import { Header } from '../../../components/header'
import { Footer } from '../../../components/footer'
import { events } from '../../../data/events'
import Image from 'next/image'

export default function EventPage({ params }: { params: { id: string } }) {
  const event = events.find(e => e.id === params.id)

  if (!event) {
    return <div>Event not found</div>
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">{event.title}</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={event.image}
                alt={event.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div>
              <p className="text-xl mb-4"><strong>Date:</strong> {event.date}</p>
              <p className="text-xl mb-4"><strong>Location:</strong> {event.location}</p>
              <p className="text-gray-700 mb-6">{event.description}</p>
              <p className="text-gray-700">{event.longDescription}</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

