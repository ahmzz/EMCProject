import React from "react";
import CustomBox from "../common/CustomBox";
import FoundationIcon from "@mui/icons-material/Foundation";
import { Icon } from "@iconify/react";

const content = [
  {
    heading: "Quality Consulting ( ISO Certification )",
    content: "",
    icon: (
      <Icon
        icon="carbon:cloud-service-management"
        color="#f59e0b"
        width="56"
        height="56"
      />
    ),
    btnText: "See More",
    clickHandler: () => {}
  },
  {
    heading: "Training ( ISO Management Courses )",
    content: "",
    icon: (
      <Icon
        icon="clarity:resource-pool-outline-alerted"
        color="#f59e0b"
        width="56"
        height="56"
      />
    ),
    btnText: "See More",
    clickHandler: () => {}
  },
  {
    heading: "EPR Program Provider",
    content: "",
    icon: (
      <Icon icon="carbon:collaborate" color="#f59e0b" width="56" height="56" />
    ),
    btnText: "See More",
    clickHandler: () => {}
  }
];
const WhatDoWeOffer = () => {
  return (
    <div className="mt-[75px] mb-[75px]">
      <div className="flex justify-center ">
        <div className="flex-col items-center">
          <div className=" w-[100%] flex items-center justify-center ">
            <div className="h-1 w-20  bg-[#7e22ce] sm:w-32"></div>
          </div>
          <h1 className="text-[#0f59e0b66] text-[25px] font-bold sm:text-[35px] text-center">
            What Do We Offer ?
          </h1>

          <div className="flex justify-center items-center">
            <div className="flex flex-col md:flex-row w-[80%] md:w-[80vw] items-center justify-between ">
              {content.map((item, index) => (
                <div data-aos={`${index === 1 ? "fade-right" : "fade-left"}`}>
                  <CustomBox {...item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatDoWeOffer;
