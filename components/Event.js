import React from "react";
import Image from "next/image";

const Event = ({ eventName, images }) => {
  return (
    <div className="mx-10 sm:mx-44 py-7">
      <div className="py-2 text-xl font-medium">{eventName}</div>
      <div className="w-full bg-gray-200 h-60 sm:h-96">
        <div className="flex flex-row h-1/2">
          <div className="relative w-1/2 h-full border-2 border-blue-300">
            <Image src={images[0]} layout="fill" />
          </div>
          <div className="relative w-1/2 h-full border-2 border-blue-300">
            <Image src={images[1]} layout="fill" />
          </div>
        </div>
        <div className="flex flex-row h-1/2">
          <div className="relative w-1/3 h-full border-2 border-blue-300">
            <Image src={images[2]} layout="fill" />
          </div>
          <div className="relative w-1/3 h-full bg-red-100 border-2 border-blue-300">
            <Image src={images[3]} layout="fill" />
          </div>
          <div className="relative w-1/3 h-full bg-red-100 border-2 border-blue-300">
            <Image src={images[4]} layout="fill" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
