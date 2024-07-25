import React from 'react';
import {Products2Image} from "../../../assets/images";
import Button from "../../../components/Button";
import {ArrowSmallIcon} from "../../../assets/icons";

const CobraBlock = () => {
  return (
    <div className="flex flex-col w-10/12 mx-auto py-24">
      <div className="flex items-center text-sm text-gst-main">
        <a href="/" className="flex items-center mr-2">Главная</a>

        {/*<p className="text-xl mr-2">›</p>*/}
        {/*<a href="/aksioma" className="flex mr-2">Продукты Аксиома</a>*/}

        <p className="text-xl mr-2 opacity-50 text-gst-text">›</p>
        <p className="flex items-center opacity-50 text-gst-text">Кобра – автоматизация аэропорта</p>

      </div>
      <div className="mt-16 flex items-center justify-between">
        <div className="w-1/2">
          <p className="flex p-2.5 w-fit font-bold bg-[#0F86D91A]">Система комплексной автоматизации аэропорта</p>
          <p className="mt-6 font-bold text-gst64 leading-gst70">Кобра – автоматизация аэропорта</p>
          <p className="mt-6 text-xl font-medium leading-8">Система Кобра представляет собой комплексное решение для
            автоматизации аэропортов, позволяющее значительно повысить эффективность работы и качество обслуживания
            пассажиров. Благодаря широкому набору модулей и возможности их гибкой настройки, Кобра может удовлетворить
            потребности аэропортов любого масштаба - от небольших региональных до крупных международных хабов.</p>
          <div className="flex mt-14">
            <Button className="mr-8" children={'Обсудить проект'} href={'/'}/>
            <Button className="" color={'white'} size={'md320'} children={'Описание основных модулей'} href={'/cobra/modules'}/>
          </div>
        </div>
        <img src={Products2Image} alt="cobra_img"/>
      </div>
    </div>
  );
};

export default CobraBlock;