import React from 'react';
import MainSectionBlock from "../../components/MainSectionBlock";
import ItBlock from "../Aksioma/ui/ItBlock";
import CheckboxBlock from "../../components/CheckboxBlock";
import ProductsBlock from "../Aksioma/ui/ProductsBlock";
import DiscussBlock from "../../components/DiscussBlock";
import {AksiomaOilgasIcon} from "../../assets/icons";
import GridBlock from "../../components/GridBlock";

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

  const dataTasks = {
    name: 'Решаемые задачи',
    data: [
      'Обеспечение безопасности и надежности работы',
      'Повышение экономической эффективности',
      'Обеспечение устойчивости производства',
      'Соответствие экологическим требованиям',
      'Управление операционными рисками',
      'Оптимизация запасов запчастей',
      'Стандартизация и консолидация профессиональных знаний'
    ]
  }

  const dataResult = {
    name: 'Результаты внедрения',
    data: [
      {header: 'Сокращение числа внеплановых остановок оборудования до 35%'},
      {header: 'Увеличение срока безотказной службы агрегатов'},
      {header: 'Сокращение доли сверхурочных работ до 25%'},
      {header: 'Снижение уровня сверхнормативных запасов запчастей и материалов'},
      {header: 'Уменьшение затрат на обслуживание оборудования до 20%'}
    ]
  }


  return (
    <>
      <MainSectionBlock data={dataMain}/>
      <GridBlock data={dataKeyAdvantages}/>
      <ItBlock/>
      <CheckboxBlock data={dataTasks}/>
      <GridBlock data={dataResult} theme={'color'} size={'sm'}/>
      <ProductsBlock/>
      <DiscussBlock/>
    </>
  );
};

export default Index;