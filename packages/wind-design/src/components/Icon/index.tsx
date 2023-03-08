import classNames from 'classnames';
import React, { useCallback } from 'react';
import { useMount } from 'react-use';

/* 
name图标名字
onClick点击事件
href链接
url不同图标来源
style自定义CSS属性
size图标尺寸
*/

export type IconSize = 'lg' | 'sm' | 'md';

export type IconProps = {
  name: string;
  loading?: boolean;
  onClick?: (e: React.MouseEvent<SVGElement>) => void;
  href?: string;
  className?: string;
  show?: boolean;
  style?: React.CSSProperties;
  url?: string;
  size?: IconSize;
  position?: string;
};

const IconFont: React.FC<IconProps> = ({ name, onClick, className, style }) => {
  // console.log(style)
  const cls = classNames(className, {
    icon: className,
  });
  return (
    <svg
      onClick={onClick}
      className={classNames('icon', className)}
      style={style}
      aria-hidden='true'
    >
      <use xlinkHref={`#icon-${name}`}></use>
    </svg>
  );
};

const Icon = ({
  href,
  className,
  loading,
  onClick,
  position = 'left',
  show,
  url,
  size = 'md',
  ...res
}: IconProps) => {
  const _onClick = useCallback(
    (e: React.MouseEvent<SVGElement>): void => {
      onClick?.(e);
      href && window?.open(href, '_blank');
    },
    [href, onClick],
  );

  const cls = classNames(className, {
    'cursor-pointer': href || onClick,
    'icon--loading': loading,
    [`icon--${size}`]: size,
    [`icon--position_${position}`]: position,
  });

  useMount(() => {
    import('./script/iconfont.js' as any);
  });
  return (
    <>{show && <IconFont onClick={_onClick} className={cls} {...res} />}</>
  );
};

Icon.defaultProps = {
  show: true,
};

export default Icon;
