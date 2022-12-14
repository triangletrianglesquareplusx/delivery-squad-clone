import React from "react";
import searchIcon from "../assets/search-resto.png";

export default function Searchbar() {
  return (
    <div className="flex items-center justify-center mt-6 search-container">
      <div className="flex items-center p-3 bg-gray-200 rounded-lg h-9 w-96 searchbar">
        <img
          src={searchIcon}
          alt="search icon"
          className="w-4 h-4 search-icon"
        />
        <input
          type="text"
          placeholder="Search Restaurants"
          className="flex-none flex-grow-0 order-1 text-xs not-italic font-medium text-center text-gray-500 bg-gray-200 cursor-pointer"
          // value={search}
          // onChange={handleSearchChange}
        />
      </div>
    </div>
  );
}
