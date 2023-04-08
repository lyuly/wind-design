import { useState } from "react";

function DatePicker() {
  const [date, setDate] = useState('');

  return (
    <div className="wind-datepicker">
      <input
        className="text-sm border border-gray-400 rounded-lg w-auto p-3 dark:text-white"
        value={date}
        placeholder="请选择日期"
        onChange={(e) => setDate(e.target.value)}
      />
      <span className="wind-picker-suffix">
        <svg viewBox="64 64 896 896" focusable="false" data-icon="calendar" width="1em" height="1em" fill="currentColor" aria-hidden="true">
          <path d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z">
          </path>
        </svg>
      </span>
    </div>      
  )
}

export default DatePicker;