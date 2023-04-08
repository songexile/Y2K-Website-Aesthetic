import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="mx-auto w-full h-screen bg-slate-300 flex items-center justify-center">
        {/* Main Div/Container */}
        <div className=" mx-4 w-full h-screen bg-slate-400">
          {/* Header/Nav */}
          <div className="h-16 w-full bg-slate-500 flex justify-center items-center"></div>
          <div className="flex bg-slate-500 h-[52rem] m-4  ">
            {/* Left Side */}
            <div className="w-1/2  bg-slate-500 flex flex-col">
              <div className="h-5/6 bg-pink-700 mx-4 mt-2 rounded-2xl"></div>
              <div className="h-1/6 bg-green-500 mx-4 mt-4 mb-2 rounded-xl"></div>
            </div>
            {/* Right Side */}
            <div className="w-1/2   flex flex-col">
              <div className="h-1/6 bg-pink-200 m-2 rounded-md"></div>
              <div className="h-2/6 bg-green-500 m-2 rounded-md"></div>
              <div className="h-3/6  flex m-2">
                <div className="bg-slate-500 h-full w-full flex flex-col">
                  <div className="h-full bg-red-200 mb-2 rounded-md"></div>
                  <div className="h-4/6 bg-red-500 rounded-md mt-2 mb-2"></div>
                </div>
                <div className="w-1/2 h-full bg-green-200 ml-2 rounded-md flex flex-col items-center">
                  <div className="h-6 mt-2 w-5/6 bg-purple-400 rounded-md"></div>
                  <div className="h-4 mt-2 w-1/2 bg-purple-300 rounded-md"></div>
                  <div className=" h-1/3 w-2/3 mt-4 bg-green-300"></div>
                  <div className=" h-1/6 w-2/3 mt-4 bg-green-400"></div>
                  <div className=" h-1/6 w-2/3 mt-4 bg-green-400"></div>
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
