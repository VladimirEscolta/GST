import React from 'react';
import Button from "./Button";

const MainSectionBlock = ({data, theme = 'white'}) => {

  const themeColor = {
    color: `text-white bg-gst-main`,
    white: ''
  }

  const themeColorText = {
    color: `text-white`,
    white: 'text-gst-main"'
  }

  return (
    <div className="flex flex-col w-11/12 sm:w-10/12 mx-auto pt-4 pb-16 sm:py-24">
      <div className="flex flex-wrap items-center text-sm text-gst-main">
        <a href="/" className="flex items-center mr-2">Главная</a>
        <p className="text-xl mr-2">›</p>
        <a href="/aksioma" className="flex mr-2">Продукты Аксиома</a>
        <p className="text-xl mr-2 opacity-50 text-gst-text">›</p>
        <p className="flex items-center opacity-50 text-gst-text w-full sm:w-auto">{data.name}</p>
      </div>
      <div className="mt-8 sm:mt-16 flex items-center justify-between">
        <div className="w-full sm:w-1/2">
          <p className="flex p-2.5 w-fit text-gst15 sm:text-lg leading-gst22 sm:leading-5 font-medium sm:font-bold bg-[#0F86D91A]">{data.header}</p>
          <p className="mt-6 font-bold text-4xl sm:text-gst64 leading-gst48 sm:leading-gst70">{data.name}</p>
          <p className="mt-6 sm:text-xl sm:font-medium leading-6 sm:leading-8">{data.text}</p>
          <Button className="mt-4 sm:mt-14" color={'main'} children={'Обсудить проект'} href={'/'}/>
        </div>
        <div className="hidden lg:flex">
          {data.icon}
        </div>
      </div>
    </div>
  );
};

export default MainSectionBlock;