import React from 'react';

const KeyAdvantagesBlock = ({data, name}) => {
  return (
    <div className="w-10/12 mx-auto py-24 flex flex-col justify-between">
      <p className="text-5xl font-bold">{name}</p>
      <div className="mt-14 grid grid-cols-3 gap-8">
        {data.map(item => (
          <div key={item.header}
               className="min-h-72 p-8 flex flex-col rounded-gst20 border border-[#EFF0F6] shadow-[0_6px_12px_0_#14142B0A]">
            <p className="text-gst28 font-bold leading-gst42">{item.header}</p>
            <p className="mt-6 text-lg font-medium text-[#262C59]">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyAdvantagesBlock;