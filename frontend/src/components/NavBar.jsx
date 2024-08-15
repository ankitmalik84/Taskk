import { useState, useRef } from "react";
import Hamburger from "hamburger-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import Button from "./common/Button";
import data from "../data.json";
import ProfileDropDown from "./ProfileDropDown";
import useOnClickOutside from "../hook/useOnClickOutside";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const token = localStorage.getItem("token");
  const ref = useRef(null);

  useOnClickOutside(ref, () => setOpen(false));

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
        onClickFn={() => (window.location.href = "/signup")}
      />
      <Button
        text="Login"
        bgcolor="bg-customPurple"
        textcolor="text-white"
        bordercolor="border-customPurple"
        height="h-9"
        width="w-24"
        onClickFn={() => (window.location.href = "/signin")}
      />
    </>
  );

  return (
    <nav className="py-4 px-4 flex items-center justify-between">
      {location.pathname === "/documentation" ? (
        <>
          <div className="flex items-center space-x-2 w-[17rem]">
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                className="w-6 sm:w-10 h-6 sm:h-10 object-cover rounded-full"
              />
            </Link>
            <div className="text-white text-md sm:text-lg w-20">OvaDrive</div>
          </div>
          <div className="flex justify-between w-full">
            <div className="my-auto text-white text-sm sm:text-lg ">
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
                          onClick={() => (window.location.href = "/signup")}
                        >
                          Sign Up
                        </button>
                        <button
                          className="text-sm p-2 flex hover:text-gray-400"
                          onClick={() => (window.location.href = "/signin")}
                        >
                          Login
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <ProfileDropDown
                email={JSON.parse(localStorage.getItem("Users"))}
              />
            )}
          </div>
        </>
      ) : (
        <div className="flex justify-between w-full">
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
            <ul className="flex space-x-1 sm:space-x-2 md:space-x-6 text-white text-sm items-center">
              {data.navLinks.map((item) => (
                <li key={item.id}>
                  <Link to={item.url} className="hover:text-gray-400">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden sm:flex">
            <Button
              text="Get The App"
              bgcolor="bg-customGray"
              textcolor="text-white"
              bordercolor="border-white-50"
              height="h-7 sm:h-9"
              width="w-24 sm:w-28"
              onClickFn={() => (window.location.href = "/")}
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
                className="flex z-[900] absolute top-8 right-4 bg-customBlack rounded-lg border-[1px]"
                ref={ref}
              >
                <div className="flex flex-col divide-y-2 w-36">
                  <ul className="flex flex-col space-y-2  text-sm divide-y-2">
                    {data.navLinks.map((item) => (
                      <li key={item.id} className="py-2 pl-2">
                        <Link to={item.url} className="hover:text-gray-400">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <button className="text-sm py-2 pl-2 flex hover:text-gray-400">
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
