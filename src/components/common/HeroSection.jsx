import React from "react";
import { Box, styled, Typography } from "@mui/material";
import ButtonComponent from "./Button";

const HeroSection = (props) => {
  const { label, subLabel, buttonText, bgImage } = props;

  const StyledBox = styled(Box)(() => ({
    backgroundImage: `url(${bgImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundPosition: "top center",
    objectFit: "cover",
  }));

  return (
    <StyledBox>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          minHeight: "500px",
          maxHeight: "1000px",
        }}
      >
        <Typography variant="h4" sx={{ color: "white" }}>
          {label}
        </Typography>
        <Box
          sx={{
            backgroundColor: "#7e22ce",
            height: "3px",
            width: "10rem",
            marginTop: "1rem",
          }}
        ></Box>
        <Typography
          mb={2}
          variant="h4"
          sx={{ color: "white", marginTop: "1rem" }}
        >
          {subLabel}
        </Typography>
        {buttonText ? (
          <ButtonComponent buttonContent={buttonText} bgColor="#7e22ce" />
        ) : (
          <></>
        )}
      </Box>
    </StyledBox>
  );
};

export default HeroSection;
