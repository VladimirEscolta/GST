import React from 'react';
import ItBlock from "../Aksioma/ui/ItBlock";
import ResultBlock from "./ui/ResultBlock";
import ProductsBlock from "../Aksioma/ui/ProductsBlock";
import DiscussBlock from "../../components/DiscussBlock";
import MainSectionBlock from "../../components/MainSectionBlock";
import {AksiomaEstateIcon} from "../../assets/icons";
import KeyAdvantagesBlock from "../../components/KeyAdvantagesBlock";
import TasksBlock from "../../components/TasksBlock";

const Index = () => {

  const dataMain = {
    name: 'Аксиома: имущество',
    header: 'Управление имуществом компании',
    text: 'АКСИОМА: имущество - это комплексное решение для управления эксплуатацией и обслуживанием объектов недвижимого имущества компании. Система направлена на повышение эффективности использования имущества и оптимизацию затрат на его эксплуатацию.',
    icon: <AksiomaEstateIcon/>
  }

  const dataKeyAdvantages = {
    name: 'Ключевые преимущества внедрения',
    data: [
      {
        header: 'Комплексный учет',
        text: 'Формирование полной и достоверной информации обо всех объектах недвижимости'
      },
      {
        header: 'Нормативное соответствие',
        text: 'Соблюдение государственных актов и требований по экологии и безопасности'
      },
      {
        header: 'Оперативное планирование',
        text: 'Эффективное планирование работ, ресурсов и бюджета'
      },
      {
        header: 'Информационная интеграция',
        text: 'Единая среда для финансового планирования, управления строительством и хозяйственного управления'
      },
      {
        header: 'Аналитическая поддержка',
        text: 'Подготовка информации для принятия решений по эффективному использованию имущества'
      },
    ]
  }

  const dataTasks = [
    'Ведение реестра объектов недвижимого имущества',
    'Планирование работ по капитальному строительству, ремонту и обслуживанию',
    'Управление материально-техническим снабжением',
    'Оценка эффективности использования имущественных комплексов',
    'Обеспечение многоаспектной аналитической информацией',
    'Интеграция данных для различных подразделений и целей'
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