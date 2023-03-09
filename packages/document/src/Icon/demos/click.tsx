/**
 * @title Icon 点击图标
 * @description 通过 onClick 事件
 * @order 3
 */

import React from 'react';
import { Icon } from 'wind-design';
import 'wind-design/dist/style.css';

const Default = () => {
  return (
    <>
      <Icon name='github-fill' onClick={() => {console.log('1')}}/>
      <Icon name='search'/>
      <Icon name='bell'/>
      <Icon name='home'/>
      <Icon name='skin'/>
      <Icon name='alert'/>
    </>
  );
};

export default Default;
