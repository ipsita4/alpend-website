'use client';

export default function TrustedExecution() {
  return (
    <section className="bg-black text-white py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-5xl font-bold text-white leading-tight">
              Trusted Execution
            </h2>
            <p className="text-2xl md:text-5xl text-gray-400 font-light">
              Secure Markets
            </p>
            <p className="text-2xl md:text-5xl text-gray-400 font-light">
              Borderless Finance
            </p>
          </div>

          {/* Right Column */}
          <div className="relative">
            {/* Diamond Dot Pattern */}
            <div className="flex items-center justify-center mb-8">
              <svg
                width="400"
                height="400"
                viewBox="0 0 400 400"
                className="w-full max-w-md"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Diamond pattern with dots */}
                {Array.from({ length: 17 }, (_, row) => {
                  const centerRow = 8;
                  const distanceFromCenter = Math.abs(row - centerRow);
                  const dotsInRow = 17 - distanceFromCenter * 2;
                  const startX = 200 - ((dotsInRow - 1) * 20) / 2;
                  return Array.from({ length: dotsInRow }, (_, col) => {
                    const x = startX + col * 20;
                    const y = 80 + row * 20;
                    // Highlight cluster in upper-middle section (rows 4-7, centered columns)
                    const isHighlighted = row >= 4 && row <= 7 && col >= Math.floor(dotsInRow / 2) - 1 && col <= Math.floor(dotsInRow / 2) + 1;
                    return (
                      <circle
                        key={`${row}-${col}`}
                        cx={x}
                        cy={y}
                        r={isHighlighted ? 5 : 3.5}
                        fill={isHighlighted ? '#14b8a6' : '#ffffff'}
                        opacity={isHighlighted ? 1 : 0.7}
                      />
                    );
                  });
                })}
              </svg>
            </div>

            {/* Text Below Graphic */}
            <div className="space-y-2 text-white">
              <p className="text-base md:text-lg">
                Lorem ipsum dolor sit amet consectetur.
              </p>
              <p className="text-base md:text-lg text-gray-300">
                Cras odio neque nisl pellentesque. Justo hendrerit tincidunt nunc et in at nisi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

