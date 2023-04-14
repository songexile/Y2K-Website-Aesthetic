import React from "react";
import "../App.css";
import { useState } from "react";
import Header from "./Header";
import LeftPage from "./LeftPage";
import RightPage from "./RightPage";

function Main() {
  return (
    <div>
      {" "}
      <div className="flex justify-center items-center min-h-screen bg-black">
        <div className="window md:w-2/3">
          <div className="title-bar">
            <div className="title-bar-text">세계 액세스</div>
            <div className="title-bar-controls">
              <button aria-label="Minimize"></button>
              <button aria-label="Maximize"></button>
              <button aria-label="Close"></button>
            </div>
          </div>
          <div className="window-body">
            <div className="App font-pixelated-sans flex items-center">
              <div className="mx-auto flex   relative ">
                {/* Pseudo-element for background image */}
                <div className="absolute inset-0  bg-opacity-20 z-0 shadow-xl "></div>
                {/* Pseudo-element for background color */}
                <div className="absolute inset-0 bg-[url('./assets/aura3.png')]   z-0"></div>
                {/* Main Div/Container */}
                <div className="mx-4  relative  rounded-lg">
                  {/* Header/Nav */}
                  <Header />
                  <div className="flex h-[48rem] p-4 ">
                    {/* Left Side */}
                    <LeftPage />
                    {/* Right Side */}
                    <RightPage />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
