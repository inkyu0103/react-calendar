import styled from "@emotion/styled";
import { CalendarItem } from ".";

/**
 *
 * renderInfo 같은 경우는
 * {
 *    year,month,date
 * }
 *
 * today
 * {
 *  year,month,date
 * }
 * isSelected는 어떻게 하지?
 */
export const CalendarBody = ({
  renderInfo,
  today,
  currentMonth,
  isSelected,
  handleClickIsSelected,
}) => {
  return (
    <CalendarBodyContainer>
      {renderInfo.dates.map(({ year, month, date }) => (
        <CalendarItem
          key={[year, month, date]}
          value={{ year, month, date }}
          currentMonth={month === renderInfo.month}
          isSelected={
            year === isSelected.year &&
            month === isSelected.month &&
            date === isSelected.date
          }
          handleClickIsSelected={handleClickIsSelected}
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
const CalendarBodyWeekWrapper = styled.div`
  width: 100%;
`;
