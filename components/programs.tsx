import { CalendarDays, GraduationCap, Users, Briefcase, Palette, Music } from 'lucide-react'

export function Programs() {
  const programs = [
    { title: "Language Exchange", description: "Practice Mandarin or English with native speakers", icon: CalendarDays },
    { title: "Cultural Workshops", description: "Learn traditional arts, crafts, and customs", icon: Palette },
    { title: "Student Exchange", description: "Study abroad opportunities in China and Australia", icon: GraduationCap },
    { title: "Business Networking", description: "Connect with professionals from both countries", icon: Briefcase },
    { title: "Music and Dance Classes", description: "Experience traditional and contemporary performances", icon: Music },
    { title: "Community Outreach", description: "Volunteer and engage with local communities", icon: Users },
  ]

  return (
    <section id="programs" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Cultural Exchange Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-600 transition duration-300 hover:shadow-xl">
              <program.icon className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-green-600 mb-2">{program.title}</h3>
              <p className="text-gray-600">{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

