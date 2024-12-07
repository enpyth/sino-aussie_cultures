import { Header } from '../components/header'
import { Hero } from '../components/hero'
import { Events } from '../components/events'
import { FilmFestival } from '../components/film-festival'
import { Programs } from '../components/programs'
import { Footer } from '../components/footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <Events />
        <FilmFestival />
        <Programs />
      </main>
      <Footer />
    </div>
  )
}

