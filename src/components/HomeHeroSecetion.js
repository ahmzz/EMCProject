import React from "react";
import { Box, styled, Typography } from "@mui/material";
import myBackgroundImage from "../assets/Home-BG.jpg";
import { RellaxWrapper } from "react-rellax-wrapper";
import AboutSection from "./AboutSection";
import CustomButton from "./common/CustomButton";
import Carousel from "react-material-ui-carousel";
import image_1 from "../assets/Home-BG.jpg";
import image_4 from "../assets/Home-BG1.jpg";
import image_2 from "../assets/Home-BG2.jpg";
import image_3 from "../assets/Home-BG3.jpg";
import image_5 from "../assets/Home-BG4.jpg";

const SLIDER_IMAGES = [image_2, image_3, image_4];
const HomeHeroSecetion = ({ title, titleTwo }) => {
  const StyledBox = styled(Box)(() => ({
    // backgroundImage: `url(${myBackgroundImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    minHeight: "700px",
    display: "flex",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    backgroundPosition: "center",
    objectFit: "cover",
    "@media screen and (max-width:768px)": {
      minHeight: "400px"
    }
  }));

  return (
    <div>
      <Box>
        <div>
          <StyledBox>
            <div className="w-full relative h-[850px] md:h-[900px] ">
              <Carousel animation="slide" navButtonsAlwaysVisible>
                {SLIDER_IMAGES.map((item, i) => (
                  <div className="w-full h-[100vh]">
                    <img src={item} className="w-full h-full" />
                  </div>
                ))}
              </Carousel>
              <Box
                className="content"
                sx={{
                  position: "relative",
                  bottom: "4em",
                  // marginTop: "-6rem"
                  zIndex: 15
                }}
              >
                <AboutSection />
              </Box>
            </div>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                position: "absolute",
                top: 0,
                height: "700px",
                width: "80%",
                zIndex: 10,
                "@media screen and (max-width:768px)": {
                  height: "400px"
                }
              }}
            >
              <Box
                sx={{
                  padding: "8px",
                  paddingLeft: "1rem",
                  borderRadius: "10px",
                  // width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "rgba(0,0,0,0.8)",
                  "@media screen and (max-width:768px)": {
                    paddingLeft: "0"
                  }
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    color: "white",
                    fontWeight: "bold",
                    textAlign: "center",
                    fontFamily: "Cairo",
                    borderBottom: "1px solid white",
                    padding: "12px",
                    "@media screen and (max-width:768px)": {
                      width: "300px",
                      fontSize: "26px"
                    }
                  }}
                >
                  {title}
                </Typography>
                <Typography
                  variant="h3"
                  sx={{
                    fontStyle:"italic",
                    color: "white",
                    width: "40rem",
                    fontFamily: "Cairo",
                    fontWeight: "semibold",
                    textAlign: "center",
                    marginBottom: "1rem",
                    "@media screen and (max-width:768px)": {
                      width: "300px",
                      fontSize: "26px"
                    }
                  }}
                  className={"link"}
                >
                  {titleTwo}
                </Typography>

                <CustomButton text={"Contact Us"} />
              </Box>
            </Box>
          </StyledBox>
        </div>
      </Box>
    </div>
  );
};

export default HomeHeroSecetion;
