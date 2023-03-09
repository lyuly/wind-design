/**
 * @title Button 朴素按钮
 * @description plain 指定
 * @order 6
 */

import React from 'react';
import { Button } from 'wind-design';
import 'wind-design/dist/style.css';

const Plain = () => {
  return (
    <div>
      <Button btnType='primary' plain>
        主要
      </Button>
      <Button btnType='info' plain>
        通知
      </Button>
      <Button btnType='success' plain>
        成功
      </Button>
      <Button btnType='warning' plain>
        警告
      </Button>
      <Button btnType='danger' plain>
        危险
      </Button>
    </div>
  );
};

export default Plain;
