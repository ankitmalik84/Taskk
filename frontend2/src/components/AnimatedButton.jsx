import { PiStarFour } from "react-icons/pi";
import { FiArrowRight } from "react-icons/fi"; // Importing an arrow icon

export default function AnimatedButton({
  text,
  bgcolor,
  textcolor,
  bordercolor,
  height,
  width,
  onClickFn,
  icon: Icon,
}) {
  return (
    <div className="relative inline-block transition-rotate duration-300 ease-out hover:-rotate-[13deg] group">
      {/* Decorative stars around the button (initially hidden) */}
      <div className="absolute top-[-20px] left-[-10px] opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100">
        <PiStarFour className="text-gray-200 text-xl" />
      </div>
      <div className="absolute top-[-32px] right-[-15px] opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100">
        <PiStarFour className="text-gray-200 text-4xl" />
      </div>
      <div className="absolute bottom-[-30px] left-[-30px] opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100">
        <PiStarFour className="text-gray-200 text-4xl" />
      </div>
      <div className="absolute bottom-[25px] right-[-15px] opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100">
        <PiStarFour className="text-gray-200" />
      </div>
      <div className="absolute bottom-[25px] left-[-20px] opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100">
        <PiStarFour className="text-gray-200" />
      </div>
      <div className="absolute bottom-[-25px] right-[-8px] opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100">
        <PiStarFour className="text-gray-200 text-2xl" />
      </div>
      {/* Button container with hover effects */}
      <div className="bg-black rounded-full transform transition-transform duration-300 ease-out group-hover:scale-105 group-hover:-translate-x-1 group-hover:translate-y-2">
        <button
          type="button"
          className={`relative ${width || "w-full"} ${
            height || "h-auto"
          } ${bgcolor} rounded-[50px] ${textcolor}
         ${bordercolor} text-sm flex items-center 
        gap-2 justify-center group-hover:translate-x-1 group-hover:-translate-y-2 border-[1px]`}
          onClick={onClickFn}
        >
          {text}
          {Icon && <Icon className="inline-block mr-2" />}
        </button>
      </div>
    </div>
  );
}
