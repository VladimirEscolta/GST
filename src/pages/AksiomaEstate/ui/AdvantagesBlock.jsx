import React from 'react';

const AdvantagesBlock = () => {

  const array = [
    {
      header: 'Комплексный учет',
      text: 'Формирование полной и достоверной информации обо всех объектах недвижимости'
    },
    {
      header: 'Нормативное соответствие',
      text: 'Соблюдение государственных актов и требований по экологии и безопасности'
    },
    {
      header: 'Оперативное планирование',
      text: 'Эффективное планирование работ, ресурсов и бюджета'
    },
    {
      header: 'Информационная интеграция',
      text: 'Единая среда для финансового планирования, управления строительством и хозяйственного управления'
    },
    {
      header: 'Аналитическая поддержка',
      text: 'Подготовка информации для принятия решений по эффективному использованию имущества'
    },
  ]

  return (
    <div className="w-10/12 mx-auto py-24 flex flex-col justify-between">
      <p className="text-5xl font-bold">Ключевые преимущества внедрения</p>
      <div className="mt-14 grid grid-cols-3 gap-8">
        {array.map(item => (
          <div key={item.header}
               className="min-h-72 p-8 flex flex-col rounded-gst20 border border-[#EFF0F6] shadow-[0_6px_12px_0_#14142B0A]">
            <p className="text-gst28 font-bold leading-gst42 max-w-64">{item.header}</p>
            <p className="mt-6 text-lg font-medium text-[#262C59]">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdvantagesBlock;