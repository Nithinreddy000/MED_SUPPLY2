import Image from "next/image";

import LoginForm from "@/components/LoginForm";
import sideImg from "../assets/sideimg.png";
export default function Login() {
  return (
    <div className="flex justify-normal w-screen">
      <div className="flex justify-center items-center w-1/2 h-screen">
        <LoginForm />
      </div>
      <div className="flex justify-center bg-cover w-1/2 h-screen">
        <Image src={sideImg} alt={"smtg"} className="w-3/4 self-center" />
      </div>
    </div>
  );
}
