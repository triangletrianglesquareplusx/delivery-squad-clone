import React from "react";

export default function HeroCard({ className, src, alt }) {
  return (
    <div className={`${className} h-48 rounded-lg overflow-hidden shadow-lg`}>
      <img className={`object-fill w-full h-48`} src={src} alt={alt}></img>
    </div>
  );
}
