import classNames from 'classnames'
import { memo, ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'

/* 
在这里我们使用react-router实现跳转
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

export const Breadcrumb = (props: BreadcrumbProps) => {
  const { className, options, iconType, style, ...restProps } = props

  const cls = classNames('breadcrumb', className)

  const navigate = useNavigate()

  const Goto = (url: string) => {
    if (!url) return
    if (url && url.startsWith('http')) {
      window.open(url)
    } else {
      navigate(url)
    }
    return
  }

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
            <span
              className={`${item.to ? 'breadcrumb-isPath' : ''}`}
              onClick={() => Goto(item.to)}
            >
              {item.label}
            </span>
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

export default memo(Breadcrumb)
