import React from 'react';
import MainSectionBlock from "../../components/MainSectionBlock";
import KeyAdvantagesBlock from "../../components/KeyAdvantagesBlock";
import ItBlock from "../Aksioma/ui/ItBlock";
import TasksBlock from "../../components/TasksBlock";
import ResultBlock from "./ui/ResultBlock";
import ProductsBlock from "../Aksioma/ui/ProductsBlock";
import DiscussBlock from "../../components/DiscussBlock";
import {AksiomaServiceIcon} from "../../assets/icons";

const Index = () => {

  const dataMain = {
    name: 'Аксиома: сервис',
    header: 'Автоматизация процессов сервисного подразделения',
    text: 'АКСИОМА: сервис - это комплексное решение для автоматизации процессов сервисного подразделения и управления контрактными работами по обеспечению работоспособности сложных комплексных объектов эксплуатации. Уникальность системы заключается в возможности работы с плановыми периодическими работами, а не только с работами по заявкам.',
    icon: <AksiomaServiceIcon/>
  }

  const dataKeyAdvantages = {
    name: 'Ключевые возможности',
    data: [
      {
        header: 'Управление объектами',
        text: 'Регистрация и классификация объектов эксплуатации'
      },
      {
        header: 'Контроль договоров',
        text: 'Регистрация договоров на обслуживание с отслеживанием КПЭ'
      },
      {
        header: 'Финансовый анализ',
        text: 'Калькуляция затрат и оценка стоимости обслуживания'
      },
      {
        header: 'Планирование работ',
        text: 'Управление плановыми и внеплановыми работами'
      },
      {
        header: 'Диспетчеризация',
        text: 'Организация службы поддержки (Service Desk)'
      },
    ]
  }

  const dataTasks = [
    'Обеспечение эффективного взаимодействия между эксплуатантами и сервисными подразделениями',
    'Контроль уровня оказываемых услуг',
    'Оптимизация затрат на обслуживание',
    'Минимизация потерь через контроль сроков реагирования',
    'Сбор и анализ информации о работоспособности оборудования',
    'Снижение трудоемкости формирования отчетности',
    'Ведение полной информации об объектах эксплуатации'
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