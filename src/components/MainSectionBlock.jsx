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
    <div className="flex flex-col w-10/12 mx-auto py-24">
      <div className="flex items-center text-sm text-gst-main">
        <a href="/" className="flex items-center mr-2">Главная</a>

        <p className="text-xl mr-2">›</p>
        <a href="/aksioma" className="flex mr-2">Продукты Аксиома</a>

        <p className="text-xl mr-2 opacity-50 text-gst-text">›</p>
        <p className="flex items-center opacity-50 text-gst-text">{data.name}</p>

      </div>
      <div className="mt-16 flex items-center justify-between">
        <div className="w-1/2">
          <p className="flex p-2.5 w-fit font-bold bg-[#0F86D91A]">{data.header}</p>
          <p className="mt-6 font-bold text-gst64 leading-gst70">{data.name}</p>
          <p className="mt-6 text-xl font-medium leading-8">{data.text}</p>
          <Button className="mt-14" color={'main'} children={'Обсудить проект'} href={'/'}/>
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default MainSectionBlock;