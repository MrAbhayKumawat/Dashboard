import React, { useState } from "react";
import ProfileImg from "../../../images/Profile.png";
import PermMediaRoundedIcon from "@mui/icons-material/PermMediaRounded";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";

function Main() {
  const [showModal, setShowModal] = useState(false);

  const handleNewProjectClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <main>
        <div className="flex md:justify-between items-center md:px-10 mt-5 space-x-2">
          <div className="flex items-center justify-center">
            <img src={ProfileImg} alt="Profile" className="h-16" />
            <div className="font-bold md:text-xl">Adam Cooper Team</div>
          </div>

          <button
            onClick={handleNewProjectClick}
            className="block hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 text-center md:p-2 px-2 md:px-5 text-white bg-black"
            type="button"
          >
            New Project
          </button>
        </div>

        <div className="bg-white mx-10 px-10 p-2 min-h-96 mt-5">
          <div className="flex justify-between items-center">
            <div className="flex items-center justify-center space-x-3">
              <div className="text-2xl">
                <PermMediaRoundedIcon />
              </div>
              <div>
                <div className="text-lg">Default Project</div>
                <div className="text-gray-300">1 storyboard</div>
              </div>
            </div>
            <div className="flex items-center">
              <div>
                <MoreVertRoundedIcon />
              </div>
              <div>
                <ExpandMoreRoundedIcon />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <div className="border-2 max-w-xs h-full p-2">
              <img
                className="w-full h-56"
                src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="img"
              />
              <div>
                <div className="font-semibold">
                  Al Character Demo storyboard
                </div>
                <div className="text-gray-300">Updated 19 Mar 24</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div
              className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      className="text-xl leading-6 font-bold text-gray-900"
                      id="modal-headline"
                    >
                      New Storyboard{" "}
                    </h3>
                    <div className="flex flex-col items-center justify-center w-full  bg-gray-100 p-5 m-2">
                      <div className="flex flex-col items-center w-full max-w-5xl px-10">
                        <div className="mb-5">
                          <label>Storyboard Name</label>
                          <input
                            type="text"
                            placeholder="Storyboard Name (e.g. Default Project Storyboard)"
                            className="border-2 border-gray-300 rounded-l-md p-2 mr-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                          <br />
                          <label>Frame Size</label>

                          <select className="border-2 border-gray-300 rounded-r-md p-2 w-full mt-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                            <option value="landscape">Landscape (16:9)</option>
                            <option value="landscape">Landscape (16:9)</option>
                            <option value="landscape">Landscape (16:9)</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex justify-end space-y-3 sm:space-y-0">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Create Storyboard
                </button>
                <br />
                <button
                  onClick={closeModal}
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm text-white"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Main;
