import React from 'react';
import Button from "../../../components/Button";
import {ArrowSmallIcon} from "../../../assets/icons";
import {Products1Image, Products2Image, Products3Image} from "../../../assets/images";

const ProductsBlock = () => {

  const arrayAksioma = [
    {text: 'Аксиома: ремонты', link: '/'},
    {text: 'Аксиома: имущество', link: '/'},
    {text: 'Аксиома: сервис', link: '/'},
    {text: 'Аксиома: нефтегаз', link: '/'},
    {text: 'Аксиома: электроэнергетика', link: '/'}
  ]

  const arrayAdept = [
    {text: 'Адепт: Исполнительная документация', link: '/'},
    {text: 'Адепт: ПНР', link: '/'},
    {text: 'Адепт: Сварка', link: '/'},
  ]

  return (
    <div className="data flex flex-col w-10/12 mx-auto py-24">
      <p className="text-5xl font-bold">Продукты</p>
      <div className="flex my-16 items-center justify-between">
        <div className="flex flex-col w-1/2">
          <p className="flex p-2.5 w-fit font-bold bg-[#0F86D91A]">Эксклюзивный партнер Интерпроком в холдинге ПАО "Газпром"</p>
          <p className="mt-8 font-bold text-4xl leading-10 max-w-[530px]" >Ведение проектов ТоИР на платформе Аксиома</p>
          <p className="mt-8 text-xl font-medium leading-8 max-w-[530px]" >«АКСИОМА» решение уровня ERP для управления корпоративными активами, недвижимостью и ТОиР</p>
          <div className="mt-2">
            {arrayAksioma.map(item => (
              <a key={item.text} className="mt-6 flex items-center text-gst-main" href={item.link} target="_self">
                <div className="mr-4 -rotate-45">
                  <ArrowSmallIcon/>
                </div>
                <p className="font-medium">{item.text}</p>
              </a>
            ))}
          </div>
          <Button className="mt-8" color={'main'} size={'md320'} children={'Подробнее о продуктах'} href={'/'}/>
        </div>
        <div className="flex flex-col w-1/2 items-end">
          <img className="max-w-[630px]" src={Products1Image} alt="products1"/>
        </div>
      </div>
      <div className="flex my-16 items-center justify-between">
        <div className="flex flex-col w-1/2">
          <img className="max-w-[630px]" src={Products2Image} alt="products2"/>
        </div>
        <div className="flex flex-col w-1/2">
          <p className="flex p-2.5 w-fit font-bold bg-[#0F86D91A]">Официальный партнер RIVC-Pulkovo</p>
          <p className="mt-8 font-bold text-4xl leading-10 max-w-[560px]">Автоматизированная система комплексного обслуживания рейсов в аэропорту</p>
          <p className="mt-8 text-xl font-medium leading-8 max-w-[560px]">АС «КОБРА» — решение для
            эффективного и надёжного управления рейсами в аэропорту. Автоматизирует процессы, улучшает
            координацию работы и повышает безопасность воздушного движения</p>
          <a className="mt-8 flex items-center text-gst-main" href="/" target="_self">
            <div className="mr-4 -rotate-45">
              <ArrowSmallIcon/>
            </div>
            <p className="font-medium">АС «КОБРА»</p>
          </a>
          <Button className="mt-8" color={'main'} size={'md320'} children={'Подробнее о продукте'} href={'/'}/>
        </div>
      </div>
      <div className="flex my-16 items-center justify-between">
        <div className="flex flex-col w-1/2">
          <p className="flex p-2.5 w-fit font-bold bg-[#0F86D91A]">Официальный партнер ГК Адепт</p>
          <p className="mt-8 font-bold text-4xl leading-10 max-w-[530px]">Автоматизация
            бизнес-процесcов в строительстве</p>
          <p className="mt-8 text-xl font-medium leading-8 max-w-[530px]">Ведущий российский разработчик
            программного обеспечения для строительной отрасли</p>
          <div className="mt-2">
            {arrayAdept.map(item => (
              <a key={item.text} className="mt-6 flex items-center text-gst-main" href={item.link} target="_self">
                <div className="mr-4 -rotate-45">
                  <ArrowSmallIcon/>
                </div>
                <p className="font-medium">{item.text}</p>
              </a>
            ))}
          </div>
          <Button className="mt-8" color={'main'} size={'md320'} children={'Подробнее о продуктах'} href={'/'}/>
        </div>
        <div className="flex flex-col w-1/2 items-end">
          <img className="max-w-[630px]" src={Products3Image} alt="products3"/>
        </div>
      </div>
    </div>
  );
};

export default ProductsBlock;