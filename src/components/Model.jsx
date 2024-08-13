import Button from "./Button";
import HighLightText2 from "./HighLightText2";
import { GoArrowUpRight } from "react-icons/go";

export default function Model() {
  return (
    <div className="bg-customBlack2 flex m-auto w-[60%] rounded-lg h-80">
      <div className="w-4/5 text-center mx-auto space-y-7 py-24">
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
