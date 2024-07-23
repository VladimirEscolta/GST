import React from 'react';
import ItBlock from "../Aksioma/ui/ItBlock";
import ResultBlock from "./ui/ResultBlock";
import ProductsBlock from "../Aksioma/ui/ProductsBlock";
import DiscussBlock from "../../components/DiscussBlock";
import {AksiomaRepairIcon} from "../../assets/icons";
import MainSectionBlock from "../../components/MainSectionBlock";
import KeyAdvantagesBlock from "../../components/KeyAdvantagesBlock";
import TasksBlock from "../../components/TasksBlock";

const Index = () => {

  const dataMain = {
    name: 'Аксиома: ремонты',
    header: 'Техническое обслуживание и ремонт',
    text: 'АКСИОМА - ремонты - это комплексное решение для управления содержанием, техническим обслуживанием и ремонтом производственного оборудования, объектов и коммуникаций. Система нацелена на обеспечение непрерывности производства за счет повышения коэффициента надежности и минимизации простоев.',
    icon: <AksiomaRepairIcon/>
  }

  const dataKeyAdvantages = {
    name: 'Ключевые преимущества внедрения',
    data: [
      {
        header: 'Плановость',
        text: 'Заблаговременное определение состава, объемов и периодичности проведения ТОиР оборудования.'
      },
      {
        header: 'Непрерывность производства',
        text: 'Выполнение операций ТОиР до наступления отказа оборудования и вынужденной остановки производства.'
      },
      {
        header: 'Прозрачность затрат на ТОиР',
        text: 'Понимание распределения средств ремонтного фонда и стоимости работ.'
      },
      {
        header: 'Обоснованность затрат на ТОиР',
        text: 'Оптимальный баланс между затратами на поддержание работоспособности оборудования и рисками.'
      },
      {
        header: 'Переход к прогнозному обслуживанию',
        text: 'Экономия на ТОиР и повышение надежности оборудования через оценку его состояния и прогнозирование необходимости ремонта.'
      },
    ]
  }

  const dataTasks = [
    'Ведение реестра технологического оборудования и инженерных систем',
    'Ведение классификаторов оборудования, дефектов и технологических карт',
    'Планирование ТОиР, поверок и калибровок',
    'Организация взаимодействия с существующими учетными системами предприятия и АСУ ТП',
    'Регистрация, обработка и контроль выполнения плановых и внеплановых работ'
  ]

  return (
    <>
      <MainSectionBlock data={dataMain}/>
      <KeyAdvantagesBlock data={dataKeyAdvantages.data} name={dataKeyAdvantages.name}/>
      <ItBlock/>
      <TasksBlock data={dataTasks}/>
      <ResultBlock/>
      <ProductsBlock/>
      <DiscussBlock/>
    </>
  );
};

export default Index;