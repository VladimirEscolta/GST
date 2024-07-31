import React from 'react';
import {CheckBlueIcon} from "../assets/icons";

const CheckboxBlock = ({data}) => {
  return (
    <div className="text-gst-text bg-white">
      <div className="flex flex-col w-11/12 sm:w-10/12 mx-auto py-20 sm:py-24">
        <p className="font-bold text-3xl sm:text-5xl">{data.name}</p>
        {data.header && <p className="mt-8 sm:mt-12 text-sm sm:text-xl font-medium">{data.header}</p>}
        <div className="mt-8 sm:mt-12 grid grid-cols sm:grid-cols-2 gap-4 sm:gap-8">
          {data.data.map(item => (
            <div key={item} className="flex items-center h-24 sm:h-32 bg-white rounded-gst20 border border-[#EEEEEE] shadow-[0_6px_12px_0_#14142B0A] sm:shadow-[0_24px_44px_0_#14142B0A]">
              <div className="mx-4 sm:mx-8"><CheckBlueIcon className="w-9 sm:w-[44px]"/></div>
              <p className="text-sm sm:text-xl font-medium pe-4 sm:pe-8">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CheckboxBlock;