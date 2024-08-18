import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

export default function Input({ id, label, placeholder, type, onChangeFn }) {
  const [showPassword, setShowPassword] = useState(false);

  return type === "password" ? (
    <div className="my-1 relative">
      <label className="text-customGray text-md w-full" htmlFor={id}>
        {label}
      </label>
      <div className="relative">
        <span
          className="absolute right-3 top-2 cursor-pointer text-customGray"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
        </span>
        <input
          className="text-sm bg-customBlack2 w-full px-2 py-2 text-white font-normal rounded-lg"
          type={showPassword ? "text" : "password"}
          id={id}
          onChange={onChangeFn}
          placeholder={placeholder}
        />
      </div>
    </div>
  ) : (
    <div className="my-1">
      <label className="text-customGray text-md w-full" htmlFor={id}>
        {label}
      </label>
      <input
        className="text-sm  bg-customBlack2 w-full px-2 py-2 text-white font-normal rounded-lg"
        type={type}
        id={id}
        onChange={onChangeFn}
        placeholder={placeholder}
      />
    </div>
  );
}
