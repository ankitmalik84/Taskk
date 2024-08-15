import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../reducer/authReducer";

export default function ProfileDropDown({ email }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/documentation");
    window.location.reload();
  };

  return (
    <>
      <div
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="bg-pink-600 w-10 h-10 text-center flex justify-center items-center rounded-full font-bold p-2 text-xl cursor-pointer mr-3"
      >
        {email.charAt(0)}
      </div>
      {isOpen && (
        <div className="absolute top-[72px] right-4 sm:right-16 mx-2 md:mx-4 border-2 rounded-lg">
          <div
            onClick={handleLogout}
            className="p-1 bg-customBlack2 border-1 rounded-lg shadow-md cursor-pointer"
          >
            Log Out
          </div>
        </div>
      )}
    </>
  );
}
