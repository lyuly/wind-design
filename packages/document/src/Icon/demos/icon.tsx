/**
 * @title Icon 默认图标
 * @description 默认图标
 * @order 5
 */

import React from 'react'
import { Icon } from 'wind-design'
import 'wind-design/dist/style.css'
import data from './iconfont.js'

const Default = () => {
  return (
    <div>
      <ul style={{display: 'grid', gridTemplateColumns: '16% 16% 16% 16% 16% 16%', gridTemplateRows: '16% 16% 16% 16% 16% 16%', gridGap: '2%'}}>
        {data.map((item, index) => {
          return (
            <li key={index} style={{float: 'left'}}>
              <Icon name={item.font_class}/>
              <span>{item.name}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Default
