import React from "react";
import { useEffect, useState } from "react";
import topArrow from "../assets/upwards-arrow-resto.png";

function BacktoTopButton() {
  const [BackToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-row items-center justify-end mb-9 mr-28 backtop-container">
      <button className="mr-2 top-icon pointer" onClick={scrollToTop}>
        <img className="w-6 h-6" src={topArrow} alt="back to top icon" />
      </button>
      <p className="h-6 text-sm not-italic font-medium text-red-500">
        Back to Top
      </p>
    </div>
  );
}

export default BacktoTopButton;
