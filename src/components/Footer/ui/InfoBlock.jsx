import React from 'react';
import {GstLogoIcon, LinkedInIcon, YoutubeIcon} from "../../../assets/icons";
import Button from "../../Button";

const InfoBlock = () => {
  return (
    <div className="bg-gst-second">
      <div className="text-white mx-auto w-11/12 sm:w-10/12">
        <div className="flex flex-col sm:flex-row text-base pt-16 sm:pt-24">
          <div className="flex items-center sm:items-start sm:w-1/4 xl:w-1/3">
            <a href="/"><GstLogoIcon/></a>
            <p className="text-sm font-medium ps-4 w-full sm:w-40">Глобальные сетевые технологии</p>
          </div>
          <div className="flex mt-8 sm:mt-0 flex-col flex-1 ">
            <a className="" href="/about">О компании</a>
            <a className="mt-2 sm:mt-6" href="/products">Услуги и продукты</a>
            <a className="mt-2 sm:mt-6" href="/contacts">Контакты</a>
          </div>
          <div className="flex mt-8 sm:mt-0 flex-col w-full sm:w-[470px]">
            <div className="font-semibold">Подписка</div>
            <div className="text-sm sm:text-base mt-2 sm:mt-6">Будьте в курсе наших последних новостей</div>
            <div className="flex flex-col sm:flex-row mt-2 sm:mt-6 w-full">
              <input className="sm:flex-1 h-[48px] rounded-gst3 pl-5 sm:mr-4 sm:bg-[#FFFFFF33] shadow-none outline-none"
                     type="email" name='mail'
                     placeholder="Ваш email"
                     id="input_mail"
              />
              <Button className="mt-4 sm:hidden font-normal w-full h-[48px] bg-none text-white border border-white" size={''} color={''} children={'Подписаться'} href={'/'}/>
              <Button className="hidden sm:flex" size={'xs'} color={'white'} children={'Подписаться'} href={'/'} arrow={'without'}/>
            </div>
            <div className="mt-4 sm:mt-6 text-xs text-[#FFFFFF99] max-w-[474px]">Подписываясь, вы соглашаетесь с нашей Политикой
              конфиденциальности и соглашаетесь на электронную рассылку.
            </div>
          </div>
        </div>
        <hr className="mt-16 sm:mt-40 opacity-20"/>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-6 sm:py-10">
          <div className="mt-8 sm:mt-0 flex order-3 sm:order-1 text-sm font-normal sm:font-medium">
            <p className="">© 2024 ООО Глобальные сетевые Технологии</p>
          </div>
          <div className="mt-8 sm:mt-0 flex flex-col sm:flex-row text-xs sm:text-sm order-2 sm:order-1">
            <a className="underline underline-offset-2 mr-0 sm:mr-8" href="/">Политика конфиденциальности</a>
            <a className="underline underline-offset-2 mt-4 sm:mt-0 mr-0 sm:mr-8" href="/">Условия использования</a>
            <a className="underline underline-offset-2 mt-4 sm:mt-0" href="/">Настройки Cookie</a>
          </div>
          <div className="flex order-1 sm:order-2">
            <div className="mr-4"><LinkedInIcon/></div>
            <div className=""><YoutubeIcon/></div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default InfoBlock;