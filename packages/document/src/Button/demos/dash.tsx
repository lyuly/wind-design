/**
 * @title Button 虚线按钮
 * @description 使用 dash 区分
 * @order 5
 */

import React from 'react';
import { Button } from 'wind-design';
import 'wind-design/dist/style.css';

const Dash = () => {
  return (
    <div>
      <Button btnType='dashed'>Dashed Button</Button>
    </div>
  );
};

export default Dash;
