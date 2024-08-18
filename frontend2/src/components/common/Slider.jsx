import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function SliderComp({ heading, data }) {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    speed: 1000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="h-full flex flex-col">
      <h2 className="text-white text-3xl mb-8">{heading}</h2>
      <Slider {...settings}>
        {data.map((item) => (
          <div key={item.id} className="h-[300px] mx-2">
            <img
              className="h-full w-full object-cover rounded-md px-1"
              src={item.img}
              alt={item.title || "Slider Image"}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
