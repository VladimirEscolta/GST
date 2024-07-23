import React from 'react';
import {
  AlarmIcon,
  DisksIcon,
  GrafIcon
} from "../../../assets/icons";

const ResultBlock = () => {

  const array = [
    {
      icon: <AlarmIcon/>,
      text: 'Снижение времени простоя оборудования'
    },
    {
      icon: <DisksIcon/>,
      text: 'Сокращение затрат на техническое обслуживание и ремонты'
    },
    {
      icon: <GrafIcon/>,
      text: 'Повышение прозрачности и эффективности деятельности обслуживающих подразделений'
    },
  ]

  return (
    <div className="text-white bg-aksioma-gradient">
      <div className="w-10/12 mx-auto py-24 flex flex-col justify-between">
        <p className="text-5xl font-bold">Результаты внедрения</p>
        <div className="mt-14 grid grid-cols-3 gap-8">
          {array.map((item, index) => (
            <div key={item.text} className="p-8 min-h-[334px] flex flex-col rounded-gst20 border bg-gst-main border-[#2394F1]">
              <p className="">{item.icon}</p>
              <p className="mt-6 text-2xl font-medium max-w-[370px]">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResultBlock;