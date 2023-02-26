import React, { ReactNode } from 'react'
import classNames from 'classnames'

const ButtonTypes = ['default', 'primary', 'success', 'info', 'danger', 'warning', 'link', 'text', 'dashed']
const ButtonSizes = ['lg', 'sm', 'md']

export type ButtonSize = typeof ButtonSizes[number]
export type ButtonType = typeof ButtonTypes[number]
interface BaseButtonProps {
  className?: string
  disabled?: boolean
  size?: ButtonSize
  btnType?: ButtonType
  children?: ReactNode
  href?: string
  gost?: boolean
}

type AnchorButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>

export type ButtonProps = Partial<AnchorButtonProps>

const Button = (props: ButtonProps) => {
  const { btnType = 'default', className, disabled, size = 'md', children, href, gost, ...restProps } = props

    const cls = classNames('windyButton', className, {
      [`windyButton--${btnType}`] : btnType,
      [`windyButton--${size}`] : size !== 'md',
      'windyButton--disabled': disabled,
      [`windyButton--${btnType}_gost`] : gost
    })

  if (btnType === 'link' && href) {
    return (
      <a className={cls} href={!disabled ? href : 'javascript:void(0)'} {...restProps}>
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