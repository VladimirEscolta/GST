import React, {useState} from 'react';
import {
  CobraModules1Image,
  CobraModules2Image,
  CobraModules3Image,
  CobraModules4Image,
  CobraModules5Image, CobraModules6Image
} from "../../../assets/images";
import {ArrowSmallIcon} from "../../../assets/icons";

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

  const arrayModules = [
    {
      image: CobraModules1Image,
      header: 'Базовые модули',
      links: [
        {name: 'Слот-координация', link: '/'},
        {name: 'Расписание движения ВС', link: '/'},
        {name: 'Суточный план полётов', link: '/'},
        {name: 'Контроль наземного обслуживания', link: '/'},
        {name: 'Центр сообщений', link: '/'},
        {name: 'Шина данных', link: '/'},
        {name: 'Администрирование', link: '/'}
      ]
    },
    {
      image: CobraModules2Image,
      header: 'Обслуживание пассажиров и багажа',
      links: [
        {name: 'Регистрация пассажиров и багажа', link: '/'},
        {name: 'Контроль досмотра пассажиров и багажа', link: '/'},
        {name: 'Учёт неисправного и нерегулярного багажа', link: '/'},
        {name: 'Мониторинг трансферных стыковок', link: '/'},
        {name: 'Контроль погрузки багажа', link: '/'}
      ]
    },
    {
      image: CobraModules3Image,
      header: 'Экономика и учет',
      links: [
        {name: 'Сборы', link: '/'},
        {name: 'Аналитическая отчётность', link: '/'},
        {name: 'Рабочий стол руководителя', link: '/'}
      ]
    },
    {
      image: CobraModules4Image,
      header: 'Информирование пассажиров',
      links: [
        {name: 'Визинформ', link: '/'},
        {name: 'Диктор', link: '/'},
        {name: 'Телеграм-бот', link: '/'}
      ]
    },
    {
      image: CobraModules5Image,
      header: 'Управление ресурсами',
      links: [
        {name: 'Терминал', link: '/'},
        {name: 'Перрон', link: '/'},
        {name: 'Управление динамическими ресурсами', link: '/'},
        {name: 'Мобильные рабочие места', link: '/'},
        {name: 'Мониторинг исполнителей 2D и 3D', link: '/'},
        {name: 'КУРС', link: '/'}
      ]
    },
    {
      image: CobraModules6Image,
      header: 'Опциональные модули',
      links: [
        {name: 'A-CDM (портал совместного принятия решений)', link: '/'},
        {name: 'Грузовой терминал', link: '/'},
        {name: 'Голосовой бот', link: '/'}
      ]
    }
  ]

  return (
    <div className="flex flex-col w-11/12 sm:w-10/12 mx-auto pt-4 pb-16 sm:py-24">
      <div className="flex flex-wrap items-center text-sm text-gst-main">
        <a href="/" className="flex items-center mr-2">Главная</a>
        <p className="text-xl mr-2">›</p>
        <a href="/cobra" className="flex mr-2">Кобра – автоматизация аэропорта</a>
        <p className="text-xl mr-2 opacity-50 text-gst-text">›</p>
        <p className="flex items-center opacity-50 text-gst-text w-full sm:w-auto">Описание основных модулей</p>
      </div>
      <div className="mt-8 sm:mt-16">
        <p className="flex p-2.5 w-fit text-gst15 sm:text-lg leading-gst22 sm:leading-5 font-medium sm:font-bold bg-[#0F86D91A]">Система комплексной автоматизации аэропорта</p>
        <p className="mt-6 font-bold text-4xl sm:text-gst64 leading-gst48 sm:leading-gst70">Описание основных модулей</p>
      </div>
      <div className="flex flex-wrap mt-8 sm:mt-12">
        {arrayButtons.map(item => (
          <a
            key={item.name}
            className={`${activeButton === item.name ? 'bg-gst-main text-white border-gst-main' : 'text-[#7A7D9C] border-[#D9DBE9]'} cursor-pointer border hover:bg-gst-main hover:text-white hover:border-gst-main mr-4 mb-4 h-10 sm:h-[56px] rounded-gst7 sm:text-lg font-medium sm:font-bold w-fit px-4 sm:px-8 flex items-center justify-center`}
            // href={item.link}
            onClick={() => setActiveButton(item.name)}
          >
            {item.name}
          </a>
        ))}
      </div>
      <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-x-8 sm:gap-y-16">
        {arrayModules.map(item => (
          <div key={item.header} className="flex flex-col rounded-gst20 shadow-[0_24px_44px_0_#14142B0A]">
            <img className="object-cover rounded-t-gst20 h-60 sm:h-80" src={item.image} alt="cobra_modules_img"/>
            <div className="p-4 sm:p-8">
              <p className="text-gst28 font-bold">{item.header}</p>
              <div className="mt-2">
                {item.links.map(i => (
                  <a key={i.name} className="mt-4 sm:mt-6 flex items-center text-gst-main" href={i.link} target="_self">
                    <div className="mr-4 -rotate-45">
                      <ArrowSmallIcon/>
                    </div>
                    <p className="font-medium">{i.name}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModulesBlock;