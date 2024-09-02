import React, { useState } from "react";
import { FaUpload, FaFilePdf, FaVideo } from "react-icons/fa";
import { GrCloudUpload } from "react-icons/gr";

const AttachmentsSection = ({ formData, changeHandle, errors }) => {
  const [imagePreviews, setImagePreviews] = useState([]);
  const [billPreviews, setBillPreviews] = useState([]);
  const [roofLayoutPreview, setRoofLayoutPreview] = useState(null);
  const [gstPreview, setGstPreview] = useState(null);
  const [videoPreview, setVideoPreview] = useState(null);
  const [identityProofPreview, setIdentityProofPreview] = useState(null);

  const handleFileChange = (e, fileType, setPreview) => {
    const file = e.target.files[0];
    if (file) {
      changeHandle(e, fileType); // Update formData

      if (file.type.includes("image")) {
        setPreview(URL.createObjectURL(file));
      } else if (file.type.includes("pdf")) {
        setPreview("pdf"); // Set a flag for PDF type
      } else if (file.type.includes("video")) {
        setPreview(URL.createObjectURL(file));
      }
    }
  };
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + imagePreviews.length <= 5) {
      changeHandle(e, "image"); // Update formData

      const previews = files.map((file) => URL.createObjectURL(file));
      setImagePreviews([...imagePreviews, ...previews]);
    } else {
      alert("You can upload a maximum of 5 images.");
    }
  };
  const handleBillChange = (e) => {
    const files = Array.from(e.target.files);

    if (files.length + billPreviews.length <= 3) {
      changeHandle(e, "electricityBill"); // Update formData

      const previews = files.map((file) => URL.createObjectURL(file));
      setBillPreviews([...billPreviews, ...previews]);
    } else {
      alert("You can upload a maximum of 3 files.");
    }
  };

  // Function to render file info
  const renderFileInfo = (file, maxSizeMB, allowedTypes) => {
    if (!file) return null;

    const fileSizeMB = file.size / 1024 / 1024;
    const fileTypeValid = allowedTypes.includes(file.type);

    if (!fileTypeValid) {
      return (
        <p className="mt-4 text-red-600">
          Invalid file type. Please upload a {allowedTypes.join(", ")} file.
        </p>
      );
    }

    if (fileSizeMB > maxSizeMB) {
      return (
        <p className="mt-4 text-red-600">
          File size exceeds {maxSizeMB}MB. Please upload a smaller file.
        </p>
      );
    }

    return (
      <div className="mt-4">
        <p className="text-gray-700">{file.name}</p>
      </div>
    );
  };

  return (
    <div>
      <h2 className="text-[#004A9C] font-[600] text-[16px] text-center pb-6">
        Attachments Section
      </h2>

      {/* Roof Layout Upload */}
      <div className="flex flex-col sm:flex-row items-center border-dashed border-2 border-gray-300 p-4 sm:p-6 ">
        <div className="flex-1">
          <div className="flex flex-col items-center sm:border-r sm:border-r-gray-500 mb-4 sm:mb-0">
            <GrCloudUpload size={20} className="text-[#0BB68D] mb-2" />
            <label className="block text-[14px] font-[400] text-gray-600 pr-3 text-center">
              Roof Layout
            </label>
          </div>
        </div>
        <div className="flex-1">
          <input
            type="file"
            id="roofLayout-upload"
            accept="image/jpeg, image/png"
            onChange={(e) => changeHandle(e, "roofLayout")}
            className="block text-sm text-[#757575] ml-0 sm:ml-4 w-full sm:w-auto border-[#CECECE] border rounded-md shadow-sm p-2 cursor-pointer"
          />
          {roofLayoutPreview && (
            <div className="mt-4 flex justify-center">
              {roofLayoutPreview === "pdf" ? (
                <FaFilePdf size={48} className="text-red-500" />
              ) : (
                <img
                  src={roofLayoutPreview}
                  alt="Roof Layout Preview"
                  className="w-16 h-16 object-cover rounded-md shadow-md"
                />
              )}
            </div>
          )}
          {formData.roofLayout &&
            renderFileInfo(formData.roofLayout, 200, [
              "image/jpeg",
              "image/png",
              "application/pdf",
            ])}
        </div>
      </div>

      <p className="text-[12px]  text-center my-2">
        Please upload in PNG, JPEG, JPG, Max file size should be 200MB
        <span className="text-[#004A9C]">*</span>.
      </p>
      {/* Video Upload */}
      <div className="flex flex-col sm:flex-row items-center border-dashed border-2 border-gray-300 p-4 sm:p-6 ">
        <div className="flex-1">
          <div className="flex flex-col items-center sm:border-r sm:border-r-gray-500 mb-4 sm:mb-0">
            <GrCloudUpload size={20} className="text-[#0BB68D] mb-2" />
            <label className="block text-[14px] font-[400] text-gray-600 pr-3 text-center">
              Video Upload
            </label>
          </div>
        </div>
        <div className="flex-1">
          <input
            type="file"
            id="video-upload"
            accept="video/mp4, video/avi"
            onChange={(e) => changeHandle(e, "video")}
            className="block text-sm text-[#757575] ml-0 sm:ml-4 w-full sm:w-auto border-[#CECECE] border rounded-md shadow-sm p-2 cursor-pointer"
          />
          {videoPreview && (
            <div className="mt-4 flex justify-center">
              <video
                src={videoPreview}
                className="w-16 h-16 object-cover rounded-md shadow-md"
                controls
              />
            </div>
          )}
          {formData.video &&
            renderFileInfo(formData.video, 200, ["video/mp4", "video/avi"])}
        </div>
      </div>
      <p className="text-[12px] my-2 text-center">
        Please upload only .mp4, .flv file format, Max file size should be 200MB
        <span className="text-[#004A9C]">*</span>.
      </p>
      {/* Image Upload */}
      <div className="flex flex-col sm:flex-row items-center border-dashed border-2 border-gray-300 p-4 sm:p-6 ">
        <div className="flex-1">
          <div className="flex flex-col items-center sm:border-r sm:border-r-gray-500 mb-4 sm:mb-0">
            <GrCloudUpload size={20} className="text-[#0BB68D] mb-2" />
            <label className="block text-[14px] font-[400] text-gray-600 pr-3 text-center">
              Image Upload
            </label>
          </div>
        </div>
        <div className="flex-1">
          <input
            type="file"
            id="image-upload"
            accept="image/jpeg, image/png"
            multiple
            onChange={handleImageChange}
            className="block text-sm text-[#757575] ml-0 sm:ml-4 w-full sm:w-auto border-[#CECECE] border rounded-md shadow-sm p-2 cursor-pointer"
          />
          <div className="mt-4 flex flex-wrap gap-2 justify-center">
            {imagePreviews.map((preview, index) => (
              <img
                key={index}
                src={preview}
                alt={`Preview ${index}`}
                className="w-16 h-16 object-cover rounded-md shadow-md"
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-[12px] my-2 text-center">
        Please upload in PNG, JPEG, JPG, Max file size should be 200MB. A
        maximum of 5 images can be uploaded.
        <span className="text-[#004A9C]">*</span>.
      </p>
      {/* Electricity Bill Upload */}
      {/* Electricity Bill Upload */}
      <div className="flex flex-col sm:flex-row items-center border-dashed border-2 border-gray-300 p-4 sm:p-6 ">
        <div className="flex-1">
          <div className="flex flex-col items-center sm:border-r sm:border-r-gray-500 mb-4 sm:mb-0">
            <GrCloudUpload size={20} className="text-[#0BB68D] mb-2" />
            <label className="block text-[14px] font-[400] text-gray-600 pr-3 text-center">
              Electricity Bill Upload
            </label>
          </div>
        </div>
        <div className="flex-1">
          <input
            type="file"
            id="electricityBill-upload"
            accept="image/jpeg, image/png,pdf"
            multiple
            onChange={handleBillChange}
            className="block text-sm text-[#757575] ml-0 sm:ml-4 w-full sm:w-auto border-[#CECECE] border rounded-md shadow-sm p-2 cursor-pointer"
          />
          <div className="mt-4 flex flex-wrap gap-2 justify-center">
            {billPreviews.map((preview, index) => (
              <img
                key={index}
                src={preview}
                alt={`Preview ${index}`}
                className="w-16 h-16 object-cover rounded-md shadow-md"
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-[12px] my-2 text-center">
        Please upload the latest 3 electricity bills or last month’s bill. A
        maximum of 3 electricity bills can be uploaded.
        <span className="text-[#004A9C]">*</span>.
      </p>
      {/* GST Certificate Upload */}
      <div className="flex flex-col sm:flex-row items-center border-dashed border-2 border-gray-300 p-4 sm:p-6">
        <div className="flex-1">
          <div className="flex flex-col items-center sm:border-r sm:border-r-gray-500 mb-4 sm:mb-0">
            <GrCloudUpload size={20} className="text-[#0BB68D] mb-2" />
            <label className="block text-[14px] font-[400] text-gray-600 pr-3 text-center">
              GST Certificate
            </label>
          </div>
        </div>
        <div className="flex-1">
          <input
            type="file"
            id="gstCertificate-upload"
            accept="image/jpeg, image/png"
            onChange={(e) => changeHandle(e, "gstCertificate")}
            className="block text-sm text-[#757575] ml-0 sm:ml-4 w-full sm:w-auto border-[#CECECE] border rounded-md shadow-sm p-2 cursor-pointer"
          />
          {formData.gstCertificate &&
            renderFileInfo(formData.gstCertificate, 200, [
              "image/jpeg",
              "image/png",
              "application/pdf",
            ])}
        </div>
      </div>
      <p className="text-[12px] my-2 text-center">
        Please upload in PNG, JPEG, JPG, Max file size should be 200MB
        <span className="text-[#004A9C]">*</span>.
      </p>
      {/* Identity Proof Upload */}
      <div className="flex flex-col sm:flex-row items-center border-dashed border-2 border-gray-300 p-4 sm:p-6 my-4">
        <div className="flex-1">
          <div className="flex flex-col items-center sm:border-r sm:border-r-gray-500 mb-4 sm:mb-0">
            <GrCloudUpload size={20} className="text-[#0BB68D] mb-2" />
            <label className="block text-[14px] font-[400] text-gray-600 pr-3 text-center">
              Identity Proof
            </label>
          </div>
        </div>
        <div className="flex-1">
          <input
            type="file"
            id="identityProof-upload"
            accept="image/jpeg, image/png"
            onChange={(e) => changeHandle(e, "identityProof")}
            className="block text-sm text-[#757575] ml-0 sm:ml-4 w-full sm:w-auto border-[#CECECE] border rounded-md shadow-sm p-2 cursor-pointer"
          />
          {formData.identityProof &&
            renderFileInfo(formData.identityProof, 200, [
              "image/jpeg",
              "image/png",
              "application/pdf",
            ])}
        </div>
      </div>
      <p className="text-[12px] mt-[-3%] text-center">
        Please upload in PNG, JPEG, JPG, Max file size should be 200MB
        <span className="text-[#004A9C]">*</span>.
      </p>
      {errors && (
        <div className="text-red-600 text-sm mt-4 text-center">
          {errors.image && <p>{errors.image}</p>}
          {errors.electricityBill && <p>{errors.electricityBill}</p>}
          {errors.gstCertificate && <p>{errors.gstCertificate}</p>}
        </div>
      )}
    </div>
  );
};

export default AttachmentsSection;
