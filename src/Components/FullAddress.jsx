import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";

const FullAddress = ({ formData, handleChange, errors }) => {
  const states = [
    "Andhra Pradesh",
    "Andaman & Nicobar Islands",
    "Assam",
    "Bihar",
    "Chandigarh",
    "Chhattisgarh",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu & Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Not Of Delhi",
    "Orissa",
    "Puducherry",
    "Punjab",
    "Rajasthan",
    "Tamil Nadu",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  return (
    <div>
      <h2 className="text-[16px] font-[600] text-center pb-9 text-blue-700">
        Applicant Full Address
      </h2>
      <div className="flex gap-3 w-full max-[1000px]:flex-col items-center">
        <div className="w-full relative">
          <div className="flex items-center w-full border border-[#CDC4B1] rounded-md bg-[#FFFDF9] quote">
            <div className="border-r border-r-[#8A6112] p-2">
              <FaRegUser className="text-[#8A6112] ml-3" />
            </div>
            <input
              type="text"
              name="houseNumber"
              value={formData.houseNumber}
              onChange={handleChange}
              className="w-full px-4 py-5 font-[400] rounded-md text-[16px] shadow-lg placeholder-[#8A6112] outline-none"
              placeholder="Enter House No..."
              required
            />
          </div>
          {errors.houseNumber && (
            <p className="text-red-500 text-sm mt-1 pl-4 absolute">
              {errors.houseNumber}
            </p>
          )}
        </div>
        <div className="w-full relative">
          <div className="flex items-center border w-full border-[#CDC4B1] rounded-md bg-[#FFFDF9] quote">
            <div className="border-r border-r-[#8A6112] p-2">
              <FaRegUser className="text-[#8A6112] ml-3" />
            </div>
            <input
              type="text"
              name="street"
              value={formData.street}
              onChange={handleChange}
              className="w-full px-4 py-5 font-[400] text-[16px] rounded-md shadow-lg placeholder-[#8A6112] outline-none"
              placeholder="Street"
              required
            />
          </div>
          {errors.street && (
            <p className="text-red-500 text-sm mt-1 pl-4 absolute">
              {errors.street}
            </p>
          )}
        </div>
      </div>
      <div className="flex gap-5 mt-7 w-full max-[1000px]:flex-col">
        <div className="w-full relative">
          <div className="flex items-center border w-full rounded-md border-[#CDC4B1] bg-[#FFFDF9] quote">
            <div className="border-r border-r-[#8A6112] p-2">
              <FaRegUser className="text-[#8A6112] ml-3" />
            </div>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full px-4 py-4 font-[400] rounded-md text-[16px] shadow-lg placeholder-[#8A6112] outline-none"
              placeholder="City/Town"
              required
            />
          </div>
          {errors.city && (
            <p className="text-red-500 text-sm mt-1 pl-4 absolute">
              {errors.city}
            </p>
          )}
        </div>
        <div className="w-full relative">
          <div className="flex items-center border border-[#CDC4B1] rounded-md w-full bg-[#FFFDF9] quote">
            <div className="border-r border-r-[#8A6112] p-2">
              <FaRegUser className="text-[#8A6112] ml-3" />
            </div>
            <input
              type="number"
              name="pinCode"
              value={formData.pinCode}
              onChange={handleChange}
              className="w-full px-4 py-4 font-[400] text-[16px] outline-none rounded-md shadow-lg placeholder-[#8A6112]"
              placeholder="PinCode"
              required
            />
          </div>
          {errors.pinCode && (
            <p className="text-red-500 text-sm mt-1 pl-4 absolute">
              {errors.pinCode}
            </p>
          )}
        </div>
        <div className="w-full relative">
          <div className="flex items-center border border-[#CDC4B1] rounded-md w-full bg-[#FFFDF9] quote">
            <div className="border-r border-r-[#8A6112] p-2">
              <FaRegUser className="text-[#8A6112] ml-3" />
            </div>
            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full px-4 py-4 font-[400] text-[16px] outline-none rounded-md shadow-lg bg-[#FFFDF9] placeholder-[#8A6112] text-[#8A6112]"
              required
            >
              <option value="" disabled>
                Select State
              </option>
              {states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>
          {errors.state && (
            <p className="text-red-500 text-sm pl-4 absolute">{errors.state}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FullAddress;
