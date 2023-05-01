import React from "react";
import "../App.css";
import { useState } from "react";
import Header from "./Header";
import LeftPage from "./LeftPage";
import RightPage from "./RightPage";
import carModelsData from "../data/cars.json";

function Main() {
  const carModels = carModelsData.map((carModel) => {
    return {
      name: carModel.name,
      description: carModel.description,
      modelUrl: carModel.modelUrl,
      topSpeed: carModel.stats.topSpeed,
      acceleration: carModel.stats.acceleration,
      handling: carModel.stats.handling,
    };
  });

  const [currentModelIndex, setCurrentModelIndex] = useState(0);

  return (
    <div>
      <div className="flex justify-center items-center min-h-screen bg-blue-950 ">
        <div className="window lg:w-5/6 xl:w-4/5 2xl:w-2/3  ">
          <div className="title-bar">
            <div className="title-bar-text">Car Shop</div>
            <div className="title-bar-controls">
              <button aria-label="Minimize"></button>
              <button aria-label="Maximize"></button>
              <button aria-label="Close"></button>
            </div>
          </div>
          <div className="window-body">
            <div className="App font-pixelated-sans flex items-center">
              <div className="mx-auto flex relative bg-[url('src/assets/aura3.png')]">
                {/* Pseudo-element for background image */}
                <div className="absolute inset-0 bg-opacity-20 z-0 shadow-xl"></div>
                {/* Pseudo-element for background color */}
                <div className="absolute inset-0 bg-[url('/assets/aura3.png')] z-0"></div>
                {/* Main Div/Container */}
                <div className="mx-4 relative rounded-lg">
                  {/* Header/Nav */}
                  <Header />
                  <div className="flex h-[48rem] p-4">
                    {/* Left Side */}
                    <LeftPage
                      modelPath={carModels[currentModelIndex].modelUrl}
                      carStats={carModels[currentModelIndex]}
                    />
                    {/* Right Side */}
                    <RightPage
                      currentModelIndex={currentModelIndex}
                      setCurrentModelIndex={setCurrentModelIndex}
                      totalModels={carModels.length}
                      carDescription={carModels[currentModelIndex].description}
                    />
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
