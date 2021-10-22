import React from "react";
import DemoForm from "./DemoForm";

const DemoRegistrationPage = ({ title, content }) => {
  return (
    <div className="">
      <hr className="border-t-4" />
      <div className="py-4 text-lg font-bold text-center sm:text-4xl">
        {title}
      </div>
      <div className="px-10 pb-4 mx-auto text-sm font-bold sm:w-4/5">
        {content}
      </div>

      <div className="py-8 text-lg font-bold text-center sm:text-2xl">
        CLASSES WE ARE OFFERING
      </div>
      <div className="flex flex-row items-center font-bold justify-evenly">
        <div className="px-2 py-4 text-center bg-blue-400 border-2 sm:px-16 sm:py-8 rounded-xl sm:rounded-2xl">
          CLASS (VII - X)
        </div>
        <div className="px-2 py-4 text-center bg-blue-400 border-2 sm:px-16 sm:py-8 rounded-xl sm:rounded-2xl">
          CLASS (XI - XII)
        </div>
      </div>

      <div className="py-8 text-lg font-bold text-center sm:text-2xl">
        SUBJECTS WE ARE OFFERING
      </div>
      <div className="grid grid-cols-3 gap-2 px-2 py-3 pb-10 font-bold sm:grid-cols-5 sm:px-12 sm:gap-4">
        <div className="px-2 py-4 text-center bg-blue-400 border-2 sm:px-16 sm:py-8 rounded-xl sm:rounded-2xl">
          PHYSICS
        </div>
        <div className="px-2 py-4 text-center bg-blue-400 border-2 sm:px-16 sm:py-8 rounded-xl sm:rounded-2xl">
          CHEMISTRY
        </div>
        <div className="px-2 py-4 text-center bg-blue-400 border-2 sm:px-16 sm:py-8 rounded-xl sm:rounded-2xl">
          MATHS
        </div>
        <div className="px-2 py-4 text-center bg-blue-400 border-2 sm:px-16 sm:py-8 rounded-xl sm:rounded-2xl">
          BIOLOGY
        </div>
        <div className="px-2 py-4 text-center bg-blue-400 border-2 sm:px-16 sm:py-8 rounded-xl sm:rounded-2xl">
          ENGLISH
        </div>
        <div className="px-2 py-4 text-center bg-blue-400 border-2 sm:px-16 sm:py-8 rounded-xl sm:rounded-2xl">
          SOCIAL STUDIES
        </div>

        <div className="px-2 py-4 text-center bg-blue-400 border-2 sm:px-16 sm:py-8 rounded-xl sm:rounded-2xl">
          SANSKRIT
        </div>
        <div className="px-2 py-4 text-center bg-blue-400 border-2 sm:px-16 sm:py-8 rounded-xl sm:rounded-2xl">
          INFORMATION TECHOLOGY
        </div>
        <div className="px-2 py-4 text-center bg-blue-400 border-2 sm:px-16 sm:py-8 rounded-xl sm:rounded-2xl">
          COMPUTER SCIENCE
        </div>
        <div className="px-2 py-4 text-center bg-blue-400 border-2 sm:px-16 sm:py-8 rounded-xl sm:rounded-2xl">
          HINDI
        </div>
        <div className="px-2 py-4 text-center bg-blue-400 border-2 sm:px-16 sm:py-8 rounded-xl sm:rounded-2xl">
          ODIA
        </div>
      </div>
      <div className="w-full mx-auto sm:w-1/2">
        <DemoForm />
      </div>
    </div>
  );
};

export default DemoRegistrationPage;
