import React, { useState, useEffect } from "react";
import { FaRegUser } from "react-icons/fa";

const PeakLoad = ({ formData, errors, handlePeakLoadChange = () => {} }) => {
  // State to manage multiple field sets
  const [fieldSets, setFieldSets] = useState(
    formData?.load?.length > 0
      ? formData.load
      : [
          {
            id: Date.now(),
            equipmentName: "",
            capacity: "",
            operation: "",
            equipments: "",
          },
        ]
  );

  // Whenever formData.load changes, update the fieldSets state
  useEffect(() => {
    if (Array.isArray(formData.load)) {
      setFieldSets(formData.load);
    }
  }, [formData.load]);

  // Function to handle adding a new set of fields
  const addFieldSet = () => {
    const newFieldSet = {
      id: Date.now(),
      equipmentName: "",
      capacity: "",
      operation: "",
      equipments: "",
    };
    const updatedFieldSets = [...fieldSets, newFieldSet];
    setFieldSets(updatedFieldSets);
    handlePeakLoadChange(updatedFieldSets); // Update the formData.load in the parent
  };

  // Function to handle changes in input fields
  const handleChange = (e, id) => {
    const { name, value } = e.target;
    const updatedFieldSets = fieldSets.map((fieldSet) =>
      fieldSet.id === id ? { ...fieldSet, [name]: value } : fieldSet
    );

    setFieldSets(updatedFieldSets); // Update local state
    handlePeakLoadChange(updatedFieldSets); // Update the formData.load in the parent
  };

  return (
    <div className="relative">
      <h2 className="text-[#004A9C] font-[600] text-[16px] text-center p-3">
        Peak Load
      </h2>
      <p className="text-center pb-3 text-[14px]">
        Please provide a complete list of appliances and their usage
      </p>
      {/* Scrollable container */}
      <div
        className="scrollable-container relative overflow-y-auto"
        style={{ maxHeight: "500px", paddingRight: "60px" }}
      >
        {fieldSets.map((fieldSet) => (
          <div
            key={fieldSet.id}
            className="flex flex-col gap-5 w-full max-[1000px]:flex-col mb-5 border border-gray-400 rounded-md p-4"
          >
            <div className="flex max-[1100px]:flex-col gap-5 w-full max-[1000px]:flex-col">
              <div className="w-full">
                <div className="flex items-center border w-full border-[#CDC4B1] rounded-md bg-[#FFFDF9] quote">
                  <div className="border-r border-r-[#8A6112] p-2">
                    <FaRegUser className="text-[#8A6112] ml-3" />
                  </div>
                  <input
                    type="text"
                    name="equipmentName"
                    value={fieldSet.equipmentName}
                    onChange={(e) => handleChange(e, fieldSet.id)}
                    placeholder="Appliance Name"
                    className="w-full px-4 py-5 font-[400] rounded-md text-[16px] shadow-lg placeholder-[#8A6112] outline-none"
                  />
                </div>
                {errors.equipmentName && (
                  <p className="text-red-500 text-sm mt-1 pl-4">
                    {errors.equipmentName}
                  </p>
                )}
              </div>
              <div className="w-full">
                <div className="flex items-center border w-full border-[#CDC4B1] rounded-md bg-[#FFFDF9] quote">
                  <div className="border-r border-r-[#8A6112] p-2">
                    <FaRegUser className="text-[#8A6112] ml-3" />
                  </div>
                  <input
                    type="number"
                    name="capacity"
                    value={fieldSet.capacity}
                    onChange={(e) => handleChange(e, fieldSet.id)}
                    placeholder="Watt Capacity"
                    className="w-full px-4 py-5 text-[16px] font-[400] rounded-md shadow-sm placeholder-[#8A6112] outline-none focus:outline-none"
                  />
                </div>
                {errors.capacity && (
                  <p className="text-red-500 text-sm mt-1 pl-4">
                    {errors.capacity}
                  </p>
                )}
              </div>
            </div>

            <div className="flex max-[1100px]:flex-col gap-5 w-full max-[1000px]:flex-col">
              <div className="w-full">
                <div className="flex items-center border w-full border-[#CDC4B1] rounded-md bg-[#FFFDF9] quote">
                  <div className="border-r border-r-[#8A6112] p-2">
                    <FaRegUser className="text-[#8A6112] ml-3" />
                  </div>
                  <input
                    type="number"
                    name="operation"
                    value={fieldSet.operation}
                    onChange={(e) => handleChange(e, fieldSet.id)}
                    placeholder="Hours of Operation/Day"
                    className="w-full px-4 py-5 text-[16px] font-[400] rounded-md shadow-sm placeholder-[#8A6112] outline-none focus:outline-none"
                  />
                </div>
                {errors.operation && (
                  <p className="text-red-500 text-sm mt-1 pl-4">
                    {errors.operation}
                  </p>
                )}
              </div>
              <div className="w-full">
                <div className="flex items-center border w-full border-[#CDC4B1] rounded-md bg-[#FFFDF9] quote">
                  <div className="border-r border-r-[#8A6112] p-2">
                    <FaRegUser className="text-[#8A6112] ml-3" />
                  </div>
                  <input
                    type="number"
                    name="equipments"
                    value={fieldSet.equipments}
                    onChange={(e) => handleChange(e, fieldSet.id)}
                    placeholder="No. of Equipment"
                    className="w-full px-4 py-5 text-[16px] font-[400] rounded-md shadow-sm placeholder-[#8A6112] outline-none focus:outline-none"
                  />
                </div>
                {errors.equipments && (
                  <p className="text-red-500 text-sm mt-1 pl-4">
                    {errors.equipments}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Fixed Add Button */}
      <button
        onClick={addFieldSet}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-[#0bb68d] text-white  rounded-full text-2xl flex items-center justify-center min-[700px]:right-0 max-[600px]:left-1/2 max-[600px]:transform max-[600px]:-translate-x-1/2 max-[600px]:bottom-0 max-[600px]:mx-auto"
      >
        +
      </button>
    </div>
  );
};

export default PeakLoad;
