/**
 * @title Button 图标按钮
 * @description 图标按钮
 * @order 9
 */

import React from 'react';
import { Button, Icon } from 'wind-design';
import 'wind-design/dist/style.css';

const ButtonIcon = () => {
  return (
    <div>
      <Button>
        <Icon name='github-fill'/>
        Github
      </Button>
      <Button btnType='primary'>
        <Icon name='search'/>
        Search
      </Button>
      <Button btnType='info'>
        <Icon name='bell'/>
        Bell
      </Button>
      <Button btnType='success'>
      <Icon name='home'/>
        Home
      </Button>
      <Button btnType='warning'>
        <Icon name='skin'/>
        T-shirt
      </Button>
      <Button btnType='danger'>
        <Icon name='alert'/>
        Alert
      </Button>
    </div>
  );
};

export default ButtonIcon;
