import React from "react";
// import Logo from "../../assets/logo.png";
import Logo from "../../assets/croped-logo.jpeg"
import { Box, Divider, styled, Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const contactDetails = [
  {
    label: "0599974174",
    contact: "0599974174"
  }
];
const Footer = () => {
  const StyledBox = styled(Box)(() => ({
    // backgroundImage: `url(${FooterBG})`,
    color: "#fff",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    objectFit: "cover",
    
    // opacity: "0.2",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }));
  return (
    <div className="bg-blue-900 " >
      <StyledBox>
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between pl-0 md:pl-5  w-[100%]">
          <div className="my-8 w-[20%] md:w-[10%]  flex flex-col ">
            <div className="rounded-xl overflow-hidden">
              <img src={Logo} />
            </div>
            <div className="mt-2 flex justify-between items-center">
              <Icon
                icon="ant-design:twitter-square-filled"
                color="white"
                width="60"
                height="60"
                className="cursor-pointer hover:scale-110 hover:duration-500 "
              />
              <Icon
                icon="uiw:linkedin"
                color="white"
                width="46"
                height="46"
                className="cursor-pointer hover:scale-110 hover:duration-500 "
              />
            </div>
          </div>
          <div className="w-[100%] md:w-[20%] flex items-center justify-center">
            <div className="flex flex-col items-center my-8 ">
              <div className="flex items-center mb-4">
                <Icon
                  icon="mdi:envelope"
                  color="#f59e0b"
                  width="22"
                  height="22"
                  className="mr-1 "
                />
                <p className="text-[16px]">Contact Us</p>
              </div>
              <div>
                {contactDetails.map((item) => (
                  <div className="flex items-center text-[16px] font-[400]">
                    <div className="my-1 mx-2">
                      <Icon
                        icon="ic:baseline-local-phone"
                        color="#f59e0b"
                        width={22}
                        height={22}
                      />
                    </div>
                    <a href={`tel:${item.contact}`}>
                      {" "}
                      <span className="text-white text-[14px]">
                        {item.label}
                      </span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-[100%] md:w-[30%]   ">
            <div className="mt-8 mb-8 flex flex-col items-center ">
              <div className="flex items-center mb-4">
                <Icon
                  icon="material-symbols:location-on-rounded"
                  color="#f59e0b"
                  width="22"
                  height="22"
                />
                <p className="text-[16px]">Riyadh</p>
              </div>
              <p className="w-[80%] text-center">
                King Abdulazziz Road Sulmanya , KSA
              </p>
            </div>
          </div>
          <div className="mb-8 mr-5 flex flex-col justify-center items-center  w-[100%] md:w-[40%] my-8">
            <div className="mb-4">
              <p className="text-[16px]">Our Visions</p>
            </div>
            <p className=" text-left font-[400] text-[14px] w-[80%] text-justify">
              Clear Quality understands that it can be difficult to navigate and
              understand the terminology of these standards, let alone come up
              with a concrete plan to achieve certification, but that’s why we
              are here to take the pressure away through offering Quality
              Management Consulting services.
            </p>
          </div>
        </div>
        <div className="border-white opacity-20 border-b-2 mb-5 md:w-[95%] w-[80%]" />
        <div className="flex justify-between w-[80%] md:w-[90%] mb-20 md:justify-start ">
          <div className="">
            <h4 className="text-md font-bold">Quick Links</h4>
            <div className="mb-8 mt-2 w-[100%]">
              <Link to="/">
                <p className="hover:cursor-pointer text-[14px] font-[400] footer-link">
                  Home
                </p>
              </Link>
              <p className="hover:cursor-pointer text-[14px] font-[400] footer-link">
                About Us
              </p>
              <Link to="/contact-us">
                <p className="hover:cursor-pointer text-[14px] font-[400] footer-link">
                  Quick Contact
                </p>
              </Link>
            </div>
          </div>
          <div className="m-0 md:ml-28">
            <h4 className="text-md font-bold">Quick Services</h4>
            <div className="mb-8 mt-2 w-[100%]  ">
              <p className="hover:cursor-pointer text-[14px] font-[400] footer-link footer-link">
                ISO Consulting
              </p>
              <p className="hover:cursor-pointer text-[14px] font-[400] footer-link">
                Software Provider
              </p>{" "}
            </div>
          </div>
        </div>
        <div className="py-2 bg-primary opacity-70 absolute bottom-0 text-white flex flex-col md:flex-row justify-around  items-center w-[100%]">
          <p className="font-[400] text-sm w-full mb-2 md:mb-0 text-center">
            2023 © All Rights to EMConsulting
          </p>
          <p
            onClick={() => window.open("https://codezoone.netlify.app/")}
            className="text-xs bg-slate-900 p-1 px-2 rounded-3xl relative md:absolute right-0 md:right-4 hover:cursor-pointer hover:scale-x-105 hover:duration-300"
          >
            Developed By CodeZone
          </p>
        </div>
      </StyledBox>
    </div>
  );
};

export default Footer;
