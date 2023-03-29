import { Route } from "react-router-dom";
import Contact from "../pages/Contact";
import Home from "../pages/home";
import IsoServices from "../components/IsoCertification/IsoServices";
import ProgramProvider from "../pages/services/ProgramProvider";
import IsoCertification from "../components/IsoCertification/IsoCertification";
import JoinUs from "../pages/JoinUs";
import KingAbdelAzizQualityAward from "../pages/services/KingAbdelAzizQualityAward";
export const routes = [
  {
    path: "/",
    element: <Home />,
    name: "Home"
  },
 
  {
    path: "/contact-us",
    element: <Contact />,
    name: "Contact Us"
  },
  {
    path: "/services",
    name: "Services",
    children: [
      {
        path: "/services/iso-certification",
        element: <IsoCertification />,
        name: "ISO Certification"
      },
      {
        path: "/services/management-consultant",
        element: <Home />,
        name: "Training"
      },
      {
        path: "/services/erp-program-provider",
        element: <ProgramProvider />,
        name: "ERP Program Provider"
      }
    ]
  }
];

export const createRoutes = (routes) => {
  let integratedRoutes = routes.map((route, index) => {
    if (route.children) {
      return <Route path={route.path}>{createRoutes(route.children)}</Route>;
    }
    return <Route path={route.path} element={route.element} key={index} />;
  });
  return [integratedRoutes];
};

export default routes;
