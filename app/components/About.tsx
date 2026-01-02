export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Alpend
            </h2>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              At Alpend, we're passionate about creating exceptional digital experiences
              that make a difference. Our team of experts combines creativity with technical
              excellence to deliver solutions that exceed expectations.
            </p>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              We believe in building long-term partnerships with our clients, understanding
              their unique needs, and delivering results that drive real business value.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Whether you're a startup looking to make your mark or an established business
              ready to transform, we're here to help you succeed.
            </p>
          </div>
          <div className="bg-gray-100 rounded-2xl p-8 lg:p-12">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  1
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Strategy</h3>
                  <p className="text-gray-600">We start by understanding your goals and crafting a strategic plan.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  2
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Design</h3>
                  <p className="text-gray-600">Beautiful, intuitive designs that your users will love.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  3
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Development</h3>
                  <p className="text-gray-600">Robust, scalable solutions built with modern technologies.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  4
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Launch & Support</h3>
                  <p className="text-gray-600">We're with you every step of the way, even after launch.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

