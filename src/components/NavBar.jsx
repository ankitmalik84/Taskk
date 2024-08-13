import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import Button from "./common/Button";
import data from "../data.json";
import ProfileDropDown from "./ProfileDropDown";

export default function NavBar() {
  const location = useLocation();
  const token = localStorage.getItem("token");

  // Utility function to capitalize the first letter of a string
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  // Get the page name by capitalizing the first letter of the pathname
  const pageName = capitalizeFirstLetter(location.pathname.slice(1));

  return (
    <nav className="py-6 flex items-center justify-between">
      {location.pathname === "/documentation" ? (
        <>
          <div className="flex items-center space-x-2 w-[17rem]">
            <img
              src={logo}
              alt="logo"
              className="w-10 h-10 object-cover rounded-full"
            />
            <div className="text-white text-lg w-20">OvaDrive</div>
          </div>
          <div className="flex justify-between w-full">
            <div className="my-auto text-white text-lg">{pageName}</div>
            {token === null ? (
              <div className="flex space-x-4">
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
                  onClickFn={() => (window.location.href = "/login")}
                />
              </div>
            ) : (
              <ProfileDropDown
                userName={JSON.parse(localStorage.getItem("Users")).fullname}
              />
            )}
          </div>
        </>
      ) : (
        <>
          <div className="flex items-center space-x-2">
            <img
              src={logo}
              alt="logo"
              className="w-10 h-10 object-cover rounded-full"
            />
          </div>
          <ul className="flex space-x-6 text-white text-sm">
            {data.navLinks.map((item) => (
              <li key={item.id}>
                <Link to={item.url} className="hover:text-gray-400">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div>
            <Button
              text="Get The App"
              bgcolor="bg-customGray"
              textcolor="text-white"
              bordercolor="border-white-50"
              height="h-9"
              width="w-28"
              onClickFn={() => (window.location.href = "/")}
            />
          </div>
        </>
      )}
    </nav>
  );
}
