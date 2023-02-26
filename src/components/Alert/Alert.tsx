import { ReactNode } from 'react'
import classNames from 'classnames'

export type AlertSize = 'lg' | 'sm' | 'md'

export interface AlertProps {
  className?: string
  type?: 'success' | 'default' | 'warning' | 'info' | 'danger'
  size?: AlertSize
  children?: ReactNode
}

const Alert = (props: AlertProps) => {
  const { className, type, size, children } = props

  const cls = classNames('windyAlert', className, {
    [`windyAlert--${type}`] : type,
    [`windyAlert--${size}`] : size !== 'md'
  })

  return (
    <div className={cls} role="alert">
      <span>{children}</span>
    </div>
  )
}

Alert.defaultProps = {
  type: 'success'
}

export default Alert