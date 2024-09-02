import React, { useState } from "react";
import { LuSchool } from "react-icons/lu";
import { MdOutlineFactory } from "react-icons/md";
import { BsFuelPumpDiesel } from "react-icons/bs";
import { FaRegHospital } from "react-icons/fa";

const TypeofOrganization = ({ formData, handleOrganizationTypeChange }) => {
  const [otherDetails, setOtherDetails] = useState("");

  return (
    <div>
      <h2 className="text-[#004A9C] font-[600] text-[16px] text-center pb-4">
        Type of Organization
      </h2>
      <div className="flex flex-wrap gap-3 items-center justify-center">
        <div>
          <button
            className={`px-8 py-6 border border-[#8A6112]  rounded-xl flex flex-col cursor-pointer    shadow-md border-dashed  ${
              formData.typeofOrganization === "Schools"
                ? "bg-[#004A9C] text-white"
                : "text-[#D3900D]"
            }`}
            onClick={() => handleOrganizationTypeChange("Schools")}
          >
            <LuSchool
              className={`mx-auto mb-2 ${
                formData.typeofOrganization === "Schools"
                  ? "text-white"
                  : "text-[#D3900D]"
              }`}
            />
            Schools
          </button>
        </div>
        <div>
          <button
            className={`px-8 py-6 border border-[#8A6112] rounded-xl flex flex-col cursor-pointer   shadow-md border-dashed ${
              formData.typeofOrganization === "Factories"
                ? "bg-[#004A9C] text-white"
                : "text-[#D3900D]"
            }`}
            onClick={() => handleOrganizationTypeChange("Factories")}
          >
            <MdOutlineFactory
              className={`mx-auto mb-2 ${
                formData.typeofOrganization === "Factories"
                  ? "text-white"
                  : "text-[#D3900D]"
              }`}
            />
            Factories
          </button>
        </div>
        <div>
          <button
            className={`px-8 py-6 border border-[#8A6112] rounded-xl flex flex-col cursor-pointer shadow-md border-dashed ${
              formData.typeofOrganization === "Petrol Pumps"
                ? "bg-[#004A9C] text-white"
                : "text-[#D3900D]"
            }`}
            onClick={() => handleOrganizationTypeChange("Petrol Pumps")}
          >
            <BsFuelPumpDiesel
              className={`mx-auto mb-2 ${
                formData.typeofOrganization === "Petrol Pumps"
                  ? "text-white"
                  : "text-[#D3900D]"
              }`}
            />
            Petrol Pumps
          </button>
        </div>
        <div>
          <button
            className={`px-8 py-6 border border-[#8A6112] rounded-xl flex flex-col cursor-pointer   shadow-md border-dashed ${
              formData.typeofOrganization === "Hospitals"
                ? "bg-[#004A9C] text-white"
                : "text-[#D3900D]"
            }`}
            onClick={() => handleOrganizationTypeChange("Hospitals")}
          >
            <FaRegHospital
              className={`mx-auto mb-2 ${
                formData.typeofOrganization === "Hospitals"
                  ? "text-white"
                  : "text-[#D3900D]"
              }`}
            />
            Hospitals
          </button>
        </div>
        <div>
          <button
            className={`px-8 py-6 border border-[#8A6112] rounded-xl flex flex-col cursor-pointer   shadow-md border-dashed ${
              formData.typeofOrganization === "Others"
                ? "bg-[#004A9C] text-white"
                : "text-[#D3900D]"
            }`}
            onClick={() => handleOrganizationTypeChange("Others")}
          >
            <LuSchool
              className={`mx-auto mb-2 ${
                formData.typeofOrganization === "Others"
                  ? "text-white"
                  : "text-[#D3900D]"
              }`}
            />
            Others
          </button>
        </div>
      </div>
      {formData.typeofOrganization === "Others" && (
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">
            Please specify:
          </label>
          <input
            type="text"
            value={otherDetails}
            onChange={(e) => setOtherDetails(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#D3900D] focus:border-[#D3900D] sm:text-sm"
          />
        </div>
      )}
    </div>
  );
};

export default TypeofOrganization;
