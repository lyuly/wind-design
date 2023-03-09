import React, { ReactNode } from 'react';
import classNames from 'classnames';

/* 
我们的按钮具有以下属性:
btnType: 类型
size: 尺寸
disabled: 是否禁用
href: 链接地址
gost: 幽灵按钮
children: 按钮中的文本
iconName: 图标名字
loading: 加载图标
*/

export type ButtonSize = 'lg' | 'sm' | 'md';

export type ButtonType =
  | 'default'
  | 'primary'
  | 'success'
  | 'info'
  | 'danger'
  | 'warning'
  | 'link'
  | 'text'
  | 'dashed';
interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  btnType?: ButtonType;
  children?: ReactNode;
  href?: string;
  gost?: boolean;
  round?: boolean;
  loading?: boolean;
}

type AnchorButtonProps = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLElement>;

export type ButtonProps = Partial<AnchorButtonProps>;

const Button = (props: ButtonProps) => {
  const {
    btnType = 'default',
    className,
    disabled,
    size = 'md',
    children,
    href,
    gost,
    round,
    loading,
    ...restProps
  } = props;

  const cls = classNames('btn', className, {
    [`btn--${btnType}`]: btnType,
    [`btn--${size}`]: size !== 'md',
    [`btn--${btnType}_gost`]: gost,
    'btn--round': round,
  });

  if (btnType === 'link' && href) {
    return (
      <button className={cls} disabled={disabled} {...restProps}>
        <a href={href}>{children}</a>
      </button>
    );
  } else {
    return (
      <button className={cls} disabled={disabled} {...restProps}>
        {children}
      </button>
    );
  }
};

Button.defaultProps = {
  disabled: false,
  btnType: 'default',
};

export default Button;
