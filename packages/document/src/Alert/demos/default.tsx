/**
 * @title Alert 警告类型
 * @description 警告有五种类型: default、success、warning、info、danger
 * @order 1
 */

import React from 'react';
import { Alert } from 'wind-design';
import 'wind-design/dist/style.css';

const Default = () => {
  return (
    <div>
      <Alert>默认</Alert>
      <Alert type='info'>通知</Alert>
      <Alert type='success'>成功</Alert>
      <Alert type='warning'>警告</Alert>
      <Alert type='danger'>危险</Alert>
    </div>
  );
};

export default Default;
