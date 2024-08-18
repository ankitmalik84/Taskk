import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import data from "../data.json";

export default function OurTeam() {
  const teamMembers = data.team;

  const leftSliderSettings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    speed: 800,
    arrows: false,
  };

  const rightSliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    speed: 800,
    arrows: false,
  };

  return (
    <div className="container mx-auto h-[500px]">
      <h1 className="text-3xl font-bold mb-10">Our Team</h1>
      <div className="flex flex-col md:flex-row">
        {/* Left Slider: Content and Image */}
        <div className="w-full sm:w-1/2">
          <Slider {...leftSliderSettings}>
            {teamMembers.map((member) => (
              <div key={member.id} className="h-[280px] sm:h-[420px] w-full">
                <div className="flex h-full">
                  <div className="w-1/2 p-1 sm:p-2">
                    <h2 className="text-xl sm:text-2xl font-semibold">
                      {member.name}
                    </h2>
                    <p className="mt-2 sm:mt-4 text-sm sm:text-base">
                      {member.data}
                    </p>
                  </div>
                  <div className="w-1/2">
                    <img
                      className="object-cover w-full h-full rounded-md border-2"
                      src={member.img}
                      alt={member.name}
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Right Slider: Next Two Images */}
        <div className="hidden sm:block w-1/2">
          <Slider {...rightSliderSettings}>
            {teamMembers.map((_, index) => {
              const nextIndex1 = (index + 1) % teamMembers.length;

              return (
                <div key={index} className="h-[420px] pt-[55px]">
                  <div className="p-1">
                    <img
                      className="h-[360px] w-full object-cover rounded-md border-2"
                      src={teamMembers[nextIndex1].img}
                      alt={teamMembers[nextIndex1].name}
                    />
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}
