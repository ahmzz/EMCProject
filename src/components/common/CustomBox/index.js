import React from "react";
import CustomButton from "../CustomButton";

const CustomBox = ({ icon, content, heading, btnText, clickHandler }) => {
  return (
    <div className="w-[300px] md:w-[25vw] m-2 h-[330px] px-[5%] py-[2%] text-center hover:bg-secondary hover:scale-110 hover:duration-500 hover:shadow-lg flex items-center justify-center rounded-lg border">
      <div className="flex justify-center flex-col items-center ">
        <div className="mb-[20px] ">{icon}</div>
        <h3 className="text-[#0f59e0b66] mb-[8px] text-[22px] font-[600] leading-5">
          {heading}
        </h3>
        <p className="font-semibold leading-6 text-[17px]">{content}</p>

        <div className="w-[120px] h-[50px] mt-[20px]">
          <CustomButton
            text={btnText}
            clickHandler={clickHandler}
            txtSize={"lg"}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomBox;
