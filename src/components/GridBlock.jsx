import React from 'react';

const GridBlock = ({
                     data,
                     align = 'left',
                     className = '',
                     size = 'md',
                     width = '',
                     width2 = '',
                     theme = 'white',
                     color = 'bg-aksioma-gradient',
                     colorIcon = '',
                     shadow = 'normal'
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
    md: 'text-xl xl:text-gst28 xl:leading-gst42 font-bold',
    sm: 'text-lg xl:text-2xl font-semibold',
  }

  const sizesText = {
    md: 'text-sm sm:text-lg font-medium',
    sm: 'text-base sm:text-xl font-medium',
  }

  const sizesShadow = {
    normal: 'shadow-[0_6px_12px_0_#14142B0A]',
    big: 'shadow-[0_6px_12px_0_#14142B0A] sm:shadow-[0_24px_44px_0_#14142B0A]',
  }

  return (
    <div className={`${themeColor[theme]}`}>
      <div className="w-11/12 sm:w-10/12 mx-auto py-16 sm:py-24 flex flex-col justify-between">
        <p className="text-4xl sm:text-5xl font-bold">{data.name}</p>
        <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-8">
          {data.data.map(item => (
            <div key={item.header}
                 className={`${className} ${alignBlock[align]} ${themeColorText[theme]} ${sizesShadow[shadow]} p-4 sm:p-8 flex flex-col rounded-gst20 border`}>
              {item.icon && <p className={colorIcon}>{item.icon}</p>}
              <p
                className={`${item.icon && 'mt-2 sm:mt-6'} ${sizesHeader[size]} ${width} ${alignText[align]}`}>{item.header}</p>
              {item.text && <p className={`${sizesText[size]} ${width2} ${alignText[align]} mt-2 sm:mt-6`}>{item.text}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GridBlock;