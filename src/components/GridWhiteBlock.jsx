import React from 'react';

const GridWhiteBlock = ({data, align='left', className='', size='md', width='', width2=''}) => {

  const sizesHeader = {
    md: 'text-gst28 font-bold leading-gst42',
    // sm: 'text-2xl font-semibold',
  }

  const sizesText = {
    md: 'text-lg font-medium',
    // sm: 'text-xl font-medium',
  }

  return (
    <div className="w-10/12 mx-auto py-24 flex flex-col justify-between">
      <p className="text-5xl font-bold">{data.name}</p>
      <div className="mt-14 grid grid-cols-3 gap-8">
        {data.data.map(item => (
          <div key={item.header}
               className={`${className} p-8 flex flex-col rounded-gst20 border border-[#EFF0F6] shadow-[0_6px_12px_0_#14142B0A]`}>
            {item.icon && <p className="">{item.icon}</p>}
            <p className={`${item.icon && 'mt-6'} ${sizesHeader[size]} ${width} `}>{item.header}</p>
            <p className={`mt-6 ${sizesText[size]} ${width2} text-[#262C59]`}>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridWhiteBlock;