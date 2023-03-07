/**
 * @title Button 图标按钮
 * @description 图标按钮
 * @order 9
 */

import React from 'react'
import { Button } from 'wind-design'
import 'wind-design/dist/style.css'

const Icon = () => {
  return (
    <div>
      <Button iconName="daimawangzhan">Github Button</Button>
      <Button iconName="zhuye" btnType="success">主页按钮</Button>
      <Button iconName="aixin" btnType="danger">Love Button</Button>
      <Button iconName="huiyuan" btnType="warning">会员按钮</Button>
    </div>
  )
}

export default Icon
