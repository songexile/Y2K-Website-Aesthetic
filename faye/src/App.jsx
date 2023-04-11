import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
<div className="App">
  <div className="mx-auto w-2/3 h-screen flex items-center justify-center y2k-shadow3 relative border-y2k">
    {/* Pseudo-element for background image */}
    <div className="absolute inset-0 bg-[url('./assets/faey2.png')] bg-opacity-20 z-0"></div>
    {/* Pseudo-element for background color */}
    <div className="absolute inset-0 bg-slate-900 bg-opacity-50 z-0"></div>
    {/* Main Div/Container */}
    <div className="mx-4 w-full    relative z-10 rounded-lg">
      {/* Header/Nav */}
      <div className="h-16 w-full flex justify-center items-center y2k-shadow4 bg-gradient-to-r from-[#cee3e5] to-[#b4cdcf] rounded-lg inner-stroke2 opacity-90 "></div>
      <div className="flex h-[52rem] ">
        {/* Left Side */}
        <div className="w-2/3 flex flex-col">
          <div className="h-5/6 bg-blue-300 mx-1 mt-2 rounded-xl y2k-shadow2 flex justify-center items-center ">
            <div className="h-full rounded-2xl  w-full bg-cover y2k-shadow4 bg-[url('./assets/faye.png')] inner-stroke " ></div>
          </div>
          <div className="h-1/6 bg-gradient-to-t from-[#8ea7aa] to-[#53686b] mb-1 mt-4 rounded-2xl y2k-shadow4 mx-1 p-16 inner-stroke"></div>
        </div>
        {/* Right Side */}
        <div className="w-1/2 flex flex-col ">
          <div className="h-1/6 bg-gradient-to-t from-[#cee3e5] to-[#b4cdcf] mx-2 mt-2 rounded-md y2k-shadow4 inner-stroke"></div>
          <div className="h-2/6 bg-gradient-to-t from-[#cee3e5] to-[#b4cdcf] mx-2 mt-2 rounded-md y2k-shadow4 inner-stroke"></div>
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
</div>
</div>

  </div>
</div>

  );
}

export default App;
