import "./ShoppingItem.css";
import { ItemButton } from "../ItemButton";

export function ShoppingItem() {
  return (
    <div className="bg-white text-center m-5 rounded-lg w-2/5 shadow-xl font-sans">
      <div className="bg-top h-64 w-full item-image-wrappper"></div>
      <div className="p-10">
        <h3 className="text-gray-900 mt-0 font-bold text-xl leading-10">
          Reliance Trends
        </h3>
        <div className="text-left flex items-center justify-start">
          <span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.8334 8.33333C15.8334 12.3734 12.025 15.8693 10.5626 17.0628C10.2316 17.333 9.76861 17.333 9.43757 17.0628C7.97518 15.8693 4.16675 12.3734 4.16675 8.33333C4.16675 5.11167 6.77842 2.5 10.0001 2.5C13.2217 2.5 15.8334 5.11167 15.8334 8.33333Z"
                stroke="#FD6D61"
                stroke-width="1.78125"
              />
              <ellipse
                cx="10"
                cy="8.33325"
                rx="2.5"
                ry="2.5"
                stroke="#FD6D61"
                stroke-width="1.78125"
              />
            </svg>
          </span>
          <p className="text-gray-900 text-base font-medium leading-8 m-0">
            Nearby : Subway / Bata
          </p>
        </div>
        <p className="text-gray-900 text-left font-normal text-base leading-5 my-2.5">
          Reliance Trends offers stylish, high-quality products across
          Womenswear, Lingerie, Menswear, Kidswear and fashion accessories
          through a diversified portfolio of own brands, national and
          international brands.
        </p>
        <div className="flex">
          <ItemButton text={"Website"} />
          <ItemButton text={"Location"} />
        </div>
      </div>
    </div>
  );
}
