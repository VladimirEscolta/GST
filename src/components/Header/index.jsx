import React, {useEffect, useRef, useState} from 'react';
import {ArrowDownIcon, GstLogoIcon, NavbarIcon, XIcon} from "../../assets/icons";
import Button from "../Button";
import ModalMenu from "./ui/ModalMenu";

const Index = () => {

  const [modalMenu, setModalMenu] = useState(false)
  const [burgerMenu, setBurgerMenu] = useState(false)
  const ref = useRef(null);
  const toggleDropdown = () => setModalMenu(!modalMenu);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setModalMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="z-50 w-full flex sticky top-0 bg-white m-0 p-0 color-gst-text shadow-[0_12px_24px_0_#0B0A330A]">
      <div className="text-base font-medium mx-auto my-4 items-center justify-between flex w-11/12 sm:w-10/12">
        <div className="company flex items-center">
          <a href="/"><GstLogoIcon/></a>
          <p className="text ps-4 hidden xl:flex">Глобальные сетевые технологии</p>
        </div>
        <div className="hidden md:flex">
          <a className="mr-4 xl:mr-10" href="/about">О компании</a>
          <div className="relative flex mr-4 xl:mr-10 items-center cursor-pointer">
            <div className="flex items-center" onClick={toggleDropdown}>
              <p className="mr-2">Услуги и продукты</p>
              <div className={`${modalMenu && 'rotate-180'}`}><ArrowDownIcon/></div>
            </div>
            {modalMenu && <div ref={ref}><ModalMenu/></div>}
            {/*<div ref={ref}><ModalMenu/></div>*/}
          </div>
          <a className="" href="/contacts">Контакты</a>
        </div>
        <div className="hidden md:flex">
          <Button size={'sm'} children={'Связаться с нами'} href={'/'} arrow={'without'}/>
        </div>
        <div className="flex md:hidden justify-center items-center text-gst-text h-12 w-12 cursor-pointer" onClick={() => setBurgerMenu(!burgerMenu)}>
          {burgerMenu ?
            <XIcon className="w-7 h-7"/>
            :
            <NavbarIcon/>
          }
        </div>
      </div>

    </div>
  );
};

export default Index;