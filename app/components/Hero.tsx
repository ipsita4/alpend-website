import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="pt-16 min-h-screen flex items-center bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content Section */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-teal-700 leading-tight">
                Money-Market
              </h1>
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-tight">
                On Canton
              </h2>
            </div>

            {/* Feature Badges */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="bg-white border border-gray-200 rounded-lg px-4 py-3 flex items-center gap-3 shadow-sm">
                <div className="w-6 h-6 bg-teal-700 rounded flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-900 font-medium text-sm">Licensed In US</span>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg px-4 py-3 flex items-center gap-3 shadow-sm">
                <div className="w-6 h-6 bg-teal-700 rounded flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-900 font-medium text-sm">DeFi With Privacy</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link
                href="#app"
                className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-lg text-base font-medium hover:bg-gray-50 transition-colors border border-gray-200 shadow-sm"
              >
                Launch App
                <svg className="w-5 h-5 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Visual Section */}
          <div className="relative h-[600px] lg:h-[700px] rounded-lg overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src="/global.png" 
                alt="Money-Market On Canton"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
