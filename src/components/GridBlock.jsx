import React from 'react';

const GridBlock = ({
                          data,
                          align = 'left',
                          className = '',
                          size = 'md',
                          width = '',
                          width2 = '',
                          theme = 'white',
                          color = 'bg-aksioma-gradient'
                        }) => {

  const themeColor = {
    color: `text-white ${color}`,
    white: ''
  }

  const themeColorText = {
    color: `bg-gst-main border-[#2394F1]`,
    white: 'border-[#EFF0F6]'
  }

  const alignBlock = {
    left: '',
    center: 'items-center',
  }

  const alignText = {
    left: '',
    center: 'text-center',
  }

  const sizesHeader = {
    md: 'text-gst28 font-bold leading-gst42',
    sm: 'text-2xl font-semibold',
  }

  const sizesText = {
    md: 'text-lg font-medium',
    sm: 'text-xl font-medium',
  }

  return (
    <div className={`${themeColor[theme]}`}>
      <div className="w-10/12 mx-auto py-24 flex flex-col justify-between">
        <p className="text-5xl font-bold">{data.name}</p>
        <div className="mt-14 grid grid-cols-3 gap-8">
          {data.data.map(item => (
            <div key={item.header}
                 className={`${className} ${alignBlock[align]} ${themeColorText[theme]} p-8 flex flex-col rounded-gst20 border shadow-[0_6px_12px_0_#14142B0A]`}>
              {item.icon && <p>{item.icon}</p>}
              <p
                className={`${item.icon && 'mt-6'} ${sizesHeader[size]} ${width} ${alignText[align]}`}>{item.header}</p>
              {item.text && <p className={`${sizesText[size]} ${width2} ${alignText[align]} mt-6`}>{item.text}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GridBlock;