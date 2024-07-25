import React from 'react';
import AksiomaBlock from "./ui/AksiomaBlock";
import ProductsBlock from "./ui/ProductsBlock";
import AdvantagesBlock from "./ui/AdvantagesBlock";
import ItBlock from "./ui/ItBlock";
import DiscussBlock from "../../components/DiscussBlock";
import CheckboxBlock from "../../components/CheckboxBlock";
import GridBlock from "../../components/GridBlock";
import {
  AksiomaElectricIcon,
  BoxIcon,
  ControlActive1Icon,
  ControlActive2Icon,
  ControlActive3Icon, MetricIcon, SettingIcon
} from "../../assets/icons";
import GridWhiteBlock from "../../components/GridWhiteBlock";
import MainSectionBlock from "../../components/MainSectionBlock";

const Index = () => {

  // const dataMain = {
  //   name: 'Продукты Аксиома',
  //   name2: false,
  //   header: 'Управление техническим обслуживанием и ремонтами (ТОИР)',
  //   text: 'Аксиома: электроэнергетика - это отечественная система управления техническим обслуживанием и ремонтами (ТОиР) для электроэнергетической отрасли. Платформа направлена на цифровизацию процессов ТОиР, снижение стоимости владения активами и повышение надежности и безопасности энергетического оборудования.',
  //   icon: <AksiomaElectricIcon/>
  // }

  const dataKeyAdvantages = {
    name: 'Основные направления деятельности для повышения эффективности работы активов',
    data: [
      {
        icon: <BoxIcon/>,
        header: 'Управление материальными активами',
        text: 'Включая сбор данных об активах и управление выполнением работ.'
      },
      {
        icon: <SettingIcon/>,
        header: 'Управление обслуживанием и ремонтами',
        text: 'Увеличение времени безотказной работы и  уменьшения затрат путем оптимизации запасов запчастей.'
      },
      {
        icon: <MetricIcon/>,
        header: 'Управление эффективностью активов',
        text: 'Оптимизации производительности посредством планирования и предписывающих действий.'
      }
    ]
  }

  const dataTasks = {
    name: 'Когда пора внедрять систему «Аксиома»?',
    header: 'Если необходимо быстро и обоснованно отвечать на вопросы:',
    data: [
      'Сколько стоит эксплуатация вашего оборудования?',
      'Ремонтировать старое оборудование или дешевле купить новое?',
      'Какова вероятность поломки оборудования?',
      'Сколько времени займет инвентаризация?',
      'Вовремя ли производят техобслуживание оборудования и инфраструктуры?',
      'Окупается ли сотрудничество с подрядчиком по ремонту?',
      'Есть ли ресурсы и запчасти на складе для оперативного ремонта?'
    ]
  }

  const dataResult = {
    name: 'Управляйте активами эффективно',
    data: [
      {
        icon: <ControlActive1Icon/>,
        header: 'Повышение качества сервиса',
        text: 'Контроль качества работы исполнителей, отслеживание KPI оборудования и подразделений, снижение числа остановок и времени простоя оборудования.'
      },
      {
        icon: <ControlActive2Icon/>,
        header: 'Сокращение расходов',
        text: 'Контроль затрат, отслеживание исполнения договорных обязательств, оптимизация внутренних и привлекаемых ресурсов, складских запасов.'
      },
      {
        icon: <ControlActive3Icon/>,
        header: 'Снижение рисков',
        text: 'Контроль за соблюдением стандартов и нормативов, «единая правда» по всем объектам, ведение истории отказов, инцидентов, прогнозирование.'
      },
    ]
  }

  return (
    <>
      {/*<MainSectionBlock data={dataMain}/>*/}
      <AksiomaBlock/>
      <ProductsBlock/>
      <AdvantagesBlock/>
      <ItBlock/>
      <CheckboxBlock data={dataTasks}/>
      <GridBlock data={dataResult} theme={'color'} size={'sm'}/>
      <GridBlock data={dataKeyAdvantages} colorIcon={'text-gst-main'}/>
      <DiscussBlock/>
    </>
  );
};

export default Index;