import { Icon } from "@iconify/react";
import React from "react";
import CustomButton from "../common/CustomButton";
import CustomInput from "../common/CustomInput";

const GetTouchFrom = () => {
  return (
    <div className="mt-[75px] mb-[75px] bg-slate-200 p-5">
      <div data-aos="fade-right">
        <div className="flex justify-center">
          <div className="flex-col items-center w-[80%] md:justify-center md:flex">
            <div className=" w-[100%] flex items-center justify-center ">
              <div className="h-1 w-20  bg-secondary sm:w-32"></div>
            </div>
            <h1 className="text-primary text-[25px] font-bold sm:text-[35px] text-center">
              Get In Touch
            </h1>
            <div className="md:w-2/3 w-full bg-white p-2 md:px-4 md:py-2 rounded-sm">
              <div className="flex-row mt-10 sm:flex md:flex-col">
                <div className="w-full mr-4 mb-6 md:mr-0">
                  <CustomInput
                    label="Name"
                    sub_label=""
                    type="text"
                    icon={
                      <Icon
                        icon="icon-park-outline:edit-name"
                        color="#7e22ce"
                        width="26"
                        height="26"
                      />
                    }
                  />
                </div>
                <div className="w-full mb-6 sm:ml-4 md:ml-0">
                  <CustomInput
                    label="Email"
                    sub_label=""
                    type="text"
                    icon={
                      <Icon
                        icon="material-symbols:mark-email-read-outline"
                        color="#7e22ce"
                        width="26"
                        height="26"
                      />
                    }
                  />
                </div>
              </div>
              <div className="flex-row sm:flex md:flex-col mb-6">
                <CustomInput
                  label="Phone Number"
                  sub_label=""
                  type="text"
                  icon={
                    <Icon
                      icon="material-symbols:mark-email-read-outline"
                      color="#7e22ce"
                      width="26"
                      height="26"
                    />
                  }
                />

                <div className="w-full sm:ml-4 md:ml-0 mt-6">
                  <CustomInput
                    label="Country"
                    sub_label=""
                    type="text"
                    icon={
                      <Icon
                        icon="material-symbols:location-away-outline"
                        color="#7e22ce"
                        width="26"
                        height="26"
                      />
                    }
                  />
                </div>
              </div>

              <div className="mt-4">
                <div>
                  <label>Comments</label>
                </div>
                <div>
                  <label className="text-[#666666] text-[12px]">
                    more details
                  </label>
                </div>
                <textarea
                  className="border  bg-gray-100 
          pl-5 pr-12 py-1  rounded-lg w-full focus:outline-none focus:ring-1 focus:ring-primary
         focus:bg-slate-900
         text-slate-900
         focus:text-white"
                  rows="8"
                ></textarea>
              </div>

              <button className="p-3 bg-primary w-full mt-4 text-white text-bold text-lg rounded-md hover:bg-secondary font-bold hover:duration-200 hover:shadow-slate-500 hover:shadow">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetTouchFrom;
