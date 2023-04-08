import React, { useEffect, useState } from "react";

function Calender() {

  const [date, setDate] = useState<Date>(new Date());

  const now = date.toLocaleDateString('zh-CN', { month: 'long', year: 'numeric'});

  const prevMonth = () => {
    const year = date.getFullYear();
    const month = date.getMonth() - 1;
    const day = date.getDay();
    setDate(new Date(year, month, day));
  }

  const nextMonth = () => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDay();
    setDate(new Date(year, month, day));
  }

  const dayOfWeek = ['日', '一', '二', '三', '四', '五', '六'];

  const [daysInMonth, setDaysInMonth] = useState<Array<Date>>();

  const updateDaysInMonth = () => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const dayInMonth = new Date(year, month + 1, 0).getDate();
    const days = [];
    for (let i = 1; i <= dayInMonth; i++) {
      days.push(new Date(year, month, i));
    }
    const firstDayWeek = days[0].getDay();
    let preDayInMonth = new Date(year, month, 0).getDate();
    for (let i = 0; i < firstDayWeek; i++) {
      days.unshift(new Date(year, month - 1, preDayInMonth--));
    }
    const lastDayWeek = days[days.length - 1].getDay();
    for (let i = 0; i < 6 - lastDayWeek; i++) {
      days.push(new Date(year, month + 1, i + 1));
    }
    setDaysInMonth(days);
  };

  const isToday = (day: Date) => {
    const today = new Date();
    return date.getFullYear() === today.getFullYear() && date.getMonth() === today.getMonth() && day.getDate() === today.getDate();
  }

  const select = (day: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month, day.getDate());
  }

  useEffect(() => {
    updateDaysInMonth();
  }, [date]);

  return (
    <div className="calender">
      <div className="header">
        <span className="prev" onClick={() => prevMonth()}>&lt;</span>
        <span className="title">{now}</span>
        <span className="next" onClick={() => nextMonth()}>&gt;</span>
      </div>
      <div className="body">
        <div className="weekdays">
          {dayOfWeek.map((day, index) => {
            return <span key={index}>{day}</span>
          })}
        </div>
        <div className="days">
          {daysInMonth && daysInMonth.map((day, index) => {
            return <span key={index} className={isToday(day) ? 'today' : 'selected'} onClick={() => select(day)}>{day.getDate()}</span>
          })}
        </div>
      </div>
    </div>
  )
}

export default Calender;