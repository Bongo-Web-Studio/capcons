import React from "react";

export default function CopconsSection() {
  return (
    <section className="bg-white flex justify-center items-center p-20 w-full">
      <div className=" w-full">
        {/* Top-left large question mark + heading */}
        <div className=" flex items-start gap-6   ">
          <div className="text-[300px] leading-none font- text-[#0b0e13]  hover:rotate-180 transition-all duration-500">
            ?
          </div>
          <div className="mt-12">
            <h2 className="text-8xl text-slate-800 max-w-[500px] ">
              What is{" "}
              <span className="inline-block px-1 rounded-sm bg-[#dffb2a]">
                Capcons?
              </span>
            </h2>
            <p className="text-3xl text-gray-400 mt-2">
              A new kind of Social Platform - One you own
            </p>
          </div>
        </div>

        {/* Main grid of cards */}
        <div className="flex   justify-center items-center mt-20 w-full  px-10">
          {/* Left big purple card */}
          <div className="h-[70vh] w-[40%] bg-[#3b0fa8] rounded-md  p-6 flex flex-col justify-between  ">
            <div className="text-white text-6xl font-medium ">
              <span className="opacity-50">Find your</span>
              <br /> <span className=" ">People.</span>
            </div>
            <div className="text-white text-6xl font-medium text-right">
              <span className="opacity-50"> Or bring them</span>
              <br /> <span className="">Together</span>
            </div>
          </div>

          <div className="w-[60%] flex justify-start items-start ">
            {/* middle column (top) - white card with avatars */}
            <div className="w-[50%] flex justify-center h-[70vh]">
              <div className="w-[80%] bg-white rounded-md border border-gray-200 p-4 flex flex-col items-center">
                <div className="w-full flex gap-3">
                  {/* two avatar thumbs */}
                  <div className="w-[50%] h-[7cm] rounded-md overflow-hidden bg-gray-100 flex items-center justify-center">
                    <img
                      className="w-full h-full object-cover"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFMfJZW7IZEwdGL1eJmDmWBcEawa5vF1mEQA&s"
                      alt=""
                    />
                  </div>
                  <div className="w-[50%] h-[7cm] rounded-md overflow-hidden bg-gray-100 flex items-center justify-center ">
                    <img
                      className="w-full h-full object-cover"
                      src="https://www.theloverspoint.com/wp-content/uploads/2025/05/attitude-girl-pic.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="w-full   text-[#1D293D] mt-[4cm] text-6xl font-medium text-start">
                  Private Discussion
                </div>
              </div>
            </div>

            {/* Right top - customize brand card */}
            <div className=" w-[50%] h-[70vh] bg-[#fff6ea] rounded-md p-4">
              <h3 className="text-2xl font-semibold text-[#4b2b94]">
                Customise your
                <br /> <span className="font-light">Unique Brand</span>
              </h3>
              <div className="mt-6">
                {/* color bar mock */}
                <div className="w-full h-4 rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-300 relative">
                  <div className="absolute -top-2 left-12 w-6 h-6 rounded-full border-2 border-white shadow">
                    {" "}
                  </div>
                </div>
                <div className="mt-4 h-16 w-full rounded-md border border-gray-200 overflow-hidden">
                  <div className="h-full w-[80%] bg-[linear-gradient(90deg,#f00,#f90,#ff0,#0f0,#0ff,#00f,#90f)]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-[70vh]   flex  p-10">
          {/* bottom-left - monetization text spanning middle-col */}
          <div className="w-[40%] flex justify-center items-end p-3 h-[68vh]">
            <p className="text-right text-5xl  text-[#1D293D] font-medium max-w-[520px] mx-auto ">
              Monetize Through Your Community. Turn <br />{" "}
              <span className="max-w-[10cm]">engagement into earning</span>
              power
            </p>
          </div>
          <div className="w-[60%] flex">
            {/* Middle column - large cream card with gamify text and badge */}
            <div className=" w-[50%] flex justify-center items-start ">
              <div className=" w-[80%]  rounded-md p-4">
                <div
                  style={{
                    background:
                      "linear-gradient(180deg, #D8FF2A 0%, #B6E300 100%)",
                    boxShadow: "0 6px 16px rgba(56, 201, 0, 0.12)",
                  }}
                  className=" bg-[#dfff33] text-2xl  px-3 py-3 rounded-full flex justify-center items-center "
                >
                  End
                </div>

                <div className="bg-[#fff6ea] p-4 mt-6 rounded-md h-[57vh]   ">
                  <h4 className="text-5xl font-semibold text-[#3B0FA8] ">
                    Gamify and
                    <br /> grow your
                    <br /> community
                  </h4>

           
                </div>
              </div>
            </div>

            {/* Right middle - large purple bottom-right card */}
            <div className="w-[50%] bg-[#3b0fa8] rounded-md  p-4 flex flex-col justify-between text-right h-[69vh] text-6xl   ">
              <div className="text-white text-6xl font-medium">
                <span className="opacity-50"> Go</span>
                <br /> <span className="text-6xl  ">Live</span>
              </div>
              <div className="text-white text-6xl">
                <span className="opacity-50"> No extra</span>
                <br />

                <span>Tool Required</span>
              </div>
            </div>
          </div>
        </div>

        {/* small lime dot bottom-left */}
        <div className="absolute bottom-6 left-32 w-6 h-6 rounded-full bg-[#dffb2a] shadow-md"></div>
      </div>
    </section>
  );
}
