'use client';

import Link from 'next/link';

export default function GlobalAccess() {
  return (
    <section className="relative overflow-hidden">
      {/* Top Section - Black Background */}
      <div className="bg-black text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content Block */}
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider mb-6">
                GLOBAL ACCESS
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. Cras odio neque nisl pellentesque. Justo hendrerit tincidunt nunc et in at nisi.
              </p>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors border border-black"
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
                <span className="text-teal-400">Global</span>
                <span className="text-white"> Markets</span>
              </h3>
              <p className="text-xl text-gray-300">
                Secured By Canton
              </p>
            </div>
          </div>
        </div>

        {/* Diagonal Stripe Pattern - Top Section */}
        <div className="absolute bottom-0 right-0 w-full h-full pointer-events-none overflow-hidden">
          <div 
            className="absolute bottom-0 right-0 w-[150%] h-[150%] opacity-30"
            style={{
              background: `repeating-linear-gradient(
                45deg,
                transparent,
                transparent 60px,
                #14b8a6 60px,
                #14b8a6 120px
              )`,
              transform: 'translate(25%, 25%) rotate(45deg)'
            }}
          />
        </div>
      </div>

      {/* Bottom Section - White Background */}
      <div className="bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content Block - Statistics */}
            <div className="space-y-12">
              <div className="animate-fade-in-up">
                <div className="text-6xl md:text-7xl font-bold text-teal-400 mb-3">
                  $10M
                </div>
                <p className="text-xl text-gray-900">
                  Stock on Chain
                </p>
              </div>
              <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="text-6xl md:text-7xl font-bold text-teal-400 mb-3">
                  5+
                </div>
                <p className="text-xl text-gray-900">
                  Numbers of Assets Supported
                </p>
              </div>
            </div>

            {/* Right Content Block - Pattern Continuation */}
            <div className="relative h-full min-h-[300px]">
              <div 
                className="absolute inset-0 opacity-20"
                style={{
                  background: `repeating-linear-gradient(
                    45deg,
                    transparent,
                    transparent 60px,
                    #14b8a6 60px,
                    #14b8a6 120px
                  )`,
                  transform: 'translate(-15%, -15%) rotate(45deg)'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

