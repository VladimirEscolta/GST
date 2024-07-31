import React from 'react';
import {ArrowSmallIcon} from "../assets/icons";

const Button = (props) => {

  const {
    className = '',
    children,
    arrow = 'with', // default arrow
    color = 'main', // default color
    size = 'md', // default size
    ...rest
  } = props;

  const arrows = {
    with: '',
    without: 'hidden',
  }

  const colors = {
    main: 'bg-gst-main text-white',
    white: 'bg-white text-gst-main',
  }

  const sizes = {
    xs: 'w-[110px] sm:w-[153px] h-[40px] sm:h-[53px] text-sm sm:text-base font-semibold',
    sm: 'w-[130px] sm:w-[187px] h-[40px] sm:h-[53px] text-sm sm:text-base font-semibold',
    md: 'w-[187px] sm:w-[270px] h-[53px] sm:h-[70px] text-sm sm:text-lg font-semibold sm:font-bold',
    md320: 'w-[237px] sm:w-[320px] h-[53px] sm:h-[70px] text-sm sm:text-lg font-semibold sm:font-bold '
  }

  const appliedClasses = `${colors[color]} ${sizes[size]} ${className} flex items-center justify-center rounded-gst3`;

  return (
    <>
      <a className={appliedClasses} {...rest}>
        <p className={`${arrows[arrow] === 'hidden' ? '' : 'mr-4'}`}>{children}</p>
        <p className={arrows[arrow]}><ArrowSmallIcon/></p>
      </a>
    </>
  );
};

export default Button;