/**
 * @title Button 加载按钮
 * @description 加载按钮
 * @order 10
 */

import React from 'react';
import { Button } from 'wind-design';
import 'wind-design/dist/style.css';

const Load = () => {
  return (
    <div>
      <Button iconName='loading' loading>
        Loading Button
      </Button>
      <Button iconName='loading' loading btnType='primary'>
        Loading Button
      </Button>
      <Button iconName='loading' loading btnType='success'>
        Loading Button
      </Button>
    </div>
  );
};

export default Load;
