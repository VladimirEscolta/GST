import React from 'react';
import {
  AlarmIcon,
  DisksIcon,
  GrafIcon
} from "../../../assets/icons";

const ResultBlock = () => {

  const array = [
    'Улучшение информационного обеспечения',
    'Предоставление актуальной информации о состоянии основных средств',
    'Доступ к данным о потребностях в закупках и трудозатратах',
    'Оптимизация финансового планирования',
    'Эффективное определение затрат на обслуживание активов',
    'Создание банка технологической и финансовой аналитической информации',
    'Повышение эффективности работы',
    'Улучшение взаимодействия структурных подразделений',
    'Сокращение времени на планирование и выполнение ремонтных работ',
    'Экономическая эффективность',
    'Снижение затрат на ремонтные работы и обслуживание основных средств',
    'Уменьшение числа аварийных и внеплановых работ',
    'Гибкость в формировании отчетности',
    'Подготовка оперативных отчетов по различным группам объектов',
    'Многоаспектный анализ данных в единой интегрированной среде'
  ]

  return (
    <div className="text-white bg-aksioma-gradient">
      <div className="w-10/12 mx-auto py-24 flex flex-col justify-between">
        <p className="text-5xl font-bold">Результаты внедрения</p>
        <div className="mt-14 grid grid-cols-3 gap-x-8 gap-y-16">
          {array.map((item, index) => (
            <div key={item} className="p-8 min-h-[227px] flex flex-col rounded-gst20 border bg-gst-main border-[#2394F1]">
              <p className="mt-6 text-2xl font-medium max-w-[370px]">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResultBlock;