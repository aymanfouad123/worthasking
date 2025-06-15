import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-worthgreen-muted min-h-full">
      {/* Hero Section */}
      <div className="pt-20 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-medium text-worthgreen-dark mb-8">
            Thoughtful questions made simple.
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            A simple way to ask meaningful questions — and support the people
            who answer them.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col items-center gap-4">
            <button className="bg-white border border-gray-300 text-gray-700 font-medium px-8 py-4 rounded-xl hover:border-worthgreen hover:text-worthgreen transition-all duration-200 shadow-sm">
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
                <div className="w-16 h-16 bg-worthgreen-light rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <div className="text-2xl font-bold text-worthgreen-dark mb-2">
                  01
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Find your creator
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Browse through our community of creators, experts, and thought
                  leaders who are ready to answer your questions.
                </p>
              </div>

              {/* Step 2: Integrate Payment */}
              <div className="bg-white rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-worthgreen-light rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                </div>
                <div className="text-2xl font-bold text-worthgreen-dark mb-2">
                  02
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Secure payment
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Support creators with a tip using our secure Stripe
                  integration. Set your own amount to show appreciation.
                </p>
              </div>

              {/* Step 3: Ask Question */}
              <div className="bg-white rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-worthgreen-light rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="text-2xl font-bold text-worthgreen-dark mb-2">
                  03
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Ask your question
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Submit your thoughtful question and get personalized insights
                  from the creator you chose to support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
