import React from 'react';
import {CheckBlueIcon} from "../../../assets/icons";

const TasksBlock = () => {

  const array = [
    'Ведение реестра объектов недвижимого имущества',
    'Планирование работ по капитальному строительству, ремонту и обслуживанию',
    'Управление материально-техническим снабжением',
    'Оценка эффективности использования имущественных комплексов',
    'Обеспечение многоаспектной аналитической информацией',
    'Интеграция данных для различных подразделений и целей'
  ]

  return (
    <div className="text-gst-text bg-white">
      <div className="flex flex-col w-10/12 mx-auto py-24">
        <p className="font-bold text-5xl">Решаемые задачи</p>
        <div className="mt-12 grid grid-cols-2 gap-8">
          {array.map(item => (
            <div key={item} className="flex items-center h-32 bg-white rounded-gst20 border border-[#EEEEEE] shadow-[0_24px_44px_0_#14142B0A]">
              <div className="mx-8"><CheckBlueIcon/></div>
              <p className="text-xl font-medium pe-8 max-w-[500px]">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TasksBlock;