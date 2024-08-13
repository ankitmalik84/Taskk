import axios from "axios";
import BottomWarning from "../components/ButtonWarning";
import Button from "../components/common/Button";
import HeadPara from "../components/common/HeadPara";
import Input from "../components/common/Input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import hero from "../assets/hero.png";

export default function Signin() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  return (
    <>
      <div className="bg-customBlack2 h-screen flex justify-center items-center">
        <div className="flex bg-customBlack m-auto w-[60%] h-[85%]">
          <div className="w-1/2 flex flex-col justify-center items-center">
            {/*left side signin form section and logo*/}
            <div className="flex flex-col gap-8">
              <img
                src={logo}
                alt="logo"
                className="w-8 h-8 object-cover rounded-full"
              />

              {/* Form */}
              <div className=" w-[22rem] rounded-xl p-4 m-auto">
                <HeadPara title="Welcom back to OvaDrive!" highlightIndex={3} />
                <div className="gap-2 flex flex-col my-6">
                  <Input
                    onChangeFn={(e) => {
                      setUserName(e.target.value);
                    }}
                    id={"email"}
                    label={"Email"}
                    placeholder={"example@gmail.com"}
                    type={"email"}
                  />
                  <Input
                    onChangeFn={(e) => {
                      setPassword(e.target.value);
                    }}
                    id={"password"}
                    label={"Password"}
                    placeholder={"minimum 8 characters"}
                    type={"password"}
                  />
                </div>
                <Button
                  onClickFn={async () => {
                    axios
                      .post("http://localhost:3000/api/v1/user/signin", {
                        userName,
                        password,
                      })
                      .then((res) => {
                        // console.log(res.data.token);
                        const token = "Bearer " + res.data.token;
                        localStorage.setItem("token", token);
                        navigate("/dashboard");
                      })
                      .catch((err) => {
                        console.log(err);
                        const errMsg = err.response.data.message;
                        alert(errMsg);
                      });
                  }}
                  text="Sign In"
                  textcolor="text-white"
                  bgcolor="bg-customPurple"
                  bordercolor="border-customPurple"
                  height={"h-10"}
                />
                <BottomWarning
                  text={"Don't have an account?"}
                  linkText={"Register"}
                  path={"/signup"}
                />
              </div>
            </div>
          </div>
          {/* right side  Image */}
          <div className="w-1/2">
            <img src={hero} alt="side image" className="object-cover h-full" />
          </div>
        </div>
      </div>
    </>
  );
}
