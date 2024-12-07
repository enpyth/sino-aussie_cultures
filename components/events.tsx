'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { events } from '../data/events'

// async function getApiEvents() {
//   const res = await fetch('https://valuable-fruit-5c7a696748.strapiapp.com/api/articles?populate=cover')
//   if (!res.ok) {
//     throw new Error('Failed to fetch events')
//   }
//   return res.json()
// }

async function getApiEvents() {
  const res = await fetch('https://valuable-fruit-5c7a696748.strapiapp.com/api/articles?populate=cover')
  if (!res.ok) {
    throw new Error('Failed to fetch events')
  }
  const data = await res.json();
  console.log('Fetched events data:', JSON.stringify(data, null, 2));
  return data;
}

export function Events() {
  const [apiEvents, setApiEvents] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getApiEvents()
      .then(data => {
        setApiEvents(data.data)
        setIsLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setIsLoading(false)
      })
  }, [])

  return (
    <section id="events" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Upcoming Events</h2>
        
        {/* Local Events */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-700 mb-6">Featured Events</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {events.map((event) => (
              <Link href={`/events/${event.id}`} key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 hover:shadow-xl">
                <div className="relative h-48">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    style={{ objectFit: 'cover' }}
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
        
        {/* API Events */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-700 mb-6">More Events</h3>
          {isLoading ? (
            <p className="text-center text-gray-600">Loading events...</p>
          ) : error ? (
            <p className="text-center text-red-600">Error: {error}</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {apiEvents.map((event) => (
                <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 hover:shadow-xl">
                  <div className="relative h-48">
                  <Image
                    src={event.cover?.formats?.medium?.url || event.cover?.url || "/images/placeholder.jpeg"}
                    alt={event.title || "Event image"}
                    fill
                    style={{ objectFit: 'cover' }}
                    onError={(e) => {
                      console.error('Image load error:', e);
                      console.log('Image src:', event.cover?.url);
                    }}
                  />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-red-600 mb-2">{event.title || "Untitled Event"}</h3>
                    <p className="text-gray-600 mb-2">
                      {event.publishedAt 
                        ? new Date(event.publishedAt).toLocaleDateString()
                        : "Date not available"}
                    </p>
                    <p className="text-gray-700">{event.description || "No description available"}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

