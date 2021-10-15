import styled from "@emotion/styled";

export const CalendarHeader = ({ year, month }) => {
  return (
    <CalendarHeaderContainer>
      <CalendarHeaderTimeWrapper>
        {`${year}.${month}`}
      </CalendarHeaderTimeWrapper>
    </CalendarHeaderContainer>
  );
};

const CalendarHeaderContainer = styled.header`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid green;
`;

const CalendarHeaderTimeWrapper = styled.div`
  font-size: 20px;
`;

/**
 *
 * 헤더에 필요한 것은 월.일.그리고 버튼을 눌렀을 때 함수.
 *
 */
