import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import HeadPara from "../components/common/HeadPara";
import data from "../data.json";
import Slider from "../components/common/Slider";
import Model from "../components/Model";
import HighLightText2 from "../components/common/HighLightText2";

export default function Home() {
  return (
    <div className="px-12 py-2 bg-customBlack">
      <NavBar />
      <Hero />
      {data.content.map((item) => (
        <HeadPara
          key={item.id}
          title={item.title}
          description={item.description}
          highlightIndex={item.highlightIndex}
        />
      ))}
      <div className="flex w-[64%] mx-auto">
        <HighLightText2
          text={
            "OvaDrive isn’t just about saving your chats," +
            "\n" +
            "Its the beginning to make your Soul Immortal"
          }
          index={13}
        />
      </div>
      <div className="flex flex-col gap-14 my-24">
        <Slider data={data.slider1} heading="OvalDrive" />
        <Slider data={data.slider2} heading="Careers" />
        <Slider data={data.slider3} heading="Our Team" />
      </div>
      <div className="my-16">
        <Model />
      </div>
    </div>
  );
}
