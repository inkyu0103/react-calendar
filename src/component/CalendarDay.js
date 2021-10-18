import styled from "@emotion/styled";
import { COLOR_MAP } from "../constants";

export const CalendarDay = ({ days }) => {
  return (
    <CalendarDayContainer>
      {days.map((day, idx) => (
        <CalendarDayItem key={day} day={idx}>
          {day}
        </CalendarDayItem>
      ))}
    </CalendarDayContainer>
  );
};

const CalendarDayContainer = styled.div`
  width: 100%;
  display: flex;
`;

const CalendarDayItem = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  background-color: ${COLOR_MAP.WHITE};
  color: ${({ day }) => (day ? COLOR_MAP.BLACK : COLOR_MAP.RED)};
`;
