import React from 'react';
import Button from "../../../components/Button";
import {AksiomaEstateIcon} from "../../../assets/icons";

const CompanyBlock = () => {
  return (
    <div className="flex flex-col w-10/12 mx-auto py-24">
      <div className="flex items-center text-sm text-gst-main">
        <a href="/" className="flex items-center mr-2">Главная</a>
        <p className="text-xl mr-2">›</p>
        <a href="/aksioma" className="flex mr-2">Продукты Аксиома</a>
        <p className="text-xl mr-2 opacity-50 text-gst-text">›</p>
        <p className="flex items-center opacity-50 text-gst-text">Аксиома: имущество</p>
      </div>
      <div className="mt-16 flex items-center justify-between">
        <div className="w-1/2">
          <p className="flex p-2.5 w-fit font-bold bg-[#0F86D91A]">Управление имуществом компании</p>
          <p className="mt-6 font-bold text-gst64 leading-gst70">Аксиома: имущество</p>
          <p className="mt-6 text-xl font-medium leading-8">АКСИОМА: имущество - это комплексное решение для управления
            эксплуатацией и обслуживанием объектов недвижимого имущества компании. Система направлена на повышение
            эффективности использования имущества и оптимизацию затрат на его эксплуатацию.</p>
          <Button className="mt-14" color={'main'} children={'Обсудить проект'} href={'/'}/>
        </div>
        <AksiomaEstateIcon/>
      </div>
    </div>
  );
};

export default CompanyBlock;