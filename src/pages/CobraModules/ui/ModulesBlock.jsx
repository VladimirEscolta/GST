import React, {useState} from 'react';

const ModulesBlock = () => {

  const [activeButton, setActiveButton] = useState('Все модули')

  const arrayButtons = [
    {name: 'Все модули', link: '/'},
    {name: 'Базовые модули', link: '/'},
    {name: 'Информирование пассажиров', link: '/'},
    {name: 'Обслуживание пассажиров и багажа', link: '/'},
    {name: 'Экономика и учет', link: '/'},
    {name: 'Управление ресурсами', link: '/'},
    {name: 'Опциональные модули', link: '/'}
  ]

  return (
    <div className="flex flex-col w-10/12 mx-auto py-24">
      <div className="flex items-center text-sm text-gst-main">
        <a href="/" className="flex items-center mr-2">Главная</a>

        <p className="text-xl mr-2">›</p>
        <a href="/cobra" className="flex mr-2">Кобра – автоматизация аэропорта</a>

        <p className="text-xl mr-2 opacity-50 text-gst-text">›</p>
        <p className="flex items-center opacity-50 text-gst-text">Описание основных модулей</p>

      </div>
      <div className="mt-16">
        <p className="flex p-2.5 w-fit font-bold bg-[#0F86D91A]">Система комплексной автоматизации аэропорта</p>
        <p className="mt-6 font-bold text-gst64 leading-gst70">Описание основных модулей</p>
      </div>
      <div className="flex flex-wrap mt-12">
        {arrayButtons.map(item => (
          <a
            key={item.name}
            className={`${activeButton === item.name ? 'bg-gst-main text-white border-gst-main' : 'text-[#7A7D9C] border-[#D9DBE9]'} border hover:bg-gst-main hover:text-white hover:border-gst-main mr-4 mb-4 h-[56px] rounded-gst7 text-lg font-bold w-fit px-8 flex items-center justify-center`}
            // href={item.link}
            onClick={() => setActiveButton(item.name)}
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ModulesBlock;