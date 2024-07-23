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
      <div className="flex w-10/12 mx-auto py-24">
        <div className="flex flex-col w-1/2">
          <p className="font-bold text-5xl max-w-[620px]">Аксиома в ИТ ландшафте предприятия</p>
          <p className="mt-12 text-xl font-medium max-w-[620px]">Бесконфликтно интегрируется со смежными
            бизнес-приложениями бухгалтерии, производства, системы складского учета, системы учета кадров, АСУ ТП и
            др.</p>
          <Button className="mt-12" color={'white'} children={'Связаться с нами'} href={'/'}/>
        </div>
        <div className="flex flex-col w-1/2">
          {array.map(item => (
            <div key={item} className="flex items-center h-28 bg-white rounded-gst20 first:mt-0 mt-6">
              <div className="mx-8"><CheckIcon/></div>
              <p className="text-gst-text text-xl font-medium max-w-[423px]">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItBlock;