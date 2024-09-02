import React from "react";
import Purpose from "./Purpose";

import Ourteam from "./Ourteam";

import KeyObjects from "./KeyObjects";

const About = () => {
  return (
    <div>
      {/*---bg-image----*/}
      <div className="w-full h-full ">
        <div className="common-bg flex items-center">
          <h2 className="text-3xl text-white font-bold rounded-md bg-[rgba(13,13,13,0.5)] p-4 w-auto">
            About Us
          </h2>
        </div>
      </div>
      {/*---bg-image close---*/}
      {/*----purpose of the platform---*/}
      <Purpose />

      <KeyObjects />
      {/*----Our team----
      <Ourteam />
      */}
    </div>
  );
};

export default About;
