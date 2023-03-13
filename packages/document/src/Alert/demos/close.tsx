/**
 * @title Alert 警告关闭
 * @description 警告默认关闭
 * @order 2
 */

import React from 'react';
import { Alert } from 'wind-design';
import 'wind-design/dist/style.css';

const Close = () => {
  return (
    <div>
      <Alert message="默认" />
      <Alert type='info' message="通知"/>
      <Alert type='success' message="成功"/>
      <Alert type='warning' message="警告"/>
      <Alert type='danger' message="危险" />
    </div>
  );
};

export default Close;
