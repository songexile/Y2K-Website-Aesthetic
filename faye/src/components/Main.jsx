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
      <div className="window" style={{ width: "66%" }}>
        <div className="title-bar">
          <div className="title-bar-text">세계 액세스</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize"></button>
            <button aria-label="Maximize"></button>
            <button aria-label="Close"></button>
          </div>
        </div>
        <div className="window-body">
          <div className="App font-pixelated-sans">
            <div className="mx-auto flex items-center justify-center  relative ">
              {/* Pseudo-element for background image */}
              <div className="absolute inset-0  bg-opacity-20 z-0 shadow-xl "></div>
              {/* Pseudo-element for background color */}
              <div className="absolute inset-0 bg-[url('./assets/denim.webp')]   z-0"></div>
              {/* Main Div/Container */}
              <div className="mx-4 w-full bg-    relative z-10 rounded-lg">
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
  );
}

export default Main;
