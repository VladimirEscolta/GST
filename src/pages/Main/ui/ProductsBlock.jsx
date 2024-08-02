import React from 'react';
import Button from "../../../components/Button";
import {ArrowSmallIcon} from "../../../assets/icons";
import {
  Products1Image,
  Products1MobImage,
  Products2Image,
  Products2MobImage,
  Products3Image, Products3MobImage
} from "../../../assets/images";

const ProductsBlock = () => {

  const data = [
    {
      position: 'left',
      text: 'Эксклюзивный партнер Интерпроком в холдинге ПАО "Газпром"',
      header: 'Ведение проектов ТоИР на платформе Аксиома',
      subheader: '«АКСИОМА» решение уровня ERP для управления корпоративными активами, недвижимостью и ТОиР',
      dataLinks: [
        {text: 'Аксиома: ремонты', link: '/aksioma/repair'},
        {text: 'Аксиома: имущество', link: '/aksioma/estate'},
        {text: 'Аксиома: сервис', link: '/aksioma/service'},
        {text: 'Аксиома: нефтегаз', link: '/aksioma/oilgas'},
        {text: 'Аксиома: электроэнергетика', link: '/aksioma/electric'}
      ],
      button: {text: 'Подробнее о продуктах', link: '/aksioma'},
      image: Products1Image,
      imageMobile: Products1MobImage,
    },
    {
      position: 'right',
      text: 'Официальный партнер RIVC-Pulkovo',
      header: 'Автоматизированная система комплексного обслуживания рейсов в аэропорту',
      subheader: 'АС «КОБРА» — решение для эффективного и надёжного управления рейсами в аэропорту. Автоматизирует процессы, улучшает координацию работы и повышает безопасность воздушного движения',
      dataLinks: [
        {text: 'АС «КОБРА»', link: '/cobra'}
      ],
      button: {text: 'Подробнее о продуктe', link: '/cobra'},
      image: Products2Image,
      imageMobile: Products2MobImage,
    },
    {
      position: 'left',
      text: 'Официальный партнер ГК Адепт',
      header: 'Автоматизация бизнес-процесcов в строительстве',
      subheader: 'Ведущий российский разработчик программного обеспечения для строительной отрасли',
      dataLinks: [
        {text: 'Адепт: Исполнительная документация', link: '/'},
        {text: 'Адепт: ПНР', link: '/'},
        {text: 'Адепт: Сварка', link: '/'},
      ],
      button: {text: 'Подробнее о продуктах', link: '/adept'},
      image: Products3Image,
      imageMobile: Products3MobImage,
    }
  ]

  return (
    <div className="flex flex-col w-11/12 sm:w-10/12 mx-auto py-16 sm:py-24">
      <p className="text-4xl sm:text-5xl font-bold">Продукты</p>
      {data.map(item => (
        <div className="flex flex-col sm:flex-row mt-8 sm:mt-16 items-center justify-between">
          {item.position === 'right' &&
            <div className="hidden sm:flex mt-0 flex-col w-1/2 items-start">
              <img className="" src={item.image} alt="products"/>
            </div>
          }
          <div className="flex flex-col w-full sm:w-1/2">
            <p
              className="flex p-2.5 w-fit text-gst15 sm:text-base font-medium sm:font-semibold bg-[#0F86D91A]">{item.text}</p>
            <p
              className="mt-2 sm:mt-8 font-bold text-2xl sm:text-4xl leading-7 sm:leading-gst42 max-w-[530px]">{item.header}</p>
            <p
              className="mt-4 sm:mt-8 text-lg sm:text-xl font-normal leading-7 sm:leading-8 max-w-[530px]">{item.subheader}</p>
            <div className="mt-2">
              {item.dataLinks.map(i => (
                <a key={i.text} className="mt-4 sm:mt-6 flex items-center text-gst-main" href={i.link}
                   target="_self">
                  <div className="mr-4 -rotate-45">
                    <ArrowSmallIcon/>
                  </div>
                  <p className="text-base sm:text-lg font-medium">{i.text}</p>
                </a>
              ))}
            </div>
            <Button className="hidden sm:flex mt-8" color={'main'} size={'md320'} children={item.button.text}
                    href={item.button.link}/>
          </div>
          {item.position === 'left' &&
            <div className="hidden sm:flex mt-0 flex-col w-1/2 items-end">
              <img className="" src={item.image} alt="products"/>
            </div>
          }
          <div className="sm:hidden mt-8 w-full items-center">
            <img className="" src={item.imageMobile} alt="products"/>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsBlock;