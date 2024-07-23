import React from 'react';
import Button from "../../../components/Button";
import {Specialization1Image, Specialization2Image} from "../../../assets/images";

const SpecializationBlock = () => {
  return (
    <div className="bg-about-gradient">
      <div className="data w-10/12 mx-auto py-24 flex flex-col justify-between items-center">
        <div className="flex items-center justify-between w-full">
          <div className="text-5xl font-bold text-white">Наша специализация</div>
          <div>
            <Button className="" color={'main'} children={'Обсудить проект'} href={'/'}/>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 mt-16 w-full">
          <div className="flex items-center bg-white rounded-gst20 py-6">
            <img src={Specialization1Image} alt="specialization1" className='m-8'/>
            <p className="text-2xl font-semibold max-w-[400px] leading-gst42">Дистрибуция программного обеспечения</p>
          </div>
          <div className="flex items-center bg-white rounded-gst20 py-6">
            <img src={Specialization2Image} alt="specialization2" className='m-8'/>
            <p className="text-2xl font-semibold max-w-[400px] leading-gst42">Адаптация и интеграция программного
              обеспечения</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecializationBlock;