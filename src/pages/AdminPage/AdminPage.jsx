import React from "react";
import { Outlet, Link } from "react-router-dom";
import ControlButton from "../../utilities/ControlButton";
// import DangerZone from "./DangerZone";
// import ArticlesAdministrationPage from "./ArticlesAdministrationPage";
// import UserProfile from "./UserProfile";
function AdminPage() {
  return (

    <div className="w-10/12 h-screen mx-auto my-10">
      <div className="flex flex-col gap-2 md:flex-row justify-left">
        <Link to="userprofile">
          <ControlButton
            name="User Profile"
            className="p-5 text-xl font-bold shadow-lg rounded-xl"
          />

        </Link>
        <Link to="articlescontrol">
          <ControlButton
            name="Control Articles"
            className="p-5 text-xl font-bold shadow-lg rounded-xl"
          />
        </Link>
        <Link to="dangerzone">
          <ControlButton
            name="Danger Zone"
            className="p-5 text-xl font-bold text-red-600 shadow-lg rounded-xl"
          />
        </Link>
      </div>

      <Outlet />
    </div>
  );
}

export default AdminPage;
