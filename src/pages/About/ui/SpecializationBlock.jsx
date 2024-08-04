import React from 'react';
import Button from "../../../components/Button";
import {Specialization1Image, Specialization2Image} from "../../../assets/images";

const SpecializationBlock = () => {
  return (
    <div className="bg-about-gradient">
      <div className="data w-11/12 sm:w-10/12 mx-auto py-16 sm:py-24 flex flex-col justify-between items-center">
        <div className="flex flex-col sm:flex-row items-center justify-between w-full">
          <div className="text-4xl sm:text-5xl font-bold text-white text-center sm:text-left">Наша специализация</div>
          <div>
            <Button className="hidden sm:flex" color={'main'} children={'Обсудить проект'} href={'/'}/>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 sm:mt-16 w-full">
          <div className="flex items-center bg-white rounded-gst20 py-4 sm:py-6">
            <img src={Specialization1Image} alt="specialization1" className='m-4 sm:m-8'/>
            <p className="text-xl sm:text-2xl font-medium sm:font-semibold max-w-[400px] sm:leading-gst42 pe-4 sm:pe-0">Дистрибуция программного обеспечения</p>
          </div>
          <div className="flex items-center bg-white rounded-gst20 py-4 sm:py-6">
            <img src={Specialization2Image} alt="specialization2" className='m-4 sm:m-8'/>
            <p className="text-xl sm:text-2xl font-medium sm:font-semibold max-w-[400px] sm:leading-gst42 pe-4 sm:pe-0">Адаптация и интеграция программного
              обеспечения</p>
          </div>
        </div>
        <Button className="sm:hidden mt-12 font-medium w-full h-[44px]" size={''} color={'white'} children={'Обсудить проект'} href={'/'}/>
      </div>
    </div>
  );
};

export default SpecializationBlock;