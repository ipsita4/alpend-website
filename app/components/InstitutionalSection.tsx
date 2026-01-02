'use client';

import { useEffect, useRef, useState } from 'react';

export default function InstitutionalSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            entry.target.classList.add('animate-fade-in-up');
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="relative bg-black min-h-screen flex flex-col">
      {/* Backed By Banner */}
      <div className="bg-gray-100 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-gray-600 text-sm">
            <span>Backed By</span>
            <div className="w-8 h-8 bg-gray-400 rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">DA</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="relative bg-teal-100 rounded-3xl p-12 md:p-16 lg:p-20 overflow-hidden">
            {/* Animated Wave Pattern Background */}
            <div className="absolute bottom-0 left-0 right-0 h-1/2 opacity-30 overflow-hidden">
              <svg
                className="w-full h-full animate-wave"
                viewBox="0 0 1200 200"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ animationDelay: '0s' }}
              >
                <path
                  d="M0,100 Q300,50 600,100 T1200,100 L1200,200 L0,200 Z"
                  fill="none"
                  stroke="#6b7280"
                  strokeWidth="2"
                />
              </svg>
              <svg
                className="w-full h-full animate-wave"
                viewBox="0 0 1200 200"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ animationDelay: '0.5s' }}
              >
                <path
                  d="M0,120 Q300,70 600,120 T1200,120 L1200,200 L0,200 Z"
                  fill="none"
                  stroke="#6b7280"
                  strokeWidth="2"
                />
              </svg>
              <svg
                className="w-full h-full animate-wave"
                viewBox="0 0 1200 200"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ animationDelay: '1s' }}
              >
                <path
                  d="M0,140 Q300,90 600,140 T1200,140 L1200,200 L0,200 Z"
                  fill="none"
                  stroke="#6b7280"
                  strokeWidth="2"
                />
              </svg>
              <svg
                className="w-full h-full animate-wave"
                viewBox="0 0 1200 200"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ animationDelay: '1.5s' }}
              >
                <path
                  d="M0,160 Q300,110 600,160 T1200,160 L1200,200 L0,200 Z"
                  fill="none"
                  stroke="#6b7280"
                  strokeWidth="2"
                />
              </svg>
            </div>

            {/* Main Text Content */}
            <div ref={textRef} className={`relative z-10 ${hasAnimated ? 'opacity-100 animate-fade-in-up' : 'opacity-0'}`}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-teal-800 leading-tight text-center max-w-5xl mx-auto">
                <span className="block">Alpend Enables Institutions To Borrow,</span>
                <span className="block">Lend, And Deploy Regulated Assets</span>
                <span className="block">On-Chain With Privacy,</span>
                <span className="block">Compliance, And Deterministic Settlement.</span>
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Next Section Preview */}
      <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-light text-gray-400 uppercase tracking-wider text-center animate-fade-in">
            UNITING INNOVATION
          </h3>
        </div>
      </div>
    </section>
  );
}

