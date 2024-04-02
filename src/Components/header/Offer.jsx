import React from "react";
import TimelapseIcon from "@mui/icons-material/Timelapse";

function Offer() {
  return (
    <>
      <nav className="p-1.5 bg-yellow-200 text-sm hidden md:block">
        <div className="flex space-x-5 items-center">
          <p className="rounded-xl bg-yellow-600 p-1 px-3 flex items-center">
            <TimelapseIcon />
            <span className="ml-1">one Time offer</span>
          </p>
          <p className="font-medium">
            Your AI Storyboarding Bundle Discount expires in{" "}
            <span className="text-pink-500 bg-yellow-100 p-1">5:01</span>
          </p>
          <button className="bg-pink-500 p-1 rounded-md px-3">
            Claim Discount
          </button>
        </div>
      </nav>
    </>
  );
}

export default Offer;
