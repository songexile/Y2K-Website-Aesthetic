import React from "react";
import { useState } from "react";

//Header/Nav

function Header() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const options = {
    weekday: "short",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };
  const formattedDate = currentDate
    .toLocaleDateString(undefined, options)
    .replace(/\s/g, "")
    .replace(/-/g, "/")
    .replace(/,/g, "/");

  const weekdayIndex = formattedDate.indexOf("/");
  const formattedDateUpperCase =
    formattedDate.slice(0, weekdayIndex).toUpperCase() +
    formattedDate.slice(weekdayIndex);
  return (
    <div className="h-8 mt-4 w-full flex justify-center items-center y2k-shadow4 bg-gradient-to-r from-[#cee3e5] to-[#b4cdcf] rounded-lg inner-stroke2 opacity-90 ">
      <div className="flex justify-end  w-full">
        <h1 className="rounded-md   bg-white y2k-shadow4 mx-4    ">
          {/* Displays date */}
          {formattedDateUpperCase}
        </h1>
      </div>
    </div>
  );
}

export default Header;
