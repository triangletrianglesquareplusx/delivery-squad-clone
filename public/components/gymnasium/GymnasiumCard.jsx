import React from "react";
import ControlButton from "../../Utilities/ControlButton";

function GymnasiumCard({ src, className }) {
  return (
    <div
      className={`container min-w-sm relative w-3/12 overflow-hidden text-white rounded-lg shadow-lg ${className}`}
    >
      <img
        src={src}
        className="object-fill opacity-80"
        alt="sports equipment cardio bikes"
      />

      <p className="absolute text-xl font-bold top-10 left-5">XYZ Gym</p>
      <p className="absolute text-sm bottom-20 left-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <ControlButton
        name="Explore"
        className="absolute px-4 text-sm bg-blue-500 border-2 border-white rounded-md bottom-5 left-5 bg-opacity-70"
      />
    </div>
  );
}

export default GymnasiumCard;
