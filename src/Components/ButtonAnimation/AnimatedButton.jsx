import React from "react";

const AnimatedButton = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="relative p-px overflow-hidden rounded-lg"
    >
      {/* glowing animated border */}
      <span className="absolute w-[160%] h-7 top-[33%] -left-[33%] bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 animate-[spin_5s_linear_infinite]"></span>

      {/* inner */}
      <p className="relative block px-6 py-2 bg-yellow-500 text-black font-semibold hover:scale-105 transition">
        {text}
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          {" "}
          →
        </span>
      </p>
    </button>
  );
};

export default AnimatedButton;
