import React from "react";

const Username = ({ params }) => {
  return (
    <div className="text-worthgreen bg-worthgreen-muted h-full">
      {params.username}
    </div>
  );
};

export default Username;
