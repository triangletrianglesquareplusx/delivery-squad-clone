import MiddleSection from "../Components/MiddleSection/MiddleSection";
import Restaurants from "../Pages/Restaurants";
import Searchbar from "../Utilities/Searchbar/Searchbar";

export default function RestaurantsFullPage() {
  return (
    <>
      <MiddleSection />
      <Searchbar />
      <Restaurants />
    </>
  );
}
