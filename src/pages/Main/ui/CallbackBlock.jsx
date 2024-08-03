import React from 'react';
import {CallbackImage, CallbackRectangleImage, CallbackRectangleMobImage} from "../../../assets/images";
import Button from "../../../components/Button";

const CallbackBlock = () => {
  return (
    <div className="relative bg-gst-second">
      <img src={CallbackRectangleImage} alt="" className='hidden md:flex absolute top-0 w-full h-full'/>
      <img src={CallbackRectangleMobImage} alt="" className='md:hidden absolute bottom-0 w-full h-60'/>
      <div className="relative text-white w-11/12 sm:w-10/12 mx-auto py-16 sm:py-24 flex flex-col md:flex-row justify-between">
        <div className="flex flex-col pe-0 sm:pe-4">
          <div className="text-4xl sm:text-5xl font-bold">Обратный звонок</div>
          <div className="mt-8 sm:mt-14">
            <form action='/' method='post' encType='multipart/form-data' className="text-white">
              <div className="flex flex-col">
                <label htmlFor="input_name" className="text-gst-15 font-medium">Ваше имя</label>
                <input
                  className="mt-1 sm:mt-2 form-control buttonpromo h-12 pl-5 w-full max-w-[500px] shadow-none outline-none text-gst-text rounded-md border border-[#0B0A331A]"
                  type="text" name='name'
                  placeholder="Введите ваше имя"
                  id="input_name"/>
              </div>
              <div className="mt-4 sm:mt-5 flex flex-col">
                <label htmlFor="input_phone" className="text-gst-15 font-medium">Контактный телефон</label>
                <input
                  className="mt-1 sm:mt-2 form-control h-12 pl-5 w-full max-w-[500px] shadow-none outline-none text-gst-text rounded-md border border-[#0B0A331A]"
                  type="tel" name='phone'
                  placeholder="+7(___)___-__-__"
                  id="input_phone"/>
              </div>
              <div className="flex items-center justify-center sm:justify-start mt-10 sm:mt-14">
                <Button className="flex sm:hidden border-none font-medium w-full h-[44px]" size={''} color={'main'} children={'Отправить запрос'} href={'/'}/>
                <Button className="hidden sm:flex border border-white" color={'main'} children={'Отправить запрос'} href={'/'}/>
              </div>
            </form>
          </div>
        </div>
        <div className="flex flex-col mt-10 sm:mt-0">
          <img src={CallbackImage} alt="callback" className=''/>
        </div>
      </div>
    </div>
  );
};

export default CallbackBlock;