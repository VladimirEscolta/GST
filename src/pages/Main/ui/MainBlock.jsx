import React from 'react';
import {
  First1Image,
  First2Image,
  First3Image,
  First4Image,
  First5Image, First6Image,
  FirstRectangleImage
} from "../../../assets/images";
import Button from "../../../components/Button";

const MainBlock = () => {
  return (
    <div className="flex relative flex-col w-11/12 sm:w-10/12 mx-auto py-16 sm:py-24">
      <img src={FirstRectangleImage} alt="" className='hidden lg:flex max-w-[50%] absolute right-0'/>
      <div>
        <p className="flex p-2.5 w-fit text-gst15 sm:text-lg leading-gst22 sm:leading-5 font-medium sm:font-bold bg-[#0F86D91A]">Многопрофильный системный интегратор и дистрибутор</p>
        <p className="mt-2 sm:mt-6 font-bold text-gst40 sm:text-gst64 max-w-[420px] leading-gst48 sm:leading-gst70">Глобальные Сетевые Технологии</p>
        <p className="mt-4 sm:mt-6 sm:text-xl sm:font-medium leading-6 sm:leading-8 max-w-[400px]">Эксклюзивный партнер “Интерпроком” в холдинге ПАО Газпром</p>
        <Button className="mt-4 sm:mt-14" color={'main'} children={'Обсудить проект'} href={'/'}/>
      </div>
      <div className="flex h-[90px] sm:h-[140px] mt-4 sm:mt-14">
        <img className="h-full w-auto" src={First1Image} alt=""/>
        <img className="h-full w-auto" src={First2Image} alt=""/>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:flex sm:flex-wrap h-auto sm:h-[60px] mt-4 sm:mt-6 items-center">
        <img src={First3Image} className="sm:w-auto mr-6" alt=""/>
        <img src={First4Image} className="sm:w-auto mr-6" alt=""/>
        <img src={First5Image} className="sm:w-auto mr-6" alt=""/>
        <img src={First6Image} alt=""/>
      </div>
    </div>
  );
};

export default MainBlock;