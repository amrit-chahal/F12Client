import { makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

export interface ImageInfo {
  label: string;
  imgSrc: string;
}
export interface Images {
  images: ImageInfo[];
}

const useStyles = makeStyles((theme) => ({
  activeImage: {
    width: '100%'
    /* animation: `$fadeInOut 3000ms ${theme.transitions.easing.easeInOut} infinite 300ms`
  },
  '@keyframes fadeInOut': {
    '0%': {
      opacity: '1'
    },
    '35%': {
      opacity: '1'
    },
    '65%': {
      opacity: '1'
    },
    '85%': {
      opacity: '0'
    },
    '100%': {
      opacity:'0'
    }
    */
  }
}));

export const ImageSlider = ({ images }: Images) => {
  const classes = useStyles();
  const [index, setIndex] = useState<number>(0);

  const increment = () => {
    setIndex((prevIndex) => prevIndex + 1);
  };

  useEffect(() => {
    console.log(index);
    if (images.length - 1 > index) {
      const moveToNextSlide = setInterval(increment, 3000);

      return () => {
        clearInterval(moveToNextSlide);
      };
    } else {
      setTimeout(setIndex, 3000, 0);
    }
  }, [index]);
  return (
    <div>
      <img
        className={classes.activeImage}
        src={images[index].imgSrc}
        alt={images[index].label}
      ></img>
    </div>
  );
};
