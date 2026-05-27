import React from "react";

const AnimatedButton = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="group relative inline-flex items-center justify-center px-6 py-2.5 rounded-xl font-semibold overflow-hidden transition-transform duration-300 hover:scale-[1.05]"
    >
      {/* behind the button */}
      <span
        className="absolute inset-0 rounded-xl 
      bg-linear-to-r from-yellow-500 to-yellow-400 group-hover:from-yellow-400 group-hover:to-yellow-300 transition-all duration-500"
      ></span>

      <span className="absolute blur-sm w-[200%] h-8 top-[-calc((100%-32px)/2)] left-[-calc((100%-32px)/2)] rounded-xl overflow-hidden bg-linear-to-b from-yellow-400 via-blue-500 to-purple-600 animate-[spin_4s_linear_infinite]"></span>

      {/* inner fill (cuts the border) */}
      <span
        className="absolute inset-0.5 rounded-xl 
      bg-linear-to-r from-yellow-500 to-yellow-400 group-hover:from-yellow-400 group-hover:to-yellow-300 transition-all duration-500"
      ></span>

      {/* content */}
      <span className="relative z-10 flex items-center gap-2 text-black">
        {text}
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </span>
    </button>
  );
};

export default AnimatedButton;
