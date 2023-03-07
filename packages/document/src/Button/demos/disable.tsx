/**
 * @title Button 禁用按钮
 * @description 按钮禁用
 * @order 2
 */

import React from 'react'
import { Button } from 'wind-design'
import 'wind-design/dist/style.css'

const Disable = () => {
  return (
    <div>
      <Button disabled>默认</Button>
      <Button btnType="primary" disabled>主要</Button>
      <Button btnType="info" disabled>通知</Button>
      <Button btnType="success" disabled>成功</Button>
      <Button btnType="warning" disabled>警告</Button>
      <Button btnType="danger" disabled>危险</Button>
    </div>
  )
}

export default Disable
