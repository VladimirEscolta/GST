import React from 'react';
import {CheckBlueIcon} from "../../../assets/icons";

const TasksBlock = () => {

  const array = [
    'Ведение реестра технологического оборудования и инженерных систем',
    'Ведение классификаторов оборудования, дефектов и технологических карт',
    'Планирование ТОиР, поверок и калибровок',
    'Организация взаимодействия с существующими учетными системами предприятия и АСУ ТП',
    'Регистрация, обработка и контроль выполнения плановых и внеплановых работ'
  ]

  return (
    <div className="text-gst-text bg-white">
      <div className="flex flex-col w-10/12 mx-auto py-24">
        <p className="font-bold text-5xl">Решаемые задачи</p>
        <div className="mt-12 grid grid-cols-2 gap-8">
          {array.map(item => (
            <div key={item} className="flex items-center h-32 bg-white rounded-gst20 border border-[#EEEEEE] shadow-[0_24px_44px_0_#14142B0A]">
              <div className="mx-8"><CheckBlueIcon/></div>
              <p className="text-xl font-medium pe-8">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TasksBlock;