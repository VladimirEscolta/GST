import React from 'react';
import {
  Expertise1Icon,
  Expertise2Icon,
  Expertise3Icon,
  Expertise4Icon,
  Expertise5Icon,
  Expertise6Icon
} from "../../../assets/icons";

const ExpertiseBlock = (props) => {

  const {
    className = '',
    color = 'main', // default color
    colorBlock = 'main', // default color
    colorIcon = 'main', // default color
    ...rest
  } = props;

  const colors = {
    main: 'bg-gradient-to-b from-gst-main to-[#006EBB] text-white',
    white: 'bg-white text-gst-text',
  }

  const colorsBlock = {
    main: 'bg-[#FFFFFF1A]',
    white: 'border border-[#EEEEEE] shadow-[0_24px_44px_0_#14142B0A]',
  }

  const colorsIcon = {
    main: `text-white`,
    white: 'text-gst-main',
  }

  const appliedClasses = `${colors[color]} ${className} `;

  const array = [
    {icon: <Expertise1Icon/>, text: 'Стандартизации предприятия'},
    {icon: <Expertise2Icon/>, text: 'Автоматизация строительства'},
    {icon: <Expertise3Icon/>, text: 'ТОиР (технологии обслуживания и ремонта)'},
    {icon: <Expertise4Icon/>, text: 'Производственная безопасность'},
    {icon: <Expertise5Icon/>, text: 'Разработка тренажеров виртуальной реальности'},
    {icon: <Expertise6Icon/>, text: 'Эксплуатации зданий и сооружений'},
  ]

  return (
    <div className={appliedClasses} {...rest}>
      <div className="w-10/12 mx-auto py-24 flex flex-col justify-between">
        <p className="text-5xl font-bold">Наша экспертиза</p>
        <div className="mt-14 grid grid-cols-3 gap-x-8 gap-y-16">
          {array.map(item => (
            <div key={item.text} className={`${colorsBlock[colorBlock]} h-80 flex flex-col items-center justify-center rounded-gst20`}>
              <p className={colorsIcon[colorIcon]}>{item.icon}</p>
              <p className="mt-6 text-2xl font-semibold leading-8 w-80 text-center">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpertiseBlock;