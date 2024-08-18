import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import data from "../data.json";
import SliderComp from "../components/common/Slider";
import Model from "../components/Model";
import HighLightText2 from "../components/common/HighLightText2";
import TextImage from "../components/common/TextImage";
import OurTeam from "../components/OurTeam";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const main = useRef();
  const hero = useRef();
  const text = useRef();
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial state of text
      gsap.set(text.current, {
        opacity: 0,
        scale: 10,
        pointerEvents: "none", // Disable pointer events initially
      });

      // Animation for hiding container and showing text
      gsap.to(hero.current, {
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: main.current,
          start: "-=18%",
          end: "+=50%",
          scrub: true,
          pin: true, // Pin the Hero section during the animation
          onEnter: () => {
            gsap.to(text.current, {
              opacity: 1,
              scale: 1,
              duration: 0.6,
              pointerEvents: "auto", // Enable pointer events when the text is visible
            });
          },
          onLeaveBack: () => {
            gsap.to(text.current, {
              opacity: 0,
              scale: 20,
              duration: 1,
              pointerEvents: "none", // Disable pointer events when text is not visible
            });
          },
        },
      });
    }, main);

    // Initialize AOS for fade animations
    AOS.init({
      duration: 700, // Animation duration in milliseconds
      easing: "ease-out-cubic",
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="px-4 lg:px-12 pt-24 sm:pt-16 overflow-x-clip">
      <NavBar />
      {/* Hero Animation */}
      <div
        ref={main}
        className="relative h-[440px] sm:h-[500px] overflow-hidden"
      >
        <div ref={hero} className="absolute inset-0">
          <Hero />
        </div>
        {/* Animated Text Section */}
        <div
          ref={text}
          className="absolute inset-0 flex items-center justify-center h-[440px] sm:h-[500px] bg-customBlack"
        >
          <h1 className="text-[17vw] md:text-[12vw] font-extrabold bg-texture-gradient bg-clip-text text-transparent ">
            OVA DRIVE
          </h1>
        </div>
      </div>
      <div>
        {/* Image Paragraph Section */}
        <div className="flex flex-col gap-8">
          {data.content.map((item) => (
            <TextImage
              aos={item.aos}
              key={item.id}
              title={item.title}
              description={item.description}
              highlightIndex={item.highlightIndex}
              img={item.img}
              position={item.position}
            />
          ))}
        </div>
        {/* Highlight Text */}
        <div
          className="flex w-full lg:w-[64%] mx-auto py-16 sm:py-24"
          data-aos="zoom-out-up"
          data-aos-delay="200"
        >
          <HighLightText2
            text={
              "OvaDrive isn’t just about saving your chats," +
              "\n" +
              "It's the beginning to make your Soul Immortal"
            }
            index={13}
          />
        </div>
        {/* Auto Slider */}
        <div data-aos="zoom-out">
          <div
            className="flex flex-col my-24 h-[380px]"
            data-aos="slide-up"
            data-aos-delay="10"
          >
            <SliderComp data={data.slider1} heading="OvalDrive" />
          </div>
        </div>
        {/* Our Team */}
        <div
          className="py-16 sm:py-24"
          id="our-team"
          data-aos="zoom-out-up"
          data-aos-delay="50"
        >
          <OurTeam />
        </div>
        {/* Model */}
        <div className="mt-0 sm:mt-44" data-aos="fade-up">
          <Model />
        </div>
      </div>
    </div>
  );
}
