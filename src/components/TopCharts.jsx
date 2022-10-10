import React from "react";
import TopChart1 from "../static/images/topcharts1.png";
import TopChart2 from "../static/images/topcharts2.png";
import TopChart3 from "../static/images/topcharts3.png";
import { Heart } from "iconsax-react";

const TopChartCard = (props) => {
  return (
    <div className="flex flex-row justify-between bg-[#1a1e1f] p-4 rounded-2xl w-[90%] cursor-pointer">
      <div className="flex flex-row justify-evenly">
        <img src={props.img} alt="" />
        <div className="flex flex-col justify-between ml-4">
          <span className="text-lg font-semibold">{props.name}</span>
          <span className="text-sm font-thin text-gray-500">
            {props.singer}
          </span>
          <span className="text-base font-thin">{props.time}</span>
        </div>
      </div>

      <div className="rounded-full border-white border-[1px] w-[40px] h-[40px] p-2 my-auto cursor-pointer">
        <Heart className="text-[#deb75d]" />
      </div>
    </div>
  );
};

export default function TopCharts() {
  return (
    <div className="">
      <div className="w-[80%] mx-4 flex flex-col justify-between">
        <span className="text-white text-2xl font-bold mb-3">Top Charts</span>

        {/* top chart comp */}
        <TopChartCard
          name="Golden age of 80s"
          singer="Sean swadder"
          time="2:34:45"
          img={TopChart1}
        />
        <TopChartCard
          name="Reggae “n” blues"
          singer="Dj YK mule"
          time="1:02:42"
          img={TopChart2}
        />
        <TopChartCard
          name="Tomorrow’s tunes"
          singer="Obi Datti"
          time="2:01:25"
          img={TopChart3}
        />
      </div>
    </div>
  );
}
