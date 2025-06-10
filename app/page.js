import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-worthgreen-muted mx-7 rounded-2xl">
        <div className="py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-medium text-worthgreen-dark mb-4">
              Thoughtful questions made simple.
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-4xl mx-auto">
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

        {/* Three Steps Bento Section */}
        <div className="px-6 pb-20">
          <div className="max-w-6xl mx-auto">
            <div className="bg-worthgreen rounded-3xl p-12 shadow-lg">
              <h2 className="text-3xl font-medium text-white text-center mb-12">
                How it works
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Step 1: Find Creator */}
                <div className="bg-white rounded-2xl p-8 text-center">
                  <div className="text-2xl font-bold text-worthgreen-dark mb-2">
                    01
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Find your creator
                  </h3>
                </div>

                {/* Step 2: Integrate Payment */}
                <div className="bg-white rounded-2xl p-8 text-center">
                  <div className="text-2xl font-bold text-worthgreen-dark mb-2">
                    02
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Secure payment
                  </h3>
                </div>

                {/* Step 3: Ask Question */}
                <div className="bg-white rounded-2xl p-8 text-center">
                  <div className="text-2xl font-bold text-worthgreen-dark mb-2">
                    03
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Ask your question
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
