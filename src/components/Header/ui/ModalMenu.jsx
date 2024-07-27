import React from 'react';
import {HeaderIcon} from "../../../assets/icons";

const ModalMenu = () => {

  const array = [
    {
      icon: '',
      header: 'Цифровизация ТОиР',
      text: [
        {name: 'Аксиома: имущество', link: '/aksioma/estate'},
        {name: 'Аксиома: ремонты', link: '/aksioma/repair'},
        {name: 'Аксиома: сервис', link: '/aksioma/service'},
        {name: 'Аксиома: нефтегаз', link: '/aksioma/oilgas'},
        {name: 'Аксиома: электроэнергетика', link: '/aksioma/electric'},
      ]
    }
  ]
  
  return (
    <>
      <div className="absolute top-8 left-12">
        <HeaderIcon/>
      </div>
      <div className="absolute top-10 -left-[280px] rounded-gst5 bg-gst-main w-[720px] h-80 p-12">
        <div className="grid grid-cols-2 text-white gap-8">
          <div>
            <p className="opacity-50 text-xs font-semibold">УСЛУГИ</p>
            <div>

            </div>
          </div>
          <div>
            <p className="opacity-50 text-xs font-semibold">НАЗВАНИЕ ПРОДУКТОВ</p>
            <div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalMenu;