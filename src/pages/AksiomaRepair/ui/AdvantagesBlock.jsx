import React from 'react';

const AdvantagesBlock = () => {

  const array = [
    {
      header: 'Плановость',
      text: 'Заблаговременное определение состава, объемов и периодичности проведения ТОиР оборудования.'
    },
    {
      header: 'Непрерывность производства',
      text: 'Выполнение операций ТОиР до наступления отказа оборудования и вынужденной остановки производства.'
    },
    {
      header: 'Прозрачность затрат на ТОиР',
      text: 'Понимание распределения средств ремонтного фонда и стоимости работ.'
    },
    {
      header: 'Обоснованность затрат на ТОиР',
      text: 'Оптимальный баланс между затратами на поддержание работоспособности оборудования и рисками.'
    },
    {
      header: 'Переход к прогнозному обслуживанию',
      text: 'Экономия на ТОиР и повышение надежности оборудования через оценку его состояния и прогнозирование необходимости ремонта.'
    },
  ]

  return (
    <div className="w-10/12 mx-auto py-24 flex flex-col justify-between">
      <p className="text-5xl font-bold">Ключевые преимущества внедрения</p>
      <div className="mt-14 grid grid-cols-3 gap-8">
        {array.map(item => (
          <div key={item.header}
               className="min-h-72 p-8 flex flex-col rounded-gst20 border border-[#EFF0F6] shadow-[0_6px_12px_0_#14142B0A]">
            <p className="text-gst28 font-bold leading-gst42">{item.header}</p>
            <p className="mt-6 text-lg font-medium text-[#262C59]">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdvantagesBlock;