import React from 'react';
import MainSectionBlock from "../../components/MainSectionBlock";
import KeyAdvantagesBlock from "../../components/KeyAdvantagesBlock";
import ItBlock from "../Aksioma/ui/ItBlock";
import TasksBlock from "../../components/TasksBlock";
import ProductsBlock from "../Aksioma/ui/ProductsBlock";
import DiscussBlock from "../../components/DiscussBlock";
import {AksiomaOilgasIcon} from "../../assets/icons";
import ResultBlock from "../../components/ResultBlock";

const Index = () => {

  const dataMain = {
    name: 'Аксиома: нефтегазовая отрасль',
    header: 'Управление физическими активами любой сложности',
    text: 'Аксиома: нефтегазовая отрасль - это отечественная платформа для управления физическими активами любой сложности в нефтегазовой отрасли. Система направлена на повышение операционной эффективности и устойчивости бизнеса, обеспечивая управление активами на всех этапах: от разведки и добычи до переработки и сбыта.',
    icon: <AksiomaOilgasIcon/>
  }

  const dataKeyAdvantages = {
    name: 'Ключевые возможности',
    data: [
      {
        header: 'Комплексное управление активами',
        text: 'Охватывает все типы активов предприятий нефтегазовой отрасли'
      },
      {
        header: 'Повышение эффективности',
        text: 'Оптимизация производительности через планирование и предписывающие действия'
      },
      {
        header: 'Управление ТОиР',
        text: 'Увеличение времени безотказной работы и уменьшение затрат'
      },
      {
        header: 'Аналитика и прогнозирование',
        text: 'Использование ИИ для решения операционных проблем и помощи в принятии решений'
      },
      {
        header: 'Мобильность',
        text: 'Поддержка полевых работ и мобильного обслуживания'
      },
    ]
  }

  const dataTasks = [
    'Обеспечение безопасности и надежности работы',
    'Повышение экономической эффективности',
    'Обеспечение устойчивости производства',
    'Соответствие экологическим требованиям',
    'Управление операционными рисками',
    'Оптимизация запасов запчастей',
    'Стандартизация и консолидация профессиональных знаний'
  ]

  const dataResult = {
    name: 'Результаты внедрения',
    data: [
      {text: 'Сокращение числа внеплановых остановок оборудования до 35%'},
      {text: 'Увеличение срока безотказной службы агрегатов'},
      {text: 'Сокращение доли сверхурочных работ до 25%'},
      {text: 'Снижение уровня сверхнормативных запасов запчастей и материалов'},
      {text: 'Уменьшение затрат на обслуживание оборудования до 20%'}
    ]
  }


  return (
    <>
      <MainSectionBlock data={dataMain}/>
      <KeyAdvantagesBlock data={dataKeyAdvantages.data} name={dataKeyAdvantages.name}/>
      <ItBlock/>
      <TasksBlock data={dataTasks}/>
      <ResultBlock data={dataResult.data} name={dataResult.name}/>
      <ProductsBlock/>
      <DiscussBlock/>
    </>
  );
};

export default Index;