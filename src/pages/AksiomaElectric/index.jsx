import React from 'react';
import MainSectionBlock from "../../components/MainSectionBlock";
import GridWhiteBlock from "../../components/GridWhiteBlock";
import ItBlock from "../Aksioma/ui/ItBlock";
import CheckboxBlock from "../../components/CheckboxBlock";
import ProductsBlock from "../Aksioma/ui/ProductsBlock";
import DiscussBlock from "../../components/DiscussBlock";
import {AksiomaElectricIcon} from "../../assets/icons";
import GridColorBlock from "../../components/GridColorBlock";

const Index = () => {

  const dataMain = {
    name: 'Аксиома: электроэнергетика',
    header: 'Управление техническим обслуживанием и ремонтами (ТОИР)',
    text: 'Аксиома: электроэнергетика - это отечественная система управления техническим обслуживанием и ремонтами (ТОиР) для электроэнергетической отрасли. Платформа направлена на цифровизацию процессов ТОиР, снижение стоимости владения активами и повышение надежности и безопасности энергетического оборудования.',
    icon: <AksiomaElectricIcon/>
  }

  const dataKeyAdvantages = {
    name: 'Ключевые возможности',
    data: [
      {
        header: 'Комплексное управление активами',
        text: 'Охватывает все типы активов предприятий электроэнергетики'
      },
      {
        header: 'Интеграция с ГИС',
        text: 'Управление распределенными и линейными активами'
      },
      {
        header: 'Интернет вещей и аналитика',
        text: 'Мониторинг, выявление проблем и поиск решений'
      },
      {
        header: 'Мобильность',
        text: 'Доступ к информации из любого местоположения'
      },
      {
        header: 'Дополненная реальность',
        text: 'Удаленная помощь и консультации экспертов'
      },
    ]
  }

  const dataTasks = {
    name: 'Решаемые задачи',
    data: [
      'Предотвращение аварий в производственном цикле',
      'Повышение прозрачности выполнения работ',
      'Усиление персональной ответственности',
      'Снижение стоимости владения активами',
      'Повышение рентабельности',
      'Соответствие высоким стандартам надежности, безопасности и качества',
      'Продление срока службы оборудования'
    ]
  }

  const dataResult = {
    name: 'Типы управляемых активов',
    data: [
      {text: 'Электростанции (гидро, атомные, ветряные и солнечные)'},
      {text: 'Линии электропередач (ЛЭП)'},
      {text: 'Электрические подстанции'},
      {text: 'Турбины, генераторы, трансформаторы'},
      {text: 'Ремонтное оборудование, инструменты, запчасти'},
      {text: 'Здания и сооружения'},
      {text: 'Центры технического обслуживания'},
      {text: 'ИТ-активы'}
    ]
  }


  return (
    <>
      <MainSectionBlock data={dataMain}/>
      <GridWhiteBlock data={dataKeyAdvantages}/>
      <GridColorBlock data={dataResult}/>
      <CheckboxBlock data={dataTasks}/>
      <ItBlock/>
      <ProductsBlock/>
      <DiscussBlock/>
    </>
  );
};

export default Index;