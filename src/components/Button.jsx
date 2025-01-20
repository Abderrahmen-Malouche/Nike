import React from "react";

function Button({ label, iconURL }) {
  return (
    <button className="flex justify-center items-center text-lg border leading-none font-montserrat bg-coral-red px-7 py-4 rounded-full text-white border-coral-red hover:bg-transparent hover:text-coral-red hover:border-coral-red">
      {label}
      <img
        src={iconURL}
        alt="arrow-right"
        className="ml-2 rounded-full w-5 h-5"
      />
    </button>
  );
}

export default Button;
