import React, {useState} from 'react';
import {Header1Icon, Header2Icon, Header3Icon, HeaderRectangleIcon} from "../../../assets/icons";

const ModalMenu = () => {

  const [activeId, setActiveId] = useState(0)

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
    <>
      <div className="absolute top-8 left-12">
        <HeaderRectangleIcon/>
      </div>
      <div className="absolute top-10 -left-[280px] rounded-gst5 bg-gst-main w-[720px] h-80 p-12">
        <div className="grid grid-cols-2 text-white gap-8">
          <div>
            <p className="opacity-50 text-xs font-semibold">УСЛУГИ</p>
            <div className="mt-8">
              {array.map((item, index) => (
                <div key={item.header} className="flex first:mt-0 mt-4">
                  <p className="mr-2 w-[25px] h-[25px]">{item.icon}</p>
                  <p
                    className={`${index === activeId && 'underline underline-offset-2'} text-base font-semibold hover:underline underline-offset-2`}
                    onMouseEnter={() => setActiveId(index)}
                  >
                    {item.header}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="opacity-50 text-xs font-semibold">НАЗВАНИЕ ПРОДУКТОВ</p>
            <div className="mt-8">
              {array[activeId].text.map(item => (
                <a key={item.name} href={item.link}
                   className={`flex first:mt-0 mt-4 text-base font-semibold hover:underline underline-offset-2`}>{item.name}</a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalMenu;