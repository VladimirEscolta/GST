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
    xs: 'w-[110px] sm:w-[153px] h-[40px] sm:h-[48px] sm:text-base sm:font-semibold',
    sm: 'w-[130px] sm:w-[187px] h-[40px] sm:h-[53px] sm:text-base sm:font-semibold',
    md: 'w-[175px] sm:w-[264px] h-[48px] sm:h-[67px] sm:text-lg font-medium sm:font-bold',
    md320: 'w-[210px] sm:w-[320px] h-[48px] sm:h-[67px] text-sm sm:text-lg font-medium sm:font-bold '
  }

  const appliedClasses = `${colors[color]} ${sizes[size]} ${className} flex items-center justify-center rounded-gst3`;

  return (
    <>
      <a className={appliedClasses} {...rest}>
        <p className={`${arrows[arrow] !== 'hidden' ? 'sm:mr-4' : ''}`}>{children}</p>
        <p className={`${arrows[arrow] !== 'hidden' ? 'hidden sm:flex' : 'hidden'}`}><ArrowSmallIcon/></p>
      </a>
    </>
  );
};

export default Button;