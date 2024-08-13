import { useState, useEffect } from "react";

export default function Slider({ heading, data }) {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % (data.length - 4));
    }, 2000);
    return () => clearInterval(interval);
  }, [data.length]);

  return (
    <div className="w-full h-[250px] flex flex-col">
      <div className="flex items-center">
        <h2 className="text-white text-2xl mb-4">{heading}</h2>
      </div>
      <div className="relative w-full h-[230px] overflow-hidden">
        <div
          className="flex transition-transform duration-1000 ease-in-out h-full gap-2"
          style={{
            transform: `translateX(-${slideIndex * 20}%)`,
            width: `${data.length}`,
          }}
        >
          {data.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-[230px] h-full"
              style={{ backgroundColor: item.color }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
