import React from 'react';
import { Carousel as ANTCarousel } from '@ant-design/react-native';
import { CarouselProps } from '@ant-design/react-native/lib/carousel';


export const Carousel: React.FC<CarouselProps> = (props) => {
  return (<ANTCarousel {...props}>{props.children}</ANTCarousel>)
}