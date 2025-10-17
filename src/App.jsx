import Header from './components/Header'
import Features from './components/Features'
import InteractiveDemo from './components/InteractiveDemo'
import Payment from './components/Payment'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <Header />

      {/* Features Section */}
      <Features />

      {/* Interactive Demo Section */}
      <InteractiveDemo />

      {/* Payment Form Section */}
      <section className="bg-gradient-to-b from-gray-800 to-gray-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Try Our Payment Form
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Experience our beautifully designed payment form with real-time validation, secure input handling, and smooth animations.
            </p>
          </div>
          <Payment />
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  )
}

export default App
