import React from "react";
import cropedLogo from "../assets/croped-logo.jpeg";
import "../App.css";

const LoadingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="animate-wave h-16 w-64 flex items-center justify-center">
        <div className="dot dot-1 bg-secondary"></div>
        <div className="dot dot-2 bg-secondary"></div>
        <div className="dot dot-3 bg-secondary"></div>
        <div className="dot dot-4 bg-secondary"></div>
      </div>
      <img src={cropedLogo} alt="Logo" className="mt-10 h-48 w-25 animate-spin-slow	delay-700" />

      <h2 className="italic font-bold text-secondary text-4xl mt-9">Please wait.</h2>
    </div>
  );
};

export default LoadingPage;
