import React from 'react';
import {CallbackImage, CallbackRectangleImage} from "../../../assets/images";
import Button from "../../../components/Button";

const CallbackBlock = () => {
  return (
    <div className="relative bg-gst-second">
      <img src={CallbackRectangleImage} alt="" className='absolute top-0 w-full h-full'/>
      <div className="relative text-white w-10/12 mx-auto py-24 flex justify-between">
        <div className="flex flex-col">
          <div className="text-5xl font-bold">Обратный звонок</div>
          <div className="mt-14">
            <form action='/' method='post' encType='multipart/form-data' className="text-white">
              <div className="flex flex-col">
                <label htmlFor="input_name" className="text-gst-15">Ваше имя</label>
                <input
                  className="mt-2 form-control buttonpromo h-12 pl-5 w-full max-w-[500px] shadow-none outline-none text-gst-text rounded-md border border-[#0B0A331A]"
                  type="text" name='name'
                  placeholder="Введите ваше имя"
                  id="input_name"/>
              </div>
              <div className="mt-5 flex flex-col">
                <label htmlFor="input_phone" className="text-gst-15">Контактный телефон</label>
                <input
                  className="mt-2 form-control h-12 pl-5 w-full max-w-[500px] shadow-none outline-none text-gst-text rounded-md border border-[#0B0A331A]"
                  type="tel" name='phone'
                  placeholder="+7(___)___-__-__"
                  id="input_phone"/>
              </div>
              <button type="submit" className="button flex items-center justify-center mt-14">
                <Button className="border border-white" color={'main'} children={'Отправить запрос'} href={'/'}/>
              </button>
            </form>
          </div>
        </div>
        <div className="flex flex-col">
          <img src={CallbackImage} alt="callback" className=''/>
        </div>
      </div>
    </div>
  );
};

export default CallbackBlock;