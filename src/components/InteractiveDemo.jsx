import { useState } from 'react'

function InteractiveDemo() {
  const [count, setCount] = useState(0)

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-10 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Interactive Demo</h2>
          
          <button
            onClick={() => setCount(count + 1)}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
            </svg>
            Click Counter: {count}
          </button>

          <p className="text-gray-500 text-sm mt-6">
            Edit <code className="bg-gray-100 px-2 py-1 rounded">src/App.jsx</code> and save to test HMR (Hot Module Replacement)
          </p>
        </div>
      </div>
    </section>
  )
}

export default InteractiveDemo
