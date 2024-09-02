import React from "react";
import { FaUpload } from "react-icons/fa";

const Attachments = ({ formData, changeHandle, errors }) => {
  return (
    <div>
      <h2 className="text-[#004A9C] font-[600] text-[16px] text-center pb-6">
        Attachments Section
      </h2>
      <div className="flex items-stretch justify-center w-full gap-4 flex-col md:flex-row">
        <div className="w-full md:w-1/3">
          <div className="flex flex-col items-center h-full">
            <label
              htmlFor="video-upload"
              className="px-11 py-4 border border-[#8A6112] rounded-xl flex flex-col cursor-pointer text-[#D3900D] shadow-md border-dashed w-full text-center h-full"
            >
              <FaUpload className="mx-auto mb-4 text-[#D3900D] active:text-white" />
              <span>Video Upload (Only .mp4, .flv are supported)</span>
            </label>
            <input
              id="video-upload"
              type="file"
              className="hidden"
              accept=".flv,.mp4"
              onChange={(e) => changeHandle(e, "video")}
            />
            {formData.video && (
              <p className="mt-4 text-gray-700 text-ellipsis overflow-hidden whitespace-nowrap w-full">
                {formData.video.name}
              </p>
            )}
          </div>
          {errors.video && (
            <p className="text-red-500 text-sm mt-1 pl-4">{errors.video}</p>
          )}
        </div>

        <div className="w-full md:w-1/3">
          <div className="flex flex-col items-center h-full">
            <label
              htmlFor="image-upload"
              className="px-11 py-4 border border-[#8A6112] rounded-xl flex flex-col cursor-pointer text-[#D3900D] shadow-md border-dashed w-full text-center h-full"
            >
              <FaUpload className="mx-auto mb-4 text-[#D3900D] active:text-white" />
              <span>Image Upload (Only .png, .jpg & .jpeg are supported)</span>
            </label>
            <input
              id="image-upload"
              type="file"
              className="hidden"
              accept=".png,.jpg,.jpeg"
              onChange={(e) => changeHandle(e, "image")}
            />
            {formData.image && (
              <p className="mt-4 text-gray-700 text-ellipsis overflow-hidden whitespace-nowrap w-full">
                {formData.image.name}
              </p>
            )}
          </div>
          {errors.image && (
            <p className="text-red-500 text-sm mt-1 pl-4">{errors.image}</p>
          )}
        </div>

        <div className="w-full md:w-1/3">
          <div className="flex flex-col items-center h-full">
            <label
              htmlFor="electricityBill-upload"
              className="px-11 py-4 border border-[#8A6112] rounded-xl flex flex-col cursor-pointer text-[#D3900D] shadow-md border-dashed w-full text-center h-full"
            >
              <FaUpload className="mx-auto mb-4 text-[#D3900D] active:text-white" />
              <span>
                Electricity Bill (Only .png, .jpg, .jpeg & .pdf are supported)
              </span>
            </label>
            <input
              id="electricityBill-upload"
              type="file"
              className="hidden"
              accept=".png,.jpg,.pdf"
              onChange={(e) => changeHandle(e, "electricityBill")}
            />
            {formData.electricityBill && (
              <p className="mt-4 text-gray-700 text-ellipsis overflow-hidden whitespace-nowrap w-full">
                {formData.electricityBill.name}
              </p>
            )}
          </div>
          {errors.electricityBill && (
            <p className="text-red-500 text-sm mt-1 pl-4">
              {errors.electricityBill}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Attachments;
