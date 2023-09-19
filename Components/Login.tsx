"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
function Login() {
  return (
    <div className=" bg-gray-100 h-screen text-center flex flex-col justify-center items-center ">
      <img alt="logo" className="w-52 h-52" src="/xh.png" />

      <button
        onClick={() => signIn("google", { callbackUrl: "/" })}
        className="text-2xl flex  text-black  rounded-lg border border-[] font-semibold py-2 px-4  "
      >
        <img
          className="w-8 h-8 mr-2 object-cover"
          src="https://blogjs.tech/_next/image?url=%2FGoogle.png&w=48&q=75"
          alt=""
        />
        Continue with google
      </button>
    </div>
  );
}

export default Login;
