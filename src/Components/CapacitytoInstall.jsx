import React, { useState, useEffect } from "react";
import { FaRegUser } from "react-icons/fa";
import { CiLocationArrow1 } from "react-icons/ci";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "300px",
};

const center = {
  lat: 17.385044, // Default latitude (Hyderabad)
  lng: 78.486671, // Default longitude (Hyderabad)
};

const CapacitytoInstall = ({ formData, handleChange, errors }) => {
  const [markerPosition, setMarkerPosition] = useState(center);

  // Load Google Maps script
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyCWGIbevSsJw0C7i94zz5LUtajMgvZP3bQ", // Replace with your API key
  });

  // Function to handle marker drag and update location
  const onMarkerDragEnd = (event) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    setMarkerPosition({ lat, lng });

    // Update the location input with latitude and longitude
    handleChange({
      target: { name: "location", value: `${lat}, ${lng}` },
    });
  };

  // Function to get user's current location
  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setMarkerPosition({ lat: latitude, lng: longitude });

          // Update the location input with latitude and longitude
          handleChange({
            target: { name: "location", value: `${latitude}, ${longitude}` },
          });
        },
        (error) => console.error("Error getting location:", error),
        { enableHighAccuracy: true }
      );
    }
  };

  return (
    <div>
      <div>
        <h2 className="text-[#004A9C] font-[600] text-[16px] ad text-center pb-6">
          Capacity to Install
        </h2>
        <div className="w-full">
          <div className="flex items-center justify-center w-full border quote rounded-md bg-[#FFFDF9]">
            <div className="border-r border-r-[#8A6112] p-2">
              <FaRegUser className="text-[#8A6112] ml-3" />
            </div>
            <input
              type="number"
              name="capacity"
              value={formData.capacity}
              onChange={handleChange}
              placeholder="Enter Values in Kw"
              className="px-4 py-5 text-[16px] font-[400] w-[90%] rounded-md  shadow-sm  placeholder-[#8A6112] outline-none focus:outline-none"
            />
          </div>
        </div>
        {errors.capacity && (
          <p className="text-red-500 text-sm mt-1 pl-4">{errors.capacity}</p>
        )}
      </div>
      {/*----auto location----*/}
      <div>
        <h2 className="text-[#004A9C] font-[600] text-[16px] ad text-center pb-6 mt-6">
          Location Details
        </h2>
        <div className="auto-bg" style={{ position: "relative" }}>
          <div className="flex justify-center">
            <div className="w-[80%]">
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Enter Your Location"
                className="px-4 py-5 text-[16px] font-[400] w-[90%] mt-[3%] ml-[2%] rounded-md shadow-sm placeholder-[#8A6112] outline-none focus:outline-none"
                readOnly // makes the input field read-only
              />
              {errors.location && (
                <p className="text-red-500 text-sm mt-1 pl-4">
                  {errors.location}
                </p>
              )}
            </div>
            <div className="w-[20%] mt-[3%]">
              <button
                className="flex flex-col items-center bg-white text-[#8A6112] py-2 px-4"
                onClick={getCurrentLocation}
              >
                <CiLocationArrow1 size={24} />
                <span className="text-sm">Auto Location</span>
              </button>
            </div>
          </div>
          {isLoaded && (
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              zoom={15}
              center={markerPosition}
              options={{
                streetViewControl: false,
                mapTypeControl: false,
              }}
            >
              <Marker
                position={markerPosition}
                draggable={true}
                onDragEnd={onMarkerDragEnd}
              />
            </GoogleMap>
          )}
        </div>
      </div>
    </div>
  );
};

export default CapacitytoInstall;
