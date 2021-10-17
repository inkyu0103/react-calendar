import styled from "@emotion/styled";
import { css, Global } from "@emotion/react";
import { CalendarBody, CalendarDay, CalendarHeader } from "./component/index";
import { useState } from "react";

const days = ["일", "월", "화", "수", "목", "금", "토"];
const normalYear = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const leapYear = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const currentTime = new Date();

const isLeapYear = (year) => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

const App = () => {
  const [isSelected, setIsSelected] = useState({
    year: currentTime.getFullYear(),
    month: currentTime.getMonth(),
    date: currentTime.getDate(),
  });

  const [time, setTime] = useState({
    year: currentTime.getFullYear(),
    month: currentTime.getMonth(),
    date: currentTime.getDate(),
    firstDay: new Date(
      currentTime.getFullYear(),
      currentTime.getMonth(),
      1
    ).getDay(),
    lastDate: isLeapYear(currentTime.getFullYear())
      ? leapYear[currentTime.getMonth()]
      : normalYear[currentTime.getMonth()],
  });

  const todayObject = () => ({
    year: currentTime.getFullYear(),
    month: currentTime.getMonth(),
    date: currentTime.getDate(),
  });

  const goToday = () => {
    setTime({
      year: currentTime.getFullYear(),
      month: currentTime.getMonth(),
      date: currentTime.getDate(),
      firstDay: new Date(
        currentTime.getFullYear(),
        currentTime.getMonth(),
        1
      ).getDay(),
      lastDate: isLeapYear(currentTime.getFullYear())
        ? leapYear[currentTime.getMonth()]
        : normalYear[currentTime.getMonth()],
    });

    setIsSelected({
      year: currentTime.getFullYear(),
      month: currentTime.getMonth(),
      date: currentTime.getDate(),
    });
  };

  const handleClickIsSelected = (year, month, date) => {
    time.month !== month &&
      setTime({
        year,
        month,
        date,
        firstDay: new Date(year, month, 1).getDay(),
        lastDate: isLeapYear(year) ? leapYear[month] : normalYear[month],
      });

    setIsSelected({ year, month, date });
  };

  const goNextMonth = () => {
    const nextMonth = new Date(time.year, time.month + 1, 1);
    setTime({
      year: nextMonth.getFullYear(),
      month: nextMonth.getMonth(),
      date: nextMonth.getDate(),
      firstDay: new Date(
        nextMonth.getFullYear(),
        nextMonth.getMonth(),
        1
      ).getDay(),
      lastDate: isLeapYear(nextMonth.getFullYear())
        ? leapYear[nextMonth.getMonth()]
        : normalYear[nextMonth.getMonth()],
    });
  };
  const goPreviousMonth = () => {
    const nextMonth = new Date(time.year, time.month, 0);
    setTime({
      year: nextMonth.getFullYear(),
      month: nextMonth.getMonth(),
      date: nextMonth.getDate(),
      firstDay: new Date(
        nextMonth.getFullYear(),
        nextMonth.getMonth(),
        1
      ).getDay(),
      lastDate: isLeapYear(nextMonth.getFullYear())
        ? leapYear[nextMonth.getMonth()]
        : normalYear[nextMonth.getMonth()],
    });
  };

  const makeDateArray = () => {
    const lastMonth = new Date(time.year, time.month, 0);
    const nextMonth = new Date(time.year, time.month + 1, 1);

    const result = [];

    for (let i = 1; i <= 42; i++) {
      if (i <= time.firstDay) {
        result.push({
          year: lastMonth.getFullYear(),
          month: lastMonth.getMonth(),
          date: lastMonth.getDate() - (time.firstDay - i),
        });
      } else if (time.firstDay < i && i <= time.lastDate + time.firstDay) {
        result.push({
          year: time.year,
          month: time.month,
          date: i - time.firstDay,
        });
      } else if (time.lastDate < i) {
        result.push({
          year: nextMonth.getFullYear(),
          month: nextMonth.getMonth(),
          date: i - (time.lastDate + time.firstDay),
        });
      }
    }

    return result;
  };

  return (
    <>
      <Global styles={globalStyle} />

      <CalendarContainer>
        <CalendarHeader
          year={time.year}
          month={time.month + 1}
          goPreviousMonth={goPreviousMonth}
          goNextMonth={goNextMonth}
          goToday={goToday}
        />
        <CalendarDay days={days} />
        <CalendarBody
          renderInfo={{
            dates: makeDateArray(),
            year: time.year,
            month: time.month,
          }}
          today={todayObject()}
          isSelected={isSelected}
          handleClickIsSelected={handleClickIsSelected}
        />
      </CalendarContainer>
    </>
  );
};

const globalStyle = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    width: 100%;
    height: 100%;
  }
  body {
    width: 100%;
    height: 100%;
    background: #f5f1e8;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const CalendarContainer = styled.div`
  width: 430px;
  height: 460px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  border-radius: 10px;
`;

export default App;
