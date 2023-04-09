import { useEffect, useRef, useState } from 'react';
import Calender from '../Calender';

function DatePicker() {
  const [show, setShow] = useState(false);

  const calenderRef = useRef<any>();

  const getDay = (day: Date) => {
    const year = day.getFullYear();
    const month = day.getMonth() + 1;
    const days = day.getDate();
    setSelected(`${year} / ${month} / ${days}`);
  }

  const [selected, setSelected] = useState('');

  const handleChange = () => {
    
  }

  useEffect(() => {
    function handler(e: Event) {
      if (calenderRef.current && !calenderRef.current.contains(e.target)) {
        setShow(!show);
      }
    }

    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  return (
    <div className='wind-datepicker'>
      <div className='wind-picker-suffix'>
        <svg
          viewBox='64 64 896 896'
          focusable='false'
          data-icon='calendar'
          width='1em'
          height='1em'
          fill='currentColor'
          aria-hidden='true'>
          <path d='M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z'></path>
        </svg>
      </div>
      <input
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-auto pl-10 p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        type='text'
        placeholder='请选择日期'
        value={selected}
        onChange={() => handleChange()}
        onClick={() => setShow(!show)}
      />
      {show ? (
        <div
          ref={calenderRef}
          className='absolute inline-block align-bottom z-50 bg-white max-w-sm'
        >
          <Calender onData={getDay}/>
        </div>
      ) : null}
    </div>
  );
}

export default DatePicker;
