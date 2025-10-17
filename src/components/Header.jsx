function Header() {
  return (
    <header className="bg-gradient-to-r from-green-600 to-green-500 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        {/* Logos */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
          </svg>
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="2" />
            <path d="M12 2a10 10 0 0 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z" />
            <path d="M12 6a6 6 0 0 0-6 6h2a4 4 0 0 1 4-4V6z" />
            <path d="M12 18a6 6 0 0 0 6-6h-2a4 4 0 0 1-4 4v2z" />
          </svg>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">PayFlow Demo</h1>
        
        {/* Description */}
        <p className="text-green-100 text-lg max-w-2xl mx-auto">
          Experience seamless payment processing with modern React components and beautiful UI design
        </p>
      </div>
    </header>
  )
}

export default Header
