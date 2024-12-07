export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold">China-Australia Culture Association</h3>
            <p className="mt-2">Promoting cultural understanding and friendship</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
            <p>Email: info@china-australia-culture.org</p>
            <p>Phone: +61 2 1234 5678</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 China-Australia Culture Association. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

