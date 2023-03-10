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
      <Alert message="默认"></Alert>
      <Alert type='info' message="通知"/>
      <Alert type='success' message="成功"/>
      <Alert type='warning' message="警告"/>
      <Alert type='danger' message="危险"/>
    </div>
  );
};

export default Default;
