import React from 'react';
import Button from "../../../components/Button";
import {KeyFunctions1Icon, KeyFunctions2Icon, KeyFunctions3Icon} from "../../../assets/icons";

const KeyFunctionsBlock = () => {
  return (
    <div className="flex w-10/12 mx-auto py-24">
      <div className="flex flex-col w-1/2">
        <div className="text-5xl font-bold max-w-[500px] leading-gst56">Ключевые функции системного интегратора</div>
        <Button className="mt-14" color={'main'} children={'Связаться с нами'} href={'/'}/>
      </div>
      <div className="flex flex-col w-1/2">
        <div className="flex items-center h-32 rounded-md border border-[#0B0A331A]">
          <div className="mx-4">
            <KeyFunctions1Icon/>
          </div>
          <div className="flex flex-col">
            <p className="text-xl font-medium">Внедрение информационных систем</p>
            <p className="text-base font-normal mt-2">Обмен информацией между подразделениями</p>
          </div>
        </div>
        <div className="flex items-center h-32 rounded-md mt-6 border border-[#0B0A331A]">
          <div className="mx-4">
            <KeyFunctions2Icon/>
          </div>
          <div className="flex flex-col">
            <p className="text-xl font-medium">Администрирование</p>
            <p className="text-base font-normal mt-2">Управление системой и доступом к данным</p>
          </div>
        </div>
        <div className="flex items-center h-32 rounded-md mt-6 border border-[#0B0A331A]">
          <div className="mx-4">
            <KeyFunctions3Icon/>
          </div>
          <div className="flex flex-col">
            <p className="text-xl font-medium">Бизнес-аналитика</p>
            <p className="text-base font-normal mt-2">Подбор оптимальных решений для текущих задач</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyFunctionsBlock;