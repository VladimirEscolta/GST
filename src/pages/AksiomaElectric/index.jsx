import React from 'react';
import MainSectionBlock from "../../components/MainSectionBlock";
import GridWhiteBlock from "../../components/GridWhiteBlock";
import ItBlock from "../Aksioma/ui/ItBlock";
import CheckboxBlock from "../../components/CheckboxBlock";
import ProductsBlock from "../Aksioma/ui/ProductsBlock";
import DiscussBlock from "../../components/DiscussBlock";
import {AksiomaElectricIcon} from "../../assets/icons";
import GridBlock from "../../components/GridBlock";

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
      {header: 'Электростанции (гидро, атомные, ветряные и солнечные)'},
      {header: 'Линии электропередач (ЛЭП)'},
      {header: 'Электрические подстанции'},
      {header: 'Турбины, генераторы, трансформаторы'},
      {header: 'Ремонтное оборудование, инструменты, запчасти'},
      {header: 'Здания и сооружения'},
      {header: 'Центры технического обслуживания'},
      {header: 'ИТ-активы'}
    ]
  }


  return (
    <>
      <MainSectionBlock data={dataMain}/>
      <GridBlock data={dataKeyAdvantages}/>
      <GridBlock data={dataResult} theme={'color'} size={'sm'}/>
      <CheckboxBlock data={dataTasks}/>
      <ItBlock/>
      <ProductsBlock/>
      <DiscussBlock/>
    </>
  );
};

export default Index;