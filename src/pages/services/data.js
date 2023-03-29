import { Box } from "@mui/material";
import ButtonComponent from "../../components/common/Button";

export const SERVICES = {
  ABOUT_THE_AWARD: {
    title: "About the Award",
    description:
      "The award is a way to achieve excellence in business by providing an integrated structure to coordinate all performance improvement and management activities by enabling enterprises to assess their current performance and compare it to the performance level in world-class.",
    children: (
      <img
        src={`${process.env.PUBLIC_URL}/assets/about-the-award.png`}
        alt="award"
      />
    ),
  },
  WHAT_WE_OFFER: {
    title: "What do we offer?",
    description:
      "Brains Valley provides consulting services evaluating facilities according to the award criteria, providing improvement and development reports, and a roadmap for excellence journey to help establishments prepare well for participation in the award.",
    action: (
      <Box mt={5}>
        <ButtonComponent buttonContent="Order Now" />
      </Box>
    ),
    children: (
      <img src={`${process.env.PUBLIC_URL}/assets/we-offer.png`} alt="offer" />
    ),
  },
  EFQM: {
    title: "EFQM Application",
    description:
      "EFQM Model is applied to solve the problems of organizations and their quality management, by promoting a culture of setting goals, forming leaders, and defining easy practices to meet challenges to obtain sustainable and high quality organizational excellence.",
  },
  PROMOTE_EASY_PRACTICES: {
    title: "Promote easy practices",
    description:
      "EFQM Model gave Insightful vision and rigorous organizational analysis to drive a safe path of progression and transformation for the ease of movement of the organization amidst changes and emerging threats.",
    lightBlueBackground: true,
  },
  EFQM_PRINCIPLES: {
    title: "EFQM Principles",
    description:
      "EFQM Model contains eight main principles that help to create the culture, beliefs, and common goals that are the core at the heart of organizations with their direct and committed connection to the vision and mission of the institution.",
  },
};

export const HERO_LOWER_SECTIONS = [
  {
    title: "Mission",
    description:

      "We promise we’ll help you implement ISO management systems in a positive way so your key stakeholders understand the benefits of certification for them."

  },
  {
    title: "Our Aim",
    description:

      "Wherever you are on your ISO journey, we’ll help you take the next step. Whether providing training, giving advice or auditing you, it’ll always be clear that we’re here to help you succeed."

  },
  {
    title: "Value",
    description:

      "We promise we’ll be professional at all times: we’ll respond to your queries quickly, we’ll respect confidentiality and we’ll be reliable and trustworthy in all aspects of our behavior."
  }

];
