import { type ReactNode } from 'react'
import classNames from 'classnames'

/* 
我们的警告提示具有以下属性:
type: 类型
size: 尺寸
children: 文本
*/

const AlertTypes = ['default', 'success', 'warning', 'info', 'danger']
const AlertSizes = ['lg', 'sm', 'md']

export type AlertType = typeof AlertTypes[number]
export type AlertSize = typeof AlertSizes[number]

export interface AlertProps {
  className?: string
  type?: AlertType
  size?: AlertSize
  children?: ReactNode
}

const Alert = (props: AlertProps) => {
  const { className, type = 'default', size = 'md', children } = props

  const cls = classNames('windyAlert', className, {
    [`windyAlert--${type}`]: type,
    [`windyAlert--${size}`]: size !== 'md'
  })

  return (
    <div className={cls} role="alert">
      <span>{children}</span>
    </div>
  )
}

Alert.defaultProps = {
  type: 'default'
}

export default Alert
