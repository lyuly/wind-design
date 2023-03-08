/**
 * @title Button 按钮类型
 * @description 按钮有五种类型: primary、info、success、warning、danger
 * @order 1
 */

import React from 'react';
import { Button } from 'wind-design';
import 'wind-design/dist/style.css';

const BtnType = () => {
  return (
    <div>
      <Button>默认</Button>
      <Button btnType='primary'>主要</Button>
      <Button btnType='info'>通知</Button>
      <Button btnType='success'>成功</Button>
      <Button btnType='warning'>警告</Button>
      <Button btnType='danger'>危险</Button>
    </div>
  );
};

export default BtnType;
