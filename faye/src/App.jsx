import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [currentDate, setCurrentDate] = useState(new Date());

const options = { weekday: 'short', year: 'numeric', month: '2-digit', day: '2-digit' };
const formattedDate = currentDate
  .toLocaleDateString(undefined, options)
  .replace(/\s/g, '')
  .replace(/-/g, '/')
  .replace(/,/g, '/');

const weekdayIndex = formattedDate.indexOf('/');
const formattedDateUpperCase = formattedDate.slice(0, weekdayIndex).toUpperCase() + formattedDate.slice(weekdayIndex);





  return (
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
<div className="App">
  <div className="mx-auto flex items-center justify-center  relative ">
    {/* Pseudo-element for background image */}
    <div className="absolute inset-0  bg-opacity-20 z-0 shadow-xl "></div>
    {/* Pseudo-element for background color */}
    <div className="absolute inset-0 bg-[url('./assets/denim.webp')]   z-0"></div>
    {/* Main Div/Container */}
    <div className="mx-4 w-full    relative z-10 rounded-lg">
      {/* Header/Nav */}
      <div className="h-8 mt-4 w-full flex justify-center items-center y2k-shadow4 bg-gradient-to-r from-[#cee3e5] to-[#b4cdcf] rounded-lg inner-stroke2 opacity-90 ">
        <div className="flex justify-end  w-full">
        <h1 className="rounded-2xl bg-gradient-to-r w-32 inner-stroke2 grow-1 y2k-shadow2  ">{formattedDateUpperCase}</h1>

        </div>
      </div>
      <div className="flex h-[48rem] p-4 ">
        {/* Left Side */}
        <div className="w-2/3 flex flex-col">
          <div className="h-5/6 bg-blue-300 mx-1 mt-2 rounded-xl y2k-shadow2 flex justify-center items-center ">
            <div className="h-full rounded-2xl  w-full bg-cover y2k-shadow4 bg-[url('./assets/faye.png')] inner-stroke " ></div>
          </div>
          <div className="h-1/6 bg-gradient-to-t from-[#8ea7aa] to-[#53686b] mb-1 mt-4 rounded-2xl y2k-shadow4 mx-1 p-4 inner-stroke">
    <div className="flex items-center justify-center h-full">
        <div className="w-1/2 flex flex-col items-start justify-center pr-2">
            <div className="w-full bg-gray-400 m-1 y2k-shadow3 flex">
                <div className="text-right p-1 text-white bg-green-500 w-1/3 y2k-shadow3"></div>
            </div>
            <div className="w-full bg-gray-400 m-1 y2k-shadow3 flex">
                <div className="text-right p-1 text-white bg-green-500 w-1/2 y2k-shadow3"></div>
            </div>
            <div className="w-full bg-gray-400 m-1 y2k-shadow3 flex">
                <div className="text-right p-1 text-white bg-green-500 w-1/2 y2k-shadow3"></div>
            </div>
            <div className="w-full bg-gray-400 m-1 y2k-shadow3 flex">
                <div className="text-right p-1 text-white bg-green-500 w-1/3 y2k-shadow3"></div>
            </div>
            <div className="w-full bg-gray-400 m-1 y2k-shadow3 flex">
                <div className="text-right p-1 text-white bg-green-500 w-1/2 y2k-shadow3"></div>
            </div>
            <div className="w-full bg-gray-400 m-1 y2k-shadow3 flex">
                <div className="text-right p-1 text-white bg-green-500 w-1/2 y2k-shadow3"></div>
            </div>
        </div>
        <div className="w-1/2 flex flex-col items-start justify-center pl-2">
            <div className="w-full  m-1  flex">
                <div className="text-right p-1 text-white bg-green-500 w-1/3 y2k-shadow3"></div>
            </div>
            <div className="w-full  m-1  flex">
                <div className="text-right p-1 text-white bg-green-500 w-1/2 y2k-shadow3"></div>
            </div>
            <div className="w-full  m-1  flex">
                <div className="text-right p-1 text-white bg-green-500 w-1/2 y2k-shadow3"></div>
            </div>
            <div className="w-full  m-1  flex">
                <div className="text-right p-1 text-white bg-green-500 w-1/3 y2k-shadow3"></div>
            </div>
            <div className="w-full  m-1  flex">
                <div className="text-right p-1 text-white bg-green-500 w-1/2 y2k-shadow3"></div>
            </div>
            <div className="w-full  m-1  flex">
                <div className="text-right p-1 text-white bg-green-500 w-1/2 y2k-shadow3"></div>
            </div>
        </div>
    </div>
</div>






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
      </div>
    </div>

  );
}

export default App;
