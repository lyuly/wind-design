/**
 * @title Icon 多彩图标
 * @description 多彩图标
 * @order 5
 */

import React from 'react';
import { Icon } from 'wind-design';
import 'wind-design/dist/style.css';
import data from './iconfont.js';

const Color = () => {
  return (
    <div>
      <ul
        style={{
          display: 'grid',
          gridTemplateColumns: '16% 16% 16% 16% 16% 16%',
          gridTemplateRows: '16% 16% 16% 16% 16% 16%',
          gridGap: '2%',
        }}
      >
        {data.map((item, index) => {
          return (
            <li key={index} style={{ float: 'left' }}>
              <Icon name={item.font_class} style={{ color: 'skyblue' }} />
              <span>{item.name}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Color;
