import React from "react";
import vibe1 from "../../assets/vibe1.jpg";
function OverViewSection() {
  return (
    <section className="w-10/12 mx-auto overflow-hidden rounded-md shadow-lg">
      <img
        src={vibe1}
        alt="an awesome gradient graphic"
        className="object-fill"
      />
    </section>
  );
}

export default OverViewSection;
