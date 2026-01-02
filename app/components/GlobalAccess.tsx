'use client';

import Link from 'next/link';

export default function GlobalAccess() {
  return (
    <section className="relative overflow-hidden">
      {/* Left accent border */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-teal-700 z-20"></div>
      
      {/* Top Section - Black Background */}
      <div className="bg-black text-white relative border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content Block */}
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-normal uppercase tracking-wider mb-6 text-gray-400">
                GLOBAL ACCESS
              </h2>
              <p className="text-base md:text-lg text-gray-400 mb-8 leading-relaxed max-w-md">
                Lorem ipsum dolor sit amet consectetur. Cras odio neque nisl pellentesque. Justo hendrerit tincidunt nunc et in at nisi.
              </p>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity border-2 border-white"
              >
                Contact Us
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>

            {/* Right Content Block */}
            <div className="relative z-10">
              <h3 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
                <span className="text-teal-700">Global</span>
                <span className="text-white"> Markets</span>
              </h3>
              <p className="text-lg md:text-xl text-white">
                Secured By Canton
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - White Background */}
      <div className="bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content Block - Statistics */}
            <div className="space-y-16">
              <div>
                <div className="text-6xl md:text-7xl lg:text-8xl font-bold text-teal-700 mb-3">
                  $10M
                </div>
                <p className="text-lg md:text-xl text-gray-900">
                  Stock on Chain
                </p>
              </div>
              <div>
                <div className="text-6xl md:text-7xl lg:text-8xl font-bold text-teal-700 mb-3">
                  5+
                </div>
                <p className="text-lg md:text-xl text-gray-900">
                  Numbers of Assets Supported
                </p>
              </div>
            </div>

            {/* Right Content Block - Pattern */}
            <div className="relative h-full min-h-[400px]">
              <div 
                className="absolute inset-0 opacity-30"
                style={{
                  background: `repeating-linear-gradient(
                    45deg,
                    transparent,
                    transparent 40px,
                    #14b8a6 40px,
                    #14b8a6 80px
                  )`,
                  transform: 'translate(-10%, -10%) rotate(45deg)'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

