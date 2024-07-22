import React from 'react';
import CompanyBlock from "./ui/CompanyBlock";
import SpecializationBlock from "./ui/SpecializationBlock";
import ExpertiseBlock from "../Main/ui/ExpertiseBlock";
import DiscussBlock from "../Main/ui/DiscussBlock";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const About = () => {
  return (
    <>
      <Header/>
      <CompanyBlock/>
      <SpecializationBlock/>
      <ExpertiseBlock color={'white'} colorBlock={'white'} colorIcon={'white'}/>
      <DiscussBlock/>
      <Footer/>
    </>
  );
};

export default About;