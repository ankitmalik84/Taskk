import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import Button from "./common/Button";

export default function NavBar() {
  return (
    <nav className="py-6 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <img
          src={logo}
          alt="logo"
          className="w-10 h-10 object-cover rounded-full"
        />
      </div>

      <ul className="flex space-x-6 text-white text-sm">
        <li>
          <Link to="/" className="hover:text-gray-400">
            Home
          </Link>
        </li>
        <li>
          <Link to="/" className="hover:text-gray-400">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/" className="hover:text-gray-400">
            Our Team
          </Link>
        </li>
        <li>
          <Link to="/" className="hover:text-gray-400">
            Canvas
          </Link>
        </li>
        <li>
          <Link to="/" className="hover:text-gray-400">
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link to="/documentation" className="hover:text-gray-400">
            Documentation
          </Link>
        </li>
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
    </nav>
  );
}
