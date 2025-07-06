import React from "react";

const Lines = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-16 m-4 md:m-6 ">
      {[...Array(2)].map((_, idx) => (
        <div key={idx} className="flex items-center gap-2 w-full ">
          <div className="border-t-2 border-red-700 w-6 shrink-0 "></div>
          <div className="border-t-2 border-gray-300 flex-grow "></div>
        </div>
      ))}
    </div>
  );
};

export default Lines;
