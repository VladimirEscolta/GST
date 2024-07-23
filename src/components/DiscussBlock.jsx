import React from 'react';
import {ArrowIcon, DotsIcon, DotsLongIcon} from "../assets/icons";

const DiscussBlock = () => {
  return (
    <div className="bg-gradient-to-r from-gst-main to-gst-second relative h-96 flex items-center justify-between mx-auto">
      <div className="absolute top-0 w-full mx-auto justify-center flex">
        <DotsLongIcon/>
      </div>
      <div className="absolute bottom-0 left-0">
        <DotsIcon/>
      </div>
      <div className="absolute bottom-0 right-0">
        <DotsIcon/>
      </div>
      <div className="data w-10/12 mx-auto my-24 flex justify-between items-center">
        <div className="text-5xl font-bold text-white">Готовы обсудить проект?</div>
        <div className="button flex bg-white rounded-2xl items-center justify-center text-gst-main w-[330px] h-[110px]">
          <a className="mr-4 font-bold text-gst22" href="/" target="_self">
            Написать нам
          </a>
          <ArrowIcon/>
        </div>
      </div>
    </div>
  );
};

export default DiscussBlock;