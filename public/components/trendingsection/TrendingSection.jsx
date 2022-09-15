import React from "react";
import ExpandedProductCard from "./ExpandedProductCard";
import ControlButton from "../../Utilities/ControlButton";
import vibe1 from "../../Assets/vibe1.jpg";
function TrendingSection() {
  return (
    <div className="flex flex-col items-center p-3 gap-14">
      <ControlButton
        name="Trending"
        className="w-2/12 px-2 py-2 font-bold border-b-4 md:w-1/12 border-b-primaryRed"
      />
      <section className="relative flex justify-center w-10/12">
        <ExpandedProductCard
          className="absolute bottom-0 z-20 w-8/12 overflow-hidden bg-gray-200 rounded-lg shadow-md left-20 md:w-4/12 lg:w-3/12"
          src={
            "https://i1.actualno.com/actualno_2013/upload/news/2022/06/01/0274624001654087691_1764664_920x708.jpg"
          }
        />
        <ExpandedProductCard
          className="absolute bottom-0 z-20 w-8/12 overflow-hidden bg-gray-200 rounded-lg shadow-md right-20 md:w-4/12 lg:w-3/12"
          src={
            "https://i1.actualno.com/actualno_2013/upload/news/2022/06/01/0274624001654087691_1764664_920x708.jpg"
          }
        />

        <ExpandedProductCard
          className="absolute z-20 w-8/12 overflow-hidden bg-gray-200 rounded-lg shadow-md bottom-10 right-50 md:w-4/12 lg:w-3/12"
          src={
            "https://i1.actualno.com/actualno_2013/upload/news/2022/06/01/0274624001654087691_1764664_920x708.jpg"
          }
        />

        <div className="z-10 w-full h-full overflow-hidden rounded-lg shadow-lg">
          <img
            src={vibe1}
            alt="a cool background layer"
            className="object-fill"
          />
        </div>
      </section>
    </div>
  );
}

export default TrendingSection;
