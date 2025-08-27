import React from "react";

const LoginComponent = () => {
  return (
    <div className="container grid grid-row-4 pr-4 w-full items-center h-full overflow-hidden">
      <div className="my-auto mt-5">
        <h2>Welcome Back</h2>
        <p className="mt-2">Sign in to continue</p>
      </div>

      <div className="mx-auto mt-5">
        <p>
          Don't have an account?{" "}
          <a className="underline cursor-pointer">Sign up</a>
        </p>
      </div>

      <form className="flex flex-col mt-6 gap-6">
        <div>
          <label id="email">Email</label>
          <input name="email" type="text" className="input-box mx-auto mt-2" />
        </div>

        <div>
          <label id="email">Password</label>
          <input
            name="password"
            type="password"
            className="input-box mx-auto mt-2"
          />
        </div>

        <div className="flex flex-row gap-2 items-center ">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="custom-checkbox"
          />
          <label htmlFor="remember-me" className="block text-sm text-[#4a5565]">
            Remember me
          </label>
        </div>

        <div className="flex flex-row justify-center gap-5 mt-4">
          <div>
            <button className="btn">Log in </button>
          </div>

          <div>
            <button className="btn btn-secondary">
              Google{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="google-icon"
              >
                <path d="M3.06364 7.50914C4.70909 4.24092 8.09084 2 12 2C14.6954 2 16.959 2.99095 18.6909 4.60455L15.8227 7.47274C14.7864 6.48185 13.4681 5.97727 12 5.97727C9.39542 5.97727 7.19084 7.73637 6.40455 10.1C6.2045 10.7 6.09086 11.3409 6.09086 12C6.09086 12.6591 6.2045 13.3 6.40455 13.9C7.19084 16.2636 9.39542 18.0227 12 18.0227C13.3454 18.0227 14.4909 17.6682 15.3864 17.0682C16.4454 16.3591 17.15 15.3 17.3818 14.05H12V10.1818H21.4181C21.5364 10.8363 21.6 11.5182 21.6 12.2273C21.6 15.2727 20.5091 17.8363 18.6181 19.5773C16.9636 21.1046 14.7 22 12 22C8.09084 22 4.70909 19.7591 3.06364 16.4909C2.38638 15.1409 2 13.6136 2 12C2 10.3864 2.38638 8.85911 3.06364 7.50914Z"></path>
              </svg>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginComponent;
