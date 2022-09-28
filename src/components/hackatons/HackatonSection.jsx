import React from "react";
import HackatonCard from "./HackatonCard";

function HackatonsSection() {
  return (
    <section className="flex flex-col items-center w-10/12 gap-5 m-10 mx-auto">
      <HackatonCard
        title="Hackatons to watch out for"
        arrowColor={`text-primaryRed`}
      />
      <HackatonCard
        title="Take a weekend off"
        className={`flex-row-reverse`}
        arrowColor={`text-regalBlue`}
      />
    </section>
  );
}

export default HackatonsSection;
