/**
 * @title Button 尺寸按钮
 * @description 通过 size 参数指定，包括 sm（小）、md（默认）、lg（大）
 * @order 7
 */

import React from 'react';
import { Button } from 'wind-design';
import 'wind-design/dist/style.css';

const Size = () => {
  return (
    <div>
      <Button size='sm'>默认</Button>
      <Button btnType='primary' size='md'>
        主要
      </Button>
      <Button btnType='info' size='lg'>
        通知
      </Button>
      <Button btnType='success' size='sm'>
        成功
      </Button>
      <Button btnType='warning' size='md'>
        警告
      </Button>
      <Button btnType='danger' size='lg'>
        危险
      </Button>
    </div>
  );
};

export default Size;
