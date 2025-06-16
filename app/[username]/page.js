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

  return (
    <div className="bg-gray-50 min-h-full">
      {/* Cover Image */}
      <div className="relative">
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
    </div>
  );
};

export default Username;
