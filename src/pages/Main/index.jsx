import React from 'react';
import MainBlock from "./ui/MainBlock";
import ServicesBlock from "./ui/ServicesBlock";
import ProductsBlock from "./ui/ProductsBlock";
import DiscussBlock from "../../components/DiscussBlock";
import KeyFunctionsBlock from "./ui/KeyFunctionsBlock";
import CallbackBlock from "./ui/CallbackBlock";
import AdvantagesBlock from "./ui/AdvantagesBlock";
import ExpertiseBlock from "./ui/ExpertiseBlock";

const Index = () => {
  return (
    <>
      <MainBlock/>
      <ServicesBlock/>
      <ProductsBlock/>
      <DiscussBlock/>
      <KeyFunctionsBlock/>
      <CallbackBlock/>
      <AdvantagesBlock/>
      <ExpertiseBlock/>
    </>
  );
};

export default Index;