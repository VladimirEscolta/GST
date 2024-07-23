import React from 'react';
import {CheckBlueIcon} from "../../../assets/icons";

const StartSystemBlock = () => {

  const array = [
    'Сколько стоит эксплуатация вашего оборудования?',
    'Ремонтировать старое оборудование или дешевле купить новое?',
    'Какова вероятность поломки оборудования?',
    'Сколько времени займет инвентаризация?',
    'Вовремя ли производят техобслуживание оборудования и инфраструктуры?',
    'Окупается ли сотрудничество с подрядчиком по ремонту?',
    'Есть ли ресурсы и запчасти на складе для оперативного ремонта?'
  ]

  return (
    <div className="text-gst-text bg-white">
      <div className="flex flex-col w-10/12 mx-auto py-24">
        <p className="font-bold text-5xl">Когда пора внедрять систему «Аксиома»?</p>
        <p className="mt-12 text-xl font-medium">Если необходимо быстро и обоснованно отвечать на вопросы:</p>
        <div className="mt-12 grid grid-cols-2 gap-8">
          {array.map(item => (
            <div key={item} className="flex items-center h-32 bg-white rounded-gst20 border border-[#EEEEEE] shadow-[0_24px_44px_0_#14142B0A]">
              <div className="mx-8"><CheckBlueIcon/></div>
              <p className="text-xl font-medium pe-8">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StartSystemBlock;