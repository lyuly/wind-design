/**
 * @title Button 圆角按钮
 * @description 圆角按钮
 * @order 7
 */

import React from 'react';
import { Button } from 'wind-design';
import 'wind-design/dist/style.css';

const Round = () => {
  return (
    <div>
      <Button round>默认</Button>
      <Button btnType='primary' round>
        主要
      </Button>
      <Button btnType='info' round>
        通知
      </Button>
      <Button btnType='success' round>
        成功
      </Button>
      <Button btnType='warning' round>
        警告
      </Button>
      <Button btnType='danger' round>
        危险
      </Button>
    </div>
  );
};

export default Round;
