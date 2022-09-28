import MiddleSection from "../components/middlesection/MiddleSection";
import Restaurants from "../pages/Restaurants";
import Searchbar from "../utilities/SearchBar";

export default function RestaurantsFullPage() {
  return (
    <>
      <MiddleSection />
      <Searchbar />
      <Restaurants />
    </>
  );
}
