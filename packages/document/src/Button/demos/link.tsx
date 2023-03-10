/**
 * @title Button 链接按钮
 * @description 通过 link 类型指定
 * @order 3
 */

import React from 'react';
import { Button } from 'wind-design';
import 'wind-design/dist/style.css';

const Link = () => {
  return (
    <div>
      <Button btnType='link' href='https://www.google.com'>
        Link Button
      </Button>
    </div>
  );
};

export default Link;
