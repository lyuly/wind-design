import classNames from "classnames";
import { ReactNode, useState } from "react";

export interface CheckboxProps {
  className?: string;
  checked?: boolean;
  children?: ReactNode;
  disabled?: boolean;
  label?: string;
  name?: string;
  value?: string;
  onChange?: (e: any) => void;
}

const Checkbox = (props: CheckboxProps) => {
  const {
    className,
    checked = false,
    children,
    disabled = false,
    onChange,
    name,
    label,
    value
  } = props

  const [isChecked, setIsChecked] = useState<boolean>(checked);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    setIsChecked(checked);
    onChange?.(checked);
  }

  const cls = classNames('chk', className, {
    'chk--disabled': disabled
  })

  return (
    <div className={cls}>
      <input id={label || value} type="checkbox" name={name} disabled={disabled} value={label || value} checked={isChecked} onChange={handleChange}/>
      <label htmlFor={label || value} className={disabled ? 'chk--disabled': 'chk-label'}>{children !== undefined ? children : ''}</label>
    </div>
  )
}

export default Checkbox