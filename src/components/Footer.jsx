function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* PayFlow Demo */}
          <div>
            <h3 className="text-white font-semibold mb-4">PayFlow Demo</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              A modern payment form app with React 19, Vite, and Tailwind CSS. Showcasing best practices in UI/UX.
            </p>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-white font-semibold mb-4">Technologies</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                </svg>
                React 19
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
                Vite 7
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
                </svg>
                Tailwind CSS
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M0 0h24v24H0V0z" fill="none"/>
                  <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                </svg>
                Modern JavaScript
              </li>
            </ul>
          </div>

          {/* Learn More */}
          <div>
            <h3 className="text-white font-semibold mb-4">Learn More</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://react.dev" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  React Docs
                </a>
              </li>
              <li>
                <a href="https://vite.dev" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Vite Docs
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-500">
            ✨ This is a demo form <span className="text-red-500">❤️</span> real payment will be processed
          </p>
          <p className="text-xs text-gray-600 mt-2">
            Built with <span className="text-red-500">❤️</span> using modern web technologies
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
