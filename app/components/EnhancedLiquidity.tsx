'use client';

import Link from 'next/link';

export default function EnhancedLiquidity() {
  const features = [
    'Instant, on-chain execution',
    'Powered by institutional capital',
    'Engineered for the future of finance',
  ];

  return (
    <section className="bg-white py-20 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          {/* Left Content Area */}
          <div>
            {/* Subtitle */}
            <p className="text-sm text-gray-400 uppercase tracking-wider mb-4">
              EFFICIENT MARKETS
            </p>

            {/* Main Heading */}
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-teal-700 mb-8 leading-tight">
              <span className="block">Enhanced</span>
              <span className="block">Liquidity</span>
            </h2>

            {/* Call to Action Button */}
            <Link
              href="#contact"
              className="inline-flex items-center gap-3 bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors border border-black"
            >
              Contact Us
              <div className="w-8 h-8 bg-teal-700 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </Link>
          </div>

          {/* Right Content Area */}
          <div className="flex flex-col justify-center">
            {/* Main Description */}
            <p className="text-lg md:text-xl text-gray-900 mb-8 leading-relaxed">
              Backed by institutional market makers, on-chain assets now trade with the speed, depth, and efficiency once reserved for Wall Street.
            </p>

            {/* Feature List */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index}>
                  <p className="text-lg text-gray-900">
                    {feature}
                  </p>
                  {index < features.length - 1 && (
                    <div className="mt-4 border-t border-gray-200" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Decorative Section - Wave Pattern */}
        <div className="relative h-64 md:h-80 lg:h-96 mt-20">
          {/* Wave Pattern Background */}
          <div className="absolute inset-0">
            <svg
              className="w-full h-full"
              viewBox="0 0 1200 400"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Multiple wave layers */}
              {Array.from({ length: 12 }, (_, i) => {
                const baseY = 200 + i * 15;
                const amplitude = 20 + i * 3;
                const frequency = 0.01;
                const points = Array.from({ length: 1200 }, (_, x) => {
                  const waveY = baseY + Math.sin(x * frequency + i * 0.3) * amplitude;
                  return `${x},${waveY}`;
                });
                return (
                  <path
                    key={i}
                    d={`M ${points.join(' L ')}`}
                    fill="none"
                    stroke="#a7f3d0"
                    strokeWidth="2"
                    opacity={0.4 - i * 0.02}
                  />
                );
              })}
            </svg>
          </div>

          {/* Rectangular Blocks */}
          <div className="absolute inset-0">
            {/* Larger block on the left */}
            <div 
              className="absolute left-8 bottom-16 w-32 h-24 bg-teal-200 opacity-60"
              style={{ transform: 'rotate(-5deg)' }}
            />
            {/* Smaller block on the right */}
            <div 
              className="absolute right-16 bottom-24 w-24 h-16 bg-teal-200 opacity-60"
              style={{ transform: 'rotate(8deg)' }}
            />
            {/* Additional small block */}
            <div 
              className="absolute right-1/3 bottom-32 w-20 h-14 bg-teal-200 opacity-50"
              style={{ transform: 'rotate(-3deg)' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

