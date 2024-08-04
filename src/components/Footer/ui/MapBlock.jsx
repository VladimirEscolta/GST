import React from 'react';
import {EnvelopeIcon, GpsIcon, PhoneIcon} from "../../../assets/icons";
import {useLocation} from "react-router-dom";

const MapBlock = () => {

  const location = useLocation().pathname;
  const pathname = location.split('/');
  const page = pathname[pathname.length - 1];

  return (
    <div className="bg-white">
      <div className="w-11/12 sm:w-10/12 mx-auto py-16 sm:py-24">
        <div className="flex flex-col">
          <p className="text-4xl lg:text-5xl font-bold">{page === 'contacts' ? 'Контакты' : 'Свяжитесь с нами'}</p>
          <p className="mt-4 lg:mt-6">{page !== 'contacts' && 'Мы поможем вам с потребностями в системной интеграции.'}</p>
        </div>
        <div className="flex flex-col lg:flex-row mt-6 lg:mt-20">
          <div className="flex flex-col w-full lg:w-[400px]">
            <div className="">
              <EnvelopeIcon/>
              <p className="font-bold mt-2 lg:mt-4">Электронная почта</p>
              <p className="text-base mt-2 lg:mt-4">Связаться по E-mail</p>
              <p className="text-base mt-2 lg:mt-4"><a href="hello@hello.ru">hello@hello.ru</a></p>
            </div>
            <div className="mt-6 lg:mt-8">
              <PhoneIcon/>
              <p className="font-bold mt-2 lg:mt-4">Телефон</p>
              <p className="text-base mt-2 lg:mt-4">Позвоните нам</p>
              <p className="text-base mt-2 lg:mt-4">
                <a className="underline underline-offset-2" href="tel:+78005502533"><nobr>8 800 550-25-33</nobr></a>
              </p>
            </div>
            <div className="mt-6 lg:mt-8">
              <GpsIcon/>
              <p className="font-bold mt-2 lg:mt-4">Офис</p>
              <p className="text-base mt-2 lg:mt-4">190000 Санкт-Петербург ул Примерная д 17</p>
            </div>
          </div>
          <div className="mt-6 lg:mt-0 flex w-full lg:w-[calc(100%-400px)] h-[335px] lg:h-[500px]">
            <iframe className="rounded-2xl" src="https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=150708584688"
                    width="100%" height="100%"
                    frameBorder="0">

            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapBlock;