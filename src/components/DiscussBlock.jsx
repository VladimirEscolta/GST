import React from 'react';
import {ArrowIcon, DotsIcon, DotsLongIcon} from "../assets/icons";

const DiscussBlock = () => {
  return (
    <div className="bg-gradient-to-r from-gst-main to-gst-second relative h-[307px] sm:h-96 flex items-center justify-between mx-auto">
      <div className="hidden sm:flex absolute top-0 w-full mx-auto justify-center">
        <DotsLongIcon className="h-[70px] sm:h-[126px]"/>
      </div>
      <div className="hidden sm:flex absolute bottom-0 justify-between w-full">
        <DotsIcon className="h-[70px] w-[70px] sm:h-[126px] sm:w-[126px]"/>
        <DotsIcon className="h-[70px] w-[70px] sm:h-[126px] sm:w-[126px]"/>
      </div>
      <div className="w-11/12 sm:w-10/12 mx-auto my-24 flex flex-col sm:flex-row justify-between items-center">
        <div className="max-w-80 sm:max-w-full text-gst28 sm:text-5xl font-bold text-white text-center sm:text-left">Готовы обсудить проект?</div>
        <div className="mt-8 sm:mt-0 flex bg-white rounded-2xl items-center justify-center text-gst-main w-[330px] h-[44px] sm:h-[110px]">
          <a className="sm:mr-4 font-medium sm:font-bold text-lg sm:text-gst22" href="/" target="_self">
            Написать нам
          </a>
          <ArrowIcon className="hidden sm:flex w-[29px] h-[29px]"/>
        </div>
      </div>
    </div>
  );
};

export default DiscussBlock;