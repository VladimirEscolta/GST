import React from 'react';
import {MedalIcon, StarIcon} from "../../../assets/icons";

const AdvantagesBlock = () => {
  return (
    <div className="bg-white w-10/12 mx-auto py-24 flex justify-between">
      <div className="flex flex-col w-1/2">
        <p className="text-5xl font-bold">Наши преимущества</p>
        <p className="text-xl font-normal mt-14 leading-8 max-w-[540px]">В своей работе мы используем
          комплексный подход, сочетая IT-решения и бизнес-задачи заказчика.
          Это позволяет нам создавать проекты, которые отвечают современным требованиям и обеспечивают эффективное
          решение задач наших клиентов.</p>
      </div>
      <div className="flex flex-col w-1/2">
        <div className="flex justify-end">
          <div className="flex flex-col w-1/2">
            <MedalIcon/>
            <p className="mt-6 text-xl leading-7">Надежность и качество услуг</p>
            <p className="mt-2 w-52 text-base font-normal opacity-50 leading-6">Более 20 лет успешно работаем на рынке</p>
          </div>
          <div className="flex flex-col">
            <StarIcon/>
            <p className="mt-6 text-xl leading-7">Персональный подход</p>
            <p className="mt-2 w-52 text-base font-normal opacity-50 leading-6">Индивидуальный подход к каждому клиенту</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvantagesBlock;