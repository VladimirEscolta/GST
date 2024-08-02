import React from 'react';
import {ArrowIcon, DotsIcon, DotsLongIcon} from "../assets/icons";

const DiscussBlock = () => {
  return (
    <div className="bg-gradient-to-r from-gst-main to-gst-second relative h-96 flex items-center justify-between mx-auto">
      <div className="absolute top-0 w-full mx-auto justify-center flex">
        <DotsLongIcon className="h-[70px] sm:h-[126px]"/>
      </div>
      <div className="absolute bottom-0 flex justify-between w-full">
        <DotsIcon className="h-[70px] w-[70px] sm:h-[126px] sm:w-[126px]"/>
        <DotsIcon className="h-[70px] w-[70px] sm:h-[126px] sm:w-[126px]"/>
      </div>
      <div className="data w-10/12 mx-auto my-24 flex flex-col sm:flex-row justify-between items-center">
        <div className="text-4xl sm:text-5xl font-bold text-white text-center sm:text-left">Готовы обсудить проект?</div>
        <div className="mt-8 sm:mt-0 flex bg-white rounded-2xl items-center justify-center text-gst-main w-[250px] sm:w-[330px] h-[80px] sm:h-[110px]">
          <a className="mr-4 font-bold text-lg sm:text-gst22" href="/" target="_self">
            Написать нам
          </a>
          <ArrowIcon className="w-5 h-5 sm:w-[29px] sm:h-[29px]"/>
        </div>
      </div>
    </div>
  );
};

export default DiscussBlock;