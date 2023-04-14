import React from "react";

function RightPage() {
  return (
    <div className="w-1/2 flex flex-col ">
      <div className="h-1/6 bg-gradient-to-t from-[#cee3e5] to-[#b4cdcf] mx-2 mt-2 rounded-md y2k-shadow4 inner-stroke flex justify-evenly items-center">
        {/* Left Arrow */}
        <div className="xp-button-container text-gray-400">
          <button className="" disabled>
            Back
          </button>
        </div>
        1/3
        <div className="xp-button-container ">
          <button className="">Forward</button>
        </div>
      </div>

      <div className="h-2/6 bg-gradient-to-t from-[#000000] to-[#000000] text-white mx-2 mt-2 rounded-md y2k-shadow4 inner-stroke">
        <div class="window-body">
          <div class="title-bar">
            <div class="title-bar-text">About</div>
            <div class="title-bar-controls"></div>
          </div>
          <div className="flex mx-4 mt-2 ">
            Final Fantasy X[a] is a role-playing video game developed and
            published by Square as the tenth main entry in the Final Fantasy
            series. Originally released in 2001 for PlayStation 2.
          </div>
        </div>
      </div>
      <div className="h-3/6 flex mx-2 mt-2 ">
        <div className="h-full w-full flex flex-col">
          <div className="h-full bg-gradient-to-t from-[#cee3e5] to-[#b4cdcf] mb- rounded-md y2k-shadow4 inner-stroke"></div>
          <div className="h-4/6 bg-gradient-to-t from-[#8ea7aa] to-[#53686b] y2k-shadow3 rounded-md mt-2 mb-1 inner-stroke"></div>
        </div>
        <div className="w-1/2 h-full bg-gradient-to-t from-[#4e6365] to-[#b5d0d2] ml-2 rounded-md flex flex-col items-center inner-stroke">
          <div className="h-6 mt-2 w-5/6 bg-[#8ba9b0] rounded-md y2k-shadow4 border-y2k"></div>
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
