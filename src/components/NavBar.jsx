import React, { useState } from "react";
import Logo from "../static/images/logo.svg";
import {
  Home,
  MusicLibrary2,
  Radio,
  Gallery,
  User,
  Setting2,
} from "iconsax-react";

export default function NavBar() {
  const [chosenIcon, setchosenIcon] = useState("home");
  return (
    <div className="flex flex-col justify-start fixed w-[70px]">
      <img className="my-8 mx-4 w-[34px] cursor-pointer" src={Logo} alt="" />

      <div className="mt-6 h-[170px] justify-between flex flex-col">
        <span
          onClick={() => setchosenIcon("home")}
          style={{
            color: chosenIcon === "home" ? "#facd66" : "#4f514f",
            cursor: "pointer",
          }}
        >
          <Home variant="Bold" className="mx-auto" />
        </span>
        <span
          onClick={() => setchosenIcon("MusicLibrary2")}
          style={{
            color: chosenIcon === "MusicLibrary2" ? "#facd66" : "#4f514f",
            cursor: "pointer",
          }}
        >
          <MusicLibrary2 variant="Bold" className="mx-auto" />
        </span>
        <span
          onClick={() => setchosenIcon("Radio")}
          style={{
            color: chosenIcon === "Radio" ? "#facd66" : "#4f514f",
            cursor: "pointer",
          }}
        >
          <Radio variant="Bold" className="mx-auto" />
        </span>
        <span
          onClick={() => setchosenIcon("Gallery")}
          style={{
            color: chosenIcon === "Gallery" ? "#facd66" : "#4f514f",
            cursor: "pointer",
          }}
        >
          <Gallery variant="Bold" className="mx-auto" />
        </span>
      </div>

      <div className="mt-12 h-[70px] justify-between flex flex-col">
        <span
          onClick={() => setchosenIcon("User")}
          style={{
            color: chosenIcon === "User" ? "#facd66" : "#4f514f",
            cursor: "pointer",
          }}
        >
          <User variant="Bold" className="mx-auto" />
        </span>
        <span
          onClick={() => setchosenIcon("Setting2")}
          style={{
            color: chosenIcon === "Setting2" ? "#facd66" : "#4f514f",
            cursor: "pointer",
          }}
        >
          <Setting2 variant="Bold" className="mx-auto" />
        </span>
      </div>
    </div>
  );
}
