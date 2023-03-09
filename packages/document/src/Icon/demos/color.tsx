/**
 * @title Icon 彩色图标
 * @description 彩色图标
 * @order 5
 */

import React from 'react';
import { Icon } from 'wind-design';
import 'wind-design/dist/style.css';

const Color = () => {
  return (
    <>
      <Icon name='github-fill'/>
      <Icon name='search' style={{color: 'orange'}}/>
      <Icon name='bell' style={{color: 'gray'}}/>
      <Icon name='home' style={{color: 'black'}}/>
      <Icon name='skin' style={{color: 'skyblue'}}/>
      <Icon name='alert' style={{color: 'red'}}/>
    </>
  );
};

export default Color;
