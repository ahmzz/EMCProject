import React from "react";
import { Box, styled, Typography, Button } from "@mui/material";
import ButtonComponent from "./Button";
const HeroSection = ({ title, pera, buttonPera, image }) => {
  const StyledBox = styled(Box)(() => ({
    backgroundImage: `url(${image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    minHeight: "500px",
    backgroundPosition: "center",
    objectFit: "cover"
  }));

  return (
    <div>
      <Box>
        <StyledBox>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              height: "400px"
              // objectFit:""
            }}
          >
            <Typography variant="h4" sx={{ color: "white" }}>
              {title}
            </Typography>
            <Box
              sx={{
                backgroundColor: "#7e22ce",
                height: "3px",
                width: "10rem",
                marginTop: "1rem"
              }}
            ></Box>
            <Typography variant="h4" sx={{ color: "white", marginTop: "1rem" }}>
              {pera}
            </Typography>
            {buttonPera ? (
              <ButtonComponent buttonContent={buttonPera} bgColor="#7e22ce" />
            ) : (
              <></>
            )}
          </Box>
        </StyledBox>
      </Box>
    </div>
  );
};

export default HeroSection;
