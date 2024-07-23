import React from 'react';
import {
  ControlActive1Icon, ControlActive2Icon, ControlActive3Icon,
} from "../../../assets/icons";

const ControlActiveBlock = () => {

  const array = [
    {
      icon: <ControlActive1Icon/>,
      header: 'Повышение качества сервиса',
      text: 'Контроль качества работы исполнителей, отслеживание KPI оборудования и подразделений, снижение числа остановок и времени простоя оборудования.'
    },
    {
      icon: <ControlActive2Icon/>,
      header: 'Сокращение расходов',
      text: 'Контроль затрат, отслеживание исполнения договорных обязательств, оптимизация внутренних и привлекаемых ресурсов, складских запасов.'
    },
    {
      icon: <ControlActive3Icon/>,
      header: 'Снижение рисков',
      text: 'Контроль за соблюдением стандартов и нормативов, «единая правда» по всем объектам, ведение истории отказов, инцидентов, прогнозирование.'
    },
  ]

  return (
    <div className="text-white bg-aksioma-gradient">
      <div className="w-10/12 mx-auto py-24 flex flex-col justify-between">
        <p className="text-5xl font-bold">Управляйте активами эффективно</p>
        <div className="mt-14 grid grid-cols-3 gap-x-8 gap-y-16">
          {array.map((item, index) => (
            <div key={item.header} className="p-8 min-h-[426px] flex flex-col justify-center rounded-gst20 border bg-gst-main border-[#2394F1]">
              <p className="">{item.icon}</p>
              <p className={`mt-6 text-2xl font-semibold ${index === 0 ? 'w-56' : 'w-52'}`}>{item.header}</p>
              <p className="mt-6 text-xl font-medium text-[#F1F1F1]">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ControlActiveBlock;