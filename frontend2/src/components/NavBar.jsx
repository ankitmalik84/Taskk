import { useState, useRef } from "react";
import Hamburger from "hamburger-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "/assets/logo.png";
import Button from "./common/Button";
import data from "../data.json";
import ProfileDropDown from "./ProfileDropDown";
import useOnClickOutside from "../hook/useOnClickOutside";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Home");
  const location = useLocation();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const ref = useRef(null);

  useOnClickOutside(ref, () => setOpen(false));

  const handleNavClick = (url) => {
    if (url.startsWith("#")) {
      const section = document.querySelector(url);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(url);
    }
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const pageName = capitalizeFirstLetter(location.pathname.slice(1));

  const renderButtons = () => (
    <>
      <Button
        text="Sign Up"
        bgcolor="bg-transparent"
        textcolor="text-customPurple"
        bordercolor="border-customPurple"
        height="h-9"
        width="w-24"
        onClickFn={() => navigate("/signup")}
      />
      <Button
        text="Login"
        bgcolor="bg-customPurple"
        textcolor="text-white"
        bordercolor="border-customPurple"
        height="h-9"
        width="w-24"
        onClickFn={() => navigate("/signin")}
      />
    </>
  );

  return (
    <nav className="py-4 px-4 flex items-center justify-center">
      {/* Documentation navbar */}
      {location.pathname === "/documentation" ? (
        <>
          <div className="flex items-center space-x-2 w-[17rem]">
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                className="w-8 sm:w-10 h-8 sm:h-10 object-cover rounded-full"
              />
            </Link>
            <div className="text-white text-md sm:text-lg w-20">OvaDrive</div>
          </div>
          <div className="flex justify-between w-full">
            <div className="my-auto text-white text-md sm:text-lg ">
              {pageName}
            </div>
            {token === null ? (
              <>
                <div className="hidden sm:flex space-x-2 sm:space-x-4">
                  {renderButtons()}
                </div>
                <div className="block sm:hidden">
                  <Hamburger
                    size={20}
                    color="#ffffff"
                    toggled={open}
                    toggle={setOpen}
                  />
                  {open && (
                    <div
                      onClick={(e) => e.stopPropagation()}
                      className="flex z-[900] absolute top-8 right-8 bg-customBlack rounded-lg border-[1px]"
                      ref={ref}
                    >
                      <div className="flex flex-col space-y-2 w-32 divide-y-[1px]">
                        <button
                          className="text-sm p-2 flex hover:text-gray-400"
                          onClick={() => handleNavClick("/signup")}
                        >
                          Sign Up
                        </button>
                        <button
                          className="text-sm p-2 flex hover:text-gray-400"
                          onClick={() => handleNavClick("/signin")}
                        >
                          Login
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <ProfileDropDown email={localStorage.getItem("User")} />
            )}
          </div>
        </>
      ) : (
        // Home Navbar
        <div className="fixed z-10 flex justify-between w-11/12 md:w-9/12 border-[1px] border-white rounded-full items-center px-1 sm:p-2 bg-customGray top-6 sm:top-4">
          <div className="flex items-center space-x-2">
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                className="w-10 h-10 object-cover rounded-full"
              />
            </Link>
          </div>
          <div className="hidden sm:flex">
            <ul className="flex space-x-2 md:space-x-5 text-white text-sm items-center">
              {data.navLinks.map((item) =>
                item.name === selected ? (
                  <li
                    key={item.id}
                    className="bg-customBlack2 p-2 rounded-full"
                  >
                    <Link
                      to={item.url}
                      onClick={() => handleNavClick(item.url)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ) : (
                  <li
                    key={item.id}
                    onClick={() => {
                      setSelected(item.name);
                      handleNavClick(item.url);
                    }}
                  >
                    <Link to={item.url} className="hover:text-gray-400">
                      {item.name}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="hidden sm:flex">
            <Button
              text="Get The App"
              bgcolor="bg-customPurple"
              textcolor="text-white"
              bordercolor="border-customPurple"
              height="h-7 sm:h-9"
              width="w-24 sm:w-28"
              onClickFn={() => handleNavClick("/")}
            />
          </div>
          <div className="block sm:hidden">
            <Hamburger
              size={20}
              color="#ffffff"
              toggled={open}
              toggle={setOpen}
            />
            {open && (
              <div
                onClick={(e) => e.stopPropagation()}
                className="flex z-[900] absolute top-0 right-0 bg-customBlack rounded-lg border-[1px]"
                ref={ref}
              >
                <div className="flex flex-col divide-y-2 w-36">
                  <ul className="flex flex-col space-y-2  text-sm divide-y-2">
                    {data.navLinks.map((item) => (
                      <li key={item.id} className="py-2 pl-2">
                        <Link
                          to={item.url}
                          onClick={() => handleNavClick(item.url)}
                          className="hover:text-gray-400"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <button
                    className="text-sm py-2 pl-2 flex hover:text-gray-400"
                    onClick={() => handleNavClick("/")}
                  >
                    Get The App
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
