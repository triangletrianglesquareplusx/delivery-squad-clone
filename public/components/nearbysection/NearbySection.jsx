import React from "react";
import ControlButton from "../../Utilities/ControlButton";
import InfoCard from "./InfoCard";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { FaVectorSquare } from "react-icons/fa";
import { TbBarbell } from "react-icons/tb";
import { RiTShirt2Fill } from "react-icons/ri";

function NearbySection() {
  return (
    <section className="flex flex-col items-center w-10/12 gap-10 p-3 m-20 mx-auto">
      <ControlButton
        name="Nearby"
        className="w-2/12 px-2 py-2 font-bold border-b-4 md:w-1/12 border-b-primaryRed"
      />
      <div className="flex flex-col gap-10 md:gap-2 md:flex-row md:justify-around">
        <InfoCard title="Restaurants">
          <GiForkKnifeSpoon />
        </InfoCard>
        <InfoCard title="Hangouts">
          <FaVectorSquare />
        </InfoCard>
        <InfoCard title="Utilities">
          <TbBarbell />
        </InfoCard>
        <InfoCard title="Shopping">
          <RiTShirt2Fill />
        </InfoCard>
      </div>
    </section>
  );
}

export default NearbySection;
