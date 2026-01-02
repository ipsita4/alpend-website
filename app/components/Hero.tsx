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
            {/* Background Image - Replace with actual capitol building image from Figma */}
            <div className="absolute inset-0 bg-gradient-to-br from-sky-200 via-blue-100 to-sky-300">
              {/* Sky with clouds effect */}
              <div className="absolute inset-0">
                <div className="absolute top-10 left-10 w-32 h-20 bg-white/30 rounded-full blur-xl"></div>
                <div className="absolute top-20 right-20 w-40 h-24 bg-white/25 rounded-full blur-xl"></div>
                <div className="absolute top-32 left-1/3 w-36 h-22 bg-white/20 rounded-full blur-xl"></div>
              </div>
              
              {/* Capitol Building Silhouette - Replace with actual image */}
              <div className="absolute bottom-0 left-0 right-0 h-3/4">
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2/3 h-full">
                  {/* Building base */}
                  <div className="absolute bottom-0 w-full h-2/3 bg-amber-200/80 rounded-t-3xl">
                    {/* Columns */}
                    <div className="absolute bottom-0 left-1/4 w-8 h-3/4 bg-amber-300/90 rounded-t-lg"></div>
                    <div className="absolute bottom-0 left-2/4 transform -translate-x-1/2 w-8 h-3/4 bg-amber-300/90 rounded-t-lg"></div>
                    <div className="absolute bottom-0 right-1/4 w-8 h-3/4 bg-amber-300/90 rounded-t-lg"></div>
                    {/* Dome */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-amber-300/90 rounded-full -translate-y-1/2"></div>
                    {/* Flag */}
                    <div className="absolute top-1/4 left-1/4 w-8 h-12 bg-red-500/60 rounded-sm"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Gradient Overlays - matching Figma design */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute right-0 top-1/4 w-32 h-64 bg-gradient-to-b from-teal-700/40 to-teal-600/20 rounded-lg transform rotate-12"></div>
              <div className="absolute right-1/4 top-1/3 w-24 h-48 bg-gradient-to-b from-teal-700/30 to-teal-600/15 rounded-lg transform -rotate-6"></div>
              <div className="absolute right-1/3 bottom-1/4 w-28 h-56 bg-gradient-to-b from-teal-700/35 to-teal-600/18 rounded-lg transform rotate-3"></div>
              <div className="absolute right-1/6 bottom-1/3 w-20 h-40 bg-gradient-to-b from-teal-700/25 to-teal-600/12 rounded-lg transform -rotate-12"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
