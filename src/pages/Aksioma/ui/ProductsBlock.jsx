import React from 'react';
import {ArrowSmallIcon} from "../../../assets/icons";
import {
  AksiomaProducts1Image,
  AksiomaProducts2Image,
  AksiomaProducts3Image,
  AksiomaProducts4Image,
  AksiomaProducts5Image
} from "../../../assets/images";

const ProductsBlock = () => {

  const array = [
    {icon: AksiomaProducts1Image, link: '/aksioma/estate', text: 'Аксиома: имущество'},
    {icon: AksiomaProducts2Image, link: '/aksioma/repair', text: 'Аксиома: ремонты'},
    {icon: AksiomaProducts3Image, link: '/aksioma/service', text: 'Аксиома: сервис'},
    {icon: AksiomaProducts4Image, link: '/aksioma/oilgas', text: 'Аксиома: нефтегаз'},
    {icon: AksiomaProducts5Image, link: '/aksioma/electric', text: 'Аксиома: электроэнергетика'},
  ]
  return (
    <div className="w-11/12 sm:w-10/12 mx-auto py-16 sm:py-24 flex flex-col justify-between">
      <p className="text-4xl sm:text-5xl font-bold">Продукты</p>
      <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-6 gap-4 sm:gap-8">
        {array.map((item, index) => (
          <div key={item.text} className={`${index > 2 ? 'col-span-1 sm:col-span-3' : 'col-span-1 sm:col-span-2'} h-48 sm:h-60 flex flex-col justify-center ps-4 sm:ps-12 rounded-gst20 bg-[#F7F7F7] border border-[#EFF0F6]`}>
            <img className="w-20" src={item.icon} alt="aksioma_products1"/>
            <div className="">
              <p className="text-lg sm:text-2xl mt-2 sm:mt-4 font-bold">{item.text}</p>
              <a className="mt-2 sm:mt-4 flex items-center text-sm sm:text-lg text-[#9394A3]" href={item.link} target="_self">
                <p className="mr-2 sm:mr-4 font-bold">Подробнее</p>
                <ArrowSmallIcon/>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsBlock;