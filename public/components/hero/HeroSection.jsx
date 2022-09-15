import ControlButton from "../../Utilities/ControlButton";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import HeroCard from "./HeroCard";

export default function HeroSection() {
  return (
    <div
      className={`font-inter flex justify-center md:justify-between w-10/12 mx-auto items-center p-3 h-40 md:h-60 lg:h-80`}
    >
      <div>
        <div className={`container`}>
          <div className={`flex flex-row gap-2 md:flex-col`}>
            <h1
              className={`text-2xl sm:text-3xl md:text-5xl font-bold whitespace-nowrap`}
            >
              Navigate to the
            </h1>
            <h1 className={`text-2xl sm:text-3xl md:text-5xl font-bold`}>
              <span
                className={`text-primaryRed text-2xl sm:text-3xl md:text-5xl font-bold`}
              >
                Atlas
              </span>{" "}
              for VIT
            </h1>
          </div>

          <p className={`text-md md:text-sm`}>
            All in one resource guide for VIT
          </p>
        </div>
        <div className={`hidden lg:block lg:mt-5`}>
          <div className={`flex items-center`}>
            <IoLogoGooglePlaystore className={`absolute text-white ml-3`} />
            <ControlButton
              name={"Download App Now"}
              className={
                "px-9 py-2 bg-primaryRed rounded-lg shadow-md text-white text-sm font-medium"
              }
            />
          </div>
        </div>
      </div>
      <div className={`hidden md:block md:w-5/12 lg:w-6/12`}>
        {/*This is where the four images will be */}
        <div className={`flex flex-row justify-between gap-4`}>
          <HeroCard
            className={"w-6/12"}
            alt={"rih"}
            src={
              "https://static.independent.co.uk/2022/05/19/21/People_Rihanna_ASAP_Rocky_25326.jpg?quality=50&width=640&auto=webp"
            }
          />
          <HeroCard
            className={"w-4/12"}
            alt={"building"}
            src={
              "https://www.burohappold.com/wp-content/uploads/2020/02/experts-in-tall-buildings-burohappold_getty.jpg"
            }
          />
        </div>
      </div>
    </div>
  );
}
