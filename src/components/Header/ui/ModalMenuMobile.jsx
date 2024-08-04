import React, {useState} from 'react';
import Button from "../../Button";
import {ArrowDownIcon, Header1Icon, Header2Icon, Header3Icon} from "../../../assets/icons";

const ModalMenuMobile = () => {

  const [productsMenu, setProductsMenu] = useState(false)
  const [activeId, setActiveId] = useState(0)
  const [aksiomaMenu, setAksiomaMenu] = useState(false)
  const [cobraMenu, setCobraMenu] = useState(false)
  const [estateMenu, setEstateMenu] = useState(false)

  const array = [
    {
      icon: <Header1Icon/>,
      header: 'Цифровизация ТОиР',
      text: [
        {name: 'Аксиома: имущество', link: '/aksioma/estate'},
        {name: 'Аксиома: ремонты', link: '/aksioma/repair'},
        {name: 'Аксиома: сервис', link: '/aksioma/service'},
        {name: 'Аксиома: нефтегаз', link: '/aksioma/oilgas'},
        {name: 'Аксиома: электроэнергетика', link: '/aksioma/electric'},
      ]
    },
    {
      icon: <div className="-rotate-45"><Header2Icon/></div>,
      header: 'Автоматизация аэропорта',
      text: [
        {name: 'Кобра – автоматизация аэропорта', link: '/cobra'}
      ]
    },
    {
      icon: <Header3Icon/>,
      header: 'Автоматизация бизнес-процесcов в строительстве',
      text: [
        {name: 'Пример текста', link: '/'},
      ]
    }
  ]

  return (
    <div className="z-50 bg-gst-main text-white w-full">
      <div className="flex flex-col w-11/12 mx-auto py-4">
        <a className="" href="/about">О компании</a>
        <div className="mt-4 flex items-center justify-between cursor-pointer"
             onClick={() => setProductsMenu(!productsMenu)}>
          <p className="mr-2">Услуги и продукты</p>
          <div className={`${productsMenu && 'rotate-180'}`}><ArrowDownIcon/></div>
        </div>
        {productsMenu && array.map((item, index) => (
          <div key={item.header}
               className={`flex flex-col first:mt-0 mt-4 ${index === activeId && 'bg-white text-gst-main p-2 rounded-gst3'}`}>
            <div className="flex items-center cursor-pointer" onClick={() => setActiveId(index)}>
              <p className="mr-2 w-[25px] h-[25px]">{item.icon}</p>
              <p
                className={`${index === activeId && ''} text-base`}
              >
                {item.header}
              </p>
            </div>
            <div className="mt-2">
              {activeId === index && item.text.map(item => (
                <a key={item.name} href={item.link}
                   className={`flex first:mt-0 mt-2 text-sm hover:underline hover:underline-offset-2`}>{item.name}</a>
              ))}
            </div>
          </div>
        ))}
        <a className="mt-4" href="/contacts">Контакты</a>
        <Button className="mt-8 sm:hidden font-normal w-full h-[48px] bg-none text-white border border-white" size={''}
                color={''} children={'Связаться с нами'} href={'/'}/>
      </div>
    </div>
  );
};

export default ModalMenuMobile;