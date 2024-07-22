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
    <div className="data flex relative flex-col w-10/12 mx-auto py-24">
      <img src={FirstRectangleImage} alt="" className='absolute top-28 right-0'/>
      <div>
        <p className="flex p-2.5 w-fit font-bold bg-[#0F86D91A]">Многопрофильный системный интегратор и дистрибутор</p>
        <p className="mt-6 font-bold text-gst64 max-w-[420px] leading-gst70">Глобальные Сетевые Технологии</p>
        <p className="mt-6 text-xl font-medium leading-8 max-w-[400px]">Эксклюзивный партнер “Интерпроком” в холдинге ПАО Газпром</p>
        <Button className="mt-14" color={'main'} children={'Обсудить проект'} href={'/'}/>
      </div>
      <div className="flex mt-14">
        <img src={First1Image} alt=""/>
        <img src={First2Image} alt=""/>
      </div>
      <div className="flex mt-6 items-center">
        <img src={First3Image} className="h-10 mr-6" alt=""/>
        <img src={First4Image} className="h-10 mr-6" alt=""/>
        <img src={First5Image} className="h-10 mr-6" alt=""/>
        <img src={First6Image} alt=""/>
      </div>
    </div>
  );
};

export default MainBlock;