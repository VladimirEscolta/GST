import React from 'react';
import ItBlock from "../Aksioma/ui/ItBlock";
import GridBlock from "../../components/GridBlock";
import ProductsBlock from "../Aksioma/ui/ProductsBlock";
import DiscussBlock from "../../components/DiscussBlock";
import {AksiomaRepairIcon, AlarmIcon, DisksIcon, GrafIcon} from "../../assets/icons";
import MainSectionBlock from "../../components/MainSectionBlock";
import GridWhiteBlock from "../../components/GridWhiteBlock";
import CheckboxBlock from "../../components/CheckboxBlock";

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

  const dataTasks = {
    name: 'Решаемые задачи',
    data: [
      'Ведение реестра технологического оборудования и инженерных систем',
      'Ведение классификаторов оборудования, дефектов и технологических карт',
      'Планирование ТОиР, поверок и калибровок',
      'Организация взаимодействия с существующими учетными системами предприятия и АСУ ТП',
      'Регистрация, обработка и контроль выполнения плановых и внеплановых работ'
    ]
  }

  const dataResult = {
    name: 'Результаты внедрения',
    data: [
      {
        icon: <AlarmIcon/>,
        text: 'Снижение времени простоя оборудования'
      },
      {
        icon: <DisksIcon/>,
        text: 'Сокращение затрат на техническое обслуживание и ремонты'
      },
      {
        icon: <GrafIcon/>,
        text: 'Повышение прозрачности и эффективности деятельности обслуживающих подразделений'
      },
    ]
  }

  return (
    <>
      <MainSectionBlock data={dataMain}/>
      <GridWhiteBlock data={dataKeyAdvantages}/>
      <ItBlock/>
      <CheckboxBlock data={dataTasks}/>
      <GridBlock data={dataResult}/>
      <ProductsBlock/>
      <DiscussBlock/>
    </>
  );
};

export default Index;