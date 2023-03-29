import { Icon } from "@iconify/react";
import React from "react";

const HowDoWeDeliver = () => {
  return (
    <div className="mt-[25px] mb-[25px]">
      <div className="flex justify-center ">
        <div className="flex-col items-center">
          <div className=" w-[100%] flex items-center justify-center ">
            <div className="h-1 w-20  bg-[#7e22ce] sm:w-32"></div>
          </div>
          <h1 className="text-[#0f59e0b66] text-[25px] font-bold sm:text-[35px] text-center">
            How Do We Deliver
          </h1>

          <div className="flex justify-center items-center mt-6 p-[10px] ">
            <div className="flex flex-col md:flex-row w-[100%] items-start justify-around">
              <div className="w-[100%] md:w-[50%] mb-5 md:mx-12">
                <div data-aos="fade-left">
                  <p>
                    <span className="text-primary"> EMC </span> provides
                    professional ISO consulting services for all grades of
                    organizations of any industry. We will carefully take care
                    of preparing your organization for certification. Years of
                    experience working with quality both internally and
                    consulting our clients, helped us create an efficient
                    process of getting ISO certificates fast, and
                    cost-efficiently.
                  </p>
                </div>
              </div>{" "}
              <div className="w-[100%] md:w-[30%] flex flex-col justify-between ">
                <div data-aos="fade-right">
                  <div className="mb-2 md:mb-4">
                    <Icon
                      icon="icon-park-outline:cycle-movement"
                      color="#7e22ce"
                      width="70"
                      height="70"
                      rotate={1}
                    />
                  </div>
                  <ul className="marker:text-[#7e22ce] -outside list-disc ml-6">
                    <li className="">Capcaity & Competence</li>
                    <li className="">Consultants</li>
                    <li className="">Cross Functional Teams</li>
                    <li className="">Team Delivery</li>
                    <li className="">Neashore/remote delivery/outsourcing</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <img />
            </div>
          </div>
        </div>
      </div>
      <div
        className="object-cover w-full h-[12rem] -mt-24 md:-mt-6"
        style={{
          backgroundPosition: "center top",
          backgroundImage:
            "url('https://sigmatechnology.com/content/themes/sigma/assets/img/services/bg.svg?x22760')"
        }}
      ></div>
    </div>
  );
};

export default HowDoWeDeliver;
