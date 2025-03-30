import { useState } from 'react';
import styled from '@emotion/styled';
import dayjs, { Dayjs } from 'dayjs';
import RoundButton from '@/components/RoundButton.tsx';

interface CalendarProps {
  eventDate: string; // "2025-05-24" 형식
}

const Calendar = ({ eventDate }: CalendarProps) => {
  const [currentMonth] = useState<Dayjs>(dayjs(eventDate));

  const startOfMonth: Dayjs = currentMonth.startOf('month');
  const endOfMonth: Dayjs = currentMonth.endOf('month');
  const startDate: Dayjs = startOfMonth.startOf('week');
  const endDate: Dayjs = endOfMonth.endOf('week');

  const days: Dayjs[] = [];
  let day: Dayjs = startDate;

  while (day.isBefore(endDate)) {
    days.push(day);
    day = day.add(1, 'day');
  }

  return (
    <CalendarWrapper>
      <MonthTitle>{currentMonth.format('YYYY년 MM월')}</MonthTitle>
      <WeekDays>
        {['일', '월', '화', '수', '목', '금', '토'].map((d) => (
          <WeekDay key={d}>{d}</WeekDay>
        ))}
      </WeekDays>
      <Dates>
        {days.map((d) => {
          const isToday: boolean = d.isSame(dayjs(), 'day');
          const isEvent: boolean = d.isSame(eventDate, 'day');
          const isCurrentMonth: boolean = d.month() === currentMonth.month();

          return (
            <DateCell
              key={d.format('YYYY-MM-DD')}
              isToday={isToday}
              isEvent={isEvent}
              isCurrentMonth={isCurrentMonth}
            >
              {d.date()}
            </DateCell>
          );
        })}
      </Dates>
    </CalendarWrapper>
  );
};

export default Calendar;


const CalendarWrapper = styled.div`
  width: 100%;
  max-width: 360px;
  //border: 1px solid #ddd;
  border-radius: 12px;
  padding: 16px;
  //background: white;
`;

const MonthTitle = styled.h3`
  text-align: center;
  margin-bottom: 12px;
  font-size: 18px;
  font-weight: bold;
`;

const WeekDays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  font-weight: bold;
  color: #999;
`;

const WeekDay = styled.div`
  padding: 4px 0;
`;

const Dates = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  margin-top: 8px;
`;

const DateCell = styled.div<{
  isToday: boolean;
  isEvent: boolean;
  isCurrentMonth: boolean;
}>`
  padding: 8px;
  margin: 2px;
  border-radius: 15px;
  background-color: ${({ isEvent }) => (isEvent ? '#ffe0e0' : 'transparent')};
  color: ${({ isCurrentMonth }) => (isCurrentMonth ? '#333' : '#ccc')};
  font-weight: ${({ isEvent }) => (isEvent ? 'bold' : 'normal')};
  border: ${({ isToday }) => (isToday ? '3px solid #aaa' : 'none')};
`;
