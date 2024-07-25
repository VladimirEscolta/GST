import React from 'react';
import MainSectionBlock from "../../components/MainSectionBlock";
import ItBlock from "../Aksioma/ui/ItBlock";
import CheckboxBlock from "../../components/CheckboxBlock";
import ProductsBlock from "../Aksioma/ui/ProductsBlock";
import DiscussBlock from "../../components/DiscussBlock";
import {AksiomaServiceIcon} from "../../assets/icons";
import GridBlock from "../../components/GridBlock";

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

  const dataTasks = {
    name: 'Решаемые задачи',
    data: [
      'Обеспечение эффективного взаимодействия между эксплуатантами и сервисными подразделениями',
      'Контроль уровня оказываемых услуг',
      'Оптимизация затрат на обслуживание',
      'Минимизация потерь через контроль сроков реагирования',
      'Сбор и анализ информации о работоспособности оборудования',
      'Снижение трудоемкости формирования отчетности',
      'Ведение полной информации об объектах эксплуатации'
    ]
  }

  const dataResult = {
    name: 'Результаты внедрения',
    data: [
      {header: 'Стратегическое планирование'},
      {header: 'Поддержка принятия стратегических решений'},
      {header: 'Выявление ликвидных и неликвидных сервисных контрактов и типов услуг'},
      {header: 'Повышение качества обслуживания'},
      {header: 'Рост лояльности заказчиков'},
      {header: 'Прозрачная отчетность по работам и затратам'},
      {header: 'Оптимизация ресурсов'},
      {header: 'Снижение себестоимости услуг'},
      {header: 'Эффективное планирование работ и управление фондами'},
      {header: 'Масштабируемость'},
      {header: 'Быстрое включение новых сотрудников и подрядчиков в рабочий процесс'},
      {header: 'Использование шаблонов действий и процессов'}
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