import React from "react";

const CustomButton = ({ clickHandler, text, txtSize = "2xl" }) => {
  return (
    <div
      onClick={clickHandler}
      className={`text-white font-bold rounded-3xl px-5 py-2 bg-primary text-lg md:text-${txtSize} tracking-wide hover:bg-secondary transition-all duration-200 hover:scale-110 cursor-pointer hover:shadow hover:shadow-slate-500`}
    >
      {text}
    </div>
  );
};

export default CustomButton;
