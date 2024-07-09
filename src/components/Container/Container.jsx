import React from "react";

function Container({ children }) {
  return (
    <div className="flex  flex-col min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="flex-grow justify-center items-center flex  container mx-auto">{children }</div>
    </div>
  );
}

export default Container;
