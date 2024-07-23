import React from 'react';
import CompanyBlock from "./ui/CompanyBlock";
import AdvantagesBlock from "./ui/AdvantagesBlock";
import ItBlock from "../Aksioma/ui/ItBlock";
import TasksBlock from "./ui/TasksBlock";
import ResultBlock from "./ui/ResultBlock";
import ProductsBlock from "../Aksioma/ui/ProductsBlock";
import DiscussBlock from "../Main/ui/DiscussBlock";

const Index = () => {
  return (
    <>
      <CompanyBlock/>
      <AdvantagesBlock/>
      <ItBlock/>
      <TasksBlock/>
      <ResultBlock/>
      <ProductsBlock/>
      <DiscussBlock/>
    </>
  );
};

export default Index;