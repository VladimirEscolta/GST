import React from 'react';
import {MedalIcon, StarIcon} from "../../../assets/icons";

const AdvantagesBlock = () => {
  return (
    <div className="bg-white w-11/12 sm:w-10/12 mx-auto py-16 sm:py-24 flex flex-col sm:flex-row justify-between">
      <div className="flex flex-col w-full sm:w-1/2 pe-0 sm:pe-4">
        <p className="text-4xl sm:text-5xl font-bold">Наши преимущества</p>
        <p className="text-lg sm:text-xl font-normal mt-8 sm:mt-14 leading-7 sm:leading-8 max-w-[540px]">В своей работе мы используем
          комплексный подход, сочетая IT-решения и бизнес-задачи заказчика.
          Это позволяет нам создавать проекты, которые отвечают современным требованиям и обеспечивают эффективное
          решение задач наших клиентов.</p>
      </div>
      <div className="flex flex-col w-full sm:w-1/2 mt-6 sm:my-auto items-center">
        <div className="flex flex-col sm:flex-row w-full justify-end">
          <div className="flex flex-row sm:flex-col w-full sm:w-1/2">
            <div className="flex items-center w-[75px] mr-4 sm:mr-0">
              <MedalIcon/>
            </div>
            <div className="w-[204px] 2xl:w-full">
              <p className="mt-0 sm:mt-6 text-lg sm:text-xl font-semibold sm:font-normal leading-7">Надежность и качество услуг</p>
              <p className="mt-0 sm:mt-2 w-full sm:w-52 text-base font-normal opacity-50 leading-6">Более 20 лет успешно работаем на рынке</p>
            </div>
          </div>
          <div className="flex flex-row sm:flex-col w-full sm:w-56 mt-6 sm:mt-0">
            <div className="flex items-center w-[75px] mr-4 sm:mr-0">
              <StarIcon/>
            </div>
            <div className="w-[204px] 2xl:w-full">
              <p className="mt-0 sm:mt-6 text-lg sm:text-xl font-semibold sm:font-normal leading-7">Персональный подход</p>
              <p className="mt-0 sm:mt-2 w-full sm:w-52 text-base font-normal opacity-50 leading-6">Индивидуальный подход к каждому клиенту</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvantagesBlock;