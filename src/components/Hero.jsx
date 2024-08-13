import { useState, useEffect } from "react";
import heroBg from "../assets/hero.png";
import Button from "./common/Button";

export default function Hero() {
  const [slideIndex, setSlideIndex] = useState(0);

  const slides = [
    {
      title: "Unlock The Power Of Your 2nd Brain",
      description:
        "Ovadrive is designed to turn your phone into an assistant following you everywhere, learning all about your life and helping to utilize that.",
      subtitle: "Own your data, own your life, own your future.",
    },
    {
      title: "Unlock The Power Of Your 3rd Brain",
      description:
        "Our AI Assistant helps you organize and manage your tasks efficiently, giving you more time to focus on what matters.",
      subtitle: "Achieve more with less effort.",
    },
    {
      title: "Unlock The Power Of Your 4th Brain",
      description:
        "Keep up with the latest trends and insights with our smart assistant, ensuring you’re always in the know.",
      subtitle: "Be informed, be prepared.",
    },
    {
      title: "Unlock The Power Of Your 5th Brain",
      description:
        "Our AI adapts to your lifestyle and preferences, making it a perfect companion for your daily activities.",
      subtitle: "A personal touch to technology.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[520px] flex flex-col">
      <div
        className="relative w-full h-[500px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      >
        <div className="h-full backdrop-blur-sm flex flex-col">
          {/* Upper Content Section */}
          <div className="relative mt-24 flex flex-col text-center space-y-4">
            <div className="text-white opacity-75 text-md">
              The Ultimate AI Assistant
            </div>
            <h1 className="text-5xl font-bold text-white">
              {slides[slideIndex].title}
            </h1>
            {/* above down content */}
            <div className="w-3/6 mx-auto flex flex-col">
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
              width="w-28"
              onClickFn={() => (window.location.href = "/")}
            />
            <Button
              text="iOS App"
              bgcolor="bg-customPurple"
              textcolor="text-white"
              bordercolor="border-customPurple"
              height="h-9"
              width="w-28"
              onClickFn={() => (window.location.href = "/")}
            />
            <Button
              text="Learn More"
              bgcolor="bg-transparent"
              textcolor="text-white"
              bordercolor="border-white"
              height="h-9"
              width="w-28"
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
