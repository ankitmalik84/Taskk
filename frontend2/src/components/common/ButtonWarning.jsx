import { Link } from "react-router-dom";

export default function BottomWarning({ text, linkText, path }) {
  return (
    <div className="text-center text-sm py-4">
      {text}
      <Link
        className="ml-2 underline cursor-pointer text-customPurple"
        to={path}
      >
        {linkText}
      </Link>
    </div>
  );
}
