/**
 * @title Breadcrumb 活跃面包屑
 * @description 对象里使用 active 标志是否被激活
 * @order 2
 */

import React from 'react';
import { Breadcrumb } from 'wind-design';
import 'wind-design/dist/style.css';

const options = [
  {
    label: 'Home',
    to: '/',
    active: true,
  },
  {
    label: 'category',
  },
  {
    label: 'fruit',
  },
];

const Default = () => {
  return <Breadcrumb options={options} />;
};

export default Default;
