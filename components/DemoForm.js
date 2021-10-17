import React from "react";

const DemoForm = () => {
  return (
    <div className="rounded shadow-xl sm:mx-6 sm:my-10 bg-notice">
      <div className="pt-5 pb-8 text-lg font-bold text-center sm:text-xl">
        REGISTER FOR A DEMO CLASS
      </div>
      <div>
        <form className="grid grid-cols-1 gap-4 px-16 sm:px-36 pb-14">
          <input
            className="w-full h-10 px-2 tracking-widest text-gray-500 bg-gray-100 rounded-md"
            type="text"
            placeholder="Full Name"
          />
          <input
            className="w-full h-10 px-2 tracking-widest text-gray-500 bg-gray-100 rounded-md "
            type="email"
            placeholder="Email"
          />
          <input
            className="w-full h-10 px-2 tracking-widest text-gray-500 bg-gray-100 rounded-md "
            type="text"
            placeholder="Class"
          />
          <input
            className="w-full h-10 px-2 tracking-widest text-gray-500 bg-gray-100 rounded-md "
            type="number"
            placeholder="Phone no."
          />
          <button
            type="submit"
            className="h-10 py-1 text-white rounded-md bg-noticeButton"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default DemoForm;
