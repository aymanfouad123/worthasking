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

  const topSupporters = [
    {
      id: 1,
      name: "Alex Rodriguez",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      totalContributed: 250,
      questionsAsked: 8,
      joinedDate: "6 months ago",
    },
    {
      id: 2,
      name: "Emma Thompson",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      totalContributed: 180,
      questionsAsked: 5,
      joinedDate: "3 months ago",
    },
    {
      id: 3,
      name: "David Kim",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      totalContributed: 150,
      questionsAsked: 12,
      joinedDate: "8 months ago",
    },
    {
      id: 4,
      name: "Sarah Johnson",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      totalContributed: 125,
      questionsAsked: 3,
      joinedDate: "2 months ago",
    },
    {
      id: 5,
      name: "Mike Wilson",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      totalContributed: 95,
      questionsAsked: 7,
      joinedDate: "4 months ago",
    },
  ];

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
        {/* Main grid */}
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
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border">
            <h3 className="font-semibold text-gray-900 mb-4">Creator Stats</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Total Supporters</span>
                <span className="font-semibold text-gray-900">
                  {creator.memberCount}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Questions Answered</span>
                <span className="font-semibold text-gray-900">
                  {creator.postCount}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Response Rate</span>
                <span className="font-semibold text-green-600">95%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Avg Response Time</span>
                <span className="font-semibold text-gray-900">2 days</span>
              </div>
            </div>
          </div>
          {/* Top Supporters */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border">
            <h3 className="font-semibold text-gray-900 mb-4">Top Supporters</h3>
            <div className="space-y-3">
              {topSupporters
                .sort((a, b) => b.totalContributed - a.totalContributed)
                .slice(0, 3)
                .map((supporter, index) => (
                  <div
                    key={supporter.id}
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition"
                  >
                    <div className="relative">
                      <img
                        src={supporter.avatar}
                        alt={supporter.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      {/* Rank badge */}
                      <div className="absolute -top-1 -right-1 w-5 h-5 bg-worthgreen text-white text-xs rounded-full flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-900 truncate">
                          {supporter.name}
                        </span>
                        <span className="text-sm font-bold text-worthgreen">
                          ${supporter.totalContributed}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <span>{supporter.questionsAsked} questions</span>
                        <span>•</span>
                        <span>{supporter.joinedDate}</span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <button className="w-full text-sm text-worthgreen font-medium hover:text-worthgreen-dark transition">
                View All Supporters
              </button>
            </div>
          </div>
          {/* Question Queue */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border">
            <h3 className="font-semibold text-gray-900 mb-4">Question Queue</h3>
            <div className="space-y-4">
              {recentQuestions.map((question) => (
                <div
                  key={question.id}
                  className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-medium text-gray-900 truncate">
                        {question.asker}
                      </span>
                      <span className="text-xs bg-worthgreen text-white px-2 py-0.5 rounded-full">
                        ${question.tipAmount}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {question.question}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      {question.isAnswered ? (
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                          Answered
                        </span>
                      ) : (
                        <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                          Pending
                        </span>
                      )}
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

/*
Basic layout 
return (
  <div className="bg-gray-50 min-h-full">
    { ...cover and profile info... }
    <div className="max-w-6xl mx-auto p-8 grid md:grid-cols-3 gap-8">
      { Main column }
      <div className="md:col-span-2 space-y-8">
        { Ask Question Form }
        { Recent Answers }
      </div>
      { Sidebar }
      <div className="space-y-6">
        { Creator Stats }
        { Question Queue }
        { Support This Creator }
      </div>
    </div>
  </div>
);
*/
