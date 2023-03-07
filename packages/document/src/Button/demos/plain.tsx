/**
 * @title Button 朴素按钮
 * @description 朴素按钮
 * @order 6
 */

import React from 'react'
import { Button } from 'wind-design'
import 'wind-design/dist/style.css'

const Plain = () => {
  return (
    <div>
      <Button btnType="primary" gost>主要</Button>
      <Button btnType="info" gost>通知</Button>
      <Button btnType="success" gost>成功</Button>
      <Button btnType="warning" gost>警告</Button>
      <Button btnType="danger" gost>危险</Button>
    </div>
  )
}

export default Plain
