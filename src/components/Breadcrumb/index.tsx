import classNames from 'classnames'
import { ReactNode } from 'react'

/* 
在这里我们用了a标签实现跳转，后续得修改
label 标签
to 链接
active 活动
*/

export type BreadcrumbOptions = {
  label: string | ReactNode
  to: string
  active?: boolean
}

export interface BreadcrumbProps {
  className?: string
  options: BreadcrumbOptions[]
  iconType?: string
  style?: React.CSSProperties
}

export const Breadcrumb: React.FC<BreadcrumbProps> = (props) => {
  const { className, options, iconType, style, ...restProps } = props

  const cls = classNames('breadcrumb', className)

  return (
    <div className={cls} style={style} {...restProps}>
      {options.map((item, index) => {
        return (
          <div
            key={index}
            className={`breadcrumb-item ${
              item.active ? 'breadcrumb-active' : ''
            }`}
          >
            <a
              className={`${item.to ? 'breadcrumb-isPath' : ''}`}
              href={item.to}
            >
              {item.label}
            </a>
            {index !== options.length - 1 ? (
              <div className='breadcrumb-parting'>
                {iconType === 'sprit' ? (
                  <svg
                    viewBox='0 0 48 48'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    stroke='currentColor'
                    strokeWidth='4'
                    strokeLinecap='butt'
                    strokeLinejoin='miter'
                  >
                    <path d='M29.506 6.502 18.493 41.498'></path>
                  </svg>
                ) : (
                  <svg
                    viewBox='0 0 48 48'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    stroke='currentColor'
                    strokeWidth='4'
                    strokeLinecap='butt'
                    strokeLinejoin='miter'
                  >
                    <path d='m16 39.513 15.556-15.557L16 8.4'></path>
                  </svg>
                )}
              </div>
            ) : null}
          </div>
        )
      })}
    </div>
  )
}

Breadcrumb.defaultProps = {
  options: [],
  iconType: 'sprit',
}

export default Breadcrumb
