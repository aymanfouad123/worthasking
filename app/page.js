import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-worthgreen-muted min-h-screen">
      {/* Hero Section */}
      <div className="pt-20 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-medium text-worthgreen-dark mb-8 leading-tight">
            Ask something worth asking.
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            A simple way to ask meaningful questions — and support the people
            who answer them.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col items-center gap-4">
            <button className="bg-white border border-gray-300 text-gray-700 font-medium px-8 py-4 rounded-xl hover:bg-worthgreen hover:text-white transition-all duration-200 shadow-sm">
              Get Started
            </button>
            <span className="text-gray-500 text-sm">
              Ask your first question now!
            </span>
          </div>
        </div>
      </div>

      {/* Green Bento Section */}
      <div className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="bg-worthgreen rounded-3xl p-12 shadow-lg">
            <div className="bg-white rounded-2xl p-8">
              <div className="flex justify-between items-start mb-8">
                <div className="w-8 h-8 bg-worthgreen rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">W</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 text-sm">👤</span>
                  </div>
                  <div className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center">
                    <span className="text-gray-600 text-xs">⋯</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-500 mb-1">
                    Active Questions
                  </div>
                  <div className="text-3xl font-bold text-gray-900">
                    12,847
                    <span className="text-lg text-worthgreen ml-2">
                      ↗ 23.4% (+2.8%)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
