import { useState, useEffect } from "react";
import heroBg from "/assets/hero.png";
import Button from "./common/Button";
import data from "../data.json";

export default function Hero() {
  const [slideIndex, setSlideIndex] = useState(0);
  const slides = data.slides;

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full flex flex-col">
      <div
        className="relative w-full h-[450px] sm:h-[500px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      >
        <div className="h-full backdrop-blur-sm flex flex-col">
          {/* Upper Content Section */}
          <div className="relative mt-16 sm:mt-20 md:mt-24 flex flex-col text-center space-y-4">
            <div className="text-white opacity-75 text-md">
              The Ultimate AI Assistant
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              {slides[slideIndex].title}
            </h1>
            {/* above down content */}
            <div className="w-5/6 sm:w-3/6 mx-auto flex flex-col">
              <p className="mt-2 text-white opacity-75">
                {slides[slideIndex].description}
              </p>
              <p className="font-bold">{slides[slideIndex].subtitle}</p>
            </div>
          </div>

          {/* Buttons Section */}
          <div className="absolute bottom-4 right-4 flex flex-row space-x-2">
            <Button
              text="Android App"
              bgcolor="bg-customPurple"
              textcolor="text-white"
              bordercolor="border-customPurple"
              height="h-9"
              width="w-28 sm:w-28"
              onClickFn={() => (window.location.href = "/")}
            />
            <Button
              text="iOS App"
              bgcolor="bg-customPurple"
              textcolor="text-white"
              bordercolor="border-customPurple"
              height="h-9"
              width="w-20 sm:w-28"
              onClickFn={() => (window.location.href = "/")}
            />
            <Button
              text="Learn More"
              bgcolor="bg-transparent"
              textcolor="text-white"
              bordercolor="border-white"
              height="h-9"
              width="w-24 sm:w-28"
              onClickFn={() => (window.location.href = "/")}
            />
          </div>
        </div>
      </div>
      {/* slide control dots */}
      <div>
        <div className="flex flex-row space-x-2 mt-2 w-full justify-center">
          {slides.map((_, idx) => (
            <div
              key={idx}
              className={`w-1 h-1 rounded-full ${
                idx === slideIndex ? "bg-white" : "bg-gray-500"
              }`}
              onClick={() => setSlideIndex(idx)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
