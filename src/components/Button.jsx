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
    xs: 'w-[153px] h-[53px] rounded-gst3 text-base font-semibold',
    sm: 'w-[187px] h-[53px] rounded-gst3 text-base font-semibold',
    md: 'w-[270px] h-[70px] rounded-gst3 text-lg font-bold',
    md320: 'w-[320px] h-[70px] rounded-gst3 text-lg font-bold'
  }

  const appliedClasses = `${colors[color]} ${sizes[size]} ${className} flex items-center justify-center`;

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