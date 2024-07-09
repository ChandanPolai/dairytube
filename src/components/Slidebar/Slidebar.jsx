import React from "react";
import { icons } from "../../assets/Icons";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function Slidebar({ isOpen }) {
//   const username = useSelector((state) => state.auth.userData?.username);
const username = 'chandan polai'
  const NavElements = [
    {
      name: "Home",
      route: "/",
      icon: <span className="h-full w-full">{icons.Home}</span>,
    },
    {
      name: "Tweets",
      route: "/tweets",
      icon: icons.Tweets,
    },
    {
      name: "Liked Videos",
      route: "/feed/liked",
      className: "hidden sm:block",
      icon: icons.Like,
    },
    {
      name: "History",
      route: "/feed/history",
      // className: `${username ? "hidden sm:block" : ""}`,
      icon: icons.history,
    },
    {
      name: "Subscriptions",
      route: `/channel/${username}/subscribed`,
      // className: `${username ? "" : "hidden"}`,
      icon: icons.Subscription,
    },
    {
      name: "My Content",
      route: `/channel/${username}`,
      icon: <span className="size-full bg-red-500">{icons.MyContent}</span>,
    },
    {
      name: "Playlists",
      route: `/channel/${username}/playlists`,
      // className: `${username ? "hidden sm:block" : "hidden"}`,
      icon: icons.folder,
    },
    {
      name: "Admin",
      route: "/admin/dashboard",
      // className: `${username ? "" : "hidden"}`,
      icon: icons.Admin,
    },
    {
      name: "Subscribers",
      route: "/feed/subscribers",
      className: `hidden sm:block`,
      icon: icons.Subscribers,
    },
    {
      name: "Support",
      route: "/support",
      className: " sm:block mt-auto  ",
      icon: icons.support,
    },
    {
      name: "Settings",
      route: "/settings",
      // className: `${username ? "hidden sm:block" : "hidden"}`,
      icon: icons.Settings,
    },
  ];

  return (
    <div>
      <aside
        id="sidebar-multi-level-sidebar"
        className={`fixed top-20 left-0 z-40 w-64 h-screen transition-transform transform  ${
          isOpen ? "translate-x-0 " : "-translate-x-full"
        }`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50  dark:bg-customBlack">
          <ul className="space-y-2 font-medium">
            {NavElements.map((item, index) => (
              <li key={index} className={`${item.className || ""}`}>
                <NavLink
                  to={item.route}
                  end
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "bg-blue-600 text-white"
                        : "text-gray-300 hover:bg-blue-600 hover:text-white"
                    } flex items-center p-2 rounded-lg`
                  }
                >
                  <span className="w-5 h-5">{item.icon}</span>
                  <span className="ml-4">{item.name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default Slidebar;
