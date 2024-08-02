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
      <div className="w-11/12 sm:w-10/12 mx-auto py-16 sm:py-24 flex flex-col justify-between">
        <p className="text-4xl sm:text-5xl font-bold text-white">Услуги</p>
        <div className="mt-8 sm:mt-14 grid md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-12">
          {services && services.map(item => (
            <div key={item.text} className={`relative flex items-end h-[363px] sm:h-[600px] bg-cover border border-[#F4F4F4]`}>
              <img className="absolute object-cover w-full h-full" src={item.image} alt="cobra_modules_img"/>
              <img src={ServicesRectangleImage} alt="services_rectangle"
                   className='absolute bottom-0 left-0 w-full h-60 sm:h-72'/>
              <div className="z-0 ms-4 sm:ms-8 mb-6 sm:mb-12">
                <p className="text-xl font-medium leading-8 w-56">{item.text}</p>
                <a className="mt-4 sm:mt-6 flex items-center text-gst-main" href={item.link} target="_self">
                  <p className="mr-4 font-bold">Подробнее</p>
                  <ArrowSmallIcon/>
                </a>
                <div className="h-12 mt-4 sm:mt-6 flex items-end">
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