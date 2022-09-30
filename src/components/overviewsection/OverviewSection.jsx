import React from "react";
import vibe1 from "../../assets/vibe1.jpg";
import ControlButton from "../../utilities/ControlButton";
function OverViewSection() {
  return (
    <section className="grid h-40 grid-cols-8 gap-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      {/*<img
        src={vibe1}
        alt="an awesome gradient graphic"
        className="object-fill"
      />*/}
      <div className="flex flex-col self-center col-span-4 col-start-2 font-bold text-white md:col-start-3 lg:col-start-4">
        <p>Take your atlas with you</p>
        <p>Download the app now!</p>
        <ControlButton
          name={"Download App"}
          className={`px-6 py-2 whitespace-no-wrap bg-primaryRed rounded-lg shadow-md text-white text-sm font-medium font-inter w-5/12 my-2`}
        />
      </div>
    </section>
  );
}

export default OverViewSection;
