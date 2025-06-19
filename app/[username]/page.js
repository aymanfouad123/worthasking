import React from "react";

const Username = ({ params }) => {
  // Dummy data to create layout
  const creator = {
    displayName: "Amanda Sargent",
    bio: "creating videos n stuff",
    avatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
    coverImage:
      "https://images.pexels.com/photos/46160/field-clouds-sky-earth-46160.jpeg",
    memberCount: 928,
    postCount: 86,
  };

  const recentQuestions = [
    {
      id: 1,
      asker: "John Doe",
      question: "What's your favorite video editing software and why?",
      tipAmount: 10,
      answer:
        "I love using DaVinci Resolve because it's free and incredibly powerful.",
      answeredAt: "2 days ago",
      isAnswered: true,
    },
    {
      id: 2,
      asker: "Sarah Wilson",
      question: "How do you stay motivated when creating content consistently?",
      tipAmount: 15,
      answer: "Setting small daily goals really helps!",
      answeredAt: "1 week ago",
      isAnswered: true,
    },
    {
      id: 3,
      asker: "Mike Chen",
      question: "Can you share your lighting setup for filming?",
      tipAmount: 25,
      answer: null,
      answeredAt: null,
      isAnswered: false,
    },
  ];

  return (
    <div className="bg-gray-50 min-h-full">
      {/* Cover Image */}
      <div className="relative border-y-4 border-worthgreen-dark">
        <img
          src={creator.coverImage}
          alt="Cover"
          className="w-full h-60 object-cover"
        />
      </div>
      {/* Centered Profile Info */}
      <div className="flex flex-col items-center -mt-16 pb-8 bg-worthgreen">
        <img
          src={creator.avatar}
          alt={creator.displayName}
          className="w-32 h-32 object-cover rounded-2xl border-4 border-worthgreen-dark shadow-lg bg-white z-10"
        />
        <h1 className="text-3xl font-bold text-white mt-4">
          {creator.displayName}
        </h1>
        <p className="text-lg text-white mt-1">{creator.bio}</p>
        <div className="flex items-center gap-4 text-sm mt-2">
          <span>{creator.memberCount} members</span>
          <span>•</span>
          <span>{creator.postCount} posts</span>
        </div>
      </div>
      <div className="w-full border-2 border-worthgreen-dark"></div>
      <div className="max-w-6xl mx-auto p-8 grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-8">
          {/* Ask Question Form */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border">
            <h2 className="text-2xl font-medium text-gray-900 mb-6">
              Ask {creator.displayName} a question
            </h2>
            <form className="space-y-6">
              <textarea
                className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-worthgreen focus:border-transparent resize-none text-black"
                rows={4}
                placeholder={`Ask ${creator.displayName} anything...`}
              />
              <button className="w-full bg-worthgreen text-white py-3 px-6 rounded-xl font-medium hover:bg-worthgreen-dark transition">
                Ask Question & Send Tip
              </button>
            </form>
          </div>
          {/* Recent Answers */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border">
            <h3 className="text-xl font-medium text-gray-900 mb-6">
              Recent Answers
            </h3>
            <div className="space-y-6">
              {recentQuestions
                .filter((q) => q.isAnswered)
                .map((question) => (
                  <div
                    key={question.id}
                    className="border-l-4 border-worthgreen pl-6 py-4"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-medium text-gray-900">
                            {question.asker}
                          </span>
                          <span className="text-sm bg-worthgreen text-white px-2 py-1 rounded-full">
                            ${question.tipAmount}
                          </span>
                          <span className="text-sm text-gray-500">
                            {question.answeredAt}
                          </span>
                        </div>
                        <p className="text-gray-800 mb-3 font-medium">
                          {question.question}
                        </p>
                        <div className="bg-gray-50 p-4 rounded-xl">
                          <p className="text-gray-700">{question.answer}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Username;
