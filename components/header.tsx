import Link from 'next/link'

export function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-red-600">
            China-Australia Culture Association
          </Link>
          <ul className="flex space-x-6">
            <li><Link href="#about" className="text-gray-700 hover:text-blue-600">About</Link></li>
            <li><Link href="#events" className="text-gray-700 hover:text-blue-600">Events</Link></li>
            <li><Link href="#film-festival" className="text-gray-700 hover:text-blue-600">Film Festival</Link></li>
            <li><Link href="#programs" className="text-gray-700 hover:text-blue-600">Programs</Link></li>
            <li><Link href="#contact" className="text-gray-700 hover:text-blue-600">Contact</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

