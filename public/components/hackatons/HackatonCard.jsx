import React from "react";
import ControlButton from "../../Utilities/ControlButton";
import { BsArrowRight } from "react-icons/bs";

function HackatonCard({ title, className, arrowColor }) {
  return (
    <div className={`flex justify-center w-10/12 ${className}`}>
      <div className="flex flex-col w-4/12 gap-5 p-5">
        <h2 className="text-4xl font-semibold">{title}</h2>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          suscipit nam minima earum fugiat quos ullam voluptatum consectetur
          maiores ut nulla porro rem vel, nobis, veritatis corporis, deserunt
          placeat omnis?
        </p>
        <div className={`flex items-center gap-1 text-sm ${arrowColor}`}>
          <ControlButton name="Checkout" />
          <BsArrowRight />
        </div>
      </div>
      <div className="w-6/12 p-5 text-center">
        {/*This is where the cards should be!*/}
        <p>For now this is just some info but it will be a card!</p>
      </div>
    </div>
  );
}

export default HackatonCard;
