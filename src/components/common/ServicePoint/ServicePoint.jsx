import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Divider from "../Divider/Divider";
import classes from "./service.point.module.css";
const ServicePoint = (props) => {
  const { title, description, children, action, lightBlueBackground } = props;
  return (
    <Box
      className={classes.wrapper}
      sx={{
        backgroundColor: lightBlueBackground ? "#ecf6f8" : "#fff",
        padding: lightBlueBackground ? "80px 25px" : "100px 25px 25px 25px",
      }}
    >
      <Grid container rowSpacing={5}>
        <Grid
          item
          xs={12}
          sm={12}
          md={children ? 6 : 12}
          lg={children ? 6 : 12}
        >
          <Typography
            className={classes.heading}
            component="h2"
            color="primary.main"
            mb={2.5}
          >
            {title}
          </Typography>
          <Divider />
          <Typography fontSize={children ? "1rem" : "18px"} mb={1}>
            {description}
          </Typography>
          {action}
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          {children}
        </Grid>
      </Grid>
    </Box>
  );
};

export default ServicePoint;
