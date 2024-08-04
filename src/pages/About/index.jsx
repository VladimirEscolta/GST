import React from 'react';
import CompanyBlock from "./ui/CompanyBlock";
import SpecializationBlock from "./ui/SpecializationBlock";
import DiscussBlock from "../../components/DiscussBlock";
import GridBlock from "../../components/GridBlock";
import {
  Expertise1Icon,
  Expertise2Icon,
  Expertise3Icon,
  Expertise4Icon,
  Expertise5Icon,
  Expertise6Icon
} from "../../assets/icons";

const Index = () => {

  const dataExpertise = {
    name: 'Наша экспертиза',
    data: [
      {icon: <Expertise1Icon/>, header: 'Стандартизации предприятия'},
      {icon: <Expertise2Icon/>, header: 'Автоматизация строительства'},
      {icon: <Expertise3Icon/>, header: 'ТОиР (технологии обслуживания и ремонта)'},
      {icon: <Expertise4Icon/>, header: 'Производственная безопасность'},
      {icon: <Expertise5Icon/>, header: 'Разработка тренажеров виртуальной реальности'},
      {icon: <Expertise6Icon/>, header: 'Эксплуатации зданий и сооружений'},
    ]
  }

  return (
    <>
      <CompanyBlock/>
      <SpecializationBlock/>
      <GridBlock data={dataExpertise} align={'center'} className={'h-52 sm:h-80 justify-center'} size={'sm'} width={'w-60 sm:w-80'} colorIcon={'text-gst-main'}/>
      <DiscussBlock/>
    </>
  );
};

export default Index;