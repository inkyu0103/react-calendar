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
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: ${({ currentMonth }) => (currentMonth ? "900" : "500")};
  background-color: ${({ isSelected }) => isSelected && "green"};

  &:hover {
    background-color: ${({ isSelected }) => !isSelected && "red"};
  }
`;

// isselected가 필요하다. 선택된 상태가 무엇이니..?
// 이번 달이 아닌 경우회색
