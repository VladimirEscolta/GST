import React from 'react';
import {
  Services1Image, Services2Image, Services3Image,
  ServicesLogo1Image,
  ServicesLogo2Image, ServicesLogo3Image,
  ServicesRectangleImage
} from "../../../assets/images";
import {ArrowSmallIcon} from "../../../assets/icons";

const ServicesBlock = () => {

  const services = [
    {
      image: Services1Image,
      text: 'Ведение проектов ТоИР',
      logo: ServicesLogo1Image,
      link: '/aksioma'
    },
    {
      image: Services2Image,
      text: 'Автоматизация производственных процессов аэропорта',
      logo: ServicesLogo2Image,
      link: '/cobra'
    },
    {
      image: Services3Image,
      text: 'Цифровизация бизнес-процесcов в строительстве',
      logo: ServicesLogo3Image,
      link: '/'
    }
  ]

  return (
    <div className="bg-service-gradient">
      <div className="data w-10/12 mx-auto py-24 flex flex-col justify-between">
        <p className="text-5xl font-bold text-white">Услуги</p>
        <div className="mt-14 grid grid-cols-3 gap-12">
          {services && services.map(item => (
            <div key={item.text} className={`relative flex items-end h-[600px] bg-cover border border-[#F4F4F4]`}>
              <img className="absolute object-cover w-full h-full" src={item.image} alt="cobra_modules_img"/>
              <img src={ServicesRectangleImage} alt="services_rectangle"
                   className='absolute bottom-0 left-0 w-full h-72'/>
              <div className="z-0 ms-8 mb-12">
                <p className="text-xl font-medium leading-8 w-56">{item.text}</p>
                <a className="mt-6 flex items-center text-gst-main" href={item.link} target="_self">
                  <p className="mr-4 font-bold">Подробнее</p>
                  <ArrowSmallIcon/>
                </a>
                <div className="h-12 mt-6 flex items-end">
                  <img src={item.logo} alt="services_logo1" className=''/>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesBlock;