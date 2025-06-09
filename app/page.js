import Image from "next/image";

export default function Home() {
  return (
    <main className="main-content">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to WorthAsking</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Connect with creators you love and get your questions answered
        </p>
        <div className="space-x-4">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Find Creators
          </button>
          <button className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </main>
  );
}
