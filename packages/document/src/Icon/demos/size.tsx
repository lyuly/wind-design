/**
 * @title Icon 尺寸图标
 * @description 有三种类型：sm（小）、md（默认）、lg（大）
 * @order 4
 */

import React from 'react';
import { Icon } from 'wind-design';
import 'wind-design/dist/style.css';

const Default = () => {
  return (
    <>
      <Icon name='github-fill' size='sm'/>
      <Icon name='github-fill' size='md'/>
      <Icon name='github-fill' size='lg'/>
      <Icon name='alert' size='sm'/>
      <Icon name='alert' size='md'/>
      <Icon name='alert' size='lg'/>
    </>
  );
};

export default Default;
