import React from "react";
import { Outlet, Link } from "react-router-dom";
import ControlButton from "../../utilities/ControlButton";
// import DangerZone from "./DangerZone";
// import ArticlesAdministrationPage from "./ArticlesAdministrationPage";
// import UserProfile from "./UserProfile";
function AdminPage() {
  return (
    <div className="h-screen m-10">
      <div className="flex gap-2 justify-left">
        <Link to="userprofile">
          <ControlButton name="User Profile" className="text-xl font-bold" />
        </Link>
        <Link to="articlescontrol">
          <ControlButton
            name="Control Articles"
            className="text-xl font-bold"
          />
        </Link>
        <Link to="dangerzone">
          <ControlButton
            name="Danger Zone"
            className="text-xl font-bold text-red-600"
          />
        </Link>
      </div>

      <Outlet />
    </div>
  );
}

export default AdminPage;
