import { Icon } from "@iconify/react";
import React from "react";

const CustomInput = ({ label, sub_label, type, icon }) => {
  return (
    <div>
      {" "}
      <div>
        <label>{label}</label>
      </div>
      <div>
        <label className="text-[#666666] text-[12px]">{sub_label}</label>
      </div>
      <div className="relative group">
        <input
          type={type}
          className="border h-12 bg-gray-100 
          pl-5 pr-12 py-1  rounded-lg w-full focus:outline-none focus:ring-1 focus:ring-primary
         focus:bg-primary
         text-slate-900
         focus:text-white
      "
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 group-active:animate-bounce group-active:duration-1000">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default CustomInput;
