import React from 'react';

const AdvantagesBlock = () => {

  const data = [
    {
      header: '35%',
      text: 'Сокращение числа внеплановых остановок оборудования, увеличение срока безотказной службы агрегатов и непрерывность производства.'
    },
    {
      header: 'в 2 раза',
      text: 'Руководители высшего звена тратят меньше времени на оперативное управление и контроль производственной деятельности.'
    },
    {
      header: '25 - 30%',
      text: 'Снижаются затраты на обслуживание оборудования, стоимость аварийных работ и восстановления.'
    },
    {
      header: '20%',
      text: 'Сокращается доля сверхурочных работ и уровень сверхнормативных запасов запчастей и материалов.'
    }
  ]

  return (
    <div className="w-11/12 sm:w-10/12 mx-auto py-16 sm:py-24 flex flex-col justify-between">
      <p className="text-4xl sm:text-5xl font-bold">Преимущества внедрения ТоИР в цифрах</p>
      <div className="mt-8 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
        {data.map(item => (
          <div className="flex flex-col">
            <p className="text-gst-main text-gst40 2xl:text-gst56 font-bold">{item.header}</p>
            <p className="mt-0 sm:mt-4 sm:text-lg sm:font-medium text-[#9394A3] max-w-80">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdvantagesBlock;