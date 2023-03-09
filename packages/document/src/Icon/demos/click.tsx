/**
 * @title Icon 点击图标
 * @description 点击图标
 * @order 5
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
