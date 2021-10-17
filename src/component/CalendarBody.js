import styled from "@emotion/styled";
import { CalendarItem } from ".";

export const CalendarBody = ({
  renderDateTarget,
  isSelected,
  handleIsSelected,
}) => {
  return (
    <CalendarBodyContainer>
      {renderDateTarget.map(({ year, month, date }) => (
        <CalendarItem
          key={[year, month, date]}
          renderValue={{ year, month, date }}
          currentMonth={month === isSelected.month}
          isSelected={
            year === isSelected.year &&
            month === isSelected.month &&
            date === isSelected.date
          }
          handleIsSelected={handleIsSelected}
        />
      ))}
    </CalendarBodyContainer>
  );
};

const CalendarBodyContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;
