'use client';

import Link from 'next/link';

export default function HighPerformanceGateway() {
  const contentBlocks = [
    {
      title: 'Regulation Proof Structure',
      description: 'Lorem ipsum dolor sit amet consectetur. Cras odio neque nisl pellentesque.',
    },
    {
      title: 'Regulation Proof Structure',
      description: 'Lorem ipsum dolor sit amet consectetur. Cras odio neque nisl pellentesque.',
    },
    {
      title: 'Regulation Proof Structure',
      description: 'Lorem ipsum dolor sit amet consectetur. Cras odio neque nisl pellentesque.',
    },
    {
      title: 'Regulation Proof Structure',
      description: 'Lorem ipsum dolor sit amet consectetur. Cras odio neque nisl pellentesque.',
    },
  ];

  return (
    <section className="bg-white py-20 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Main Content */}
          <div className="relative z-10">
            {/* Header */}
            <p className="text-sm text-gray-400 uppercase tracking-wider mb-4">
              MINT AND REDEEM
            </p>

            {/* Main Title */}
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-teal-400 mb-8 leading-tight">
              <span className="block">High Performance</span>
              <span className="block">Gateway</span>
            </h2>

            {/* Contact Us Button */}
            <Link
              href="#contact"
              className="inline-flex items-center gap-3 bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors border border-gray-200 shadow-sm mb-12"
            >
              Contact Us
              <div className="w-8 h-8 bg-teal-400 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </Link>

            {/* Content Blocks Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contentBlocks.map((block, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  {/* Graphic with Wavy Pattern */}
                  <div className="relative h-32 bg-teal-50 overflow-hidden">
                    <svg
                      className="absolute inset-0 w-full h-full opacity-30"
                      viewBox="0 0 400 200"
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0,100 Q100,50 200,100 T400,100 L400,200 L0,200 Z"
                        fill="none"
                        stroke="#6b7280"
                        strokeWidth="2"
                      />
                      <path
                        d="M0,120 Q100,70 200,120 T400,120 L400,200 L0,200 Z"
                        fill="none"
                        stroke="#6b7280"
                        strokeWidth="2"
                      />
                      <path
                        d="M0,140 Q100,90 200,140 T400,140 L400,200 L0,200 Z"
                        fill="none"
                        stroke="#6b7280"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {block.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {block.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Diagonal Stripe Pattern */}
          <div className="relative hidden lg:block h-full min-h-[600px]">
            <div className="absolute inset-0">
              {/* Diagonal Stripe Pattern - Top Right */}
              <div 
                className="absolute top-0 right-0 w-full h-full"
                style={{
                  background: `repeating-linear-gradient(
                    45deg,
                    #0d9488 0px,
                    #0d9488 40px,
                    #f0fdfa 40px,
                    #f0fdfa 80px
                  )`,
                  clipPath: 'polygon(100% 0, 100% 50%, 0 100%, 0 0)'
                }}
              />
              
              {/* Solid Black - Bottom Left */}
              <div 
                className="absolute bottom-0 left-0 w-full h-full bg-black"
                style={{
                  clipPath: 'polygon(0 100%, 100% 50%, 100% 100%, 0 100%)'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

