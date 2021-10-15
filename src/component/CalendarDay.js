import styled from "@emotion/styled";

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
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ day }) => (day ? "black" : "red")};
`;
