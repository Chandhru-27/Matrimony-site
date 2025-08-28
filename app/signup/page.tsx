import LoginComponent from "@/components/login";
import ProfileComponent from "@/components/profile";
import SignupComponent from "@/components/signup";
import React from "react";

const SignupPage = () => {
  return (
    <section className="flex flex-col lg:flex-row lg:h-screen h-full overflow-y-auto lg:overflow-hidden">
      {/* Image Section */}
      <div className="apply-bg-image flex flex-col justify-center items-center w-full lg:w-[60%] h-[100vh] lg:h-full  bg-gray-200 ">

        <div>
          <h1 className="text-4xl font-bold text-white">Some text here</h1>

        </div>

        <div></div>
      </div>

      {/* Signup Section */}
      <div className="w-full lg:w-[40%] flex items-center justify-center p-8">
        <div className="max-w-md w-full">
            <SignupComponent/>
        </div>
      </div>
    </section>
  );
};

export default SignupPage;
