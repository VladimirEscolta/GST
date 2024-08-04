import React from 'react';
import {FirstRectangleImage} from "../../../assets/images";
import Button from "../../../components/Button";

const CompanyBlock = () => {
  return (
    <div className="flex flex-col w-11/12 sm:w-10/12 mx-auto pt-4 pb-16 sm:py-24">
      <div className="flex items-center text-sm text-gst-main">
        <a href="/" className="flex items-center mr-2">Главная</a>
        <p className="text-xl mr-2 opacity-50 text-gst-text">›</p>
        <p className="flex items-center opacity-50 text-gst-text">О компании</p>
      </div>
      <div className="flex flex-col relative mt-8 sm:mt-16">
        <img src={FirstRectangleImage} alt="first_rectangle" className='hidden sm:flex max-w-[50%] max-h-[580px] absolute top-0 right-0'/>
        <div className="w-full sm:w-1/2">
          <p className="mt-2 sm:mt-6 font-bold text-gst40 sm:text-gst64 leading-gst48 sm:leading-gst70">О компании</p>
          <p className="mt-2 sm:mt-12 sm:text-xl sm:font-medium leading-6 sm:leading-8 max-w-[600px]">«Глобальные сетевые Технологии» -
            ведущий разработчик прикладного ПО и системный интегратор в составе группы компаний ГСТ (Газстройтех),
            предоставляющий комплексные решения для автоматизации бизнеса и экспертизу в области строительства,
            эксплуатации и производственной безопасности</p>
          <Button className="mt-4 sm:mt-12" color={'main'} children={'Обсудить проект'} href={'/'}/>
        </div>
      </div>
      <div className="flex flex-wrap mt-12 sm:mt-24">
        <div className="flex flex-col w-full sm:w-1/3 border-0 sm:border-e border-[#CCCCCC]">
          <p className="font-semibold text-4xl sm:text-gst56">20<span className="text-gst-main">+</span></p>
          <p className="font-medium sm:font-bold mt-0 sm:mt-4 text-xl sm:text-gst22">Опыт работы в ИТ</p>
        </div>
        <div className="mt-6 sm:mt-0 flex flex-col w-full sm:w-1/3 lg:ps-12 2xl:ps-24 border-0 sm:border-e border-[#CCCCCC]">
          <p className="font-semibold text-4xl sm:text-gst56">40<span className="text-gst-main">+</span></p>
          <p className="font-medium sm:font-bold mt-0 sm:mt-4 text-xl sm:text-gst22">Реализованных проектов</p>
        </div>
        <div className="mt-6 sm:mt-0 flex flex-col w-full sm:w-1/3 lg:ps-12 2xl:ps-24">
          <p className="font-semibold text-4xl sm:text-gst56">30<span className="text-gst-main">+</span></p>
          <p className="font-medium sm:font-bold mt-0 sm:mt-4 text-xl sm:text-gst22">Членов команды</p>
        </div>
      </div>
    </div>
  );
};

export default CompanyBlock;