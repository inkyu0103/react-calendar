import styled from "@emotion/styled";

export const CalendarItem = ({
  value,
  currentMonth,
  isSelected,
  handleClickIsSelected,
}) => {
  return (
    <CalendarItemContainer
      onClick={() => handleClickIsSelected(value.year, value.month, value.date)}
    >
      <CalenndarItemArea currentMonth={currentMonth} isSelected={isSelected}>
        {value.date}
      </CalenndarItemArea>
    </CalendarItemContainer>
  );
};

const CalendarItemContainer = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CalenndarItemArea = styled.p`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: ${({ currentMonth }) => (currentMonth ? "900" : "500")};
  background-color: ${({ isSelected, currentMonth }) =>
    currentMonth && isSelected && "#6ad794"};

  &:hover {
    background-color: ${({ isSelected }) => !isSelected && "#6ad794"};
  }
`;
