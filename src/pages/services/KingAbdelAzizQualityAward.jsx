import React from "react";
import { Grid } from "@mui/material";
import ServicePoint from "../../components/common/ServicePoint/ServicePoint";
import { SERVICES } from "./data";
import QualityAward from "../../components/HeroSection/QualityAward";
import QualityManagement from "../../components/HeroSection/QualityManagement";

const {
  ABOUT_THE_AWARD,
  WHAT_WE_OFFER,
  EFQM,
  PROMOTE_EASY_PRACTICES,
  EFQM_PRINCIPLES,
} = SERVICES;

const KingAbdelAzizQualityAward = () => {
  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <QualityAward />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <ServicePoint {...ABOUT_THE_AWARD} />
        <ServicePoint {...WHAT_WE_OFFER} />
        <QualityManagement />
        <ServicePoint {...EFQM} />
        <ServicePoint {...PROMOTE_EASY_PRACTICES} />
        <ServicePoint {...EFQM_PRINCIPLES} />
      </Grid>
    </Grid>
  );
};

export default KingAbdelAzizQualityAward;
