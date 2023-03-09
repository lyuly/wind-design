/**
 * @title Button 加载按钮
 * @description 加载按钮
 * @order 10
 */

import React from 'react';
import { Button, Icon } from 'wind-design';
import 'wind-design/dist/style.css';

const Load = () => {
  return (
    <div>
      <Button>
        <Icon name='loading' loading/>
        Loading
      </Button>
      <Button btnType='primary'>
        <Icon name='loading' loading/>
        Loading
      </Button>
      <Button btnType='info'>
        <Icon name='loading' loading/>
        Loading
      </Button>
      <Button btnType='success'>
        <Icon name='loading' loading/>
        Loading
      </Button>
      <Button btnType='warning'>
        <Icon name='loading' loading/>
        Loading
      </Button>
      <Button btnType='danger'>
        <Icon name='loading' loading/>
        Loading
      </Button>
    </div>
  );
};

export default Load;
