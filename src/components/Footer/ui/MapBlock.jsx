import React from 'react';
import {EnvelopeIcon, GpsIcon, PhoneIcon} from "../../../assets/icons";

const MapBlock = () => {
  return (
    <div className="bg-white">
      <div className="w-10/12 mx-auto py-24">
        <div className="flex flex-col">
          <p className="text-5xl font-bold">Свяжитесь с нами</p>
          <p className="mt-5">Мы поможем вам с потребностями в системной интеграции.</p>
        </div>
        <div className="flex mt-20">
          <div className="flex flex-col w-[400px]">
            <div className="">
              <EnvelopeIcon/>
              <p className="font-bold mt-5">Электронная почта</p>
              <p className="text-base mt-3">Связаться по E-mail</p>
              <p className="text-base mt-3"><a href="hello@hello.ru">hello@hello.ru</a></p>
            </div>
            <div className="mt-6">
              <PhoneIcon/>
              <p className="font-bold mt-5">Телефон</p>
              <p className="text-base mt-3">Позвоните нам</p>
              <p className="text-base mt-3"><a href="tel:+78005502533">
                <nobr>8 800 550-25-33</nobr>
              </a></p>
            </div>
            <div className="mt-6">
              <GpsIcon/>
              <p className="font-bold mt-5">Офис</p>
              <p className="text-base mt-3">190000 Санкт-Петербург ул Примерная д 17</p>
            </div>
          </div>
          <div className="flex w-[calc(100%-400px)]">
            <iframe className="rounded-2xl" src="https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=150708584688"
                    width="100%" height="500"
                    frameBorder="0">

            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapBlock;