'use client';

import { useState } from 'react';

export default function UnitingInnovation() {
  const [activeTab, setActiveTab] = useState('Stock on Chain');

  const tabs = ['Stock on Chain', 'Bonds on Chain', 'ETDs on Chain'];

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

             <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-light text-gray-400 uppercase tracking-wider text-center animate-fade-in">
            UNITING INNOVATION
          </h3>
        </div>
      </div>

        {/* Top Content Block - Three Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Left Column - Navigation/Categories */}
          <div className="space-y-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`w-full text-left flex items-center gap-3 transition-colors ${
                  activeTab === tab
                    ? 'text-gray-900 font-bold'
                    : 'text-gray-500 font-normal'
                }`}
              >
                <div
                  className={`w-3 h-3 flex-shrink-0 ${
                    activeTab === tab ? 'bg-gray-900' : 'bg-transparent border border-gray-300'
                  }`}
                />
                <span className="text-lg">{tab}</span>
              </button>
            ))}
          </div>

          {/* Middle Column - Descriptive Text */}
          <div className="flex items-center">
            <p className="text-gray-900 text-base leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Cras odio neque nisl pellentesque. Justo hendrerit tincidunt nunc et in at nisi.
            </p>
          </div>

          {/* Right Column - Feature/Benefit */}
          <div className="flex flex-col justify-center space-y-4">
            {tabs.map((tab) => (
              <div key={tab} className="text-gray-900 text-base">
                Useable as collateral
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Content Block - Grid with Bitcoin Elements */}
        <div className="relative bg-teal-50 rounded-2xl p-12 md:p-16 overflow-hidden">
          {/* Grid Pattern Background */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(to right, #6b7280 1px, transparent 1px),
                linear-gradient(to bottom, #6b7280 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }}
          />

          {/* Bitcoin Elements */}
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
            {/* Left Bitcoin Element */}
            <div className="flex flex-col items-center animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="relative">
                {/* Connection Points */}
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 flex items-center justify-center">
                  <span className="text-teal-700 text-xl font-bold">+</span>
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 flex items-center justify-center">
                  <span className="text-teal-700 text-xl font-bold">+</span>
                </div>
                <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 flex items-center justify-center">
                  <span className="text-teal-700 text-xl font-bold">+</span>
                </div>
                <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 flex items-center justify-center">
                  <span className="text-teal-700 text-xl font-bold">+</span>
                </div>
                
                {/* White Square with Bitcoin Logo */}
                <div className="w-32 h-32 bg-white rounded-lg shadow-lg flex items-center justify-center">
                  <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-4xl font-bold">B</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-900 mt-4 text-sm">Volume Locked</p>
              <p className="text-gray-900 mt-1 text-2xl font-bold">$10M</p>
            </div>

            {/* Middle Bitcoin Element - Slightly Lower */}
            <div className="flex flex-col items-center mt-8 md:mt-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="relative">
                {/* Connection Points */}
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 flex items-center justify-center">
                  <span className="text-teal-700 text-xl font-bold">+</span>
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 flex items-center justify-center">
                  <span className="text-teal-700 text-xl font-bold">+</span>
                </div>
                <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 flex items-center justify-center">
                  <span className="text-teal-700 text-xl font-bold">+</span>
                </div>
                <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 flex items-center justify-center">
                  <span className="text-teal-700 text-xl font-bold">+</span>
                </div>
                
                {/* White Square with Bitcoin Logo */}
                <div className="w-32 h-32 bg-white rounded-lg shadow-lg flex items-center justify-center">
                  <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-4xl font-bold">B</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-900 mt-4 text-sm">Volume Locked</p>
              <p className="text-gray-900 mt-1 text-2xl font-bold">$10M</p>
            </div>

            {/* Right Bitcoin Element */}
            <div className="flex flex-col items-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="relative">
                {/* Connection Points */}
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 flex items-center justify-center">
                  <span className="text-teal-700 text-xl font-bold">+</span>
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 flex items-center justify-center">
                  <span className="text-teal-700 text-xl font-bold">+</span>
                </div>
                <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 flex items-center justify-center">
                  <span className="text-teal-700 text-xl font-bold">+</span>
                </div>
                <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 flex items-center justify-center">
                  <span className="text-teal-700 text-xl font-bold">+</span>
                </div>
                
                {/* White Square with Bitcoin Logo */}
                <div className="w-32 h-32 bg-white rounded-lg shadow-lg flex items-center justify-center">
                  <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-4xl font-bold">B</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-900 mt-4 text-sm">Volume Locked</p>
              <p className="text-gray-900 mt-1 text-2xl font-bold">$10M</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

