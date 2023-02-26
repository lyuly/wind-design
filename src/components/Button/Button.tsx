import React, { ReactNode } from 'react'
import classNames from 'classnames'

export type ButtonSize = 'lg' | 'sm' | 'md'
export type ButtonType = 'primary' | 'default' | 'success' | 'info' | 'danger' | 'warning' | 'link'
interface BaseButtonProps {
  className?: string
  disabled?: boolean
  size?: ButtonSize
  btnType?: ButtonType
  children?: ReactNode
  href?: string
}

type AnchorButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>

export type ButtonProps = Partial<AnchorButtonProps>

const Button = (props: ButtonProps) => {
  const { btnType, className, disabled, size, children, href, ...restProps } = props

  const cls = classNames('windyButton', className, {
    [`windyButton--${btnType}`] : btnType,
    [`windyButton--${size}`] : size !== 'md',
    'windyButton-disabled': btnType === 'link' && disabled,
  })
  if (btnType === 'link' && href) {
    return (
      <a className={cls} href={href} {...restProps}>
        {children}
      </a>
    )
  } else {
    return (
      <button
        className={cls}
        disabled={disabled}
        {...restProps}
      >
        {children}
      </button>
    )
  }
}

Button.defaultProps = {
  disabled: false,
  btnType: 'default'
}

export default Button