import styled from "@emotion/styled";
import { css, Global } from "@emotion/react";
import { CalendarBody, CalendarDay, CalendarHeader } from "./component/index";
import { useState } from "react";

const days = ["일", "월", "화", "수", "목", "금", "토"];
const normalYear = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const leapYear = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const currentTime = new Date();

/**
 * @param {number} year
 * @returns 해당 연도의 윤년 여부를 알려줍니다.
 */
const isLeapYear = (year) => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

const App = () => {
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

  /**
   * @return 버튼을 누르면 오늘 날짜로 이동하고, 오늘 날짜에 focus를 줍니다.
   */
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
  };

  /**
   * @param {number} year
   * @param {number} month
   * @param {number} date
   *
   * @returns year,month,date를 받아, 해당하는 날짜로 넘어가고, 그 날짜를 선택한 것으로 표시합니다.
   */
  const handleIsSelected = (year, month, date) => {
    time.month !== month
      ? setTime({
          year,
          month,
          date,
          firstDay: new Date(year, month, 1).getDay(),
          lastDate: isLeapYear(year) ? leapYear[month] : normalYear[month],
        })
      : setTime({
          ...time,
          date,
        });
  };

  /**
   * @returns 다음달 달력을 렌더링합니다.
   */
  const goNextMonth = () => {
    const nextMonth = new Date(time.year, time.month + 1, 1);
    setTime({
      year: nextMonth.getFullYear(),
      month: nextMonth.getMonth(),
      date:
        time.date > normalYear[nextMonth.getMonth()]
          ? isLeapYear(nextMonth.getFullYear())
            ? leapYear[nextMonth.getMonth()]
            : normalYear[nextMonth.getMonth()]
          : time.date,
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

  //focus 가 어떻게 변하나?

  // nextMonth같은 경우는 현재 time이 다음달의 마지막 보다 큰 경우가 문제됨.

  // previous같은 경우는  현재 30일인데 지난 달이 28일밖에 없는 경우

  /**
   * @returns 이전달 달력을 렌더링합니다.
   */
  const goPreviousMonth = () => {
    const previousMonth = new Date(time.year, time.month, 0);
    setTime({
      year: previousMonth.getFullYear(),
      month: previousMonth.getMonth(),
      date:
        time.date > normalYear[previousMonth.getMonth()]
          ? isLeapYear(previousMonth.getFullYear())
            ? leapYear[previousMonth.getMonth()]
            : normalYear[previousMonth.getMonth()]
          : time.date,
      firstDay: new Date(
        previousMonth.getFullYear(),
        previousMonth.getMonth(),
        1
      ).getDay(),
      lastDate: isLeapYear(previousMonth.getFullYear())
        ? leapYear[previousMonth.getMonth()]
        : normalYear[previousMonth.getMonth()],
    });
  };

  /**
   * @returns 렌더링 되는 날짜가 담긴 배열을 반환합니다.
   *
   * 렌더링 되는 날짜들을 만들기 위해서 다음과 같은 정보들이 필요합니다.
   *
   * 1. 현재 달이 시작하는 요일 (0~6)
   * 2. 지난 달 Date 객체
   * 3. 다음 달 Date 객체
   * 렌더링 되어야 하는 일이 42개이므로 for문의 i 는 1부터 42까지 순회합니다.
   *
   * case 1) 현재 달의 시작하는 요일보다 i가 작은 경우 (지난 달)
   * case 2) i가 현재 달의 날짜인 경우
   * case 3) i가 현재 달의 날짜를 넘어간 경우
   *
   * 만들어진 { year : number , month : number , date : number } 객체를 result 배열에 담습니다.

   *
   */
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
          renderDateTarget={makeDateArray()}
          renderYearTarget={time.year}
          renderMonthTarget={time.month}
          isSelected={{ year: time.year, month: time.month, date: time.date }}
          handleIsSelected={handleIsSelected}
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
`;

export default App;
