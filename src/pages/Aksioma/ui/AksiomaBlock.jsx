import React from 'react';
import {AksiomaImage} from "../../../assets/images";
import Button from "../../../components/Button";

const AksiomaBlock = () => {
  return (
    <div className="bg-gst-main text-white">
      <div className="flex flex-col w-10/12 mx-auto py-24">
        <div className="flex items-center text-sm">
          <a href="/" className="flex items-center mr-2">Главная</a>
          <p className="text-xl mr-2 opacity-50">›</p>
          <p className="flex items-center opacity-50">Продукты Аксиома</p>
        </div>
        <div className="flex flex-col relative mt-16">
          <img src={AksiomaImage} alt="first_rectangle" className='h-[440px] absolute top-0 right-0'/>
          <p className="font-bold mt-12 text-gst64 max-w-[780px] leading-gst70">Ведение проектов ТоИР на платформе Аксиома </p>
          <p className="mt-12 text-xl font-medium leading-8 max-w-[780px]">«АКСИОМА» решение уровня ERP для управления
            корпоративными активами, недвижимостью, нефтегазом, энергетикой и ТОиР</p>
          <Button className="mt-12" color={'white'} children={'Обсудить проект'} href={'/'}/>
        </div>
      </div>
    </div>
  );
};

export default AksiomaBlock;