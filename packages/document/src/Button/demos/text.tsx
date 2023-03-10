/**
 * @title Button 文本按钮
 * @description 通过 text 指定
 * @order 4
 */

import React from 'react';
import { Button } from 'wind-design';
import 'wind-design/dist/style.css';

const Text = () => {
  return (
    <div>
      <Button btnType='text'>Text Button</Button>
    </div>
  );
};

export default Text;
