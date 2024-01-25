import { FaUserLock } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { useState } from "react";
import { Link } from "react-router-dom";
import InputField from "./InputField";

const LogInPage = () => {
  const [inputData, setInputData] = useState({ email: "", password: "" });

  const InputHandler = (e, type) => {
    setInputData({ ...inputData, [type]: e.target.value });
  };
  const loginUser = async () => {
    const { email, password } = inputData;
    if (!email || !password) {
      alert("Please fill in all input fields.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    if (password.length < 4) {
      alert("Password should be at least 4 characters long.");
      return;
    }
  };

  return (
    <>
      <div>
        <div className="h-[7rem]"></div>
        <div className="md:w-[30%] border-[#7b7b7b] shadow- bg-opacity-30 bg-white border-2 round-[10px] md:mx-[auto] mx-4 rounded-xl py-[20px]">
          <h1 className="relative before:absolute before:bg-purple-500 before:bottom-[-1px] before:content-[''] before:w-[100%] before:h-[2.5px] w-[fit-content] mx-[auto] text-[20px] text-center font-bold md:text-[40px] text-purple-500">
            Login
          </h1>
          <form className="my-[20px] w-[80%] mx-[auto] ">
            <InputField InputHandler={(e) => InputHandler(e, "email")} value={inputData.email} placeholder="Email" type="email" icon={<MdAlternateEmail />} />
            <InputField InputHandler={(e) => InputHandler(e, "password")} value={inputData.password} placeholder="Password" type="password" icon={<FaUserLock />} />
          </form>
          {/* ..........................,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,............................................... */}
          <button onClick={loginUser} className="text-white px-9 py-3 flex justify-center m-[auto] bg-purple-500 rounded-xl">
            Login
          </button>
          <p className="text-center text-[#6a6262] font-semibold my-[20px]">
            Don't have an account?{" "}
            <Link to="/sign">
              <button className="text-[red] underline">Click here</button>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default LogInPage;
