import React from "react";
import GymnasiumCard from "./GymnasiumCard";
import ControlButton from "../../utilities/ControlButton";
function GymnasiumSection() {
  return (
    <section className="flex flex-col items-center w-10/12 gap-10 m-20 mx-auto">
      <ControlButton
        name="Gymnasium"
        className="w-2/12 px-2 py-2 font-bold border-b-8 md:w-1/12 border-b-primaryRed"
      />
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
