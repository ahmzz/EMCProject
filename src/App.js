import "./App.css";
import { Routes, Route, Router } from "react-router-dom";
import { createRoutes, routes } from "./utils/routes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoadingPage from "./pages/Loading";
import IsoServices from "./components/IsoCertification/IsoServices";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [appLoad, setAppLoad] = useState(false);

  useEffect(() => {
    AOS.init();
    setTimeout(() => {
      setAppLoad(true);
    }, 3000);
  }, []);

  if (!appLoad) {
    return <LoadingPage />;
  }

  return (
    <>
      <Navbar />
      <Routes>{createRoutes(routes)}</Routes>
      <Footer />
    </>
  );
}

export default App;
