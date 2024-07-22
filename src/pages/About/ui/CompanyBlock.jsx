import React from 'react';
import {FirstRectangleImage} from "../../../assets/images";
import Button from "../../../components/Button";

const CompanyBlock = () => {
  return (
    <div className="flex flex-col w-10/12 mx-auto py-24">
      <div className="flex items-center text-sm">
        <a href="/" className="flex mr-2 text-gst-main">Главная</a>
        <p className="flex items-center opacity-50"><span className="text-xl mr-2">›</span> О компании</p>
      </div>
      <div className="flex flex-col relative mt-16">
        <img src={FirstRectangleImage} alt="first_rectangle" className='h-[580px] absolute top-0 right-0'/>
          <p className="font-bold mt-12 text-gst64">О компании</p>
          <p className="mt-12 text-xl font-medium leading-9 max-w-[600px]">«Глобальные сетевые Технологии» -
            ведущий разработчик прикладного ПО и системный интегратор в составе группы компаний ГСТ (Газстройтех),
            предоставляющий комплексные решения для автоматизации бизнеса и экспертизу в области строительства,
            эксплуатации и производственной безопасности</p>
        <Button className="mt-12" color={'main'} children={'Обсудить проект'} href={'/'}/>
      </div>
      <div className="flex mt-24">
        <div className="flex flex-col w-1/3 border-e border-[#CCCCCC]">
          <p className="font-semibold text-gst56">20<span className="text-gst-main">+</span></p>
          <p className="font-bold mt-4 text-gst22">Опыт работы в ИТ</p>
        </div>
        <div className="flex flex-col w-1/3 ps-24 border-e border-[#CCCCCC]">
          <p className="font-semibold text-gst56">40<span className="text-gst-main">+</span></p>
          <p className="font-bold mt-4 text-gst22">Реализованных проектов</p>
        </div>
        <div className="flex flex-col w-1/3 ps-24">
          <p className="font-semibold text-gst56">30<span className="text-gst-main">+</span></p>
          <p className="font-bold mt-4 text-gst22">Членов команды</p>
        </div>
      </div>
    </div>
  );
};

export default CompanyBlock;