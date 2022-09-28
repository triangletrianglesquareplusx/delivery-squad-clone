import ControlButton from "../utilities/ControlButton";
import React from "react";
import { MdLocationPin } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import auth from "../firebase/firebase-config";
import { clearCurrentUser } from "../features/authSlice";
export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log(auth);
  const logOut = () => {
    console.log(auth.currentUser);
    auth.signOut();
    dispatch(clearCurrentUser());
    navigate("/");
    console.log("log out");
  };

  const logIn = () => {
    navigate("/login");
    console.log("log in");
  };
  return (
    <div className={`flex justify-between items center p-3 w-10/12 mx-auto`}>
      <div
        className={`font-inter text-regalBlue text-3xl md:text-xl font-extrabold flex items-center gap-1`}
      >
        <MdLocationPin className={`text-primaryRed`} />
        <p>Atlas</p>
      </div>
      <div className={`flex`}>
        <Link to="/">
          <ControlButton
            name={"Trending"}
            className={`hidden md:inline md:px-6 md:py-3 md:font-medium hover:text-regalBlue`}
          />
        </Link>
        <Link to="/articles">
          <ControlButton
            name={"Resources"}
            className={`hidden md:inline md:px-6 md:py-3 md:font-medium hover:text-regalBlue`}
          />
        </Link>
        <Link to="/restaurants">
          <ControlButton
            name={"Nearby"}
            className={`hidden md:inline md:px-6 md:py-3 md:font-medium hover:text-regalBlue`}
          />
        </Link>
        <Link to="/faq">
          <ControlButton
            name={"FAQ"}
            className={`hidden md:inline md:px-6 md:py-3 md:font-medium hover:text-regalBlue`}
          />
        </Link>

        {auth.currentUser ? (
          <ControlButton
            name={"Login"}
            className={`hidden md:inline md:px-6 md:py-3 md:font-medium hover:text-regalBlue`}
            onClick={logIn}
          />
        ) : (
          <ControlButton
            name={"Logout"}
            className={`hidden md:inline md:px-6 md:py-3 md:font-medium hover:text-regalBlue`}
            onClick={logOut}
          />
        )}
        <ControlButton
          name={"Download App"}
          className={`px-6 py-2 whitespace-no-wrap bg-primaryRed rounded-lg shadow-md text-white text-sm font-medium font-inter`}
        />
      </div>
    </div>
  );
}
