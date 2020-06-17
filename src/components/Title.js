import React from "react";

export default ({ title, text }) => {
  return (
    <>
      <div className="mb-6">
        <div className="text-3xl font-bold text-center" style={{}}>
          {title}
        </div>
        <div className="border-b w-8 border-gray-500 mx-auto" />
        <div className="text-center mt-3 text-lg">{text}</div>
      </div>
    </>
  );
};
