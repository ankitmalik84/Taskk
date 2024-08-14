import axios from "axios";
import BottomWarning from "../components/ButtonWarning";
import Button from "../components/common/Button";
import HeadPara from "../components/common/HeadPara";
import Input from "../components/common/Input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import hero from "../assets/hero.png";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const apiUrl = import.meta.env.VITE_URL;
  const navigate = useNavigate();

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post(`${apiUrl}/user/signup`, {
        email,
        password,
      });
      const token = "Bearer " + res.data.token;
      localStorage.setItem("token", token);
      localStorage.setItem("Users", JSON.stringify(res.data.user));
      navigate("/documentation");
    } catch (err) {
      console.log(err);
      const errMsg = err.response?.data?.message || "An error occurred";
      alert(errMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="bg-customBlack2 h-screen flex justify-center items-center">
        <div className="flex bg-customBlack m-auto w-[60%] h-[85%]">
          <div className="w-1/2 flex flex-col justify-center items-center">
            {/* Left side signup form section and logo */}
            <div className="flex flex-col gap-8">
              <img
                src={logo}
                alt="logo"
                className="w-8 h-8 object-cover rounded-full"
              />
              {/* Form */}
              <div className="w-[22rem] rounded-xl p-4 m-auto">
                <HeadPara title="Join OvaDrive!" highlightIndex={1} />
                <div className="gap-2 flex flex-col my-6">
                  <Input
                    onChangeFn={(e) => setEmail(e.target.value)}
                    id={"email"}
                    label={"Email"}
                    placeholder={"example@gmail.com"}
                    type={"email"}
                  />
                  <Input
                    onChangeFn={(e) => setPassword(e.target.value)}
                    id={"password"}
                    label={"Password"}
                    placeholder={"minimum 8 characters"}
                    type={"password"}
                  />
                  <Input
                    onChangeFn={(e) => setConfirmPassword(e.target.value)}
                    id={"confirmPassword"}
                    label={"Confirm Password"}
                    placeholder={"confirm your password"}
                    type={"password"}
                  />
                </div>
                <Button
                  onClickFn={handleSignup}
                  text={loading ? "Loading..." : "Sign Up"}
                  textcolor="text-white"
                  bgcolor="bg-customPurple"
                  bordercolor="border-customPurple"
                  height={"h-10"}
                  disabled={loading}
                />
                <BottomWarning
                  text={"Already have an account?"}
                  linkText={"Sign In"}
                  path={"/signin"}
                />
              </div>
            </div>
          </div>
          {/* Right side image */}
          <div className="w-1/2">
            <img src={hero} alt="side image" className="object-cover h-full" />
          </div>
        </div>
      </div>
    </>
  );
}
