import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import avatarImg from "/avatar.jpg";
import { useNavigate, Link } from "react-router-dom";

const Profile = ({ user }) => {
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  // logout
  const handleLogout = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
        navigate("/");
        document.getElementById("my-drawer-4").checked = false; // Close drawer
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="drawer drawer-end z-50">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-4"
            className="drawer-button btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              {user?.photoURL ? (
                <img alt="User Avatar" src={user.photoURL} />
              ) : (
                <img alt="Default Avatar" src={avatarImg} />
              )}
            </div>
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <Link
                to="/update-profile"
                onClick={() =>
                  (document.getElementById("my-drawer-4").checked = false)
                }
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                to="/order"
                onClick={() =>
                  (document.getElementById("my-drawer-4").checked = false)
                }
              >
                Order
              </Link>
            </li>
            <li>
              <Link
                to="/settings"
                onClick={() =>
                  (document.getElementById("my-drawer-4").checked = false)
                }
              >
                Settings
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard"
                onClick={() =>
                  (document.getElementById("my-drawer-4").checked = false)
                }
              >
                Dashboard
              </Link>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
