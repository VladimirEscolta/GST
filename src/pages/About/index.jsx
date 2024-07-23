import React from 'react';
import CompanyBlock from "./ui/CompanyBlock";
import SpecializationBlock from "./ui/SpecializationBlock";
import ExpertiseBlock from "../Main/ui/ExpertiseBlock";
import DiscussBlock from "../Main/ui/DiscussBlock";

const Index = () => {
  return (
    <>
      <CompanyBlock/>
      <SpecializationBlock/>
      <ExpertiseBlock color={'white'} colorBlock={'white'} colorIcon={'white'}/>
      <DiscussBlock/>
    </>
  );
};

export default Index;