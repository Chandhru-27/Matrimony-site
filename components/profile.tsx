"use client";
import React, { useState, useEffect } from "react";

const STEPS = 2;

const ProfileComponent = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    gender: "",
    maritalStatus: "",
    profession: "",
    education: "",
    address: "",
    bio: "",
    community: "",
    caste: "",
    subCaste: "",
    zodiacSign: "",
  });

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let requiredFields = [
      "gender",
      "maritalStatus",
      "profession",
      "education",
      "address",
      "bio",
      "community",
    ];

    if (formData.community !== "Caste No Bar") {
      requiredFields.push("caste", "subCaste", "zodiacSign");
    }

    const filled = requiredFields.filter(
      (field) => formData[field as keyof typeof formData]?.trim() !== ""
    ).length;

    setProgress(Math.round((filled / requiredFields.length) * 100));
  }, [formData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const nextStep = () => {
    if (currentStep < STEPS) setCurrentStep(currentStep + 1); // assuming 3 steps
  };
  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="container grid grid-row-4 pr-4 w-full items-center h-full overflow-hidden">
      <div className="my-auto mt-5">
        <h2>Customize Your Profile</h2>
      </div>

      {/* Progress bar */}
      <div className="">
        <div className="mb-1 mt-4 text-base font-medium">
          <p>You're {progress}% there</p>
        </div>
        <div className="w-full flex justify-center">
          <div className="w-full max-w-sm bg-gray-200 rounded-full h-2.5 mb-4">
            <div
              className="bg-[#00c2b2] h-2.5 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>

      <form className="from-container flex flex-col gap-5 p-5">
        {currentStep === 1 && (
          <>
            <div className="gender">
              <label htmlFor="gender" className="block mb-2 text-gray-700">
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                className="input-box w-full"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="marital-status">
              <label
                htmlFor="maritalStatus"
                className="block mb-2 text-gray-700"
              >
                Marital Status
              </label>
              <select
                id="maritalStatus"
                name="maritalStatus"
                className="input-box w-full"
                value={formData.maritalStatus}
                onChange={handleChange}
                required
              >
                <option value="">Select</option>
                <option value="married">Married</option>
                <option value="unmarried">Unmarried</option>
                <option value="divorced">Divorced</option>
                <option value="widowed">Widowed</option>
              </select>
            </div>

            <div className="profession">
              <label htmlFor="profession">Profession</label>
              <input
                name="profession"
                type="text"
                className="input-box mx-auto mt-2"
                placeholder="eg: Software Engineer"
                value={formData.profession}
                onChange={handleChange}
                required
              />
            </div>

            <div className="education">
              <label htmlFor="education">Education</label>
              <input
                name="education"
                type="text"
                className="input-box mx-auto mt-2"
                placeholder="eg: B.E , BSc"
                value={formData.education}
                onChange={handleChange}
                required
              />
            </div>

            <div className="address">
              <label htmlFor="address">Address</label>
              <input
                name="address"
                type="text"
                className="input-box mx-auto mt-2"
                placeholder="eg: Enter your residential address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
          </>
        )}

        {currentStep === 2 && (
          <>
            <div className="bio">
              <label htmlFor="bio">Short Bio</label>
              <input
                name="bio"
                type="text"
                className="input-box mx-auto mt-2"
                placeholder="eg: I'm xyz working in example.inc"
                value={formData.bio}
                onChange={handleChange}
                required
              />
            </div>

            <div className="community">
              <label htmlFor="community" className="block mb-2 text-gray-700">
                Community
              </label>
              <select
                id="community"
                name="community"
                className="input-box w-full"
                value={formData.community}
                onChange={handleChange}
                required
              >
                <option value="">Select</option>
                <option value="Caste No Bar">Caste No Bar</option>
                <option value="General / OC">General / OC</option>
                <option value="BC">BC</option>
                <option value="MBC & DNC">MBC & DNC</option>
                <option value="SC">SC</option>
                <option value="ST">ST</option>
              </select>
            </div>

            {formData.community !== "Caste No Bar" && (
              <>
                <div className="caste">
                  <label htmlFor="caste">Caste</label>
                  <input
                    name="caste"
                    type="text"
                    className="input-box mx-auto mt-2"
                    placeholder="eg: Mudaliyar"
                    value={formData.caste}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="sub-caste">
                  <label htmlFor="subCaste">Sub Caste</label>
                  <input
                    name="subCaste"
                    type="text"
                    className="input-box mx-auto mt-2"
                    placeholder="eg: Agamudaiyar"
                    value={formData.subCaste}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="zodiacSign">
                  <label htmlFor="zodiacSign">Zodiac Sign</label>
                  <input
                    name="zodiacSign"
                    type="text"
                    className="input-box mx-auto mt-2"
                    placeholder="eg: Virgo"
                    value={formData.zodiacSign}
                    onChange={handleChange}
                    required
                  />
                </div>
              </>
            )}
          </>
        )}

        {currentStep === 3 && (
          <>
            {/* <div>
              <label htmlFor="bio">Short Bio</label>
              <input
                name="bio"
                type="text"
                className="input-box mx-auto mt-2"
                placeholder="eg: I love coding..."
                value={formData.bio}
                onChange={handleChange}
                required
              />
            </div> */}
          </>
        )}

        <div className="button-container flex flex-row justify-center gap-5 mt-4">
          <button
            type="button"
            onClick={prevStep}
            disabled={currentStep === 1}
            className="btn btn-secondary lg:p"
          >
            Back
          </button>

          {currentStep < STEPS ? (
            <button type="button" onClick={nextStep} className="btn">
              Next
            </button>
          ) : (
            <button type="button" className="btn">
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ProfileComponent;
