import React from 'react';
import Button from "../../../components/Button";
import {KeyFunctions1Icon, KeyFunctions2Icon, KeyFunctions3Icon} from "../../../assets/icons";

const KeyFunctionsBlock = () => {

  const data = [
    {
      header: 'Внедрение информационных систем',
      text: 'Обмен информацией между подразделениями',
      icon: <KeyFunctions1Icon className="w-[60px] h-[60px] sm:w-[100px] sm:h-[100px]"/>
    },
    {
      header: 'Администрирование',
      text: 'Управление системой и доступом к данным',
      icon: <KeyFunctions2Icon className="w-[60px] h-[60px] sm:w-[100px] sm:h-[100px]"/>
    },
    {
      header: 'Бизнес-аналитика',
      text: 'Подбор оптимальных решений для текущих задач',
      icon: <KeyFunctions3Icon className="w-[60px] h-[60px] sm:w-[100px] sm:h-[100px]"/>
    }
  ]

  return (
    <div className="flex flex-col sm:flex-row w-11/12 sm:w-10/12 mx-auto py-16 sm:py-24">
      <div className="flex flex-col sm:w-1/2">
        <div className="text-4xl sm:text-5xl font-bold sm:max-w-[500px] leading-gst48 sm:leading-gst56">Ключевые функции системного интегратора</div>
        <Button className="hidden sm:flex mt-14" color={'main'} children={'Связаться с нами'} href={'/'}/>
      </div>
      <div className="flex flex-col mt-6 sm:mt-0 sm:w-1/2">
        {data.map(item => (
          <div key={item.header} className="flex items-center h-32 rounded-md first:mt-0 mt-2 sm:mt-6 border border-[#0B0A331A]">
            <div className="mx-2 sm:mx-4">
              {item.icon}
            </div>
            <div className="flex flex-col pe-2">
              <p className="sm:text-xl font-bold sm:font-medium leading-5 sm:leading-7">{item.header}</p>
              <p className="text-base font-normal leading-5 sm:leading-6 mt-2">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
      <Button className="sm:hidden mt-12 font-medium w-full h-[48px]" size={''} color={'main'} children={'Связаться с нами'} href={'/'}/>
    </div>
  );
};

export default KeyFunctionsBlock;