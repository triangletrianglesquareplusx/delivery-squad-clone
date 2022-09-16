import React from "react";
import RestaurantCard from "../components/restaurantsection/RestaurantCard";
import BacktoTopButton from "../utilities/BackToTopButton";
import filterIcon from "../assets/filter-resto.png";
import sortIcon from "../assets/sort-resto.png";
import { useState, useEffect } from "react";
import { db } from "../firebase/firebase-config";
import { collection, getDocs } from "firebase/firestore";

function Restaurants(props) {
  const [restaurants, setRestaurants] = useState([]);
  const [firstOptions, setFirstOptions] = useState(false);
  const [secondOptions, setSecondOptions] = useState(false);
  const [thirdOptions, setThirdOptions] = useState(false);
  const [sorted, setSorted] = useState(restaurants);
  const restaurantsCollectionRef = collection(db, "restaurants");

  const sortByRating = (e) => {
    
    const restosCopy = [...restaurants];
    
      if (e.target.value == "Default") {
        restosCopy.sort((restoA, restoB) => {
          return restoA.position - restoB.position;
        });
      }

      else if(e.target.value == "Ascending") {
        restosCopy.sort((restoA, restoB) => {
          return restoA.rating - restoB.rating;
        });
      }

      else if(e.target.value == "Descending") {
        restosCopy.sort((restoA, restoB) => {
          return restoB.rating - restoA.rating;
        });
      };

    setRestaurants(restosCopy);
  };

  const sortByReservation = (e) => {
    
    const restosCopy = [...restaurants];
    
      if (e.target.value == "Default") {
        restosCopy.sort((restoA, restoB) => {
          return restoA.position - restoB.position;
        });
      }

      else if(e.target.value == "Ascending") {
        restosCopy.sort((restoA, restoB) => {
          return restoA.reservation - restoB.reservation;
        });
      }

      else if(e.target.value == "Descending") {
        restosCopy.sort((restoA, restoB) => {
          return restoB.reservation - restoA.reservation;
        });
      };

    setRestaurants(restosCopy);
  };

  const sortByDistance = (e) => {
    
    const restosCopy = [...restaurants];
    
      if (e.target.value == "Default") {
        restosCopy.sort((restoA, restoB) => {
          return restoA.position - restoB.position;
        });
      }

      else if(e.target.value == "Ascending") {
        restosCopy.sort((restoA, restoB) => {
          return restoA.distance - restoB.distance;
        });
      }

      else if(e.target.value == "Descending") {
        restosCopy.sort((restoA, restoB) => {
          return restoB.distance - restoA.distance;
        });
      };

    setRestaurants(restosCopy);
  };
  

  const handleClick = () => {
    setFirstOptions(!firstOptions);
  };

  const handleClick2 = () => {
    setSecondOptions(!secondOptions);
  };
  
  const handleClick3 = () => {
    setThirdOptions(!thirdOptions);
  };

  const getRestaurants = async () => {
    const data = await getDocs(restaurantsCollectionRef);
    setRestaurants(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  return (
    <>
      <div className="flex flex-wrap items-center justify-center mt-7 filtersort-container">
        <div className="flex flex-wrap justify-start mr-16 bg-gray-200 rounded-lg shadow-xl h-9 filter-container w-80">
          <div className="flex flex-wrap items-center justify-center w-24 bg-purple-900 rounded-lg filterBy h-9">
            <img
              src={filterIcon}
              alt="filter icon"
              className="w-4 h-4 mr-1 filter-icon"
            />
            <p className="text-base not-italic font-normal leading-5 text-white">
              Filter By
            </p>
          </div>
          <ul className="flex flex-wrap flex-auto justify-evenly">
            <li>
              <div className="flex items-center pl-3">
                <input
                  id="type-checkbox-list"
                  type="checkbox"
                  value="Restaurant"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="type-checkbox-list"
                  className="py-2 ml-2 text-sm font-semibold"
                >
                  Type
                </label>
              </div>
            </li>
            <li>
              <div className="flex items-center pl-3">
                <input
                  id="type-checkbox-list"
                  type="checkbox"
                  value="Bar"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="type-checkbox-list"
                  className="py-2 ml-2 text-sm font-semibold"
                >
                  Atmosphere
                </label>
              </div>
            </li>
          </ul>
        </div>

        <div className="flex flex-wrap justify-start bg-gray-200 rounded-lg shadow-xl sort-container w-80 h-9">
          <div className="flex flex-wrap items-center justify-center w-24 bg-purple-900 rounded-lg sortBy">
            <img
              src={sortIcon}
              alt="sort icon"
              className="w-4 h-4 mr-1 sort-icon"
            />
            <p className="text-base not-italic font-normal leading-5 text-white">
              Sort By
            </p>
          </div>

          <div className="flex flex-wrap items-center flex-auto sort-categories justify-evenly">
            <button onClick={handleClick} className="relative p-2 text-sm font-semibold rounded-md hover:bg-purple-900 hover:text-white" value="rating" type="button">Ratings</button>
              {firstOptions && (<div className="absolute z-10 mt-2 bg-white rounded-md shadow-lg w-50 right-1/3 top-96 ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                <div className="py-1 bg-gray-200" role="none">
                  <button onClick={sortByRating} value="Default" className="block px-4 py-2 text-sm font-semibold text-gray-700 rounded-md hover:bg-purple-900 hover:text-white" role="menuitem" id="menu-item-0">Default</button>
                  <button onClick={sortByRating} value="Ascending" className="block px-4 py-2 text-sm font-semibold text-gray-700 rounded-md hover:bg-purple-900 hover:text-white" role="menuitem" id="menu-item-1">Ascending</button>
                  <button onClick={sortByRating} value="Descending" className="block px-4 py-2 text-sm font-semibold text-gray-700 rounded-md hover:bg-purple-900 hover:text-white" role="menuitem" id="menu-item-2">Descending</button>
                </div>
              </div>)}
            <button onClick={handleClick2} className="relative p-2 text-sm font-semibold rounded-md hover:bg-purple-900 hover:text-white" type="button">Res. №</button>
              {secondOptions && (<div className="absolute z-10 mt-2 bg-white rounded-md shadow-lg w-50 right-96 top-96 ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                <div className="py-1 bg-gray-200" role="none">
                  <button onClick={sortByReservation} value="Default" className="block px-4 py-2 text-sm font-semibold text-gray-700 rounded-md hover:bg-purple-900 hover:text-white" role="menuitem" id="menu-item-0">Default</button>
                  <button onClick={sortByReservation} value="Ascending" className="block px-4 py-2 text-sm font-semibold text-gray-700 rounded-md hover:bg-purple-900 hover:text-white" role="menuitem" id="menu-item-1">Ascending</button>
                  <button onClick={sortByReservation} value="Descending" className="block px-4 py-2 text-sm font-semibold text-gray-700 rounded-md hover:bg-purple-900 hover:text-white" role="menuitem" id="menu-item-2">Descending</button>
                </div>
              </div>)}
            <button onClick={handleClick3} className="relative p-2 text-sm font-semibold rounded-md hover:bg-purple-900 hover:text-white" value="distance">Distance</button>
              {thirdOptions && (<div className="absolute z-10 mt-2 bg-white rounded-md shadow-lg w-50 right-96 top-96 ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                <div className="py-1 bg-gray-200" role="none">
                  <button onClick={sortByDistance} value="Default" className="block px-4 py-2 text-sm font-semibold text-gray-700 rounded-md hover:bg-purple-900 hover:text-white" role="menuitem" id="menu-item-0">Default</button>
                  <button onClick={sortByDistance} value="Ascending" className="block px-4 py-2 text-sm font-semibold text-gray-700 rounded-md hover:bg-purple-900 hover:text-white" role="menuitem" id="menu-item-1">Ascending</button>
                  <button onClick={sortByDistance} value="Descending" className="block px-4 py-2 text-sm font-semibold text-gray-700 rounded-md hover:bg-purple-900 hover:text-white" role="menuitem" id="menu-item-2">Descending</button>
                </div>
            </div>)}
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between w-4/5 ml-20 mt-14 restaurants-container">
        {restaurants.map((resto) => (
          <RestaurantCard
            key={resto.id}
            name={resto.name}
            rating={resto.rating}
            reservation={resto.reservation}
            source={resto.imgUrl}
            distance={resto.distance}
            position={resto.position}
          />
        ))}
      </div>
      <BacktoTopButton />
    </>
  );
}

export default Restaurants;
