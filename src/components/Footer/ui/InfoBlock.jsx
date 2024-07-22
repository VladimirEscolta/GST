import React from 'react';
import {GstLogoIcon, LinkedInIcon, YoutubeIcon} from "../../../assets/icons";
import Button from "../../Button";

const InfoBlock = () => {
  return (
    <div className="bg-gst-second">
      <div className="text-white mx-auto w-10/12">
        <div className="flex text-base pt-24">
          <div className="flex w-1/3">
            <GstLogoIcon/>
            <p className="text-sm ps-4 w-40">Глобальные сетевые технологии</p>
          </div>
          <div className="flex flex-col w-1/3">
            <a className="" href="/about">О компании</a>
            <a className="mt-5" href="/products" target="_blank">Услуги и продукты</a>
            <a className="mt-5" href="/contacts" target="_blank">Контакты</a>
          </div>
          <div className="flex flex-col w-1/3">
            <div className="font-semibold">Подписка</div>
            <div className="mt-5">Будьте в курсе наших последних новостей</div>
            <div className="flex mt-5">
              <form action='/' method='post' encType='multipart/form-data' className="inputs">
                <div className="">
                  <input className="form-control h-[53px] rounded-gst3 pl-5 mr-4 w-[300px] bg-[#FFFFFF33] shadow-none outline-none" type="email" name='mail'
                         placeholder="Ваш email"
                         id="input_mail"
                  />
                  <button type="submit" id="submit">
                    <Button size={'sm'} color={'white'} children={'Подписаться'} href={'/'} arrow={'without'}/>
                  </button>
                </div>
              </form>
            </div>
            <div className="mt-5 text-xs text-[#FFFFFF99] max-w-[474px]">Подписываясь, вы соглашаетесь с нашей Политикой
              конфиденциальности и соглашаетесь на электронную рассылку.
            </div>
          </div>
        </div>
        <hr className="mt-40"/>
        <div className="flex justify-between py-10">
          <div className="flex text-sm">
            <p className="mr-8">© 2024 ООО Глобальные сетевые Технологии </p>
            <a className="mr-8" href="/">Политика конфиденциальности</a>
            <a className="mr-8" href="/">Условия использования</a>
            <a className="" href="/">Настройки Cookie</a>
          </div>
          <div className="flex">
            <div className="mr-4"><LinkedInIcon/></div>
            <div className=""><YoutubeIcon/></div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default InfoBlock;