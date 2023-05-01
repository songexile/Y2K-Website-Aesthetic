import React, { useState, useEffect } from "react";

function RightPage({
  currentModelIndex,
  setCurrentModelIndex,
  totalModels,
  carDescription,
}) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setDisplayedText(carDescription.substring(0, index));
      index++;
      if (index > carDescription.length) {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, [carDescription]);
  return (
    <div className="w-1/2 flex flex-col ">
      <div className="h-1/6 bg-gradient-to-t from-[#cee3e5] to-[#b4cdcf] mx-2 mt-2 rounded-md y2k-shadow4 inner-stroke flex justify-evenly flex-col sm:flex-row items-center">
        {/* Left Arrow */}
        <div
          className={
            currentModelIndex === 0
              ? "text-gray-400 xp-button-container"
              : "text-black xp-button-container"
          }
        >
          <button
            className=""
            disabled={currentModelIndex === 0}
            onClick={() => setCurrentModelIndex(currentModelIndex - 1)}
          >
            Back
          </button>
        </div>
        {currentModelIndex + 1}/{totalModels}
        <div
          className={`xp-button-container ${
            currentModelIndex === totalModels - 1
              ? "text-gray-400"
              : "text-black"
          }`}
        >
          <button
            className=""
            disabled={currentModelIndex === totalModels - 1}
            onClick={() => setCurrentModelIndex(currentModelIndex + 1)}
          >
            Forward
          </button>
        </div>
      </div>

      <div className="h-5/6 sm:h-2/5 md:h-2/6 bg-gradient-to-t from-[#000000] to-[#000000] text-white mx-2 mt-2 rounded-md y2k-shadow4 inner-stroke">
        <div class="window-body">
          <div class="title-bar">
            <div class="title-bar-text">About</div>
            <div class="title-bar-controls"></div>
          </div>
          <div className="flex mx-4 mt-2 justify-center items-center  text-center  ">
            {carDescription}
          </div>
        </div>
      </div>
      <div className="hidden sm:flex h-3/6 mx-2 mt-2 ">
        <div className="h-full w-full flex flex-col">
          <div className="h-full bg-gradient-to-t from-[#cee3e5] to-[#b4cdcf] mb- rounded-md y2k-shadow4 inner-stroke"></div>
          <div className="h-4/6 bg-gradient-to-t from-[#8ea7aa] to-[#53686b] y2k-shadow3 rounded-md mt-2 mb-1 inner-stroke flex items-center justify-center">
            <a href="https://sketchfab.com/wersaus33">
              <div className=" bg-[#8ba9b0]  y2k-shadow4 ">
                <button className="p-4">
                  Made with the help of models from Wersaus33
                </button>
              </div>
            </a>
          </div>
        </div>
        <div className="w-1/2 h-full bg-gradient-to-t from-[#4e6365] to-[#b5d0d2] ml-2 rounded-md flex flex-col items-center inner-stroke">
          <div className="h-6 mt-2 w-5/6 bg-[#8ba9b0] rounded-md y2k-shadow4 border-y2k flex items-center justify-center">
            <div className="">Car Auction</div>
          </div>
          <div className="h-4 mt-2 w-1/2 bg-[#8ba9b0] rounded-md y2k-shadow4 border-y2k"></div>
          <div className="h-1/3 w-2/3 mt-4 bg-[#818989] y2k-shadow2 rounded-md "></div>
          <div className="h-1/6 w-2/3 mt-4 bg-[#818989] y2k-shadow2 rounded-md "></div>
          <div className="h-1/6 w-2/3 mt-4 bg-[#818989] y2k-shadow2 rounded-md "></div>
        </div>
      </div>
    </div>
  );
}

export default RightPage;
