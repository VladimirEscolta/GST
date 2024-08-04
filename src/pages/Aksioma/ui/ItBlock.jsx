import React from 'react';
import Button from "../../../components/Button";
import {CheckIcon} from "../../../assets/icons";

const ItBlock = () => {

  const array = [
    'Не требует организационных изменений в структуре предприятия',
    'Снижается стоимость владения активами',
    'Продлевается срок службы активов'
  ]

  return (
    <div className="text-white bg-aksioma-gradient">
      <div className="flex flex-col sm:flex-row w-11/12 sm:w-10/12 mx-auto py-16 sm:py-24">
        <div className="flex flex-col w-full sm:w-1/2">
          <p className="font-bold text-4xl sm:text-5xl max-w-[620px]">Аксиома в ИТ ландшафте предприятия</p>
          <p className="mt-8 sm:mt-12 sm:text-xl sm:font-medium max-w-[620px]">Бесконфликтно интегрируется со смежными
            бизнес-приложениями бухгалтерии, производства, системы складского учета, системы учета кадров, АСУ ТП и
            др.</p>
          <Button className="hidden sm:flex mt-8 sm:mt-12" color={'white'} children={'Связаться с нами'} href={'/'}/>
        </div>
        <div className="flex flex-col w-full sm:w-1/2 mt-8 sm:mt-0">
          {array.map(item => (
            <div key={item} className="flex items-center h-24 sm:h-28 bg-white rounded-gst20 first:mt-0 mt-4 sm:mt-6">
              <div className="mx-4 sm:mx-8"><CheckIcon className="w-9 sm:w-[44px]"/></div>
              <p className="pe-4 sm:pe-0 text-gst-text sm:text-xl sm:font-medium max-w-[423px]">{item}</p>
            </div>
          ))}
        </div>
        <div className="flex sm:hidden justify-center">
          <Button className="sm:hidden mt-8 font-medium w-full h-[44px]" size={''} color={'white'} children={'Связаться с нами'} href={'/'}/>
          <Button className="hidden sm:flex mt-12" color={'white'} children={'Связаться с нами'} href={'/'}/>
        </div>
      </div>
    </div>
  );
};

export default ItBlock;