/**
 * @title Breadcrumb 默认面包屑
 * @description 定义一个options数组
 * @order 1
 */

import React from 'react';
import { Breadcrumb } from 'wind-design';
import 'wind-design/dist/style.css';

const options = [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'category',
    to: 'https://www.google.com',
  },
  {
    label: 'fruit',
  },
];

const Default = () => {
  return <Breadcrumb options={options} />;
};

export default Default;
