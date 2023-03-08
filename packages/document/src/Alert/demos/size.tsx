/**
 * @title Alert 尺寸类型
 * @description 警告有三种类型: lg、md、sm
 * @order 2
 */

import React from 'react'
import { Alert } from 'wind-design'
import 'wind-design/dist/style.css'

const Default = () => {
  return (
    <div>
      <Alert size="sm">默认</Alert>
      <Alert type="info" size="md">通知</Alert>
      <Alert type="success" size="lg">成功</Alert>
      <Alert type="warning" size="sm">警告</Alert>
      <Alert type="danger">危险</Alert>
    </div>
  )
}

export default Default
