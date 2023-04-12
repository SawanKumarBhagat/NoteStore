import { fetchSignIn } from "@/utils/fetchSignIn";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";

function LogIn() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    const res = await fetchSignIn(data);
    if (res.success == "true") {
      localStorage.setItem("token", res.token);
      router.push("/");
    } else {
      console.log(res);
      document.getElementById("Message").innerHTML = res.error;
    }
  }

  return (
    <div className="bg-[#f5f5f5] min-h-screen flex flex-col items-center">
      <h1 className="font-semibold text-4xl m-16">
        Note <span className="text-[#33aaff]">Store</span>
      </h1>
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Sign In</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-wrap -mx-3 mb-6"
          >
            <div className="w-full md:w-full px-3 mb-6">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="Password"
              >
                Email address
              </label>
              <input
                {...register("email")}
                className="block border border-grey-light w-full p-3 rounded mb-4"
                placeholder="Email"
                type="email"
                required
              />
            </div>
            <div className="w-full md:w-full px-3 mb-6">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="Password"
              >
                Password
              </label>
              <input
                {...register("password")}
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                placeholder="Password"
                required
              />
              <span id="Message" className="text-red-500"></span>
            </div>
            <div className="w-full flex items-center justify-between px-3 mb-3 ">
              <div>
                <a href="#" className="text-[#33aaff] text-sm tracking-tight">
                  Forgot password
                </a>
              </div>
            </div>
            <div className="w-full md:w-full px-3 mb-6">
              <button
                type="submit"
                className="w-full text-center py-3 rounded bg-[#33aaff] text-white hover:bg-sky-700 focus:outline-none my-1"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>

        <div className="text-grey-dark mt-6">
          <p>Dont't have an account?</p>
          <Link
            className="no-underline border-b border-blue text-blue"
            href="/signup"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
