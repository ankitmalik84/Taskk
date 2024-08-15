import Button from "./common/Button";
import HighLightText2 from "./common/HighLightText2";
import { GoArrowUpRight } from "react-icons/go";

export default function Model() {
  return (
    <div className="bg-customBlack2 flex m-auto w-[90%] sm:w-[85%] md:w-[80%] lg:w-[65%] rounded-lg h-60 sm:h-80">
      <div className="w-5/6 sm:w-4/5 text-center mx-auto space-y-7 py-14 sm:py-24">
        <div>
          <HighLightText2
            text="Master your data, seize your life, shape your future with OvaDrive"
            index={10}
          />
        </div>
        <div className="flex justify-center">
          <Button
            text="Try OvaDrive"
            bgcolor="bg-white"
            textcolor="text-customBlack"
            bordercolor="border-white"
            height="h-10"
            width="w-32"
            onClickFn={() => (window.location.href = "/")}
            icon={GoArrowUpRight}
          />
        </div>
      </div>
    </div>
  );
}
