import React from "react";
import ControlButton from "../../utilities/ControlButton";
import GymnasiumCard from "./GymnasiumCard";

function GymnasiumSection() {
  return (
    <section className="flex flex-col items-center w-10/12 gap-10 m-20 mx-auto">
      <div className="px-2 py-2 font-bold text-center border-b-4 border-b-primaryRed">
        Gymnasium
      </div>
      <div className="flex flex-col items-center gap-3 lg:gap-1 lg:flex-row lg:justify-around">
        <GymnasiumCard
          src={
            "https://www2.heart.org/images/content/pagebuilder/22CN-Stationary_Bikes_in_Grayscale.jpg"
          }
        />
        <GymnasiumCard
          src={
            "https://www2.heart.org/images/content/pagebuilder/22CN-Stationary_Bikes_in_Grayscale.jpg"
          }
          className="hidden md:block"
        />
        <GymnasiumCard
          src={
            "https://www2.heart.org/images/content/pagebuilder/22CN-Stationary_Bikes_in_Grayscale.jpg"
          }
          className="hidden lg:block"
        />
      </div>
    </section>
  );
}

export default GymnasiumSection;
