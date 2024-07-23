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
    {icon: AksiomaProducts1Image, link: '/', text: 'Аксиома: имущество'},
    {icon: AksiomaProducts2Image, link: '/', text: 'Аксиома: ремонты'},
    {icon: AksiomaProducts3Image, link: '/', text: 'Аксиома: сервис'},
    {icon: AksiomaProducts4Image, link: '/', text: 'Аксиома: нефтегаз'},
    {icon: AksiomaProducts5Image, link: '/', text: 'Аксиома: электроэнергетика'},
  ]
  return (
    <div className="w-10/12 mx-auto py-24 flex flex-col justify-between">
      <p className="text-5xl font-bold">Продукты</p>
      <div className="mt-14 grid grid-cols-6 gap-8">
        {array.map((item, index) => (
          <div key={item.text} className={`${index > 2 ? 'col-span-3' : 'col-span-2'} h-60 flex flex-col justify-center ps-12 rounded-gst20 bg-[#F7F7F7] border border-[#EFF0F6]`}>
            <img className="w-20" src={item.icon} alt="aksioma_products1"/>
            <p className="text-2xl mt-4 font-bold">{item.text}</p>
            <a className="mt-4 flex items-center text-lg text-[#9394A3]" href={item.link} target="_self">
              <p className="mr-4 font-bold">Подробнее</p>
              <ArrowSmallIcon/>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsBlock;