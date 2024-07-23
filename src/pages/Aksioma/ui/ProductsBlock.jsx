import React from 'react';
import {ArrowSmallIcon} from "../../../assets/icons";
import {
  AksiomaProducts1Image,
  AksiomaProducts2Image,
  AksiomaProducts3Image,
  AksiomaProducts4Image, AksiomaProducts5Image
} from "../../../assets/images";

const ProductsBlock = () => {
  return (
    <div className="w-10/12 mx-auto py-24 flex flex-col justify-between">
      <p className="text-5xl font-bold">Продукты</p>
      <div className="mt-14 grid grid-cols-3 gap-8">
        <div className="h-60 flex flex-col justify-center ps-12 rounded-gst20 bg-[#F7F7F7]">
          <img className="w-20" src={AksiomaProducts1Image} alt="aksioma_products1"/>
          <p className="text-2xl mt-4 font-bold">Аксиома: имущество</p>
          <p className="">
            <a className="mt-4 flex items-center text-lg text-[#9394A3]" href="/" target="_self">
              <p className="mr-4 font-bold">Подробнее</p>
              <ArrowSmallIcon/>
            </a>
          </p>
        </div>
        <div className="h-60 flex flex-col justify-center ps-12 rounded-gst20 bg-[#F7F7F7]">
          <img className="w-20" src={AksiomaProducts2Image} alt="aksioma_products1"/>
          <p className="text-2xl mt-4 font-bold">Аксиома: ремонты</p>
          <p className="">
            <a className="mt-4 flex items-center text-lg text-[#9394A3]" href="/" target="_self">
              <p className="mr-4 font-bold">Подробнее</p>
              <ArrowSmallIcon/>
            </a>
          </p>
        </div>
        <div className="h-60 flex flex-col justify-center ps-12 rounded-gst20 bg-[#F7F7F7]">
          <img className="w-20" src={AksiomaProducts3Image} alt="aksioma_products1"/>
          <p className="text-2xl mt-4 font-bold">Аксиома: сервис</p>
          <p className="">
            <a className="mt-4 flex items-center text-lg text-[#9394A3]" href="/" target="_self">
              <p className="mr-4 font-bold">Подробнее</p>
              <ArrowSmallIcon/>
            </a>
          </p>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-2 gap-8">
        <div className="h-60 flex flex-col justify-center ps-12 rounded-gst20 bg-[#F7F7F7]">
          <img className="w-20" src={AksiomaProducts4Image} alt="aksioma_products1"/>
          <p className="text-2xl mt-4 font-bold">Аксиома: нефтегаз</p>
          <p className="">
            <a className="mt-4 flex items-center text-lg text-[#9394A3]" href="/" target="_self">
              <p className="mr-4 font-bold">Подробнее</p>
              <ArrowSmallIcon/>
            </a>
          </p>
        </div>
        <div className="h-60 flex flex-col justify-center ps-12 rounded-gst20 bg-[#F7F7F7]">
          <img className="w-20" src={AksiomaProducts5Image} alt="aksioma_products1"/>
          <p className="text-2xl mt-4 font-bold">Аксиома: электроэнергетика</p>
          <p className="">
            <a className="mt-4 flex items-center text-lg text-[#9394A3]" href="/" target="_self">
              <p className="mr-4 font-bold">Подробнее</p>
              <ArrowSmallIcon/>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductsBlock;