import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="mx-auto w-full h-screen bg-slate-300 flex items-center justify-center y2k-shadow3">
        {/* Main Div/Container */}
        <div className=" mx-4 w-full h-screen bg-slate-300 border y2k-shadow3 ">
          {/* Header/Nav */}
          <div className="h-16 w-full bg-slate-500 flex justify-center items-center y2k-shadow4"></div>
          <div className="flex bg-slate-500 h-[52rem] m-4  ">
            {/* Left Side */}
            <div className="w-1/2  bg-slate-500 flex flex-col ">
              <div className="h-5/6 bg-blue-300 mx-4 mt-2 rounded-xl y2k-shadow2 flex justify-center items-center  ">
                <div className="h-full rounded-2xl w-full bg-cover y2k-shadow4    bg-[url('./assets/faye.png')]"></div>
              </div>
              <div className="h-1/6 bg-gradient-to-t from-[#8ea7aa] to-[#53686b]  mx-4 mt-4 mb-2 rounded-xl y2k-shadow2 "></div>
            </div>
            {/* Right Side */}
            <div className="w-1/2   flex flex-col">
              <div className="h-1/6 bg-gradient-to-t from-[#cee3e5] to-[#b4cdcf] m-2 rounded-md y2k-shadow4 "></div>
              <div className="h-2/6 bg-gradient-to-t from-[#cee3e5] to-[#b4cdcf] m-2 rounded-md y2k-shadow4"></div>
              <div className="h-3/6  flex m-2">
                <div className="bg-slate-500 h-full w-full flex flex-col ">
                  <div className="h-full bg-gradient-to-t from-[#cee3e5] to-[#b4cdcf] mb-2 rounded-md y2k-shadow4"></div>
                  <div className="h-4/6 bg-gradient-to-t from-[#8ea7aa] to-[#53686b] y2k-shadow3 rounded-md mt-2 mb-2"></div>
                </div>
                <div className="w-1/2 h-full bg-gradient-to-t from-[#4e6365] to-[#b5d0d2] ml-2 rounded-md flex flex-col items-center">
                  <div className="h-6 mt-2 w-5/6 bg-[#8ba9b0] rounded-md y2k-shadow4"></div>
                  <div className="h-4 mt-2 w-1/2 bg-[#8ba9b0] rounded-md y2k-shadow4"></div>
                  <div className=" h-1/3 w-2/3 mt-4 bg-[#818989] y2k-shadow2"></div>
                  <div className=" h-1/6 w-2/3 mt-4 bg-[#818989] y2k-shadow2"></div>
                  <div className=" h-1/6 w-2/3 mt-4 bg-[#818989] y2k-shadow2"></div>
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
