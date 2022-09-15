import React from "react";
import { AiFillHeart } from "react-icons/ai";
import ControlButton from "../Utilities/ControlButton";
import { IoLogoGooglePlaystore } from "react-icons/io5";

function Footer() {
  return (
    <section className="flex flex-col bg-scaledDownWhite">
      <div className="flex flex-col items-center justify-between w-10/12 gap-4 py-10 mx-auto md:flex-row">
        <div className={`flex items-center`}>
          <IoLogoGooglePlaystore className={`absolute text-white ml-3`} />
          <ControlButton
            name={"Download App Now"}
            className={
              "px-9 py-2 bg-primaryRed rounded-lg shadow-md text-white text-sm font-medium"
            }
          />
        </div>
        <div className="flex">
          <ControlButton
            name="Trending"
            className="px-2 text-lg md:px-4 lg:px-6 md:text-sm"
          />
          <ControlButton
            name="Resources"
            className="px-2 text-lg md:px-4 lg:px-6 md:text-sm"
          />
          <ControlButton
            name="Nearby"
            className="px-2 text-lg md:px-4 lg:px-6 md:text-sm"
          />
          <ControlButton
            name="Hackatons"
            className="px-2 text-lg md:px-4 lg:px-6 md:text-sm"
          />
        </div>
      </div>

      <p className="px-5 py-10 text-sm text-center whitespace-nowrap">
        Made with <AiFillHeart className="inline" /> by VinovateIT
      </p>
    </section>
  );
}

export default Footer;
