import React from 'react';

const GridColorBlock = ({data}) => {
  return (
    <div className="text-white bg-aksioma-gradient">
      <div className="w-10/12 mx-auto py-24 flex flex-col justify-between">
        <p className="text-5xl font-bold">{data.name}</p>
        <div className="mt-14 grid grid-cols-3 gap-8">
          {data.data.map(item => (
            <div key={item.text} className={`p-8 flex flex-col ${data.position === 'center' && 'items-center'} rounded-gst20 border bg-gst-main border-[#2394F1]`}>
              {item.icon && <p className="">{item.icon}</p>}
              <p className={`${item.icon && 'mt-6'} ${data.position === 'center' && 'text-center'} text-2xl font-medium max-w-[370px]`}>{item.text}</p>
              {item.subtext && <p className={`${data.position === 'center' && 'text-center'} mt-6 text-xl max-w-[370px]`}>{item.subtext}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GridColorBlock;