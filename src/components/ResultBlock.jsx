import React from 'react';

const ResultBlock = ({data, name}) => {
  return (
    <div className="text-white bg-aksioma-gradient">
      <div className="w-10/12 mx-auto py-24 flex flex-col justify-between">
        <p className="text-5xl font-bold">{name}</p>
        <div className="mt-14 grid grid-cols-3 gap-8">
          {data.map((item, index) => (
            <div key={item.text} className="p-8 flex flex-col rounded-gst20 border bg-gst-main border-[#2394F1]">
              {data.icon && <p className="">{item.icon}</p>}
              <p className={`${data.icon && 'mt-6'} text-2xl font-medium max-w-[370px]`}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResultBlock;