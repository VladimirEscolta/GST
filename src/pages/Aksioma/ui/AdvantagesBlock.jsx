import React from 'react';

const AdvantagesBlock = () => {
  return (
    <div className="w-10/12 mx-auto py-24 flex flex-col justify-between">
      <p className="text-5xl font-bold">Преимущества внедрения ТоИР в цифрах</p>
      <div className="mt-14 grid grid-cols-4 gap-8">
        <div className="flex flex-col">
          <p className="text-gst-main text-gst56 font-bold">35%</p>
          <p className="mt-4 text-lg font-medium text-[#9394A3] max-w-80">Сокращение числа внеплановых остановок оборудования,
            увеличение срока безотказной службы агрегатов и
            непрерывность производства.
          </p>
        </div>
        <div className="flex flex-col">
          <p className="text-gst-main text-gst56 font-bold">в 2 раза</p>
          <p className="mt-4 text-lg font-medium text-[#9394A3] max-w-80">Руководители высшего звена тратят меньше времени на
            оперативное управление и контроль производственной деятельности.
          </p>
        </div>
        <div className="flex flex-col">
          <p className="text-gst-main text-gst56 font-bold">25 - 30%</p>
          <p className="mt-4 text-lg font-medium text-[#9394A3] max-w-80">Снижаются затраты на обслуживание оборудования, стоимость
            аварийных работ и восстановления.
          </p>
        </div>
        <div className="flex flex-col">
          <p className="text-gst-main text-gst56 font-bold">20%</p>
          <p className="mt-4 text-lg font-medium text-[#9394A3] max-w-80">Сокращается доля сверхурочных работ и уровень
            сверхнормативных запасов запчастей и материалов.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdvantagesBlock;