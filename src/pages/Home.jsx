import React from "react";
import TopCharts from "../components/TopCharts";
import BannerImg from "../static/images/BannerImg.png";
export default function Home() {
  return (
    <div className="flex flex-col h-[100%] w-[100%] mt-[100px] mx-auto">
      <div className="flex flex-col md:flex-row w-[100%] justify-between mx-auto">
        <div className="w-[90%] md:w-7/12 mx-auto">
          <div className="m-4 mx-auto bg-[#609EAF] flex flex-row rounded-3xl sm:w-[90%]">
            <div className="p-12 flex flex-col justify-between">
              <span className="text-white">Currated playlist</span>
              <div className="text-white flex-col">
                <div className="text-3xl font-bold">R & B Hits</div>
                <div className="text-base font-thin sm:w-[80%]">
                  All mine, Lie again, Petty call me everyday, Out of time, No
                  love, Bad habit, and so much more
                </div>
              </div>
              <span className="text-white">Currated playlist</span>
            </div>

            <img className="hidden lg:block" src={BannerImg} alt="" />
          </div>
        </div>

        <div className="w-[90%] md:w-5/12 m-4 rounded-3xl">
          <TopCharts />
        </div>
      </div>
    </div>
  );
}
