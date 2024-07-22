import React from 'react';
import {ArrowDownIcon, GstLogoIcon} from "../../assets/icons";
import Button from "../Button";

const Header = () => {
  return (
    <div className="z-50 w-full flex sticky top-0 bg-white m-0 p-0 color-gst-text shadow-[0_12px_24px_0_#0B0A330A]">
      <div className="text-base font-medium mx-auto my-4 items-center justify-between flex w-10/12">
        <div className="company flex items-center">
          <GstLogoIcon/>
          <p className="text ps-4 hidden lg:flex">Глобальные сетевые технологии</p>
        </div>
        <div className="menu flex">
          <a className="mr-4 xl:mr-10" href="/about">О компании</a>
          <div className="flex mr-4 xl:mr-10 items-center cursor-pointer">
            <a className="mr-2" href="/products" id="scroll_to_tariff">Услуги и продукты</a>
            <ArrowDownIcon/>
          </div>
          <a className="" href="/contacts" target="_blank">Контакты</a>
        </div>
        <Button size={'sm'} children={'Связаться с нами'} href={'/'} arrow={'without'}/>
      </div>
    </div>
  );
};

export default Header;