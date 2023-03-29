import React from "react";
import { Box, styled, Parallax, Typography, Button } from "@mui/material";

const AboutSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f59e0b",
        width: "60%",
        borderTopRightRadius: "20px",
        padding: "3rem",
        color: "white",
        marginLeft: "4rem",
        "@media screen and (max-width:768px)": {
          width: "100%",
          marginLeft: "0",
          borderTopRightRadius: "40px"
        }
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontSize: "30px",
          fontWeight: "bold"

        }}
        className="text-slate-900"
      >
        Who We Are
      </Typography>
      <Box
        sx={{
          backgroundColor: "#7e22ce",
          height: "3px",
          width: "10rem",
          marginTop: "1rem",
          marginBottom: "1rem"
        }}
      ></Box>
      {/* <Typography variant="h3">
        About Brains Valley Company
        </Typography> */}
      <Typography sx={{ marginBottom: "1rem" }}>
        Engineering Consulting Management Company was established 1996 to serve
        the needs of private and governmental institution within the Middle East
        Region. Lead by Eng. Maen Marei, graduate of Industrial Engineering from
        California State University we work with companies of all shapes and
        sizes all around the MENA region and beyond enabling them to meet
        various standards and compliance requirements. We assist with ISO
        standards, Health & Safety and Fire Safety. Our friendly ISO consultants
        can assist in developing integrated management systems which will
        deliver valuable business improvement!
      </Typography>
    </Box>
  );
};

export default AboutSection;
