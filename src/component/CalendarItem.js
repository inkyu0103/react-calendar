import styled from "@emotion/styled";
import { COLOR_MAP, FONT_SIZE } from "../constants";

export const CalendarItem = ({
  renderValue,
  currentMonth,
  isSelected,
  handleIsSelected,
}) => {
  return (
    <CalendarItemContainer
      onClick={() =>
        handleIsSelected(renderValue.year, renderValue.month, renderValue.date)
      }
    >
      <CalenndarItemArea currentMonth={currentMonth} isSelected={isSelected}>
        {renderValue.date}
      </CalenndarItemArea>
    </CalendarItemContainer>
  );
};

const CalendarItemContainer = styled.div`
  flex-grow: 1;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CalenndarItemArea = styled.p`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: ${({ currentMonth }) =>
    currentMonth ? FONT_SIZE.BOLD : FONT_SIZE.NORMAL};
  color: ${({ currentMonth }) =>
    currentMonth ? COLOR_MAP.BLACK : COLOR_MAP.WHITE};
  background-color: ${({ isSelected, currentMonth }) =>
    isSelected
      ? COLOR_MAP.LIGHT_GREEN
      : currentMonth
      ? COLOR_MAP.WHITE
      : COLOR_MAP.GREY};

  &:hover {
    background-color: ${({ isSelected }) =>
      !isSelected && COLOR_MAP.LIGHT_GREEN};
  }
`;
