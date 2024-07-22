import React from 'react';
import MainBlock from "./ui/MainBlock";
import ServicesBlock from "./ui/ServicesBlock";
import ProductsBlock from "./ui/ProductsBlock";
import DiscussBlock from "./ui/DiscussBlock";
import KeyFunctionsBlock from "./ui/KeyFunctionsBlock";
import CallbackBlock from "./ui/CallbackBlock";
import AdvantagesBlock from "./ui/AdvantagesBlock";
import ExpertiseBlock from "./ui/ExpertiseBlock";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Main = () => {
  return (
    <>
      <Header/>
      <MainBlock/>
      <ServicesBlock/>
      <ProductsBlock/>
      <DiscussBlock/>
      <KeyFunctionsBlock/>
      <CallbackBlock/>
      <AdvantagesBlock/>
      <ExpertiseBlock/>
      <Footer/>
    </>
  );
};

export default Main;