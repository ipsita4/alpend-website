const features = [
  {
    title: 'Innovative Design',
    description: 'Cutting-edge design solutions that stand out from the crowd and engage your audience.',
    icon: '✨',
  },
  {
    title: 'Fast Performance',
    description: 'Lightning-fast load times and smooth interactions for the best user experience.',
    icon: '⚡',
  },
  {
    title: 'Scalable Solutions',
    description: 'Built to grow with your business, from startup to enterprise scale.',
    icon: '🚀',
  },
  {
    title: 'Modern Technology',
    description: 'Using the latest technologies and best practices for reliable, maintainable code.',
    icon: '💻',
  },
  {
    title: 'Expert Support',
    description: 'Dedicated support team ready to help you succeed every step of the way.',
    icon: '🎯',
  },
  {
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security and reliability you can trust with your business.',
    icon: '🔒',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to build, launch, and scale your business
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-all transform hover:scale-105 border border-gray-200"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

