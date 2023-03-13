import { useState, type ReactNode } from 'react';
import classNames from 'classnames';

/* 
我们的警告提示具有以下属性:
type: 类型
message: 文本
*/

export type AlertType = 'default' | 'success' | 'warning' | 'info' | 'danger';

export interface AlertProps {
  className?: string;
  message?: string;
  type?: AlertType;
}

const Alert = (props: AlertProps) => {
  const { className, type = 'default', message } = props;

  const cls = classNames('windyAlert', className, {
    [`windyAlert--${type}`]: type
  });

  const [show, setShow] = useState(true)

  return show ?
    <div className={cls} role='alert'>
      <span>{message}</span>
      <button onClick={() => setShow(false)} className={`windyAlert--${type}_btn`}>
        <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
      </button>
    </div>
    : null
};

Alert.defaultProps = {
  type: 'default',
};

export default Alert;
