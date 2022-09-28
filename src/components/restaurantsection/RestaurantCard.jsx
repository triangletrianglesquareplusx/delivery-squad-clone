import React from "react";
import starIcon from "../../assets/star-resto.png";
import mapIcon from "../../assets/map-resto.png";

function RestaurantCard({ name, rating, reservation, source, distance }) {
  return (
    <article className="relative flex flex-row flex-wrap justify-center w-64 bg-gray-100 shadow-2xl rounded-2xl ml-9 mb-9 h-80 resto-card min-h-max">
      <div className="flex flex-col flex-wrap content">
        <figure className="w-64 rounded-2xl h-50 resto-image">
          <img
            className="object-contain w-full h-auto rounded-t-2xl rounded-r-2xl"
            src={source}
            alt="restaurants item"
          />
        </figure>
        <figure className="absolute flex items-center w-1/4 bg-gray-100 rounded-lg star-icon top-5 right-3 justify-evenly">
          <img className="w-4 h-4" src={starIcon} alt="star icon" />
          <p>{rating}</p>
        </figure>
        <div className="flex flex-col mt-2 ml-4 text">
          <h2 className="font-medium resto-name">{name}</h2>
          <p>Res {reservation} for 2 people</p>
          <figure className="flex flex-row mt-2 map-icon">
            <img className="w-4 h-4" src={mapIcon} alt="map icon" />
            <p>{distance} min from VIT</p>
          </figure>
        </div>
        <button className="flex flex-col items-center w-20 p-1 mt-2 ml-4 text-purple-700 border-2 border-purple-700 border-solid rounded-lg explore-button">
          Explore
        </button>
      </div>
    </article>
  );
}

export default RestaurantCard;
