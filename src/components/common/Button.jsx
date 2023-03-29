import React from "react";
import { Button } from "@mui/material";
const ButtonComponent = (props) => {
  const { buttonContent, bgColor } = props;
  return (
    <div>
      <Button
        variant="contained"
        sx={{
          backgroundColor: `${bgColor ? bgColor : "#cd1c69"}`,
          color: "#fff",
          fontSize: "16px",
          textTransform:"capitalize",
          padding:"10px 30px"
        }}
        size="large"
      >
        {buttonContent}
      </Button>
    </div>
  );
};

export default ButtonComponent;
