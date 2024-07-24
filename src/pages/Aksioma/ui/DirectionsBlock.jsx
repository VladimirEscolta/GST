import React from 'react';
import {
  BoxIcon,
  MetricIcon,
  SettingIcon
} from "../../../assets/icons";

const DirectionsBlock = () => {

  const array = [
    {
      icon: <BoxIcon/>,
      header: 'Управление материальными активами',
      text: 'Включая сбор данных об активах и управление выполнением работ.'
    },
    {
      icon: <SettingIcon/>,
      header: 'Управление обслуживанием и ремонтами',
      text: 'Увеличение времени безотказной работы и  уменьшения затрат путем оптимизации запасов запчастей.'
    },
    {
      icon: <MetricIcon/>,
      header: 'Управление эффективностью активов',
      text: 'Оптимизации производительности посредством планирования и предписывающих действий.'
    }
  ]

  return (
    <div className="text-gst-text bg-white">
      <div className="w-10/12 mx-auto py-24 flex flex-col justify-between">
        <p className="text-5xl font-bold">Управляйте активами эффективно</p>
        <div className="mt-14 grid grid-cols-3 gap-x-8 gap-y-16">
          {array.map(item => (
            <div key={item.header} className="p-8 min-h-[405px] flex flex-col justify-center rounded-gst20 border border-[#EEEEEE] shadow-[0_24px_44px_0_#14142B0A]">
              <p className="">{item.icon}</p>
              <p className="mt-6 text-2xl font-semibold max-w-[360px]">{item.header}</p>
              <p className="mt-6 text-xl font-medium opacity-80">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DirectionsBlock;