import { fetchSignUp } from "@/utils/fetchSignUp";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";

function SignUp() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  async function onSubmit(data) {
    if (data.password == data.confirm_password) {
      const res = await fetchSignUp(data);
      console.log(res)
      if (res.success = "true") {
        console.log(res.token)
        localStorage.setItem("token", res.token);
        router.push("/");
      } else {
        document.getElementById("Message").innerHTML = "Email already exists!";
      }
    } else {
      document.getElementById("Message").innerHTML = "Passwords do NOT match!";
    }
  }
  return (
    <div className="bg-[#f5f5f5] min-h-screen flex flex-col items-center">
      <Link href="/">
        <h1 className="font-semibold text-4xl m-16">
          Note <span className="text-[#33aaff]">Store</span>
        </h1>
      </Link>
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Sign up</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("name")}
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              placeholder="Full Name"
              required
            />

            <input
              {...register("email")}
              type="email"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              placeholder="Email"
              required
            />

            <input
              {...register("password")}
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              placeholder="Password"
              required
            />
            <input
              {...register("confirm_password")}
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              placeholder="Confirm Password"
              required
            />

            <span id="Message" className="text-red-500"></span>

            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-[#33aaff] text-white hover:bg-sky-700 focus:outline-none my-1"
            >
              Create Account
            </button>

            <div className="text-center text-sm text-grey-dark mt-4">
              By signing up, you agree to the
              <a
                className="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Terms of Service
              </a>{" "}
              and
              <a
                className="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Privacy Policy
              </a>
            </div>
          </form>
        </div>

        <div className="text-grey-dark mt-6">
          Already have an account?
          <Link
            className="no-underline border-b border-blue text-blue"
            href="/signin"
          >
            Sign in
          </Link>
          .
        </div>
      </div>
    </div>
  );
}

export default SignUp;
