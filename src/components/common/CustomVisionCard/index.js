import React from "react";

const CustomVisionCard = ({ title, description, isOdd }) => {
  return (
    <div
      className={`p-[10px] w-[100%] h-[200px] md:w-[400px] text-white ${
        !isOdd ? "bg-secondary" : "bg-primary"
      }`}
    >
      <h3
        className={`text-[24px] leading-7 font-[700]  border-l-4 pl-3 
          border-[#fff]
         mb-[20px]
        `}
      >
        {title}
      </h3>
      <p className="leading-5 text-justify ">{description}</p>
    </div>
  );
};

export default CustomVisionCard;
