import React from 'react';
import AksiomaBlock from "./ui/AksiomaBlock";
import ProductsBlock from "./ui/ProductsBlock";
import AdvantagesBlock from "./ui/AdvantagesBlock";
import ItBlock from "./ui/ItBlock";
import StartSystemBlock from "./ui/StartSystemBlock";
import ControlActiveBlock from "./ui/ControlActiveBlock";
import DirectionsBlock from "./ui/DirectionsBlock";
import DiscussBlock from "../../components/DiscussBlock";

const Index = () => {
  return (
    <>
      <AksiomaBlock/>
      <ProductsBlock/>
      <AdvantagesBlock/>
      <ItBlock/>
      <StartSystemBlock/>
      <ControlActiveBlock/>
      <DirectionsBlock/>
      <DiscussBlock/>
    </>
  );
};

export default Index;