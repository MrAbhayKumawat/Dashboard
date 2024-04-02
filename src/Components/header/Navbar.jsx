import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ProfileImg from "../../../images/Profile.png";
function Navbar() {
  return (
    <>
      <nav className="p-5 bg-white">
        <div className="md:flex items-center space-x-5 justify-between">
          <section className="flex items-center space-x-4">
            <div className="bg-black p-2 pt-1 px-4 text-white rounded-full">
              <span className="text-4xl font-bold">B</span>
            </div>
            <div>
              <h1 className="font-bold text-2xl">Project Dashboard</h1>
            </div>
          </section>

          <section className="md:flex items-center space-x-5 mt-5 md:mt-0">
            <form>
              <div className="flex items-center bg-blue-50 p-3 rounded-md">
                <span>
                  <SearchIcon />
                </span>
                <input
                  type="text"
                  placeholder="Search my storyboard"
                  className="border-none focus:outline-none bg-transparent"
                />
              </div>
            </form>
            <div className="flex items-center">
              <button className="bg-blue-100 p-2.5 px-8 border-2 text-lg border-blue-200">
                Quick Start
              </button>
              <span className="text-4xl">
                <img src={ProfileImg} alt="Prifile" className="h-16" />
              </span>
            </div>
          </section>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
