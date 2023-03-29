import React from "react";
import CustomButton from "../CustomButton";

const MiniContactUs = () => {
  return (
    <div className="p-16 my-5 flex w-[100%] justify-between bg-slate-200">
      <div className="sm:w-[30%]">
        <h2 className="text-primary text-[25px] font-bold sm:text-[35px]">
          Contact Us
        </h2>
      </div>
      <div data-aos="fade-right">
        <CustomButton text="Contact Us" />
      </div>
    </div>
  );
};

export default MiniContactUs;
